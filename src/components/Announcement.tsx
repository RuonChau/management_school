import { dataAnnouncements } from "@/constant/dataAnnouncements";
import TitleComponent from "./TitleComponent";


export const colors = ['bg-lamaSkyLight', 'bg-lamaPurpleLight', 'bg-lamaYellowLight'];


const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <TitleComponent title='Announcements' subTitle="View All" key={'Announcements'} />
      <div className="flex flex-col gap-4 mt-4">

        {dataAnnouncements.map((e,i) => (
          <div key={e.id} className={`${colors[i % colors.length]} rounded-md p-4`}>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-800 py-2">{e.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">{e.date}</span>
            </div>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;