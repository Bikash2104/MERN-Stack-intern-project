// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const options = {
//   title: { text: "My Chart" },
//   series: [{ data: [1, 2, 3, 4, 5] }],
// };

// export default function MyChart() {
//   return <HighchartsReact highcharts={Highcharts} options={options} />;
// }
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const options = {
//   chart: { type: "column" },
//   title: { text: "Daily Order Analysis" },
//   subtitle: { text: new Date().toLocaleString() },
//   xAxis: {
//     categories: [
//       "14-02-2025",
//       "17-02-2025",
//       "18-02-2025",
//       "24-02-2025",
//       "12-03-2025",
//       "28-03-2025",
//       "27-03-2025",
//       "28-03-2025",
//     ],
//   },
//   yAxis: { title: { text: "Orders" } },
//   series: [
//     { name: "Billed", data: [6, 1, 2, 3, 1, 5, 2, 1], color: "deepskyblue" },
//     { name: "Cancelled", data: [0, 0, 0, 0, 0, 0, 1, 1], color: "purple" },
//     { name: "Rejected", data: [0, 1, 0, 0, 0, 0, 1, 1], color: "red" },
//   ],
// };

// export default function MyChart() {
//   return (
//     <div style={{}}>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// }

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: { type: "areaspline", backgroundColor: "transparent" },
  title: { text: "Call analytics", align: "left", style: { fontSize: "14px" } },
  xAxis: { visible: false },
  yAxis: { visible: false },
  series: [
    { data: [5, 10, 6, 15, 8, 20, 10], color: "green", fillOpacity: 0.2 },
  ],
  credits: { enabled: false },
  legend: { enabled: false },
};

export default function MyChart() {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h4>Call analytics</h4>
      <h2>34 h 48 min</h2>
      <p style={{ color: "green" }}>16% Increase</p>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const options = {
//   chart: { type: "pie", backgroundColor: "transparent" },
//   title: { text: "" }, // No title
//   plotOptions: {
//     pie: {
//       innerSize: "60%", // Creates the donut effect
//       dataLabels: { enabled: false },
//     },
//   },
//   series: [
//     {
//       data: [
//         { name: "SERVER", y: 20, color: "blue" },
//         { name: "Partner", y: 40, color: "green" },
//         { name: "SERVICES", y: 15, color: "orange" },
//         { name: "OTHERS", y: 15, color: "lightgray" },
//       ],
//     },
//   ],
//   legend: { align: "right", verticalAlign: "middle", layout: "vertical" },
//   credits: { enabled: false },
// };

// export default function MyChart() {
//   return (
//     <div style={{ width: "250px", height: "100px" }}>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const chartOptions = {
//   chart: { type: "column", backgroundColor: "transparent" },
//   title: { text: "Job Statistics", align: "left", style: { fontSize: "16px" } },
//   xAxis: {
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//   },
//   yAxis: { title: { text: "" } },
//   plotOptions: {
//     column: { stacking: "normal" },
//   },
//   series: [
//     {
//       name: "Completed Jobs",
//       data: [100, 50, 70, 90, 60, 80, 75, 85, 40, 95, 110, 105],
//       color: "green",
//     },
//     {
//       name: "Pending Jobs",
//       data: [20, 10, 15, 25, 10, 20, 15, 20, 10, 15, 20, 25],
//       color: "lightgreen",
//     },
//   ],
//   legend: { enabled: false },
//   credits: { enabled: false },
// };

// export default function MyChart() {
//   const [timeRange, setTimeRange] = useState("Weekly");

//   return (
//     <div
//       style={{
//         width: "90%",
//         margin: "auto",
//         padding: "10px",
//         borderRadius: "8px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <h3>Job Statistics</h3>
//         <select
//           value={timeRange}
//           onChange={(e) => setTimeRange(e.target.value)}
//           style={{ padding: "5px", borderRadius: "4px" }}
//         >
//           <option>Weekly</option>
//           <option>Monthly</option>
//           <option>Yearly</option>
//         </select>
//       </div>
//       <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//     </div>
//   );
// }

// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import AccountCircle from "@mui/icons-material/AccountCircle";

// export default function MyChart() {
//   return (
//     <div style={{ marginTop: "30px" }}>
//       <TextField
//         label="Username"
//         variant="outlined"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <AccountCircle />
//             </InputAdornment>
//           ),
//         }}
//       />
//     </div>
//   );
// }
