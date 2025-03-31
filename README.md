# 📊 Gen AI Analytics Dashboard  

A **React + TypeScript** project that provides an interactive **data visualization dashboard** using **Recharts**, **Redux Toolkit**, and **Tailwind CSS**. Users can input queries to retrieve and visualize business insights in various chart formats (**Bar, Line, Pie**).  

---

## 🚀 Features  

✅ **Query Input with Auto-Suggestions** (Smart recommendations for business-related queries)  
✅ **Multiple Chart Types** (Bar, Line, Pie - switchable via dropdown)  
✅ **History Tab** (Click previous queries to reload their results)  
✅ **Error Handling** (Displays "No Data Found" for invalid queries)  
✅ **Loading State** (Indicates processing while fetching data)  
✅ **Hover Effects** (Enhanced Pie chart with better tooltip and interactivity)  

---

## 🖥️ Demo  

![Gen AI Dashboard Preview](https://your-demo-image-url.com) *(Replace with actual image link)*  

---

## 🛠️ Tech Stack  

- **Frontend:** React + TypeScript + Redux Toolkit  
- **UI Framework:** Tailwind CSS  
- **Charts:** Recharts  
- **State Management:** Redux Toolkit  
- **Mock Data:** Randomized sample data  

---

## 📂 Project Structure  

```bash
📂 src
│── 📁 components  
│   ├── QueryInput.tsx    
│   ├── ChartDisplay.tsx   
│   ├── HistoryTab.tsx   
│── 📁 redux  
│   ├── querySlice.ts     
│   ├── store.ts   
│── 📁 utils  
│   ├── mockSuggestions.ts  
│── App.tsx
│── main.tsx   
```

---

## 🎨 UI Preview  

### **1️⃣ Query Input with Auto-Suggestions**  
> User can enter a query related to **Sales, Revenue, Orders, Profit, Expenses, etc.**  

🔹 **Example Queries:**  
- "Show me sales data for Q1"  
- "Revenue trends over the past 6 months"  

### **2️⃣ Interactive Charts**  
🔹 Users can toggle between **Bar, Line, and Pie charts** using a dropdown.  
🔹 Smooth transitions and tooltips enhance data visualization.  

### **3️⃣ Query History**  
🔹 Click any past query from the **history tab** to reload its results.  

---

## 🔧 Installation & Setup  

```sh
git clone https://github.com/your-repo/gen-ai-dashboard.git

cd gen-ai-dashboard

npm install

npm run dev
```

> 🚀 Open **http://localhost:5173/** (or the specified port) in your browser.  

---

## 🔄 API & Mock Data  

Since this is a frontend-based project, it **does not fetch live data**. Instead, it generates **randomized mock data** based on query keywords.  

💡 **Valid Keywords:** `"sales", "revenue", "customer", "order", "profit", "expenses", "marketing", "inventory"`  
❌ **Invalid Keywords:** Display `"No data found for this query."`  

> In future, this can be integrated with **GPT-powered AI analytics** APIs.  

---

## 🛠️ Customization  

💡 To change the default **chart colors**, update the gradient definitions in `ChartDisplay.tsx`:  
```tsx
<defs>
  <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#6366F1" />
    <stop offset="100%" stopColor="#4F46E5" />
  </linearGradient>
</defs>
```
> Modify colors for **Bar, Line, and Pie charts** as needed! 🎨  

---

## 🏗️ Future Enhancements  

🚀 **Possible Improvements:**  
- ✅ **Live Data Fetching** (Integrate with a real-time API)  
- ✅ **Export Charts** (Save as **PNG, SVG, or PDF**)  
- ✅ **Dark Mode** (Toggle between **light & dark themes**)  
- ✅ **More Chart Types** (Radar, Scatter, etc.)  

---

## 💡 Contribution  

Contributions are welcome! 🎉  

1️⃣ **Fork the repository**  
2️⃣ **Create a new branch** (`feature/new-feature`)  
3️⃣ **Commit your changes** (`git commit -m "Added new feature"`)  
4️⃣ **Push to GitHub** (`git push origin feature/new-feature`)  
5️⃣ **Open a Pull Request** 🚀  

---


💡 **Have Suggestions?** Drop an issue or PR on **[GitHub](https://github.com/your-repo/gen-ai-dashboard)**! 🚀