'use client'
import { wh_avatar } from "@/constant";
import { dataCountChart } from "@/constant/dataCountChart";
import { male_female } from "@/constant/icons";
import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import TitleComponent from "./TitleComponent";


const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <TitleComponent key={'Students'} title="Students"/>

      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart accessibilityLayer cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={40} data={dataCountChart} >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src={male_female} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        alt="maleFemale" width={wh_avatar} height={wh_avatar}/>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
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
      </div>
    </div>
  );
}

export default CountChart;