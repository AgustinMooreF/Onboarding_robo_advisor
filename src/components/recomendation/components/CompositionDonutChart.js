import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);



export const CompositionDonutChart = (props) => {
    const propsOptions = props.options || null;
    const propsData = props.data || [];
    const propsLabels = props.labels || [];
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Donde estara invertido mi dinero',
          },
        },
      };
    const data = {
        labels: ['Chile', 'Europa', 'EEUU'],
        datasets: [
          {
            label: '# of Votes',
            data: [1, 19, 12],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 0,
          },
        ],
      };
    return(
        <Box sx={{height:"100%"}}>
        {
          propsData.length === 0 ?
          <Doughnut  data={data}  options={options}/>
          : <Doughnut data={propsData} />
        }
        </Box>
    ); 
}
