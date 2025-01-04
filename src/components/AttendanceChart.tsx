'use client';
import { dataAttendanceChart } from "@/constant/dataAttendanceChart";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import TitleComponent from "./TitleComponent";

const AttendanceChart = () => {


  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <TitleComponent key={'Attendance'} title="Attendance"/>

      {/* CHART */}
      <ResponsiveContainer width="100%" height="95%">
        <BarChart
          width={500}
          height={300}
          data={dataAttendanceChart}
          barSize={30}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}  />
          <Tooltip contentStyle={{borderRadius:'15px', borderColor:'lightgray'}} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingBottom: '40px', paddingTop:"20px"}} />
          {/* Tùy chỉnh thanh bar với shape */}
          <Bar
            dataKey="present"
            fill= '#FAE27C'
            radius={[20, 20, 0, 0]}
            legendType="circle"
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            // shape={<Rectangle fill="gold" stroke="purple" />}
            radius={[20, 20, 0, 0]}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>

      {/* BOTTOM */}
      {/* <div className="flex justify-center gap-16">
        <div className="flex flex-col items-center gap-y-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full "/>
          <h1 className="font-bold">1,234</h1>
          <h1 className="text-xs text-gray-300 ">Boys (55%)</h1>
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full"/>
          <h1 className="font-bold">1,234</h1>
          <h1 className="text-xs text-gray-300 ">Girls (55%)</h1>
        </div>
      </div> */}
    </div>
  );
}

export default AttendanceChart;