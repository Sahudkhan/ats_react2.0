import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import 'chart.js/auto';
const data = {
    labels: ['New', 'Interview', 'In Progress', 'Onboarded', 'Selected', 'Rejected', 'Withdrawal'],
    datasets: [{
        backgroundColor: ['#7448CA','#7E57C2','#9575CD','#B39DDB', '#D1C4E9', '#B39DDB', '#D1C4E9'],
        borderWidth: 0,
        data: [50, 15, 20, 25, 15, 20, 25],
    },
    
  
]

};
function Requisitionchart() {
    return (
        <div>
           <Doughnut
data={data}
width={500}
height={220}
options={{
    maintainAspectRatio: false,
    legend: {
        display:true,   
        position: 'right',   
        labels: {
            fontSize:13,
            }
}
}
}
/>
        </div>
    )
}

export default Requisitionchart
