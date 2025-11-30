import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ParkingChart() {
    const data = {
        labels: ["1 AM", "4 AM", "7 AM", "10 AM", "1 PM", "4 PM", "7 PM", "10 PM"],
        datasets: [{
            label: "Occupied",
            data: [40, 60, 120, 170, 185, 160, 120, 90],
            borderColor: "#506C9C",
            pointBackgroundColor: "#163960",
            pointBorderColor: "#163960",
            tension: 0.4
        },],
    };
    const options = {
        scales: {
            x: {
                ticks: {
                    color: "#506C9C",
                    font: {size: 14}
                },
                grid: {color: "#163960"}
            },
            y: {
                ticks: {
                    color: "#506C9C",
                    font: {size: 14}
                },
                grid: {color: "#163960"}
            }
        }
    };
    return <Line data={data} options={options} />;
}