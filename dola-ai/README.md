```markdown
# 🤖 Dola AI - Your WhatsApp Best Friend

Dola AI is a friendly, intelligent WhatsApp chatbot powered by OpenAI. Chat with your AI best friend 24/7!

## ✨ Features

- 💬 **24/7 Availability**: Always online and ready to chat
- 🧠 **Smart Conversations**: Powered by OpenAI GPT-4
- 📚 **Homework Help**: Explain concepts and help with learning
- 😄 **Funny Jokes**: Get jokes and funny conversations
- 💡 **Life Advice**: Genuine, thoughtful guidance
- 🎯 **Context Aware**: Remembers conversation history
- 🔐 **Secure**: Uses environment variables for API keys
- 🌟 **Warm & Human-like**: Speaks naturally and authentically

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- WhatsApp account

### Local Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd dola-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```
Edit `.env` and add your OpenAI API key:
```
OPENAI_API_KEY=sk-your-actual-api-key-here
NODE_ENV=development
```

4. **Start the bot**
```bash
npm start
```

5. **Scan the QR code**
When you run the bot, a QR code will appear in the terminal. Scan it with WhatsApp (Settings > Linked Devices > Link a Device) to connect.

6. **Start chatting!**
Open WhatsApp and send a message to the linked device. Dola AI will respond automatically!

## 📦 Deployment on Render

### Step-by-Step Deployment

1. **Create a Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Connect Your Repository**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository and branch

3. **Configure the Service**
   - **Name**: `dola-ai`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Standard or higher

4. **Set Environment Variables**
   - In the dashboard, go to "Environment"
   - Add variable:
     - **Key**: `OPENAI_API_KEY`
     - **Value**: Your actual OpenAI API key
   - Add variable:
     - **Key**: `NODE_ENV`
     - **Value**: `production`

5. **Deploy**
   - Click "Create Web Service"
   - Wait for the deployment to complete
   - Your bot is now live!

6. **Connect WhatsApp**
   - Check the logs in Render dashboard
   - A QR code will appear in the logs
   - Scan it with WhatsApp to link the bot

## 🔧 Configuration

### Customizing Dola AI's Personality

Edit the `systemPrompt` in `index.js` to change how Dola AI responds:

```javascript
const systemPrompt = `You are Dola AI, the friendliest...`
```

### Adjusting Response Settings

In `index.js`, modify these parameters:
- `max_tokens`: Response length (default: 500)
- `temperature`: Creativity level (0-1, default: 0.9)
- `top_p`: Response diversity (0-1, default: 0.95)
- `MAX_HISTORY`: Conversation memory (default: 10 messages)

## 📝 API Usage

### Models Available
- `gpt-4o-mini`: Fast, efficient, cost-effective (recommended)
- `gpt-4`: More powerful but slower and more expensive

To change the model, edit in `index.js`:
```javascript
model: 'gpt-4o-mini',  // Change this
```

## 🎨 Bot Appearance

### Profile Picture
As specified, Dola AI's profile features:
- 🧠 Pink brain icon only
- No face
- No eyes
- Pure black background

To update the profile picture:
1. Open WhatsApp linked device
2. Long-press Dola AI contact
3. Select "View contact"
4. Update photo with the pink brain image

## 📱 Commands & Features

Dola AI automatically responds to:
- **Questions**: Any topic you ask about
- **Homework**: Help with subjects and concepts
- **Jokes**: Request jokes and humor
- **Advice**: Life, relationships, decisions
- **Chat**: Casual conversation about anything

## 🛠️ Troubleshooting

### QR Code Not Appearing
- Make sure you're running the bot in a terminal that supports output
- Try running with: `npm start 2>&1 | tee bot.log`

### Bot Not Responding
- Check that your OpenAI API key is valid
- Ensure you have API credits remaining
- Check the logs for errors

### Authentication Issues
- Delete `.wwebjs_auth` folder to reset
- Scan QR code again
- Make sure you're using the same WhatsApp account

### Render Deployment Issues

**Bot keeps crashing:**
- Check environment variables are set
- View logs: `Render Dashboard → Logs`
- Ensure Node.js version is 18+

**Can't see QR code:**
- Go to Render → Logs tab
- QR code should be visible in logs
- If not, check for errors above it

## 📊 Monitoring

### Check Bot Status
```bash
# Local
npm start  # Watch console output

# Render
Dashboard → Logs → View real-time logs
```

### View Conversation History
Conversations are stored in memory. To persist them, modify `index.js` to use a database.

## 💡 Tips & Best Practices

1. **Keep it Warm**: Dola AI's personality is friendly - maintain this in custom prompts
2. **Monitor Costs**: OpenAI API has costs - monitor usage in your dashboard
3. **Backup Data**: Regularly export important conversations
4. **Update Dependencies**: Run `npm update` monthly
5. **Test Locally**: Always test changes locally before deploying to Render

## 🔐 Security

- ✅ API keys stored in environment variables
- ✅ No sensitive data logged
- ✅ WhatsApp credentials in `.wwebjs_auth` (git-ignored)
- ✅ HTTPS enforced on Render

## 📚 Resources

- [WhatsApp Web.js Docs](https://docs.wwebjs.dev/)
- [OpenAI API Docs](https://platform.openai.com/docs/)
- [Render Documentation](https://render.com/docs)
- [Node.js Best Practices](https://nodejs.org/en/docs/)

## 📄 License

MIT License - feel free to use and modify!

## 🤝 Support

Having issues? Try:
1. Check the troubleshooting section
2. Review the logs
3. Check environment variables
4. Verify API key validity
5. Restart the bot

## 🎯 Future Enhancements

- Database integration for persistent conversations
- Custom commands
- Image recognition
- Voice message support
- Group chat support
- Multiple language support
- Admin dashboard

## 🌟 Credits

Built with ❤️ for friendly AI conversations

---

**Enjoy chatting with Dola AI!** 🚀✨
```
