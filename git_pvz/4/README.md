# 🧾 VAT Invoice Generator

This is a simple VAT invoice generation application built using **HTML**, **JavaScript**, and **SCSS**. It dynamically fetches and displays invoice data from an external API and formats it into a professional-looking invoice layout.

---

## 🚀 What This Project Can Do

- Fetches invoice data from an external API
- Displays seller and buyer details
- Lists products with quantities, prices, discounts, and total calculations
- Calculates totals including shipping, VAT, and final price
- Styled layout ready for printing (with `@media print` support)
- Uses SCSS for modular and clean styling

---

## 📦 Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5**  | Semantic structure of the page |
| **JavaScript (ES6)** | Dynamic content loading from API |
| **SCSS**   | Enhanced styling with nesting and structure |
| **REST API** | Gets real invoice data from `https://in3.dev/inv/` |
| **Google Fonts** | Custom fonts for a modern look |

---

## 🌐 External API

The app uses this open API:

https://in3.dev/inv/

It returns invoice information in JSON format, including:
- Invoice number, date, due date
- Seller & buyer info
- Product list with discounts
- Shipping price

---
## 🛠️ How to Use

1. Clone the repository
2. Open `index.html` in any browser
3. The invoice will be generated automatically with API data
4. You can print the invoice via browser print dialog

---
## 📌 Notes

- This is a front-end only app (no backend)
- The project is designed to be lightweight, clean, and print-ready
- You can style further using SCSS or adjust structure via HTML

---

## 👤 Author

Created by [Rokas Šturma] – for educational and UI layout practice purposes.

