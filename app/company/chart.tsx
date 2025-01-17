/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
// components/PieChart.js
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    // Skill experience data for a particular job (example)
    const data = {
        labels: [
            'Frontend Development (React, JSX)',
            'Server-Side Rendering (SSR)',
            'API Routes',
            'Static Site Generation (SSG)',
            'Dynamic Routing',
            'Styling (CSS, Styled Components)',
            'Other (e.g., Deployment, Testing)'
        ],
        datasets: [
            {
                data: [30, 20, 15, 10, 10, 10, 5], // Proportions of skill experience
                color: "white",
                backgroundColor: [
                    '#4A90E2', // Frontend Development (shades of blue)
                    '#5B8BE2', // SSR
                    '#6B8AE2', // API Routes
                    '#7C8AE2', // SSG
                    '#8D8AE2', // Dynamic Routing
                    '#9E8AE2', // Styling
                    '#AFA9E2', // Other
                ],
                hoverBackgroundColor: [
                    '#F9A825', // Frontend Development (shades of orange)
                    '#FB8C00', // SSR
                    '#FF7043', // API Routes
                    '#FF5722', // SSG
                    '#FF3D00', // Dynamic Routing
                    '#FF6F00', // Styling
                    '#FF9100', // Other
                ],
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                position: 'left',
                labels: {
                    font: {
                        size: 12,      // Increase the font size of the labels
                        weight: 'bold', // Optionally, make the font bold
                    },
                    padding: 20,    // Add padding to the legend items
                    boxWidth: 20,   // Increase the width of the legend color box
                    color: '#eee', // Set the font color of the legend to #eee
                },
                // Increase the maximum width of the legend label area to accommodate longer text
                maxWidth: 500,  // Adjust the maxWidth to control the text wrapping area
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem: any) {
                        const label = tooltipItem.label;
                        const value = tooltipItem.raw;

                        return `${label}: ${value}%`;
                    }
                }
            }
        }
    };

    return (
        <div className='text-foreground' style={{ width: '100%', height: '100%', right: 0, position: 'absolute' }}>
            <Pie data={data} options={options as any} />
        </div>
    );
};

export default PieChart;