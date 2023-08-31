const csv = document.getElementById('csv').innerText;

Dashboards.board('container', {
    dataPool: {
        connectors: [{
            id: 'Population',
            type: 'CSV',
            options: {
                csv,
                firstRowAsNames: true
            }
        }]
    },
    gui: {
        layouts: [{
            rows: [{
                cells: [{
                    id: 'dashboard-col-0',
                    responsive: {
                        small: {
                            width: '100%'
                        }
                    }
                }, {
                    id: 'dashboard-col-1',
                    responsive: {
                        small: {
                            width: '100%'
                        }

                    }
                }, {
                    id: 'dashboard-col-2',
                    responsive: {
                        small: {
                            width: '100%'
                        }
                    }
                }]
            }, {
                cells: [{
                    id: 'dashboard-col-3'
                }]
            }]
        }]
    },
    components: [{
        title: {
            text: 'Population'
        },
        sync: {
            extremes: true
        },
        connector: {
            id: 'Population'
        },
        cell: 'dashboard-col-0',
        type: 'Highcharts',
        columnAssignment: {
            City: 'x',
            'Population (mln)': 'y'
        },
        chartOptions: {
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            chart: {
                type: 'bar',
                zoomType: 'x'
            },
            plotOptions: {
                series: {
                    colorByPoint: true
                }
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '<b>{point.y:.2f}</b> mln'
            },
            legend: {
                enabled: false
            }
        }
    },
    {
        cell: 'dashboard-col-1',
        title: {
            text: 'Metropolitan Area'
        },
        sync: {
            extremes: true
        },
        connector: {
            id: 'Population'
        },
        type: 'Highcharts',
        columnAssignment: {
            City: 'x',
            'Metro Area (km2)': 'y'
        },
        chartOptions: {
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            chart: {
                type: 'bar',
                zoomType: 'x'
            },
            plotOptions: {
                series: {
                    colorByPoint: true
                }
            },
            tooltip: {
                pointFormat: '<b>{point.y}</b> km2'
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            }
        }
    },
    {
        cell: 'dashboard-col-2',
        connector: {
            id: 'Population'
        },
        title: {
            text: 'Highest Elevation'
        },
        sync: {
            extremes: true
        },
        type: 'Highcharts',
        columnAssignment: {
            City: 'x',
            'Highest Elevation (m)': 'y'
        },
        chartOptions: {
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            chart: {
                type: 'bar',
                zoomType: 'x'
            },
            plotOptions: {
                series: {
                    colorByPoint: true
                }
            },
            tooltip: {
                pointFormat: '<b>{point.y}</b> m'
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            }
        }
    },
    {
        cell: 'dashboard-col-3',
        connector: {
            id: 'Population'
        },
        type: 'DataGrid',
        sync: {
            extremes: true
        },
        dataGridOptions: {
            editable: false
        }
    }]
}, true);
