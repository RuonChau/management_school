import { wh_search } from "@/constant";
import { more_horizontal_black } from "@/constant/icons";
import Image from "next/image";

interface IProps {
  title: string
  subTitle?: string
}

const TitleComponent = ({title, subTitle}:IProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">{title}</h1>
      {
        subTitle ? 
          <p className="text-sm text-gray-400">{subTitle}</p>
        : <Image src={more_horizontal_black} alt="moreDark" width={wh_search} height={wh_search}/>
      }
    </div>
  );
}

export default TitleComponent;