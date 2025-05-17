import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useSpacialObjectStore from '../../store/spacial-object-store/SpacialObjectsStore';
import { useNavigate } from 'react-router';

const Services = () => {

    const navigate = useNavigate();
    const { spacialObject } = useSpacialObjectStore();

    const goBack = () => {
        navigate('/');
    }

    return (
        <div className="px-[var(--horizontal-padding)] w-full h-screen flex justify-center items-center">
            <div className="w-full h-[80%] flex">
                <div className="w-[35%] h-full">
                    <div className="w-full h-[15%] flex justify-between items-center text-2xl text-white text-[Space Mono]">
                        <p>{spacialObject.title}</p>
                        <button 
                            className="p-5 border rounded-2xl cursor-pointer border-white"
                            onClick={goBack}
                        >
                            {'<<'}
                        </button>
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
                            {spacialObject.item.map((item, index) => (
                                <SwiperSlide className='w-full h-full'>
                                    <div className='w-full h-[70%] flex justify-center items-center'>
                                        <img src={item.image} alt="" loading='lazy'/>
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
                        </Swiper>
                    </div>
                </div>
                <div className="w-[65%] h-full flex justify-center items-center">
                    <img className='w-[70%]' src={spacialObject.object_image} alt="" loading='lazy'/>
                </div>
            </div>
        </div>
    );

}

export default Services;