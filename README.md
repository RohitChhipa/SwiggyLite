# SwiggyLite 🍽️

**SwiggyLite** is a lightweight clone of the Swiggy food delivery platform built using modern web development technologies. The main highlight of this project is the use of **real-time data fetched via web scraping**, providing users with live and authentic food item listings distributed across various restaurants.

---

## 🚀 Features

- 🔐 **Authentication System** – Login and Signup functionalities with secure user sessions.
- 🛒 **Cart Management** – Add/remove items from the cart with quantity control.
- 🧾 **Place Orders** – Users can place orders from different restaurants.
- 🍔 **Live Food Listings** – All items and restaurant data are fetched from real-time APIs using **web scraping** techniques.
- 🍽️ **Multiple Restaurants** – Items are organized and categorized based on restaurants.
- 📱 **Responsive UI** – Optimized for both desktop and mobile devices.

---

## 📸 Screenshots

![Home Page](https://your-screenshot-url.com)  
*Live food items fetched from Swiggy in real-time*

---

## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS, JavaScript
- React.js

**Backend:**
- Node.js
- Express.js

**Web Scraping:**
- Cheerio
- Axios
- Custom-built scraper for fetching Swiggy restaurant and food data

**Database:**
- MongoDB (for storing user and order details)

---

## 🧠 Core Concepts Implemented

- Real-time **Web Scraping** to fetch live food items
- RESTful APIs for user and cart operations
- Session management and user authentication
- Dynamic routing and state management with React

---

## 📂 Folder Structure

```bash
SwiggyLite/
├── client/          # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
├── server/          # Express backend
│   ├── routes/
│   ├── models/
│   └── scraper/
└── README.md
