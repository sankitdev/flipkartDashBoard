import { Bar, Doughnut, Line } from "react-chartjs-2";

const GraphCards = ({ chartType, data }) => {
  let ChartComponent;
  switch (chartType) {
    case "Bar":
      ChartComponent = Bar;
      break;
    case "Doughnut":
      ChartComponent = Doughnut;
    case "Line":
      ChartComponent = Line;
    default:
      ChartComponent = Line;
  }
  return (
    <>
      <div className="w-2/5 h-80  ml-10">
        <ChartComponent
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    </>
  );
};

export default GraphCards;
