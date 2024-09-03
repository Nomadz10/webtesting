// Prepare your data
var months = ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12', '2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12', '2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10'];
var sentiment = [0.1151894951, 0.1589490749, 0.1298319846, 0.1174808229, 0.0954793921, 0.08999771599, 0.1056745263, 0.1061569277, 0.1113971403, 0.1107394486, 0.1306138664, 0.1041432665, 0.09807098214, 0.1318344548, 0.08452701801, 0.06778463487, 0.1187442606, 0.07707601314, 0.06401969697, 0.1027408198, 0.1327848696, 0.1125551461, 0.0662526219, 0.09807148194, 0.1031070461, 0.1660190564, 0.1150696651, 0.127950087, 0.0551224122, 0.1163066939, 0.1281372051, 0.1289159138, -0.0488026825, -0.02030261894];
var tweets = [1228, 1135, 1038, 1434, 1645, 1007, 1425, 996, 1119, 943, 988, 1047, 896, 862, 1499, 2369, 967, 913, 1254, 1171, 1150, 787, 1087, 1606, 1476, 1081, 1523, 1150, 2164, 1225, 1102, 974, 2274, 2291];

var trace1 = {
    x: months,
    y: tweets,
    mode: 'lines+markers',
    name: 'Number of Tweets',
    line: {color: 'blue'}
};

var trace2 = {
    x: months,
    y: sentiment,
    mode: 'lines+markers',
    name: 'Sentiment Score',
    yaxis: 'y2',
    line: {color: 'red'}
};

var layout = {
    title: 'Tweets and Sentiment Analysis',
    xaxis: {
        title: 'Date'
    },
    yaxis: {
        title: 'Number of Tweets'
    },
    yaxis2: {
        title: 'Sentiment Score',
        overlaying: 'y',
        side: 'right'
    },
    annotations: [
        {
            x: '2020-01',
            y: 1228,
            xref: 'x',
            yref: 'y',
            text: 'Event A: Positive Sentiment Peak',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
        },
        {
            x: '2020-05',
            y: 1645,
            xref: 'x',
            yref: 'y',
            text: 'Event B: Volume of Tweets Peak',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
        },
        {
            x: '2021-04',
            y: 2369,
            xref: 'x',
            yref: 'y',
            text: 'Event D: Major Volume of Tweets Peak',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
        },
        {
            x: '2022-09',
            y: 2274,
            xref: 'x',
            yref: 'y',
            text: 'Event E: Positive Sentiment Peak',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
        },
        {
            x: '2022-09',
            y: 2274,
            xref: 'x',
            yref: 'y',
            text: 'Event F: Positive Sentiment Peak',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
        },
        {
            x: '2022-09',
            y: 2274,
            xref: 'x',
            yref: 'y',
            text: 'Event G: Negative Sentiment Peak',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
        },
        {
            x: '2022-09',
            y: 2274,
            xref: 'x',
            yref: 'y',
            text: 'Event H: Minor Volume of Tweets Peak',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
        },
        {
            x: '2022-09',
            y: 2274,
            xref: 'x',
            yref: 'y',
            text: 'Event I: Major Volume of Tweets Peak',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
        },
        {
            x: '2022-09',
            y: 2274,
            xref: 'x',
            yref: 'y',
            text: 'Event J: Major Volume of Tweets Peak',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
        }
        // Add more annotations for each event
    ]
};

var data = [trace1, trace2];

Plotly.newPlot('graph', data, layout);

// Add hover event listener
var graphDiv = document.getElementById('graph');
graphDiv.on('plotly_hover', function(data){
    var infotext = data.points.map(function(d){
        return ('x: '+d.x+', y: '+d.y.toPrecision(3));
    });

    // Show additional information based on the hover
    document.getElementById('info').innerHTML = infotext.join('<br/>');
});
