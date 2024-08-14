import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CustomSwiper = ({ datas }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        640: { // For small devices (e.g., tablets)
          slidesPerView: 2,
        },
        768: { // For medium devices (e.g., tablets in landscape mode)
          slidesPerView: 2,
        },
        1024: { // For large devices (e.g., desktops)
          slidesPerView: 3,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
   className='w-full' >
      {datas && datas.map((data, i) => (
        <SwiperSlide key={i} className="relative">
        <img src={data} alt={`Slide ${i + 1}`} className="w-full h-[300px] md:h-[400px] object-cover" />
        <button className="absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-Amal-lightGreen px-7 py-2 rounded opacity-80 hover:bg-Amal-green">
          View
        </button>
      </SwiperSlide>
      
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
