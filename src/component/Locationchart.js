import React from 'react'
import {Bar} from 'react-chartjs-2'
import 'chart.js/auto';
const data = {
    labels: ['Applications', 'New', 'In Review','Withdrawn', 'Rejected', 'Unassigned'],
    datasets: [{
      data: [65, 20, 66, 25, 30, 20],
      backgroundColor: '#7448CA',
    },
]
};
function Locationchart() {
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

export default Locationchart
