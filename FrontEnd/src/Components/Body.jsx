import Card from "./Card";
import GraphCards from "./GraphCards";
import sourceData from "./sourceData.json";
import { Chart as ChartJS } from "chart.js/auto";
import { useContext } from "react";
import { DataContext } from "./Context/DataContext";
const Body = () => {
  const { jsonData } = useContext(DataContext);
  const labels = sourceData.map((item) => item.label);
  const values = sourceData.map((item) => item.value);
  const Data = ["Total Products", "Total Orders", "Total Profit", "New Orders"];
  const doughnutData = {
    labels: labels,
    datasets: [
      {
        label: "Revenue Sources",
        data: values,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex w-full h-40 items-center">
          <Card item={Data[0]} data={jsonData?.[0]?.["IGST Amount"]} />
          <Card item={Data[1]} data={jsonData?.[0]?.["IGST Amount"]} />
          <Card item={Data[2]} data={jsonData?.[0]?.["IGST Amount"]} />
          <Card item={Data[3]} data={jsonData?.[0]?.["IGST Amount"]} />
        </div>
        <div className="flex w-full h-96 items-center">
          <GraphCards chartType="Line" data={doughnutData} />
          <GraphCards chartType="Bar" data={doughnutData} />
        </div>
      </div>
    </>
  );
};

export default Body;
