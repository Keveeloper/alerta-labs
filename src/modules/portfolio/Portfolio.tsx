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

const Portfolio = () => {
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
            <div className='absolute w-[70%] top-25 left-16
                            xl:w-auto xl:left-20'>
              <h1 
                className='text-4xl leading-[0.8]
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
          </SwiperSlide>
          <SwiperSlide
            className='w-full h-full pl-[20%] justify-start items-center
                       2xl:pl-[30%]'
            style={{display: 'flex'}}
          >  
            <LazyLoadImage
                wrapperClassName='service-main-image absolute left-[-5%] h-[80%] justify-center items-center
                                  2xl:h-[90%] 2xl:left-20'
                className='h-[100%]'
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/49e4319a-a37a-4389-2a55-1b76167be000/public"
                alt="Astronaut portfolio item image"
                effect="blur" // efecto visual mientras carga
            />
            <SwiperCards/>
            <div className='absolute top-[12%] right-[16%]'>
                            {/* 2xl:right-[18%]'> */}
              <h1 className='text-6xl text-white font-[Space_Mono] font-bold'>{'Meet the Crew'.toUpperCase()}</h1>
              <p className='text-2xl text-white font-[Space_Mono]'>{'Meet the specialists behind'.toUpperCase()}</p>
              <p className='text-2xl text-white font-[Space_Mono]'>{'your next big launch'.toUpperCase()}</p>
            </div>
          </SwiperSlide>     
          <SwiperSlide 
            className='w-full h-full justify-center items-center'
            style={{display: 'flex'}}
          >
            <LazyLoadImage
                wrapperClassName='h-full justify-center items-center'
                className='h-full'
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/a8f65844-2732-433f-1b11-e36798d4e800/public"
                alt="Services alerta labs item image"
                effect="blur" // efecto visual mientras carga
            />
            <div 
              className='absolute w-[65%] h-[40%] top-[37.3%] rounded-[var(--border-radius-20)] border flex flex-col justify-center items-center border-white bg-black'
            >
              <h2 
                style={{ fontFamily: 'Bebas Neue' }}
                className='mb-9 text-white text-8xl font-semibold'
              >{'WHY choose us'.toUpperCase()}</h2>
              <div className='w-[90%] flex justify-around items-center'>
                <div className='h-[150px] flex flex-col justify-between items-center'>
                  <h3 className='mb-5 text-white text-2xl font-[Space_Mono] text-center'>EXPERT TEAM</h3>
                  <p className='m-auto w-[90%] font-seismic-latin-variable-span-portfolio text-white text-center'>“Skilled in the latest technology and innovative design.”</p>
                </div>
                <div className='h-[150px] flex flex-col justify-between items-center'>
                  <h3 className='mb-5 text-white text-2xl font-[Space_Mono] text-center'>CLIENT-FOCUSED</h3>
                  <p className='m-auto w-[90%] font-seismic-latin-variable-span-portfolio text-white text-center'>“We collaborate to deliver results that matter.”</p>
                </div>
                <div className='h-[150px] flex flex-col justify-between items-center'>
                  <h3 className='mb-5 text-white text-2xl font-[Space_Mono] text-center'>SCALABLE SOLUTIONS</h3>
                  <p className='m-auto w-[90%] font-seismic-latin-variable-span-portfolio text-white text-center'>“Future-proof designs that grow with your business.”</p>
                </div>
              </div>
            </div>
            <LazyLoadImage
                wrapperClassName='service-main-image absolute top-[25%] h-[20%] justify-center items-center'
                className='h-full'
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