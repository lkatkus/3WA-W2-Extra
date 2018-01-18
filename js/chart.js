

function drawChart(canvasId, x){
    var ctx = document.getElementById(canvasId).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [x, (100-x)],
                backgroundColor: [
                    '#e2534b',
                    '#76c7c0'
                ],
                borderColor: [
                    '#e2534b',
                    '#76c7c0'
                ],
                borderWidth: 1,
            }]
        },
        options: {
            cutoutPercentage: 50,
            rotation: 1 * Math.PI, /* to get half a doughnut */
            circumference: 1 * Math.PI, /* to get half a doughnut */
            events: ['null'], /* remove hover effect */
            title: {
                display: true,
                text: x,
                position: "bottom",
                fontSize: 15,
                padding: 0
            }
        }
    });
}
