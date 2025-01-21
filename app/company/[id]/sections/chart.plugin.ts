// Custom plugin to add labels on top of bars
const customLabelsPlugin = {
    id: 'customLabels',
    afterDatasetsDraw(chart: any) {
        const { ctx, data, scales } = chart;

        data.datasets[0].data.forEach((value: number, index: number) => {
            const barWidth = scales.x.getPixelForValue(value) - scales.x.getPixelForValue(0);
            const barStart = scales.x.getPixelForValue(0);
            const barCenterY = scales.y.getPixelForValue(index) + scales.y._length / data.labels.length / 2 - 12;

            const label = data.labels[index];

            ctx.save();
            ctx.font = '12px "Press Start 2P", cursive';
            ctx.fillStyle = '#eee'; // Retro gold color
            ctx.textAlign = 'left';
            ctx.fillText(`${label} (${value}%)`, barStart + barWidth / 2, barCenterY - 29);
            ctx.restore();
        });
    },
};
export default customLabelsPlugin