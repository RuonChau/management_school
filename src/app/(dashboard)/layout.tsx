import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/image/logo_lavin.png"
import Menu from "@/components/Menu";
import { wh_logo } from "@/constant";
import { Navbar } from "@/components/Navbar";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex ">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 h-screen sticky ">
        <Link href={'/'} className="flex items-center justify-center lg:justify-start gap-2">
          <Image src={logo} alt="logo" width={wh_logo} height={wh_logo}/>
          <span className="hidden lg:block">Lavin</span>
        </Link>
        <Menu/>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] dark:bg-slate-900 overflow-auto">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}