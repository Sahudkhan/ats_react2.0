import React from 'react'
import {Bar} from 'react-chartjs-2'
import 'chart.js/auto';
const data = {
    labels: ['Applications', 'New', 'In Review','Withdrawn', 'Rejected', 'Unassigned'],
    datasets: [{
      data: [65, 20, 66, 25, 30, 20],
      backgroundColor: '#335AFF',
    },
]
};

function Sourcechart() {
    return (
        <div>
           <Bar
data={data}
width={500}
height={200}
options={{
    maintainAspectRatio: false,
    legend:false,

    
}}
/>
        </div>
    )
}

export default Sourcechart
