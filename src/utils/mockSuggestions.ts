const mockSuggestions = (input: string): string[] => {
  if (!input) return [];

  const suggestions: Record<string, string[]> = {
    sales: [
      "Total sales in Q1",
      "Sales by region",
      "Monthly sales trends",
      "Sales vs target performance",
      "Product-wise sales distribution",
    ],
    revenue: [
      "Revenue breakdown by product",
      "Yearly revenue growth",
      "Revenue per customer segment",
      "Revenue by marketing channel",
      "Quarterly revenue comparison",
    ],
    customer: [
      "New customers this month",
      "Customer retention rate",
      "Customer churn analysis",
      "Top spending customers",
      "Customer demographics breakdown",
    ],
    order: [
      "Average order value",
      "Orders by payment method",
      "Order fulfillment time analysis",
      "Cancelled vs successful orders",
      "Most frequently ordered products",
    ],
    expenses: [
      "Total company expenses this year",
      "Marketing vs operational expenses",
      "Department-wise expense analysis",
      "Expense trend over the past months",
      "Cost reduction opportunities",
    ],
    profit: [
      "Profit margin by product category",
      "Net profit trend",
      "Quarterly profit comparison",
      "Profit contribution by region",
      "Operational profit vs net profit",
    ],
    marketing: [
      "Ad campaign performance",
      "Social media engagement trends",
      "Conversion rate by channel",
      "Email marketing ROI",
      "Customer acquisition cost",
    ],
    inventory: [
      "Current stock levels",
      "Products running low on stock",
      "Inventory turnover ratio",
      "Warehouse stock distribution",
      "Supply chain efficiency metrics",
    ],
  };

  const lowerInput = input.toLowerCase();

  return Object.keys(suggestions)
    .filter((key) => lowerInput.includes(key))
    .flatMap((key) => suggestions[key] || []);
};

export default mockSuggestions;
