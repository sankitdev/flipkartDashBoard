import Card from "./Card";
import GraphCards from "./GraphCards";
import sourceData from "./sourceData.json";
import { Chart as ChartJS } from "chart.js/auto";

const Body = () => {
  const Data = ["Total Products", "Total Orders", "Total Profit", "New Orders"];
  const labels = sourceData.map((item) => item.label);
  const values = sourceData.map((item) => item.value);

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
          {Data.map((item, index) => (
            <Card item={item} key={index} />
          ))}
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
