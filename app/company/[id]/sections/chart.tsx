"use client";
import { RxShare1 } from "react-icons/rx";
/* eslint-disable @typescript-eslint/no-explicit-any */
// components/StackedBarChart.js
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from 'chart.js';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const StackedBarChart = ({ breakdownData }: { breakdownData: number[] }) => {
    // Skill data
    const data = {
        labels: [''], // Single bar label
        barThickness: 60, // Adjust bar thickness
        datasets: [
            {
                label: 'Frontend Development',
                data: [breakdownData[0]],
                backgroundColor: '#FF9AA2',
                barThickness: 60, // Adjust bar thickness
            },
            {
                label: 'Backend Development',
                data: [breakdownData[1]],
                backgroundColor: '#FFB7B2',
                barThickness: 60, // Adjust bar thickness
            },
            {
                label: 'Mobile Development',
                data: [breakdownData[2]],
                backgroundColor: '#FFDAC1',
                barThickness: 60, // Adjust bar thickness
            },
            {
                label: 'Dev Ops',
                data: [breakdownData[3]],
                backgroundColor: '#E2F0CB',
                barThickness: 60, // Adjust bar thickness
            },
            {
                label: 'UI/UX Design',
                data: [breakdownData[4]],
                backgroundColor: '#B5EAD7',
                barThickness: 60, // Adjust bar thickness
            },
            {
                label: 'GIS',
                data: [breakdownData[5]],
                backgroundColor: '#C7CEEA',
                barThickness: 60, // Adjust bar thickness
            },
            {
                label: 'AI',
                data: [breakdownData[6]],
                backgroundColor: '#D5AAFF',
                barThickness: 60, // Adjust bar thickness
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem: any) {
                        const label = tooltipItem.dataset.label;
                        const value = tooltipItem.raw;

                        return `${label}: ${value}%`;
                    },
                },
            },
            legend: {
                position: 'bottom',
                labels: {
                    position: 'top',
                    font: {
                        family: "'Press Start 2P', cursive", // Retro font
                    },
                    color: '#eee', // Gold color for retro theme
                },
            },
        },
        scales: {
            x: {
                stacked: true, // Enable stacking
                grid: {
                    display: false, // Remove grid lines
                },
                ticks: {
                    display: false, // Hide X-axis labels
                },
                barWidth: 10,
            },
            y: {
                beginAtZero: true,
                stacked: true, // Enable stacking
                max: 100, // Total must sum up to 100%
                ticks: {
                    stepSize: 10,
                    color: '#eee', // Gold for retro vibe
                    font: {
                        family: "'Press Start 2P', cursive", // Retro font
                    },
                },
                grid: {
                    display: false, // Darker grid lines for retro feel
                },
                barWidth: 10,
            },
        },
        indexAxis: "y"
    };

    return (
        <div
            className="text-foreground duration-600 space-y-6 p-6 rounded-lg justify-end shadow-md p-4"
            style={{
                width: '90%',
                margin: '2rem 2rem 2rem 2rem',
                opacity: 0.75,
                background: 'linear-gradient(135deg, #2F2F2F, #3B3B3B)', // Retro dark gradient
                border: '3px solid #eee', // Gold border
            }}
        ><Bar data={data} height={60} options={options as any} />
            <ul className='grid sm:grid-cols-3 gap-2 px-12'>
                {data.datasets.map((dataset, i) => <li key={i}>
                    <p className='text-xs flex gap-2 ml-4' style={{ color: dataset.backgroundColor }}>
                        <RxShare1 />
                        {`${dataset.label} (%${dataset.data})`}</p>
                    {/* <ul className='text-xs'>
                        <li><p>React</p></li>
                        <li><p>Angular</p></li>
                    </ul> */}
                </li>)}
            </ul>

        </div>
    );
};

export default StackedBarChart;