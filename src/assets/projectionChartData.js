export const defaultData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
{
      label: "Actual",
      data: [17, 20, 18, 22, 15, 20],
      backgroundColor: "rgba(59, 130, 246, 0.4)", // Tailwind blue-500/40
      borderRadius: 8,
      stack: "stack1",
      barPercentage: 0.6,
      categoryPercentage: 0.6,
    },
    {
      label: "Projection",
      data: [3, 3, 3, 5, 3, 3], // Difference between projection and actual
      backgroundColor: "rgba(191, 219, 254, 0.8)", // Tailwind blue-200/80
      borderRadius: 8,
      stack: "stack1",
      barPercentage: 0.6,
      categoryPercentage: 0.6,
    }
  ]
};