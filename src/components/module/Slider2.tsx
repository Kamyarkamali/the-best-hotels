import { Swiper, SwiperSlide } from 'swiper/react';

import {Link} from "react-router-dom"

import 'swiper/css';

import momtazVilla from '../villas';
import { MOMTAZ } from '../villas';

export default () => {
  return (
    <div className='bg-red-500'>
    <div className='mt-8 flex flex-col items-center'>
        <h1 className='text-xl mt-5'>اقامت گاه های ممتاز از دید شما</h1>
        <p className='font-bold mt-5 text-white'>اقامتگاه هایی خاص برای افراد خاص</p>
    </div>
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
    }}
    >
        <div>
            {momtazVilla.map((item:MOMTAZ,index)=>(
      <SwiperSlide key={index}>
        <div  className='mt-8 border-2 hover:scale-105 duration-300 flex justify-center p-3 bg-slate-100 rounded-lg'>
            <Link to={`/villa/${item.id}`}>
                <img src={item.image} className='w-[350px] h-[200px] relative rounded-lg object-cover'/>
            </Link>
                <p className='absolute text-white text-xl bottom-[3rem] text-center border-2 rounded-md p-1 bg-gray-400'>{item.title}</p>
                {/* <p className='absolute text-white text-xl bottom-[10px] text-center  rounded-md p-1 '>{item.count} عدد ثبت شده است</p> */}
        </div>
            </SwiperSlide>
            ))}
        </div>
      ...
    </Swiper>
            </div>
  );
};