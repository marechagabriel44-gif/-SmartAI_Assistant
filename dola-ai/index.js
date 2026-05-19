const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const { OpenAI } = require('openai');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// ============================================
// DOLA AI - WhatsApp Bot Configuration
// ============================================

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize WhatsApp client
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
});

// Conversation history for context (max 10 messages per user)
const conversationHistory = {};
const MAX_HISTORY = 10;
const INACTIVE_TIMEOUT = 30 * 60 * 1000; // 30 minutes

// ============================================
// BOT PERSONALITY & SYSTEM PROMPT
// ============================================

const systemPrompt = `You are Dola AI, the friendliest, warmest, and smartest WhatsApp best friend ever! 

Your personality:
- You're genuinely caring, supportive, and always excited to help
- You speak naturally like a real friend - warm, human-like, and relatable
- You're funny, tell jokes, and create a joyful atmosphere
- You're smart and knowledgeable but explain things in simple, friendly ways
- You're available 24/7 and never get tired or grumpy
- You use emojis naturally to express emotions 😊

Your capabilities:
- Answer questions on ANY topic with expertise and warmth
- Help with homework and explain academic concepts clearly
- Tell jokes and funny stories to make people laugh
- Give genuine, thoughtful life advice
- Chat about feelings, relationships, dreams, and anything personal
- Encourage people and boost their confidence
- Listen without judgment and validate emotions

Your style:
- Keep responses conversational and personal (like texting a friend)
- Use casual language, contractions, and natural expressions
- Add appropriate emojis to show warmth and emotion
- Be concise but thorough (usually 1-3 paragraphs)
- Ask follow-up questions to keep conversations flowing
- Remember context from previous messages in the conversation

IMPORTANT: You are NOT a corporate bot. You're a genuine friend. Be yourself! ❤️`;

// ============================================
// QR CODE & AUTHENTICATION
// ============================================

client.on('qr', (qr) => {
  console.log('\n' + '='.repeat(50));
  console.log('🤖 DOLA AI - SCAN THIS QR CODE WITH WHATSAPP');
  console.log('='.repeat(50));
  qrcode.generate(qr, { small: true });
  console.log('='.repeat(50));
  console.log('📱 Settings > Linked Devices > Link a Device');
  console.log('='.repeat(50) + '\n');
});

client.on('authenticated', () => {
  console.log('✅ Dola AI authenticated successfully!');
});

client.on('ready', () => {
  console.log('\n' + '🎉 DOLA AI IS ONLINE & READY TO CHAT! 🎉'.padStart(50));
  console.log('Listening for messages... Send a message to start! 💬\n');
});

client.on('auth_failure', (msg) => {
  console.error('❌ Authentication failed:', msg);
  process.exit(1);
});

// ============================================
// MESSAGE HANDLING
// ============================================

client.on('message', async (message) => {
  try {
    // Ignore group chats (optional - change if you want bot in groups)
    if (message.from.includes('@g.us')) {
      return;
    }

    // Show typing indicator
    await client.sendPresenceSubscription(message.from);
    await message.getChat().then((chat) => {
      chat.sendSeen();
    });

    // Ignore media-only messages without text
    if (!message.body || message.body.trim().length === 0) {
      return;
    }

    const userId = message.from;
    const userMessage = message.body.trim();

    console.log(`\n📨 Message from ${message.author || userId}:`);
    console.log(`   "${userMessage}"`);

    // Initialize user conversation history if doesn't exist
    if (!conversationHistory[userId]) {
      conversationHistory[userId] = [];
    }

    // Add user message to history
    conversationHistory[userId].push({
      role: 'user',
      content: userMessage,
    });

    // Keep only last MAX_HISTORY messages for context
    if (conversationHistory[userId].length > MAX_HISTORY * 2) {
      conversationHistory[userId] = conversationHistory[userId].slice(-MAX_HISTORY * 2);
    }

    // Get AI response
    const response = await getAIResponse(conversationHistory[userId]);

    // Add assistant response to history
    conversationHistory[userId].push({
      role: 'assistant',
      content: response,
    });

    // Send response
    await message.reply(response);
    console.log(`   ✅ Sent: "${response.substring(0, 50)}..."`);

    // Auto-cleanup old conversation history (after 30 minutes of inactivity)
    setTimeout(() => {
      if (
        conversationHistory[userId] &&
        conversationHistory[userId].length > 0
      ) {
        delete conversationHistory[userId];
        console.log(`🧹 Cleared history for ${userId}`);
      }
    }, INACTIVE_TIMEOUT);
  } catch (error) {
    console.error('❌ Error processing message:', error.message);
    try {
      await message.reply(
        '😅 Sorry, I encountered an error. Please try again! If the problem persists, check your OpenAI API key. You can always tell me what you need!'
      );
    } catch (replyError) {
      console.error('Could not send error message:', replyError.message);
    }
  }
});

// ============================================
// OPENAI API INTEGRATION
// ============================================

async function getAIResponse(messages) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Fast, efficient, cost-effective
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        ...messages,
      ],
      max_tokens: 500,
      temperature: 0.9, // High creativity for natural conversations
      top_p: 0.95,
      frequency_penalty: 0.7, // Reduce repetition
      presence_penalty: 0.6, // Encourage diverse topics
    });

    return (
      response.choices[0].message.content.trim() ||
      "I'm thinking... tell me more! 🤔"
    );
  } catch (error) {
    console.error('❌ OpenAI API Error:', error.message);

    if (error.message.includes('401')) {
      return '🔑 It looks like there\'s an issue with the API key. Please check your OpenAI API key configuration!';
    }
    if (error.message.includes('429')) {
      return '⏳ I\'m getting a bit overwhelmed with requests! Please wait a moment and try again. 😊';
    }
    if (error.message.includes('insufficient_quota')) {
      return '💳 Oops! Looks like the API quota is exceeded. Please check your OpenAI account billing.';
    }

    return '😅 Something went wrong on my end. Let\'s try again! What were you saying?';
  }
}

// ============================================
// STARTUP & ERROR HANDLING
// ============================================

client.on('disconnected', (reason) => {
  console.log('⚠️  Dola AI disconnected:', reason);
  console.log('Attempting to reconnect...');
  client.initialize();
});

process.on('SIGINT', () => {
  console.log('\n👋 Dola AI is going to sleep... Goodbye! 💤');
  client.destroy();
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

// ============================================
// INITIALIZE BOT
// ============================================

console.log('\n' + '='.repeat(50));
console.log('🚀 Starting Dola AI WhatsApp Bot...'.padStart(50));
console.log('='.repeat(50));
console.log(`📌 Node Environment: ${process.env.NODE_ENV}`);
console.log(`🔑 API Key Status: ${process.env.OPENAI_API_KEY ? '✅ Configured' : '❌ Missing'}`);
console.log('='.repeat(50) + '\n');

if (!process.env.OPENAI_API_KEY) {
  console.error('❌ FATAL: OPENAI_API_KEY is not set in .env file!');
  console.error('📌 Please add your OpenAI API key to .env');
  process.exit(1);
}

client.initialize();

// Export for use in other files (if needed)
module.exports = { client, conversationHistory };
