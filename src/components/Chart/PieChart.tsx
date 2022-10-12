import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {useRef} from "react";

export const PieChart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <div>
      <HighchartsReact
        ref={chartComponentRef}
        highcharts={Highcharts}
        options={props.data}
        {...props}
      />
    </div>
  );
};