import React from 'react';
import styles from './Chart.module.scss';
import ReactApexChart from 'react-apexcharts';


const Chart = (props) => {
    const { moodData } = props;


    const getNumberByMood = (mood) => {
        let numberByMood = 0;

        if (mood === "Angry") {
            numberByMood = 1;
        } else if (mood === "Average") {
            numberByMood = 2;
        } else if (mood === "Tired") {
            numberByMood = 3;
        } else if (mood === "Productive") {
            numberByMood = 4;
        } else if (mood === "Sad") {
            numberByMood = 5;
        } else if (mood === "Unsure") {
            numberByMood = 6;
        } else if (mood === "Joyful") {
            numberByMood = 7;
        } 

        return numberByMood;
    }

    function generateData(count, mood) {
        let dateAsNumber = 1;
        let series = [];


        while (dateAsNumber < count) {
            const x = (dateAsNumber).toString();

            let numberByMood = 0;

            // numberByMood needs to stay 0 if this date is not the mood we're looking for
            let thisDate = moodData.find(data => data.date == dateAsNumber);

            if (thisDate && thisDate.mood == mood) {
                numberByMood = getNumberByMood(mood);
            }

            series.push({
                x: x,
                y: numberByMood
            });
            dateAsNumber++;
        }
        return series;
    }

    const series = [{
        name: 'Angry',
        data: generateData(32, 'Angry')
    },
    {
        name: 'Average',
        data: generateData(32, 'Average')
    },
    {
        name: 'Tired',
        data: generateData(32, 'Tired')
    },
    {
        name: 'Productive',
        data: generateData(32, 'Productive')
    },
    {
        name: 'Sad',
        data: generateData(32, 'Sad')
    },
    {
        name: 'Unsure',
        data: generateData(32, 'Unsure')
    },
    {
        name: 'Joyful',
        data: generateData(32, 'Joyful')
    }
    ];

    const options = {
        chart: {
            height: 350,
            type: 'heatmap',
            foreColor: '#251605'
        },
        grid: {
            show: true
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: 1,
                        to: 1,
                        name: 'Angry',
                        color: '#AD343E'
                    },
                    {
                        from: 2,
                        to: 2,
                        name: 'Average',
                        color: '#F2AF29'
                    },
                    {
                        from: 3,
                        to: 3,
                        name: 'Tired',
                        color: '#FFEE93'
                    },
                    {
                        from: 4,
                        to: 4,
                        name: 'Productive',
                        color: '#629677'
                    },
                    {
                        from: 5,
                        to: 5,
                        name: 'Sad',
                        color: '#ABDAE1'
                    },
                    {
                        from: 6,
                        to: 6,
                        name: 'Unsure',
                        color: '#5E548E'
                    },
                    {
                        from: 7,
                        to: 7,
                        name: 'Joyful',
                        color: '#E0B1CB'
                    }

                    ]
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 1
        },
        title: {
            text: 'Your progress this month',
            align: 'center',
            style: {
                fontSize:  '18px',
            }
        }, 
        legend: {
            fontSize: '18px',
            fontFamily: 'Montserrat',
        },
        xaxis: {
            labels: {
                style: {
                    fontFamily: 'Montserrat',
                    fontSize: '15px'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontFamily: 'Montserrat',
                    fontSize: '15px'
                }
            }
        }
    }

    return (
        <div id="chart" className={styles.chart}>
            <ReactApexChart options={options} series={series} type="heatmap" height={350} />
        </div>
    );
}


export default Chart;
