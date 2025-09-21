export const revenueLineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Current Week",
      data: [15, 10, 12, 16, 20, 22],
      borderColor: "#000",
      borderWidth: 3,
      pointRadius: 0,
      fill: false,
      tension: 0.5,
      segment: {
        borderDash: ctx => (ctx.p0DataIndex >= 3 ? [8, 8] : []),
      },
    },
    {
      label: "Previous Week",
      data: [10, 18, 14, 12, 17, 25],
      borderColor: "#93c5fd", // Tailwind blue-300
      borderWidth: 3,
      pointRadius: 0,
      fill: false,
      tension: 0.5,
    }
  ]
};