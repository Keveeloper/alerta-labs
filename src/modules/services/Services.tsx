import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useSpacialObjectStore from '../../store/spacial-object-store/SpacialObjectsStore';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { spacialItem } from '../../store/spacial-object-store/types/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Services = () => {

    const navigate = useNavigate();
    const { spacialObject } = useSpacialObjectStore();
    const [ showItemDetail, setShowItemDetail ] = useState<boolean>(false);
    const [ selectedItem, setSelectedItem ] = useState<spacialItem | null>(null);
    const [ activeIndex, setActiveIndex ] = useState<number>(0);

    console.log(spacialObject.height);
    
    const goBack = () => {
        if (showItemDetail) {
            setShowItemDetail(false);
        }else{
            navigate('/');
        }
    }

    const gotToItemDetail = (item: spacialItem) => {
        setShowItemDetail(true);
        setSelectedItem(item);
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
                        {showItemDetail ? 
                            <div className='relative w-full h-full p-8'>
                                <h2 
                                    className='w-[80%] text-white text-6xl z-1'
                                    style={{fontFamily: 'Bebas Neue'}}
                                >
                                    {selectedItem?.title}
                                </h2>
                                <div className='z-1' dangerouslySetInnerHTML={{ __html: selectedItem?.description ?? '' }} />
                                <img width={300} className="absolute bottom-0 right-0 z-[-1]" src={selectedItem?.image} alt="" />
                            </div>    
                        :
                            <Swiper
                                className='alerta-labs-swiper w-full h-full cursor-pointer'
                                navigation={true} 
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                loop
                                initialSlide={activeIndex}
                                onSlideChange={(swiper) => {
                                    setActiveIndex(swiper.activeIndex);
                                }}
                            >
                                {spacialObject.item.map((item, index) => (
                                    <SwiperSlide 
                                        className='w-full h-full'
                                        onClick={() => gotToItemDetail(item)}
                                    >
                                        <div className='w-full h-[70%] flex justify-center items-center'>
                                            {/* <img className='h-[100%]' src={item.image} alt=""/> */}
                                            <LazyLoadImage
                                                wrapperClassName='service-main-image h-full justify-center items-center'
                                                className='h-[90%]'
                                                src={item.image}
                                                alt="Services alerta labs item image"
                                                effect="blur" // efecto visual mientras carga
                                            />
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
                        }
                    </div>
                </div>
                <div className="w-[65%] h-full flex justify-center items-center">
                    {/* <img className='w-[70%]' src={spacialObject.object_image} alt=""/> */}
                    <div className={`w-full`} style={{height: spacialObject.height}}>
                        <LazyLoadImage
                            wrapperClassName={`service-main-image w-full h-full justify-center items-center`}
                            className={`h-full`}
                            src={spacialObject.object_image}
                            alt="services main alerta labs image"
                            effect="blur"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Services;