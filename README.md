# 🧾 Multi-Step Form

A responsive and interactive **multi-step form** built with **HTML**, **SCSS**, and **JavaScript (ES Modules)**.  
This project was created as part of the [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ?tab=downloads).

---

## 🔗 Links

- 🎯 **Challenge Source:** [Frontend Mentor – Multi-Step Form](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ?tab=downloads)  
- 🌐 **Live Site:** [Your Live Demo URL Here](https://rawanyasser297.github.io/Multi-Step-Form/)  
- 💻 **GitHub Repository:** [Your GitHub Repo URL Here](https://github.com/RawanYasser297/Multi-Step-Form.git)

---

## 🚀 Features

- 🧍 **Step 1 – Personal Info:**  
  Collects user details (name, email, phone) with basic validation.

- 💳 **Step 2 – Select Plan:**  
  Choose between **Arcade**, **Advanced**, or **Pro** with a **Monthly/Yearly toggle**.

- 🧩 **Step 3 – Pick Add-ons:**  
  Add extra services like *Online Service*, *Larger Storage*, and *Customizable Profile*.

- ✅ **Step 4 – Summary:**  
  Review the selected plan and add-ons before confirming.

- 🎉 **Thank You Screen:**  
  Confirmation message displayed after successful submission.

- 💡 **Modern UI:**  
  Clean design with animated step indicators and responsive layout.

---

## 🧠 Tech Stack

- **HTML5**
- **SCSS / CSS3**
- **Vanilla JavaScript (Modules)**
- **Google Fonts (Ubuntu)**
- **Vite** (for development/build)

---

## 📂 Folder Structure

multi-step-form/
│
├── public/
│ └── images/
│ ├── icon-arcade.svg
│ ├── icon-advanced.svg
│ └── icon-pro.svg
│
├── styles/
│ └── main.css
│
├── scripts/
│ └── addons.js
| |── finishing.js
| |── form-validation.js
| |── plan.js
| |── swiper.js
| |── userInfo.js
| |── view.js
| |── index.js
|     
│
├── index.html
└── README.md

yaml
Copy code

---

## ⚙️ Setup & Usage

### 🧩 Open Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/RawanYasser297/Multi-Step-Form.git


⚡ Run with Vite (Recommended)

Install dependencies:

npm install


2. Start development server:

npm run dev


3. Open the provided local URL in your browser.
🧭 Navigation Logic
Button	Action
Next Step	Moves to the next section
Go Back	Returns to the previous section
Confirm	Shows final confirmation screen

The active step updates dynamically in the sidebar for a smoother UX.


🎨 Design Details

Font: Ubuntu

Responsive Layout: Works seamlessly across desktop and mobile.

UI Inspiration: Based on Frontend Mentor’s official Figma design.
