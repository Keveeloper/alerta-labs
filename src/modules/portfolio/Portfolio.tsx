// 1. Importa los componentes de Swiper para React
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. Importa los módulos de Swiper que quieras usar (opcional)
// ¡Asegúrate de importar Mousewheel aquí!
import { Pagination, Mousewheel } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// 3. Importa los estilos base de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Proven from './components/proven/Proven.js';
import Contact from '../contact/Contact.js';
import SwiperController from './components/swiper-controller/SwiperController.js';
import SwiperCards from './components/swiper-cards/SwiperCards.js';
import SwiperPosters from './components/swiper-posters/SwiperPosters.js';
import useSpacialStore from '../../store/SpacialStore.js';

const Portfolio = () => {
  const { textHoovered } = useSpacialStore();
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span id="internal-pagination-${index}" class="${className}"><div class="internal-pagination"></div></span>`;
    },
  };

  return (
      <section className='w-full h-screen flex justify-center items-center'>
        <Swiper
          loop
          direction={'vertical'}
          pagination={pagination}
          modules={[Pagination, Mousewheel]}
          mousewheel={{
            releaseOnEdges: true,
          }}
          className="swiper-portfolio w-full h-full"
        >
          <SwiperSlide
            className='w-full h-full justify-start items-center'
            style={{display: 'flex'}}
          >
            <div className='absolute w-[70%] top-25 left-[var(--horizontal-padding)]
                            xl:w-auto'>
              <h1 
                className='text-2xl leading-[0.8]
                           lg:text-4xl lg:leading-[0.5]
                           xl:text-5xl
                           2xl:text-6xl'
                style={{ fontFamily: "Bebas Neue" }}
              >
                {'Every mission starts with an idea'.toUpperCase()}
              </h1>
              <p 
                className='mb-2 font-[Space_Mono] leading-[1] 
                           xl:text-[1.32vw] xl:leading-[1.5]
                           2xl:text-2xl'
              >
                {'These are the ones we’ve brought to life.'.toUpperCase()}
              </p>
              <p 
                className='hidden 
                           xl:block xl:text-2xl xl:leading-[0.5] xl:text-[#00F0FF] xl:font-light'
                style={{ fontFamily: "Bebas Neue", fontWeight: '100' }}
              >{'Scroll DOWN to see mission control'.toUpperCase()}</p>
            </div>
            <SwiperPosters/>
            <div className='absolute w-[90%] flex flex-col items-center bottom-25 left-[var(--horizontal-padding)]
                            md:absolute md:block md:w-[70%] xl:w-auto'>
              <p 
                className='mb-2 font-[Space_Mono] leading-[1] text-base 
                           xl:text-[1.32vw] xl:leading-[1.5]
                           2xl:text-2xl'
              >
                {'explore our'.toUpperCase()}
              </p>
              <h2
                className='text-2xl leading-[0.8]
                           lg:text-4xl lg:leading-[0.5]
                           xl:text-5xl
                           2xl:text-6xl'
                style={{ fontFamily: "Bebas Neue" }}
              >
                {'completed expeditions'.toUpperCase()}
              </h2>
              <p className="w-[100%] text-base text-white text-center font-[Exan]
                            md:hidden">
                  <span className="text-[var(--cyan)]">{textHoovered.split(']')[0]}{']'}</span>
                  {textHoovered.split(']')[1]}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className='w-full items-center flex-col-reverse justify-end
                       2xl:pl-[30%]
                       md:h-full md:pl-[20%] md:flex-row md:justify-start'
            style={{display: 'flex'}}
          >  
            <LazyLoadImage
                wrapperClassName='service-main-image absolute left-[-5%] h-[80%] justify-center items-center
                                  2xl:h-[90%] 2xl:left-20'
                className='hidden h-[100%]
                           md:block'
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/49e4319a-a37a-4389-2a55-1b76167be000/public"
                alt="Astronaut portfolio item image"
                effect="blur" // efecto visual mientras carga
            />
            <SwiperCards/>
            <div className='block mt-[25%] mb-[20%] w-[80%] h-auto top-[12%]
                            md:absolute md:mt-0 md:w-auto md:right-[16%] md:left-auto md:-translate-x-0'>
                            {/* 2xl:right-[18%]'> */}
              <h1 className='text-3xl text-white font-[Space_Mono] font-bold
                             md:text-6xl'>{'Meet the Crew'.toUpperCase()}</h1>
              <p className='text-base text-white font-[Space_Mono]
                            md:text-2xl'>{'Meet the specialists behind'.toUpperCase()}</p>
              <p className='text-base text-white font-[Space_Mono]
                            md:text-2xl'>{'your next big launch'.toUpperCase()}</p>
            </div>
          </SwiperSlide>     
          <SwiperSlide 
            className='w-full h-full justify-center items-center'
            style={{display: 'flex'}}
          >
            <LazyLoadImage
                wrapperClassName='absolute h-1/3 top-[12.5%] justify-center items-center
                                  md:h-full md:top-0'
                className='h-[10%]
                           md:h-full'
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/a8f65844-2732-433f-1b11-e36798d4e800/public"
                alt="Services alerta labs item image"
                effect="blur" // efecto visual mientras carga
            />
            <div 
              className='absolute p-5 w-[75%] h-auto top-[25.3%] rounded-[var(--border-radius-20)] border flex flex-col justify-center items-center border-white bg-black
                         md:p-0 md:w-[65%] md:h-[40%] md:top-[37.3%]'
            >
              <h2 
                style={{ fontFamily: 'Bebas Neue' }}
                className='mb-2 text-white text-4xl font-semibold
                           md:mb-9 md:text-8xl'
              >{'WHY choose us'.toUpperCase()}</h2>
              <div className='w-[90%] flex flex-col justify-around items-center
                              md:flex-row'>
                <div className='h-auto flex flex-col justify-between items-start
                                md:h-[150px] md:items-center'>
                  <h3 className='mb-2 text-white text-xl font-[Space_Mono] font-semibold text-left
                                 md:mb-5 md:text-center md:text-2xl'>EXPERT TEAM</h3>
                  <p className='m-0 w-[90%] font-seismic-latin-variable-span-portfolio text-white text-left
                                md:m-auto md:text-center'>“Skilled in the latest technology and innovative design.”</p>
                </div>
                <div className='mt-2 h-auto flex flex-col justify-between items-start
                                md:mt-0 md:h-[150px] md:items-center'>
                  <h3 className='mb-2 text-white text-xl font-[Space_Mono] font-semibold text-left
                                 md:mb-5 md:text-center md:text-2xl'>CLIENT-FOCUSED</h3>
                  {/* <h3 className='mb-5 text-white text-2xl font-[Space_Mono] text-center'>CLIENT-FOCUSED</h3> */}
                  <p className='m-0 w-[90%] font-seismic-latin-variable-span-portfolio text-white text-left
                                md:m-auto md:text-center'>"We collaborate to deliver results that matter.”</p>
                  {/* <p className='m-auto w-[90%] font-seismic-latin-variable-span-portfolio text-white text-center'>“We collaborate to deliver results that matter.”</p> */}
                </div>
                <div className='mt-2 h-auto flex flex-col justify-between items-start
                                md:mt-0 md:h-[150px] md:items-center'>
                  <h3 className='mb-2 text-white text-xl font-[Space_Mono] font-semibold text-left
                                 md:mb-5 md:text-center md:text-2xl'>SCALABLE SOLUTIONS</h3>
                  {/* <h3 className='mb-5 text-white text-2xl font-[Space_Mono] text-center'>SCALABLE SOLUTIONS</h3> */}
                  <p className='m-0 w-[90%] font-seismic-latin-variable-span-portfolio text-white text-left
                                md:m-auto md:text-center'>“Future-proof designs that grow with your business.”</p>
                  {/* <p className='m-auto w-[90%] font-seismic-latin-variable-span-portfolio text-white text-center'>“Future-proof designs that grow with your business.”</p> */}
                </div>
              </div>
            </div>
            <LazyLoadImage
                wrapperClassName='service-main-image absolute w-[70%] top-[22.5%] h-auto justify-center items-center 
                                  md:w-auto md:h-[20%] md:top-[25%]'
                className='w-full h-full object-contain'
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/ad1a7e41-f265-4f24-a360-b13af2bed200/public"
                alt="Services alerta labs item image"
                effect="blur" // efecto visual mientras carga
            />
          </SwiperSlide>
          <SwiperSlide 
            className='w-full h-full'
            style={{display: 'flex', alignItems: 'center'}}
          >
            <Proven/>
          </SwiperSlide>
          <SwiperSlide 
            className='w-full h-full justify-center items-center'
            style={{display: 'flex'}}
          >
            <Contact/>
          </SwiperSlide>
          <SwiperController totalSlides={5}/>
        </Swiper>
      </section>
  );
};

export default Portfolio;