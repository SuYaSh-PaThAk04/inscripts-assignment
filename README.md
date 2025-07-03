📊 React Spreadsheet-Like Dashboard (InScripts Assignment)
A responsive, interactive spreadsheet-style web application built using React, TypeScript, Tailwind CSS, and TanStack React Table. The app mimics the look and feel of professional spreadsheet tools (like Airtable or Asana) and allows users to view, filter, sort, and interact with tabular data.

🚀 Features
✅ Spreadsheet-style table layout
✅ Sorting columns (ascending/descending)
✅ Status filters (All, Pending, Approved, Completed)
✅ Colored status badges (based on Figma design)
✅ Reusable components: Navbar, Button Tabs, Toolbar, Action Buttons
✅ Built with React + Vite + Tailwind CSS

🛠 Tech Stack
React (with Vite)

TypeScript

Tailwind CSS

@tanstack/react-table (v8)

📂 Project Structure
css
Copy
Edit
src/
│
├── components/
│   ├── Navbar.tsx
│   ├── Toolbar.tsx
│   ├── ButtonTabs.tsx
│   ├── ActionButtons.tsx
│   └── StatusBadge.tsx
│
├── SpreadSheetTable.tsx
├── App.tsx
└── main.tsx
📦 Installation & Running Locally
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/react-spreadsheet-dashboard.git
cd react-spreadsheet-dashboard
2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Start the development server
bash
Copy
Edit
npm run dev
👉 The app will be running at:
http://localhost:5173

📝 How It Works
The main table is powered by TanStack React Table for efficient rendering, sorting, and filtering.

The Toolbar and Dropdown Tabs allow toggling additional filters or views.

The StatusBadge component dynamically styles status tags with different colors (following Figma).

The Navbar and ActionButtons replicate real-world workspace tools.

🌟 Future Enhancements
✅ Editable table cells

✅ Row selection and bulk actions

✅ Export to CSV/PDF

✅ Pagination for large datasets

✅ User authentication

📷 Screenshots
Spreadsheet Table	Status Badges	Toolbar Toggle

🧑‍💻 Author
Made  by Suyash Pathak


