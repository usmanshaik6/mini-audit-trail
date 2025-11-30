# 📝 Mini Audit Trail Generator

A full-stack application built using **Next.js**, **React**, and **TypeScript** that automatically tracks text changes and maintains a **version history audit trail**.

Every time the user updates the text, the app captures:

- ✅ Added words  
- ✅ Removed words  
- ✅ Timestamp  
- ✅ Word count before & after  
- ✅ Unique version ID (UUID)

✨ This project is designed as a **scenario-based intern task** to showcase:

- Original thinking  
- Logic-building skills  
- Frontend + backend integration  
- Deployment & Git workflow

---

## 🚀 Live Demo

Click below to try the application online:

[![Live Demo](https://img.shields.io/badge/Visit%20App-Live%20Demo-blue?style=for-the-badge&logo=vercel)](https://mini-audit-trail-alpha.vercel.app/)

🔗 Direct Link:  
https://mini-audit-trail-alpha.vercel.app/

📦 GitHub Repository:  
👉 https://github.com/usmanshaik6/mini-audit-trail

---

## 📌 Features

| Feature               | Description                             |
|----------------------|-----------------------------------------|
| 🖊 **Text Editor**       | User types and edits any content       |
| 💾 **Save Version**     | Stores each updated version            |
| 🔍 **Change Detection** | Compares previous & new text           |
| ➕ **Added Words**      | Tracks newly added words               |
| ➖ **Removed Words**    | Detects removed words                  |
| ⏱ **Timestamp**        | Captures exact date & time of change   |
| 🔑 **UUID**            | Generates unique version ID per entry  |
| 📚 **Version History** | Displays a list of all saved versions  |

---

## 🛠 Tech Stack

| Category          | Technology                     |
|------------------|---------------------------------|
| **Frontend**     | Next.js (React + TypeScript)    |
| **Backend**      | Next.js API Routes              |
| **Styling**      | Inline / basic CSS              |
| **Data Storage** | In-memory array (per session)   |
| **Deployment**   | Vercel                          |
| **Version Control** | Git & GitHub                 |

---

## 📂 Folder Structure

> This is a simplified representation of the project structure:

```bash
mini-audit-trail/
├── app/
│   ├── page.tsx              # Main UI with text editor & history
│   └── api/
│       ├── save-version/
│       │   └── route.ts      # POST route to save a version
│       └── versions/
│           └── route.ts      # GET route to fetch all versions
├── components/
│   └── VersionHistory.tsx    # Version list component (optional)
├── lib/
│   └── diff.ts               # String comparison / diff logic
├── public/
├── package.json
├── tsconfig.json
├── next.config.mjs / js
└── README.md
