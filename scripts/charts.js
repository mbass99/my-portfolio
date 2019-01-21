//CHART 1 WOULD WINE DRINKERS USE- 54% SHOWED INTEREST  

var chartOne = document.getElementById('wineChart').getContext('2d');
var myChart = new Chart(chartOne, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Yes", "No", "Maybe"],
        datasets: [{
            label: "Is This For Wine Users",
            backgroundColor: ['rgb(234, 13, 60)',
                        'rgb(19, 44, 232)',
                        'rgb(244, 135, 9)'
                    ],
            borderColor: ['rgb(234, 13, 60)',
                        'rgb(19, 44, 232)',
                        'rgb(244, 135, 9)'
                    ],
            data: [15.6, 46.9, 37.5],
            borderWidth: 0
                }]
    },

    // Configuration options go here
    options: {}
});

//CHART 2 - MORE THAN WINE USE - 70% MORE THAN WINE
var chartTwo = document.getElementById('winePlusChart').getContext('2d');
var myChart = new Chart(chartTwo, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Yes", "No", "Maybe"],
        datasets: [{
            label: "Users For More Than Wine",
            backgroundColor: ['rgb(234, 13, 60)',
                        'rgb(19, 44, 232)',
                        'rgb(244, 135, 9)'
                    ],
            borderColor: ['rgb(234, 13, 60)',
                        'rgb(19, 44, 232)',
                        'rgb(244, 135, 9)'
                    ],
            data: [41.2, 29.4, 29.5],
            borderWidth: 0
                }]
    },

    // Configuration options go here
    options: {}
});

//CHART 3 - WHAT WOULD USERS WANT FROM THIS?
var chartThree = document.getElementById('productChart').getContext('2d');
var myChart = new Chart(chartThree, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Tasting Notes", "Freshness Alerts", "Smart Connection To Home Fridge", "Connecting With Winaries Directly", "Share With Network", "Purchase History", "Complete List", "Sorting", "Suggestions To Try", "Pairing Suggestions", "Record When Opened", "Wine Similarity", "Picture Of Past Wine", "Wine Specs"],
        datasets: [{
            label: "User Needs",
            backgroundColor: ['rgb(255, 99, 132)',
                        'rgb(44, 140, 222)', 'rgb(216, 244, 65)', 'rgb(198, 190, 5)', 'rgb(119, 38, 229)', 'rgb(40, 235, 48)', 'rgb(99, 255, 177)', 'rgb(244, 178, 192)', 'rgb(239, 118, 29)', 'rgb(198, 19, 198)', 'rgb(134, 152, 167)', 'rgb(114, 114, 53)', 'rgb(46, 38, 40)', 'rgb(185, 248, 197)', 'rgb(93, 12, 8)', 'rgb(132, 35, 23)'
                    ],



            borderColor: ['rgb(255, 99, 132)',
                        'rgb(44, 140, 222)', 'rgb(216, 244, 65)', 'rgb(198, 190, 5)', 'rgb(119, 38, 229)', 'rgb(40, 235, 48)', 'rgb(99, 255, 177)', 'rgb(244, 178, 192)', 'rgb(239, 118, 29)', 'rgb(198, 19, 198)', 'rgb(134, 152, 167)', 'rgb(114, 114, 53)', 'rgb(46, 38, 40)', 'rgb(185, 248, 197)', 'rgb(93, 12, 8)', 'rgb(132, 35, 23)'
                    ],
            data: [13, 5, 1, 3, 8, 9, 10, 12, 12, 10, 6, 1, 1, 1, 1],
            borderWidth: 0
                }]
    },

    // Configuration options go here
    options: {

    }
});
