// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import deskLaranja from '../assets/images/banner-desk-laranja.webp'
import deskVerde from '../assets/images/banner-desk-verde.webp'

import mobLaranja from '../assets/images/banner-mobile-laranja.webp'
import mobVerde from '../assets/images/banner-mobile-verde.webp'

import '../styles/AnimationTextBanner.css'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function BannerProduct(){

    return (
        <>
            <section className="hidden lg:block">
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className=" w-full h-screen"
                    
                >
                    <SwiperSlide style={{ backgroundImage: `url(${deskVerde})` }} className="bg-cover bg-center">
                        <div  className="w-full lg:w-1/2 h-full  flex items-center justify-center">
                            <div className="lg:w-[75%] flex flex-col items-center p-5 rounded backdrop-blur-sm bg-">
                                <h1 className="text-[60px] text-white text-center animationText3D">Nome do Produto</h1>
                                <p className=" w-[90%] lg:w-2/3 text-white">
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

                    <SwiperSlide style={{ backgroundImage: `url(${deskLaranja})` }} className="bg-cover bg-center">
                        <div  className="w-full lg:w-1/2 h-full  flex items-center justify-center">
                            <div className="lg:w-[75%] flex flex-col items-center p-5 rounded backdrop-blur-sm">
                                <h1 className="text-[60px] text-white text-center animationText3D">Nome do Produto</h1>
                                <p className="w-[90%] lg:w-2/3 text-white">
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
                </Swiper>
            </section>

            <section className="lg:hidden">
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className=" w-full h-screen"
                    
                >
                    <SwiperSlide style={{ backgroundImage: `url(${mobVerde})` }} className="bg-cover bg-center">
                        <div  className="w-full lg:w-1/2 h-full  flex items-center justify-center">
                            <div className="lg:w-[75%] flex flex-col items-center p-5 rounded backdrop-blur-sm bg-">
                                <h1 className="text-[60px] text-white text-center animationText3D">Nome do Produto</h1>
                                <p className=" w-[90%] lg:w-2/3 text-white">
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

                    <SwiperSlide style={{ backgroundImage: `url(${mobLaranja})` }} className="bg-cover bg-center">
                        <div  className="w-full lg:w-1/2 h-full  flex items-center justify-center">
                            <div className="lg:w-[75%] flex flex-col items-center p-5 rounded backdrop-blur-sm">
                                <h1 className="text-[60px] text-white text-center animationText3D">Nome do Produto</h1>
                                <p className="w-[90%] lg:w-2/3 text-white">
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
                </Swiper>
            </section>
        </>
    )
}