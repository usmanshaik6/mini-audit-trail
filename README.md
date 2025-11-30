# Mini Audit Trail Generator

A full-stack application built using **Next.js**, **React**, and **TypeScript** that automatically tracks text changes and maintains a **version history audit trail**.  
Every modification captures **added words, removed words, timestamp, word count, and a unique version ID**.

Designed as a **scenario-based intern task** to prove originality, logic-building, and full-stack skills.

---

## 🚀 Features

| Feature | Description |
|--------|-------------|
| Text Editor | User types any content |
| Save Version | Stores updated version |
| Change Detection | Compares previous and new text |
| Added Words | Tracks newly typed words |
| Removed Words | Detects deleted words |
| Timestamp | Captures exact date & time |
| UUID | Generates unique version ID |
| Version History | Lists all saved versions |

---

## 🧬 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js (React + TypeScript) |
| Backend | Next.js API Routes |
| Styling | Inline CSS |
| Storage | In-memory array |
| Deployment | Vercel |
| Version Control | Git & GitHub |

---
### 📁 Folder Structure

```
mini-audit-trail/
│── app/
│   ├── page.tsx
│   ├── api/
│   │   ├── save-version/route.ts
│   │   └── versions/route.ts
│── public/
│── package.json
│── README.md
│── tsconfig.json
│── next.config.ts
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/save-version | Save new version |
| GET | /api/versions | Fetch version history |

---

## 🖥️ Run Locally

```bash
npm install
npm run dev
Then visit:
👉 http://localhost:3000

## 🌐 Live Demo

🔗 **Application URL**  
https://mini-audit-trail-alpha.vercel.app/

[![Visit Live Site](https://img.shields.io/badge/Visit-Live%20Project-green?style=for-the-badge&logo=vercel)](https://mini-audit-trail-alpha.vercel.app/)



GitHub Repository: https://github.com/usmanshaik6/mini-audit-trail

📊 Sample API Response
{
  "id": "uuid",
  "timestamp": "2025-11-29 23:45",
  "addedWords": ["world", "project"],
  "removedWords": [],
  "oldLength": 5,
  "newLength": 17
}

📚 What I Learned

How to use Next.js API Routes

State management using React Hooks

Implementing string comparison logic

Generating timestamps & UUID

Debugging and full-stack integration

Deployment using Vercel

Git & GitHub workflow

👤 Contact

Name: Shaik Usman
Email: shaikusman0517@gmail.com

GitHub: https://github.com/usmanshaik6

⭐ Support

If you liked this project, please give it a ⭐ on GitHub!
