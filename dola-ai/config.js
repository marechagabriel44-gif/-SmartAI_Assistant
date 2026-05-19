// ============================================
// DOLA AI - CONFIGURATION FILE
// Customize bot behavior here
// ============================================

module.exports = {
  // ============================================
  // BOT PERSONALITY SETTINGS
  // ============================================
  
  personality: {
    name: 'Dola AI',
    emoji: '🧠',
    
    // Main system prompt (defines bot behavior)
    systemPrompt: `You are Dola AI, the friendliest, warmest, and smartest WhatsApp best friend ever! 

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

IMPORTANT: You are NOT a corporate bot. You're a genuine friend. Be yourself! ❤️`,

    // Alternative prompts you can use
    alternativePrompts: {
      professional: 'You are a professional AI assistant...',
      funny: 'You are a hilarious comedy bot that makes people laugh...',
      educational: 'You are an expert tutor that explains concepts simply...',
    },
  },

  // ============================================
  // OPENAI API SETTINGS
  // ============================================
  
  openai: {
    // Model options: 'gpt-4o-mini' (cheap), 'gpt-4' (powerful)
    model: 'gpt-4o-mini',
    
    // Response length (tokens)
    // 100 = short (1-2 sentences)
    // 300 = medium (2-3 paragraphs)
    // 500+ = long (detailed responses)
    maxTokens: 500,
    
    // Temperature: How creative/random (0-1)
    // 0 = always same answer (boring)
    // 0.5 = balanced
    // 0.9 = very creative (recommended for friendly bot)
    // 1 = maximum randomness
    temperature: 0.9,
    
    // Top P: Response diversity (0-1)
    // Lower = more focused
    // Higher = more varied
    topP: 0.95,
    
    // Frequency penalty: Reduce repetition (0-2)
    // 0 = no penalty
    // 0.7 = good balance
    // 2 = avoid repetition at all costs
    frequencyPenalty: 0.7,
    
    // Presence penalty: Encourage new topics (0-2)
    // 0 = no penalty
    // 0.6 = good balance
    // 2 = always introduce new topics
    presencePenalty: 0.6,
  },

  // ============================================
  // CONVERSATION SETTINGS
  // ============================================
  
  conversation: {
    // How many messages to remember per user
    // Higher = better context, more API cost
    // Lower = less context, faster response
    maxHistoryLength: 10,
    
    // Clear conversation history after (in minutes)
    // Helps save memory and reduce API costs
    inactiveTimeoutMinutes: 30,
    
    // Show typing indicator (dots...)
    showTypingIndicator: true,
    
    // Auto-read messages
    autoReadMessages: true,
  },

  // ============================================
  // BOT BEHAVIOR SETTINGS
  // ============================================
  
  behavior: {
    // Respond to group chats
    respondToGroups: false,
    
    // Respond to own messages
    respondToOwn: false,
    
    // Minimum message length to respond (characters)
    minMessageLength: 1,
    
    // Ignore certain keywords (don't respond)
    ignoreKeywords: [],
    
    // Respond to mentions only (in groups)
    groupMentionOnly: true,
  },

  // ============================================
  // ERROR HANDLING
  // ============================================
  
  errorMessages: {
    apiKeyMissing: '🔑 It looks like there\'s an issue with the API key. Please check your OpenAI API key configuration!',
    rateLimited: '⏳ I\'m getting a bit overwhelmed with requests! Please wait a moment and try again. 😊',
    quotaExceeded: '💳 Oops! Looks like the API quota is exceeded. Please check your OpenAI account billing.',
    generic: '😅 Something went wrong on my end. Let\'s try again! What were you saying?',
    authError: '❌ Authentication failed. Please rescan the WhatsApp QR code.',
  },

  // ============================================
  // LOGGING SETTINGS
  // ============================================
  
  logging: {
    // Show messages received
    logIncoming: true,
    
    // Show messages sent
    logOutgoing: true,
    
    // Show API calls
    logApiCalls: false,
    
    // Show conversation history
    logHistory: false,
    
    // Log level: 'debug', 'info', 'warn', 'error'
    level: 'info',
  },

  // ============================================
  // PROFILE SETTINGS
  // ============================================
  
  profile: {
    // Profile description
    description: 'Pink brain only, no face, no eyes, on pure black background. Your friendly AI best friend! 🧠',
    
    // Bio/Status
    status: 'Available 24/7 to chat, help, and be your best friend! 💬✨',
  },

  // ============================================
  // RATE LIMITING (To avoid API costs)
  // ============================================
  
  rateLimiting: {
    // Max messages per user per minute
    messagesPerMinute: 10,
    
    // Max messages per user per hour
    messagesPerHour: 100,
    
    // Enable rate limiting
    enabled: true,
    
    // Response when rate limited
    limitedMessage: '⏱️ You\'re messaging a bit too fast! Let\'s take a breather and chat again in a moment. 😊',
  },

  // ============================================
  // DATABASE SETTINGS (Optional Future Use)
  // ============================================
  
  database: {
    // Set to true when using a database
    enabled: false,
    
    // Database type: 'mongodb', 'firebase', 'mysql', etc.
    type: 'mongodb',
    
    // Connection URL (set in .env)
    uri: process.env.DATABASE_URI || '',
    
    // Store conversation history
    persistConversations: false,
    
    // Store user profiles
    persistProfiles: false,
  },

  // ============================================
  // ADVANCED SETTINGS
  // ============================================
  
  advanced: {
    // Puppeteer headless mode
    headless: true,
    
    // Browser sandbox (needed for some servers)
    disableSandbox: true,
    
    // Auto-restart on crash
    autoRestart: true,
    
    // Max retries for failed messages
    maxRetries: 3,
    
    // Request timeout (milliseconds)
    requestTimeout: 30000,
  },
};
