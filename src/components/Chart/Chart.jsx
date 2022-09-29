import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const DataPointValues = props.DataChart.map((element) => element.value);
  const TotalMaximum = Math.max(...DataPointValues);
  //   console.log(TotalMaximum);

  return (
    <div className="chart">
      {props.DataChart.map((element) => (
        <ChartBar
          key={element.label}
          label={element.label}
          value={element.value}
          MaxValue={TotalMaximum}
        />
      ))}
    </div>
  );
};
export default Chart;
