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
import { getData, options } from "./chart.config";

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const StackedBarChart = ({ breakdownData }: { breakdownData: number[] }) => {
    // Skill data
    const data = getData(breakdownData)
    return (
        <div
            className={`text-foreground mx-auto justify-end
                        p-8 sm:w-3/4 max-sm:w-11/12 h-min
                        rounded-lg  shadow-md duration-1000`}
            style={{
                opacity: 1,
                background: 'linear-gradient(135deg, #2F2F2F, #3B3B3B)', // Retro dark gradient
                border: '3px solid #eee', // Gold border
            }}
        >
            
        <h2 className="text-3xl text-foreground border-b-2 border-foreground">
            Skills
        </h2>
            <Bar data={data} height={60} options={options as any} />
            <ul className='grid sm:grid-cols-3 gap-2'>
                {data
                    .datasets
                    .filter(dataset => dataset.data[0] > 0)
                    .map((dataset, i) => <li key={i}>
                    <p className='text-xs flex gap-2 mx-4' style={{ color: dataset.backgroundColor }}>
                        <RxShare1 />
                        {`${dataset.label} (%${dataset.data[0]})`}</p>
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