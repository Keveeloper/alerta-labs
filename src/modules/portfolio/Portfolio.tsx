// 1. Importa los componentes de Swiper para React
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. Importa los módulos de Swiper que quieras usar (opcional)
// ¡Asegúrate de importar Mousewheel aquí!
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';

// 3. Importa los estilos base de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 4. ¡IMPORTANTE! Importa el MÓDULO y los ESTILOS de tu efecto personalizado
import EffectCardsStack from './effect-cards-stack.esm.js';
import './effect-cards-stack.scss';
import './main.scss'

const team = [
  {
    id: 1,
    name: 'Danilo',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/40709dd0-c871-4b25-4250-ba8f9de97f00/public',
  },
  {
    id: 2,
    name: 'Carlos',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/58b8cf82-23d6-4721-121e-1dd93ff32b00/public',
  },
  {
    id: 3,
    name: 'Duban',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3abfa03b-aaf5-4335-fd2a-6f4786b00600/public',
  },
  {
    id: 4,
    name: 'Nicolas',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/4d48593a-6152-4b5d-0e0e-e10883318b00/public',
  },
  {
    id: 5,
    name: 'Kevind',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/a4c59c51-4f0f-4ad7-3201-b9964a72d300/public',
  },
  {
    id: 6,
    name: 'Johann',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/626ddf59-768c-4a65-73f1-40dda1a7a200/public',
  },
  {
    id: 7,
    name: 'Nico',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/66d404d6-e2e4-471b-19c1-4bcabd78d700/public',
  },
  {
    id: 8,
    name: 'Aleja',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/41f8ea48-6dcc-411a-e280-a76251274600/public',
  },
  {
    id: 9,
    name: 'Alexandra',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/075020d9-0f28-41a9-be0b-3c0d40417800/public',
  },
  {
    id: 10,
    name: 'Teragron',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/fca86b81-5ac5-44f1-4683-6d6ed9c68200/public',
  },
  {
    id: 11,
    name: 'Álvaro',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/00e1017a-7ec2-4ee6-9215-e0e835b7f800/public',
  },
];

const Portfolio = () => {
  return (
      <section className='w-full h-screen flex justify-center items-center'>
        <Swiper
          loop
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
          // Añade Mousewheel a los módulos
          modules={[Pagination, Mousewheel]}
          // Habilita el control con la rueda del ratón
          mousewheel={{
            releaseOnEdges: true, // Esto permite que el scroll continúe en la página si llegas al final del Swiper
          }}
          // Remueve allowTouchMove={false} para permitir el drag y el movimiento táctil
          className="w-full h-full"
        >
          <SwiperSlide
            className='w-full h-full justify-center items-center'
            style={{display: 'flex'}}
          >  
            <Swiper
              modules={[Autoplay, Pagination, EffectCardsStack]}
              effect="cards-stack"
              loop={true}
              direction='vertical'
              className="w-[25%] h-[55%] flex justify-center items-center"
              style={{padding: '40px 0px', zIndex: 1000}}
            >
                {team.map((member) => (
                  <SwiperSlide className='w-full h-full'>
                    <div className="cards-stack-back w-full h-full">
                      <img src={member.memberPhoto} alt="" />
                    </div>
                    <div className="cards-stack-front w-full h-full">
                      <img src={member.memberPhoto} alt="" />
                    </div>
                  </SwiperSlide>           
                ))}
            </Swiper>
          </SwiperSlide>
          <SwiperSlide 
            className='w-full h-full justify-center items-center'
            style={{display: 'flex'}}
          >
            Slide 2
          </SwiperSlide>
          <SwiperSlide 
            className='w-full h-full justify-center items-center'
            style={{display: 'flex'}}
          >
            Slide 3
          </SwiperSlide>
          <SwiperSlide 
            className='w-full h-full justify-center items-center'
            style={{display: 'flex'}}
          >
            Slide 4
          </SwiperSlide>
          <SwiperSlide 
            className='w-full h-full justify-center items-center'
            style={{display: 'flex'}}
          >
            Slide 5
          </SwiperSlide>
        </Swiper>
      </section>
  );
};

export default Portfolio;