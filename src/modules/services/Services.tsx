import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useSpacialObjectStore from '../../store/spacial-object-store/SpacialObjectsStore';

const UXxplosion = [
    {
        image: "https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/4450f5f2-5941-409d-f4f8-6e38dee44800/public",
        title: "UX / UI",
    },
    {
        image: "https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/402caacf-480f-4e5c-6e26-e87ad05e5b00/public",
        title: "Assets",
    },
]
const Services = () => {

    const { spacialObject } = useSpacialObjectStore();

    return (
        <div className="px-[var(--horizontal-padding)] w-full h-screen flex justify-center items-center">
            <div className="w-full h-[80%] flex">
                <div className="w-[35%] h-full">
                    <div className="w-full h-[15%] flex justify-between items-center text-2xl text-white text-[Space Mono]">
                        <p>{spacialObject.title}</p>
                        <button className="p-5 border rounded-2xl border-white">{'<<'}</button>
                    </div>
                    <div className="w-full h-[85%] border border-white rounded-2xl">
                        <Swiper
                            className='alerta-labs-swiper w-full h-full'
                            navigation={true} 
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop
                        >
                            {/* {UXxplosion.map((item, index) => ( */}
                            {spacialObject.item.map((item, index) => (
                                <SwiperSlide className='w-full h-full'>
                                    <div className='w-full h-[70%] flex justify-center items-center'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <hr className='mx-10 text-white'/>
                                    <div className='w-full h-[30%] flex justify-center items-center'>
                                        <h2 
                                            className='w-[80%] text-white text-6xl'
                                            style={{fontFamily: 'Bebas Neue'}}
                                        >
                                            {item.title}
                                        </h2>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* <SwiperSlide className='w-full h-full'>Slide 2</SwiperSlide>
                            <SwiperSlide className='w-full h-full'>Slide 3</SwiperSlide>
                            <SwiperSlide className='w-full h-full'>Slide 4</SwiperSlide> */}
                        </Swiper>
                    </div>
                </div>
                <div className="w-[65%] h-full flex justify-center items-center">
                    <img className='w-[70%]' src={spacialObject.object_image} alt="" />
                </div>
            </div>
        </div>
    );

}

export default Services;