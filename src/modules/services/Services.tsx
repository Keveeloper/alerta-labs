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
        setSelectedItem(null);
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
            <div className="w-full h-[80%] flex justify-between items-center">
                <div className={`${!showItemDetail ? 'w-[30%]' : 'w-[35%]'} h-[95%]`}>
                    <div className="w-full h-[15%] flex justify-between items-center text-2xl font-['Space_Mono'] text-white">
                        <div className="w-[80%] flex overflow-auto whitespace-nowrap hide-scrollbar cursor-e-resize">
                            <p className="shrink-0">{spacialObject.title}</p>
                            {/* {selectedItem && <p className="mx-5 shrink-0">// {selectedItem?.title}</p>} */}
                        </div>
                        <button 
                            className="w-[20%] p-5 border rounded-2xl cursor-pointer border-white"
                            onClick={goBack}
                        >
                            {'<<'}
                        </button>
                    </div>
                    <div className={`relative w-full h-[85%] border border-white rounded-2xl`}>
                        {showItemDetail ? 
                            <div className='relative p-5 w-full h-full  flex flex-col justify-around'>
                                <h2 
                                    className='w-[80%] text-white text-6xl z-1'
                                    style={{fontFamily: 'Bebas Neue'}}
                                >
                                    {selectedItem?.title}
                                </h2>
                                <div className='mb-auto z-1' dangerouslySetInnerHTML={{ __html: selectedItem?.description ?? '' }} />
                                <img width={300} className={`${selectedItem?.isColumn ? 'relative m-auto' : 'absolute'} bottom-0 right-0 z-[-1]`} src={selectedItem?.image} alt="" />
                            </div>
                        :
                            <>
                                <div id="swiper-prev" className='absolute bottom-[12%] left-[5%] font-[Space_Mono] text-white text-4xl z-2 cursor-pointer'>
                                    {'<'}
                                </div>
                                <div id="swiper-next" className='absolute bottom-[12%] right-[5%] font-[Space_Mono] text-white text-4xl z-2 cursor-pointer'>
                                    {'>'}
                                </div>
                                <Swiper
                                    className='alerta-labs-swiper w-full h-full cursor-pointer'
                                    navigation={{
                                        prevEl: '#swiper-prev',
                                        nextEl: '#swiper-next',
                                    }}
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
                                            key={index}
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
                                            <hr className='mx-16 text-white'/>
                                            <div className='px-5 w-full h-[30%] flex justify-center items-center'>
                                                <h2 
                                                    className={`w-[80%] text-white leading-normal`}
                                                    style={{fontFamily: 'Bebas Neue', fontSize: item.fontSize, lineHeight: 0.8}}
                                                >
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
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