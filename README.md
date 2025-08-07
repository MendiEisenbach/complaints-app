# 📮 Anonymous Complaints Box

A secure and anonymous web application for submitting and managing complaints in a military base.  
Built with **Node.js**, **Express**, and **MongoDB**, with a clean HTML interface and access control via password.

---

## 🧠 Features

- Anonymous complaint submission through a simple web form
- Admin interface protected by a password
- View all submitted complaints (admin only)
- Delete specific complaints (admin only)
- Static HTML frontend with responsive design
- Data stored in MongoDB
- Environment configuration via `.env`

---

## 📁 Folder Structure

```
complaints-app/
│
├── public/              # Static HTML and CSS files
│   ├── index.html       # Complaint submission form
│   └── admin.html       # Admin interface
│
├── routes/              # Express route handlers
│   └── complaintsRouter.js
│
├── models/
│   └── Complaint.js     # Mongoose schema
│
├── .env                 # Environment variables
├── app.js               # Main Express server file
├── package.json
└── README.md
```

---

## 🔁 Flow Overview

```
[User] ──> [index.html form]
            │
            ▼
     POST /submit (public)
            │
            ▼
   [Express Route → MongoDB]
            │
            ▼
[Stored as Complaint document]

[Admin] ──> [admin.html form]
            │
            ▼
     POST /admin-login
            │
            ▼
[Check password from .env]
            │
        (if correct)
            ▼
     GET /admin-view
            ▼
[Show all complaints + delete options]
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root with the following:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/complaints
ADMIN_PASSWORD=yourStrongPassword
```

---

## 🚀 Run the App

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open in browser:

- **User form** → http://localhost:3000
- **Admin page** → http://localhost:3000/admin

---

## 🧪 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- HTML + CSS
- dotenv

---

## 🔐 Security Note

The admin interface is protected by a basic password stored in `.env`.  
For production, consider using sessions, bcrypt hashing, or OAuth.
