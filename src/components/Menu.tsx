import { wh_menu } from "@/constant";
import { menuItem } from "@/constant/menuItem";
import Image from "next/image";
import Link from "next/link";


const Menu = () => {
  return (
    <div className="text-sm ">
      {menuItem.map(i =>(
        <div className="flex flex-col gap-1 " key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
          {i.items.map(item =>(
            <Link href={item.href} key={item.lable}
              className=" text-gray-500 py-2 flex items-center justify-center lg:justify-start gap-4 " >
              <Image src={item.icon} alt={item.lable} width={wh_menu} height={wh_menu}/>
              <span className="hidden lg:block">{item.lable}</span>
            </Link>
          ))}
        </div>        
      ))}
    </div>
  );
}

export default Menu;