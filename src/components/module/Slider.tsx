import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import villa from '../../data';
import { VILLAS } from '../../data';

export default () => {
  return (
    <Swiper
    slidesPerView={2}
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
            {villa.map((item:VILLAS,index)=>(
      <SwiperSlide key={index}>
        <div className='mt-8 border-2 hover:scale-105 duration-300 flex justify-center p-3 bg-slate-100 rounded-lg'>
                <img src={item.image} className='w-[350px] h-[200px] relative rounded-lg object-cover'/>
                <p className='absolute text-white text-xl bottom-[3rem] text-center border-2 rounded-md p-1 bg-gray-400'>{item.title}</p>
                <p className='absolute text-white text-xl bottom-[10px] text-center  rounded-md p-1 '>{item.count} عدد ثبت شده است</p>
        </div>
            </SwiperSlide>
            ))}
        </div>
      
      ...
    </Swiper>
  );
};