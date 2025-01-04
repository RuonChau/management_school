

import Image from 'next/image';
import more from '../../public/icons/more-horizontal.svg'
import { wh_menu } from '@/constant';

interface UserCards {
  type: string
  date: string
  quantity: number
}

const UserCard = ({type, date, quantity}:UserCards) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>{date}</span>
        <Image src={more} alt='more' width={wh_menu} height={wh_menu}/>
      </div>
      <h1 className='text-2xl font-semibold my-4'>{quantity}</h1>
      <h2 className='capitalize text-sm font-medium text-gray-500'>{type}</h2>
    </div>
  );
}

export default UserCard;