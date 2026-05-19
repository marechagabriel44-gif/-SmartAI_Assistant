# 🚀 DOLA AI - QUICK SETUP GUIDE

## Step 1: Get Your OpenAI API Key ✅

1. Go to https://platform.openai.com/api-keys
2. Log in or create a new account
3. Click "Create new secret key"
4. Copy the key (you won't see it again!)
5. **Keep it safe - never share it!**

---

## Step 2: Local Setup (Test Before Deploying) 🖥️

### For Windows:
```bash
# 1. Clone repository
git clone <your-repo-url>
cd dola-ai

# 2. Install Node.js 18+ from https://nodejs.org/

# 3. Install dependencies
npm install

# 4. Create .env file
Copy .env.example to .env
Edit .env and paste your OpenAI API key

# 5. Run the bot
npm start

# 6. Scan the QR code with WhatsApp
```

### For Mac/Linux:
```bash
git clone <your-repo-url>
cd dola-ai
npm install
cp .env.example .env
# Edit .env with your API key
npm start
```

---

## Step 3: Link WhatsApp 📱

When you run `npm start`, you'll see:
```
==================================================
🤖 DOLA AI - SCAN THIS QR CODE WITH WHATSAPP
==================================================
[QR CODE APPEARS HERE]
==================================================
📱 Settings > Linked Devices > Link a Device
==================================================
```

**To link:**
1. Open WhatsApp on your phone
2. Go to **Settings**
3. Tap **Linked Devices** (or Connected Devices)
4. Tap **Link a Device**
5. **Point your phone at the QR code** in your computer terminal
6. ✅ Done! Your phone will now receive messages

---

## Step 4: Deploy to Render 🌐

### 4A. Push Code to GitHub
```bash
git add .
git commit -m "Add Dola AI WhatsApp bot"
git push origin main
```

### 4B. Create Render Service
1. Go to https://render.com
2. Sign up with GitHub
3. Click **"New +"** → **"Web Service"**
4. Connect your GitHub repository
5. Select the repository and branch
6. Fill in:
   - **Name:** `dola-ai`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Standard or higher (free tier may timeout)

### 4C. Set Environment Variables
1. In Render dashboard, go to **Environment**
2. Add these variables:

| Key | Value |
|-----|-------|
| `OPENAI_API_KEY` | Your actual OpenAI API key |
| `NODE_ENV` | `production` |

3. Click **Save**

### 4D. Deploy
1. Click **"Create Web Service"**
2. Wait for deployment (2-5 minutes)
3. ✅ Your bot is now live!

### 4E. Link WhatsApp to Deployed Bot
1. Go to Render dashboard
2. Click on your service
3. Go to **Logs** tab
4. Look for the QR code (scroll up in logs)
5. Scan it with WhatsApp the same way as local setup
6. ✅ Done! Bot is connected

---

## Testing Your Bot 🧪

### Test Messages:
1. **Say Hi:** "Hi Dola! 👋"
   - Expected: Friendly greeting back

2. **Ask a Question:** "What's 2+2?"
   - Expected: Smart answer with explanation

3. **Request a Joke:** "Tell me a funny joke"
   - Expected: Funny joke that makes you smile

4. **Ask for Help:** "Can you explain photosynthesis?"
   - Expected: Clear, friendly explanation

5. **Get Advice:** "Should I learn programming?"
   - Expected: Thoughtful, encouraging advice

---

## ⚙️ Configuration (Advanced)

### Change Bot Personality
Edit `index.js`, find the `systemPrompt` variable and customize:
```javascript
const systemPrompt = `You are Dola AI, the friendliest...`
```

### Adjust Response Settings
In `index.js`, modify these in the `getAIResponse` function:
```javascript
max_tokens: 500,        // Response length (increase for longer answers)
temperature: 0.9,       // Creativity (0=serious, 1=creative)
top_p: 0.95,           // Diversity (lower = more focused)
```

### Change Model
```javascript
model: 'gpt-4o-mini',   // Fast & cheap (recommended)
// model: 'gpt-4',      // More powerful but expensive
```

---

## 🛠️ Troubleshooting

### Problem: QR Code Not Appearing
**Solution:**
```bash
# Make sure terminal output is visible
npm start 2>&1 | tee bot.log
```

### Problem: Bot Not Responding
**Checklist:**
- ✅ Is bot still running? (Check terminal)
- ✅ Is API key correct in .env?
- ✅ Do you have API credits? (Check https://platform.openai.com/account/billing/overview)
- ✅ Is WhatsApp still linked? (Bot is offline if you restart)

### Problem: "OPENAI_API_KEY not set"
**Solution:**
1. Create `.env` file from `.env.example`
2. Add your API key:
   ```
   OPENAI_API_KEY=sk-proj-your-actual-key-here
   ```
3. Save file
4. Restart bot: `npm start`

### Problem: Bot Keeps Crashing on Render
**Solution:**
1. Check Render **Logs** for error messages
2. Verify environment variables are set
3. Check if Node.js version is 18+
4. Restart the service

### Problem: WhatsApp Says "Device Offline"
**Solution:**
- Keep your computer/Render service running
- Bot needs to be online to receive messages
- If Render service goes down, restart it

---

## 💰 Cost Information

### OpenAI Pricing (Approximate)
- **gpt-4o-mini:** ~$0.00015 per message (cheap! ✅)
- **gpt-4:** ~$0.03 per message (expensive, more powerful)

**Example:** 1000 messages = ~$0.15 with gpt-4o-mini

### Render Pricing
- **Free tier:** Limited, may timeout
- **Standard:** $7/month (recommended for 24/7 bot)
- **Pro:** More resources if needed

---

## 📊 Monitoring Your Bot

### Local Testing
```bash
npm start
# Watch console for:
# - Messages received
# - Responses sent
# - Errors (if any)
```

### Render Production
1. Go to Render dashboard
2. Click your service
3. **Logs** tab shows all messages and errors
4. **Metrics** tab shows uptime and CPU usage

---

## 🔐 Security Tips

✅ **Do:**
- Keep API key in `.env` (never commit it)
- Use `.gitignore` to protect secrets
- Regenerate API keys if compromised
- Monitor API usage regularly

❌ **Don't:**
- Share your API key with anyone
- Commit `.env` file to GitHub
- Use placeholder keys in production
- Hardcode credentials in code

---

## 🎯 Next Steps

1. ✅ Get OpenAI API key
2. ✅ Test locally with `npm start`
3. ✅ Push to GitHub
4. ✅ Deploy to Render
5. ✅ Link WhatsApp
6. ✅ Chat with Dola AI! 🤖

---

## 📞 Need Help?

**Common Issues:**
- Check `.env` file exists and has correct API key
- Make sure Node.js 18+ is installed
- Verify WhatsApp is linked (check logs for QR code)
- Check OpenAI account has available credits

**More Help:**
- WhatsApp Web.js: https://docs.wwebjs.dev/
- OpenAI API: https://platform.openai.com/docs/
- Render Docs: https://render.com/docs

---

## 🎉 You're All Set!

Your Dola AI is ready to:
- Chat 24/7 💬
- Help with homework 📚
- Tell jokes 😄
- Give advice 💡
- Be your best friend 👯

**Start chatting with Dola AI now!** 🚀✨
