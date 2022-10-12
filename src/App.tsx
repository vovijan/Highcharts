import {SankeyChart} from "./components/Chart/SankeyChart";
import sankey from './data/sankey';
import pie from './data/pie';
import {PieChart} from "./components/Chart/PieChart";

export const App = () => {
  return (
    <>
      <SankeyChart data={sankey} />
      <PieChart data={pie} />
    </>
  )
}