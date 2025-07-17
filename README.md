# 🎣 4_Manual-Phishing - Flipkart Fake Login Page (Educational Only)

> ⚠️ **Disclaimer**: This project is for **educational and ethical hacking practice** only. Never use it to target real users. Unauthorized use is illegal and unethical.

---

## 🛑 What is Phishing?

**Phishing** is a cyber attack technique where an attacker impersonates a trusted entity (like a bank or e-commerce site) to trick users into revealing sensitive information such as:
<pre>
- Emails
- Passwords
- Credit card details
- Personal data
</pre>
---

## 📄 Project Overview

This is a **manual phishing simulation** project built with:

- `HTML/CSS` to create a fake Flipkart login interface
- `Node.js + Express` to handle form submissions
- Credentials are stored in `credentials.txt`
- After form submission, user is redirected to the **real Flipkart** site

> ⚠️ For demonstration and awareness purposes only!

---

## 📁 Project Structure
<pre>
4_Manual-Phishing/
├── public/
│ └── index.html # Fake Flipkart login page
├── server.js # Express backend to handle form data
├── credentials.txt # Saved credentials
└── README.md # This file

</pre>
---

## 🛠️ How to Run This Project

### 1. ✅ Prerequisites
- [Node.js](https://nodejs.org/) must be installed  
- Run this to confirm:
  ```bash
  node -v
  npm -v

2. 📦 Install Required Modules
Open your terminal and run:
npm init -y
npm install express body-parser

3. 📂 Place the HTML File
Make sure the index.html file is inside a folder named public/
/public/index.html

4. 🚀 Start the Server
node server.js
Terminal should show:
Server running on http://localhost:3000

5. 🔒 Captured Credentials
When a user enters email and password on the fake login page, it gets saved to:
credentials.txt
Sample entry:
Email: someone@example.com, Password: 123456

Stay Ethical. Stay Informed.
Use this project only in secure lab environments or to spread awareness about phishing tactics.
