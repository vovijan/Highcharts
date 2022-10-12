import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";
import {FC} from "react";

HighchartsSankey(Highcharts)

type Series = {
  keys: string[],
  data: (string | number)[][]
}

type Props = {
  data: {
    title: {
      text: string
    },
    series: Series[]
  }
}

export const SankeyChart: FC<Props> = ({ data }) => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={data}
      />
    </div>
  );
};