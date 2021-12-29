import "./PokemonChart.scss";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const PokemonChart = ({ stats}) => {
  return (
    <div className="container-chart">
      <Radar
        data={{
          labels: ["HP", "ATK", "DEF", "S.ATK", "S.DEF", "SPEED"],
          datasets: [
            {
              label: "Stats",
              data: [
                stats[0].base_stat,
                stats[1].base_stat,
                stats[2].base_stat,
                stats[3].base_stat,
                stats[4].base_stat,
                stats[5].base_stat,
              ],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132)",
              borderWidth: 3,
            },
          ],
        }}
      />
    </div>
  );
};

export default PokemonChart;
