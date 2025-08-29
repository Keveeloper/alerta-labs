import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useSpacialObjectStore from '../../store/spacial-object-store/SpacialObjectsStore';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { spacialItem } from '../../store/spacial-object-store/types/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getImageUrlMobile } from '../../shared/image-url/image-urls-mobile';
import { useIsMobile } from '../shared/hooks/useIsMobile';
import { spacialObjectsData } from '../home/spacial-objects/spacial-objects-data';

const Services = () => {

    const navigate = useNavigate();
    const { spacialObjectKey } = useSpacialObjectStore();
    const isMobile = useIsMobile();
    const spacialObject: any = spacialObjectsData(isMobile)[spacialObjectKey];
    // const { spacialObject } = useSpacialObjectStore();
    const [ showItemDetail, setShowItemDetail ] = useState<boolean>(false);
    const [ selectedItem, setSelectedItem ] = useState<spacialItem | null>(null);
    const [ activeIndex, setActiveIndex ] = useState<number>(0);
    
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
            <LazyLoadImage
                wrapperClassName={`absolute service-main-image w-full h-full justify-center items-center mix-blend-screen
                                   md:flex`}
                className={`h-full w-full object-cover
                            md:hidden`}
                src={getImageUrlMobile('vialactea_mobile')}
                alt="services main alerta labs image"
                effect="blur"
            />
            <div className="w-full h-[80%] flex justify-between items-center">
                {/* <div className={`${!showItemDetail ? 'w-[30%]' : 'w-[35%]'} h-[95%]`}> */}
                <div className={`w-full h-[95%] z-1
                                md:w-[40%]`}>
                    <div className="hidden w-full h-[15%] justify-between items-center text-2xl font-['Space_Mono'] text-white
                                    md:flex">
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
                    <div className={`relative w-full h-[85%] border border-white rounded-2xl bg-black/30 overflow-hidden`}>
                        {showItemDetail ? 
                            <div className='relative p-5 w-full h-full  flex flex-col justify-around backdrop-blur-sm'>
                                <h2 
                                    className='mb-15 w-[80%] text-white text-5xl z-1
                                               md:mb-5 md:text-6xl'
                                    style={{fontFamily: 'Bebas Neue'}}
                                >
                                    {selectedItem?.title}
                                </h2>
                                <div className='custom-scrollbar mb-auto overflow-y-scroll z-1' dangerouslySetInnerHTML={{ __html: selectedItem?.description ?? '' }} />
                                <img 
                                    className={`w-[120px] ${selectedItem?.isColumn ? 'relative m-auto' : 'absolute'} top-5 right-0 z-[-1]
                                                md:bottom-0 md:right-0 md:top-auto`}
                                    src={selectedItem?.image} 
                                    alt="" 
                                />
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
                                    className='alerta-labs-swiper w-full h-full cursor-pointer backdrop-blur-sm'
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
                                    {spacialObject.item.map((item, index) => {
                                        console.log('item.fontSizeMobile: ', item.fontSizeMobile);
                                        
                                        return(
                                        <SwiperSlide 
                                            key={index}
                                            className='w-full h-full'
                                            onClick={() => gotToItemDetail(item)}
                                        >
                                            <div className='w-full h-[70%] flex justify-center items-center'>
                                                {/* <img className='h-[100%]' src={item.image} alt=""/> */}
                                                <LazyLoadImage
                                                    wrapperClassName='service-main-image h-full justify-center items-center'
                                                    className='h-[90%] object-contain'
                                                    src={item.image}
                                                    alt="Services alerta labs item image"
                                                    effect="blur" // efecto visual mientras carga
                                                />
                                            </div>
                                            <hr className='mx-16 text-white'/>
                                            <div className='px-5 w-full h-[30%] flex justify-center items-center'>
                                                <h2 
                                                    className={`hidden w-[80%] text-white leading-normal
                                                               md:block`}
                                                    style={{fontFamily: 'Bebas Neue', fontSize: item.fontSize, lineHeight: 0.8}}
                                                >
                                                    {item.title}
                                                </h2>
                                                
                                                
                                                <h2 
                                                    className={`w-[80%] text-white leading-normal
                                                               md:hidden`}
                                                    style={{fontFamily: 'Bebas Neue', fontSize: item.fontSizeMobile, lineHeight: 0.8}}
                                                >
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </SwiperSlide>
                                    )})}
                                </Swiper>
                            </>
                        }
                    </div>
                </div>
                <div className="absolute h-1/2 flex justify-center items-center z-0
                                md:relative md:w-[60%] md:h-full md:flex md:justify-center md:items-center">
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