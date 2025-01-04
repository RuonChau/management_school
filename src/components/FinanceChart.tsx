'use client';

import { CartesianGrid, Legend, LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import TitleComponent from "./TitleComponent";
import { dataFinance } from "@/constant/dataFinance";

const FinanceChart = () => {

  
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <TitleComponent title="Finance" key={'Finance'}/>

      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%" className={'py-6'}>
        <LineChart
          width={500}
          height={300}
          data={dataFinance}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 7,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false} tickMargin={20} />
          <YAxis axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false} tickMargin={10} />
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingBottom: '25px', paddingTop:"10px"}} />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FinanceChart;