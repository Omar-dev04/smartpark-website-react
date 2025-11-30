import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
Chart.register(ArcElement, Tooltip);

export default function VehiclePie() {
    const data = {
        labels: ["More than 3 hours", "2-3 hours", "less than 2 hours"],
        datasets: [{
            data: [65, 20, 15],
            backgroundColor: ["#163960", "#506C9C", "#DFB91B"],
        },
        ],
        };
    return <Pie data={data} />;
}