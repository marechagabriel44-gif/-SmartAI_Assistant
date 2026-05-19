# 📱 DOLA AI - QR CODE & WHATSAPP LINKING GUIDE

## What is the QR Code? 🔍

The QR code is a unique code that connects your WhatsApp account to Dola AI bot. When you scan it, WhatsApp knows to send all messages to your bot!

---

## 🖥️ LOCAL SETUP - Getting the QR Code

### Step 1: Start the Bot
```bash
npm start
```

### Step 2: Look for QR Code in Terminal
You'll see something like this:
```
==================================================
🤖 DOLA AI - SCAN THIS QR CODE WITH WHATSAPP
==================================================
█████████████████████████████████████████████
█ ▄▄▄▄▄ █ ▄▄▀▀█▀▄▀▄▀ ▄ █ ▀ ▀ █▀ ▀█ ▄▄▄▄▄ █
█ █   █ █ ▀  ▄█▀ ▄ ▄  █▄██▄▀▀▀▀█▀█ █   █ █
█ █ ███ █ ▀▀▀▄ ▀ █ █ █  ▀ ▀█▄▄▄█▀█ █ ███ █
█ █   █ █▀█ ▀ █  ▀ ▄  █▀▄▀███ ▀█ █ █   █ █
█ █▄▄▄█ █ ▀▄▄▀█ ▀▀ ▄▀▀█▄▄ █▀▀█▀▀▄ █ █▄▄▄█ █
█       █▄▄  ▄▀ █▀█▀▄▀▀ ▄  █▀▀ ▀ █▀█       █
█ ▀▀█ ▀ █  ▀▀██▀█▀▀██▀▀▀█  █▀ ▀▀██▀ ▀█▀ ▄ █
█ █▀▀█▀▄▀ ▀▀ ██▄ ▀ ▄█  █ █ ███▀▄▄▀█▀ ▀ ▄██ █
█ ▀ █▄▀  ▄▀▀█▀██▀▀▀ ██ █ ▀█ █ ▀██▀█▄▀▀▀ ▀ █
█████████████████████████████████████████████
==================================================
📱 Settings > Linked Devices > Link a Device
==================================================
```

✅ This is your QR code! Don't close this terminal window!

---

## 📱 SCANNING THE QR CODE - On Your Phone

### For iPhone (iOS):
1. Open **WhatsApp** on your iPhone
2. Go to **Settings** (bottom right)
3. Tap **Linked Devices**
4. Tap **Link a Device**
5. **Point your iPhone camera at the QR code** on your computer screen
6. When it says "Device linked", you're done! ✅

### For Android:
1. Open **WhatsApp** on your Android phone
2. Go to **Settings** (3 dots menu)
3. Tap **Linked Devices**
4. Tap **Link a Device**
5. **Point your Android camera at the QR code** on your computer screen
6. When it says "Device linked", you're done! ✅

### Troubleshooting QR Code Scanning:
- ✅ Make sure QR code is clearly visible on screen
- ✅ Good lighting helps the camera recognize it
- ✅ Don't zoom in too much - keep distance of 20-30cm
- ✅ If it doesn't work, try refreshing the terminal or restarting the bot

---

## 🌐 RENDER DEPLOYMENT - Getting QR Code on Server

When you deploy to Render, you can't see the QR code on your computer. Here's how to get it:

### Step 1: Deployment Complete
- Your Dola AI is now running on Render servers
- You can view logs in the Render dashboard

### Step 2: Find QR Code in Logs
1. Go to https://render.com/dashboard
2. Click on your **dola-ai** service
3. Go to **Logs** tab
4. Scroll up to find the QR code
5. It looks like the ASCII art above

### Step 3: Screenshot or Write It Down
- Take a screenshot of the QR code
- Or manually write down the pattern
- Then scan it with your phone (same process as above)

### Troubleshooting Render QR Code:
**Problem: No QR code in logs**
- Solution: Check if there are errors above the QR code
- Solution: Restart the service and check logs again
- Solution: Verify OPENAI_API_KEY is set in environment

