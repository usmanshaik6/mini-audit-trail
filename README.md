🧠 Mini Audit Trail Generator

A full-stack application built using Next.js, React, and TypeScript that automatically tracks text changes and maintains a version history audit trail. Every modification captures added/removed words, timestamp, word count, and unique version ID.

🎯 Designed as a scenario-based intern task to prove originality, logic-building, and full-stack skills.

🚀 Features
Feature	Description
📝 Text Editor	Simple editor where user types content
💾 Save Version	Each click stores the updated text
🔍 Change Detection	Compares previous & new text
➕ Added Words	Tracks what was newly typed
➖ Removed Words	Detects deleted words
⏱ Timestamp	Records exact date & time
🔑 Unique Version ID	Each version gets a UUID
📜 Version History Panel	Displays all saved changes
🧬 Tech Stack
Category	Technology
Frontend	React + Next.js
Backend	Next.js API Routes
Language	TypeScript
Styling	Inline styles (basic CSS)
Storage	In-memory array
Deployment	Vercel
Version Control	Git & GitHub
📂 Folder Structure
mini-audit-trail/
│── app/
│   ├── page.tsx          # UI & frontend logic
│   ├── api/
│   │   ├── save-version/route.ts  # POST – Save version
│   │   └── versions/route.ts      # GET – Fetch versions
│── public/               # Images
│── package.json
│── README.md
│── tsconfig.json
│── next.config.ts

📡 API Endpoints
Method	Endpoint	Description
POST	/api/save-version	Saves a new version of text
GET	/api/versions	Returns version history
🖥️ How to Run Locally
# Install dependencies
npm install

# Start development server
npm run dev


Then visit 👉 http://localhost:3000

🌐 Live Demo

🔗 Live URL: Add your Vercel link here once deployed
🔗 GitHub Repository: https://github.com/usmanshaik6/mini-audit-trail

🧪 Sample Output

When you update text from
Hello → Hello world project

API returns:

{
  "id": "uuid",
  "timestamp": "2025-11-29 23:45",
  "addedWords": ["world", "project"],
  "removedWords": [],
  "oldLength": 5,
  "newLength": 17
}

🧠 What I Learned

✔ Next.js API Routes
✔ State management using React hooks
✔ String comparison logic
✔ Timestamps and UUID generation
✔ Debugging and full-stack integration
✔ Deployment process via Vercel
✔ Version control using Git & GitHub

📞 Contact

👤 Shaik Usman
📧 shaikusman0517@gmail.com

💻 GitHub: https://github.com/usmanshaik6

📱 Passionate Frontend Developer & Intern

⭐ If you found this project interesting, give it a star on GitHub!
