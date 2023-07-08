import img from "../assets/kar26.jpg"
import img2 from "../assets/kar27.jpg"
import img3 from "../assets/kar28.jpg"
import img4 from "../assets/kar29.jpg"
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,  A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{loop: true}}
      className="rounded-3xl "
   
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={img} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
   
      
    </Swiper>
  );
};


