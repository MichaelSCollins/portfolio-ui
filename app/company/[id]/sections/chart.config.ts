const getData = (breakdownData: number[]) => ({
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
    });

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
export {
    options, getData
}