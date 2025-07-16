
# 🧠 Fallacifier - Browser Extension for Smart Fact Checking

**Fallacifier** is a Browser Extension that instantly fact-checks any claim using real-time public sources, AI reasoning, and domain trust scores — so you never have to Google bold statements again.

## Screenshot

<img width="1280" height="800" alt="1" src="https://github.com/user-attachments/assets/1a450b13-38f4-44df-8f8b-60a05e0ddf80" />
<img width="1280" height="800" alt="2" src="https://github.com/user-attachments/assets/7ef8fe67-643c-4115-8abf-42298f1a70b0" />
<img width="1280" height="800" alt="3" src="https://github.com/user-attachments/assets/94ce6906-8641-4028-ab06-7619ed7cb07b" />
<img width="1280" height="800" alt="4" src="https://github.com/user-attachments/assets/60e8b27e-1b11-4a08-a475-a2a5c5aee157" />



---

## 🔍 What It Does

- ✅ Enter or highlight any claim on a webpage
- 🌐 Searches the web using the Brave Search API
- 🏆 Ranks sources based on domain trust score
- 🤖 Uses GPT to analyze content and deliver a verdict: **Supported**, **Refuted**, or **Unverifiable**
- 📈 Provides a **Confidence Rating** and cites top sources
- 🧠 All reasoning is handled server-side (deployed on Render.com)
---

## ⚙️ Tech Stack

### 🔧 Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Chrome Extension APIs

### 🧠 Backend
- [Nvidia Mistral API](https://platform.openai.com/)
- [Brave Search API](https://search.brave.com/)
- [Firebase Realtime Database](https://firebase.google.com/)
- Hosted on [Render.com](https://render.com/)

---
## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AkshaTGA/React--Fallacifier-Extension.git
cd React--Fallacifier-Extension
```
### 2. Install Dependencies
```bash
npm install

```
### 3. Start the Build
``` bash
npm run build 
```
This will generate the optimized extension files inside the dist/ directory.


## 🧩 Load Extension into Browser
Open your browser and and open extensions page.
Enable Developer Mode 

Click Load unpacked

Select the dist/ folder generated after build

You're now ready to use the extension locally!
---

## 👨‍💻 About the Developer

I'm Akshat, an IT undergrad from IIIT Allahabad with a deep interest in web dev, AI, and building tools that solve real problems.
Feel free to connect with me or contribute!

---

## ☕ Support the Developer
Like this project? Consider buying me a coffee!
---
☕[Buy Me a Coffee](https://coff.ee/akshat140)