**Problem: QR code keeps changing**
- This is normal! The code changes every time the service restarts
- Just scan the new one

---

## ✅ AFTER LINKING WHATSAPP

### You'll See:
```
✅ Device linked successfully
```

### Your Bot is Now:
- 🟢 Online and active
- 📱 Connected to your WhatsApp
- 💬 Ready to receive messages
- ⚡ Processing messages automatically

### Test Message:
Send your bot a message like:
```
Hi Dola! 👋
```

Expected response within 5-10 seconds:
```
Hey there! 🎉 It's so great to hear from you! 
How's your day going? I'm here and ready to chat about anything! ❤️
```

---

## 🔄 RECONNECTING (If Device Goes Offline)

### If WhatsApp Says "Device Offline":
Your bot connection may have dropped. Here's how to reconnect:

**On Your Phone:**
1. Go to **Settings** → **Linked Devices**
2. You'll see **Dola AI** listed
3. Tap the three dots next to it
4. Tap **Unlink**

**On Your Computer/Render:**
1. Delete the `.wwebjs_auth` folder
2. Restart the bot: `npm start`
3. A new QR code will appear
4. Scan it again with your phone

---

## 🚀 KEEPING BOT ALWAYS ONLINE

### For Local Computer:
- Keep the terminal window open
- Don't close the bot
- Keep your computer running

### For Render (Recommended):
- Bot stays online 24/7 automatically
- No need to keep your computer running
- Render servers run continuously

---

## 📊 CHECKING CONNECTION STATUS

### Local Terminal:
```bash
✅ Dola AI authenticated successfully!
🎉 DOLA AI IS ONLINE & READY TO CHAT! 🎉
Listening for messages... Send a message to start! 💬
```

### Render Dashboard:
1. Go to service dashboard
2. Look at status indicator
3. 🟢 Green = Online
4. 🔴 Red = Offline

---

## 🔐 SECURITY NOTES

⚠️ **Important:**
- Each QR code is unique to your bot
- Don't share your QR code with others (they can link different devices)
- If you accidentally scan wrong device, just unlink and rescan
- QR code expires after a few minutes - scan immediately

---

## 📱 MULTIPLE DEVICES

You can link Dola AI to multiple devices:
1. On Phone 1: Scan QR code → Device linked
2. On Phone 2: Scan same QR code → Device linked
3. Bot sends messages to all linked devices

**To separate devices:**
- Unlink one device and generate new QR code
- Scan new code on one device only

---

## 🆘 QR CODE NOT WORKING?

### Checklist:
- ✅ Bot is running (`npm start` or Render is running)
- ✅ QR code is visible and clear
- ✅ Phone camera is working
- ✅ Good lighting on QR code
- ✅ WhatsApp is up to date (latest version)
- ✅ Not in airplane mode
- ✅ Wi-Fi/Mobile data is on

### Still Not Working?
Try these steps:
1. Kill bot (Ctrl+C) and restart
2. Clear WhatsApp cache (Settings → Storage)
3. Close and reopen WhatsApp
4. Try again with fresh QR code

---

## 📞 QUICK REFERENCE

| Action | Steps |
|--------|-------|
| **Link Device** | Settings → Linked Devices → Link Device → Scan QR |
| **Unlink Device** | Settings → Linked Devices → 3 dots → Unlink |
| **View Bot Status** | Settings → Linked Devices (see if Online/Offline) |
| **Get New QR Code** | Restart bot, new code appears |
| **Check Bot Active** | Send message, bot should respond |

---

## 🎉 YOU'RE ALL SET!

Your Dola AI is now:
- ✅ Linked to WhatsApp
- ✅ Ready to chat 24/7
- ✅ Responding to all messages
- ✅ Acting as your best friend

**Start chatting!** 💬✨

---

## 🚀 NEXT STEPS

1. ✅ Scan QR code with WhatsApp
2. ✅ Send test message
3. ✅ Get response from Dola AI
4. ✅ Enjoy chatting with your AI friend!

**Questions? Check README.md or SETUP.md for more help!**
