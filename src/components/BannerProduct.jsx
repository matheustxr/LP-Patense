// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/AnimationTextBanner.css'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function BannerProduct(){

    return (
        <section>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[ Pagination, Navigation]}/*Autoplay*/
                className="bg-purple-500 w-full h-[600px]"
            >
                <SwiperSlide>
                    <div  className="w-full lg:w-1/2 h-full  flex items-center">
                        <div className=" flex flex-col items-center p-5 rounded backdrop-blur-sm">
                            <h1 className="text-[60px] text-white text-center animationText3D">Nome do Produto</h1>
                            <p className="w-[80%] lg:w-1/2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, facere fuga. Animi sapiente architecto excepturi facilis assumenda? Magni impedit sed nesciunt vitae autem harum esse eaque, laudantium accusantium quis veniam!
                            </p>
                            <div className="p-[3px] w-max mt-8 bg-gradient-to-tl from-green-600 to-yellow-500 rounded-2xl">
                                <button type="button" className="bg-white  py-5 px-8 rounded-2xl hover:bg-gradient-to-tl from-green-600 to-yellow-500 hover:text-white font-bold transition-all duration-500" >
                                    Learn About
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-1/2 h-full flex flex-col items-center justify-center">
                        <h1 className="text-[60px] text-white animationText3D">Nome do Produto</h1>
                        <p className="w-1/2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, facere fuga. Animi sapiente architecto excepturi facilis assumenda? Magni impedit sed nesciunt vitae autem harum esse eaque, laudantium accusantium quis veniam!
                        </p>
                        <div className="p-[2px] mt-8 bg-gradient-to-tl from-green-600 to-yellow-500 rounded-2xl">
                            <button type="button" className="bg-white  py-5 px-8 rounded-2xl hover:bg-gradient-to-tl from-green-600 to-yellow-500 hover:text-white font-bold transition-all duration-500" >
                                Learn About
                            </button>
                        </div>
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}