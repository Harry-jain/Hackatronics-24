import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxMix,
  RxFramerLogo,
} from "react-icons/rx";
import { FaGears } from "react-icons/fa6";
// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Harsh Rajput",
    description: "General secretary.",
  },
  {
    icon: <RxPencil2 />,
    title: "Uday Ambala",
    description: "Joint-Genral secretary.",
  },
  {
    icon: <FaGears />,
    title: "Harsh Jain",
    description: "Technical Head.",
    menber: "Harsh Harsh Harsh Harsh",
  },
  {
    icon: <RxReader />,
    title: "Mannan Naidu",
    description: "Documentation Head.",
    menber: "Harsh Harsh Harsh Harsh",
  },
  {
    icon: <RxFramerLogo />,
    title: "Aman Kumar",
    description: "Event Head.",
    menber: "Harsh Harsh Harsh Harsh",
  },
  {
    icon: <RxRocket />,
    title: "Ganesh Jangal",
    description: "Publicity Head.",
    menber: "Harsh Harsh Harsh Harsh",
  },
  {
    icon: <RxMix />,
    title: "Omkar Daggula",
    description: "Creatives Head.",
    menber: "Harsh Harsh Harsh Harsh",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" h-[200px] xl:h-[300px] xl:bg-[rgba(81,47,123,0.5)] bg-[rgba(65,47,123)]  rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer text-white xl:hover:bg-[rgb(89,68,157)] transition-all duration-500 ">
              {/**/}
              <div className="text-accent text-4xl">{item.icon}</div>
              {/**/}
              <div className="text-white">
                <div className="text-2xl">{item.title}</div>
                <p className=" font-bold text-accent ">{item.description}</p>
                <p>{item.menber}</p>
              </div>
              <div className=" text-white text-3xl">
                <RxArrowTopRight />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
