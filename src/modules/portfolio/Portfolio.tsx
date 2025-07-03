// 1. Importa los componentes de Swiper para React
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. Importa los módulos de Swiper que quieras usar (opcional)
// ¡Asegúrate de importar Mousewheel aquí!
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
    name: 'Danilo Álvarez',
    title: 'ceo / creative lead',
    description_1: 'A creative leader with laser-focused attention to business results and client satisfaction, Danilo has built and managed effective creative teams in agencies like Y&R NY, experiential companied like Disney and media conglomerates like Discovery Communications.',
    description_2: 'When he’s not discussing cultural insights, best practices or creative optimization with his team, he can be found riding motorcycles through deep sand forests, dancing salsa or somewhere under water.',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/40709dd0-c871-4b25-4250-ba8f9de97f00/public',
  },
  {
    id: 2,
    name: 'cARLOS SEGURA',
    title: 'UX/UI DESIGNER',
    description_1: 'A UX/UI Designer and web developer committed to creating products and services that optimize user experience, Carlos specializes in creating intuitive and accessible WCAG-compliant interfaces, that ensure high-value solutions.',
    description_2: 'In his free time, he learns about investment analysis and technology, and strives to break personal records in the latest video game and at the gym.',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/58b8cf82-23d6-4721-121e-1dd93ff32b00/public',
  },
  {
    id: 3,
    name: 'Duban Espinosa',
    title: 'Web developer',
    description_1: 'Duban thrives in the ever-evolving world of web development, where building, solving, and learning go hand in hand. Every project is a chance to level up, tackle new challenges, and create meaningful digital experiences.',
    description_2: 'He believes growth comes from collaboration—and from the bumps along the way. When he’s not coding, you’ll find him biking through the mountains, shooting hoops, or lifting heavy things for fun.',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3abfa03b-aaf5-4335-fd2a-6f4786b00600/public',
  },
  {
    id: 4,
    name: 'NIcolás Saavedra',
    title: 'software engineer',
    description_1: 'Hooked on technology since he was eight, Nicolás has always been driven to solve problems with innovative solutions that make a difference. For him, software development is more than just code — it’s about building smart, seamless experiences that bring ideas to life.',
    description_2: 'When he’s not designing architectures or deep in code, he’s exploring new technologies and pushing his team to keep raising the bar.',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/4d48593a-6152-4b5d-0e0e-e10883318b00/public',
  },
  {
    id: 5,
    name: 'Kevind Ospina',
    title: 'front-end developer',
    description_1: 'Kevind turns bold ideas into digital realities. A web and mobile developer with a love for clean, functional design, he’s fluent in React, Angular, HTML, and CSS — and yes, they call him the CSS engineer for a reason.',
    description_2: 'With a background in UX/UI, he cares just as much about how things look and feel as how they work. Always curious, he’s constantly chasing the next challenge and building tools that are both beautiful and rock-solid.',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/a4c59c51-4f0f-4ad7-3201-b9964a72d300/public',
  },
  {
    id: 6,
    name: 'Johann',
    title: 'Chief operating officer',
    description_1: 'A visionary COO, excels in effectively managing teams and budgets of every size. His extensive background in project management ensures flawless execution and groundbreaking outcomes.',
    description_2: 'His unwavering commitment to excellence and forward- looking mindset make him an invaluable guide in navigating the dynamic industry landscape, ensuring sustained success amid constant evolution.',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/626ddf59-768c-4a65-73f1-40dda1a7a200/public',
  },
  {
    id: 7,
    name: 'NICOLÁS MORENO',
    title: 'GRAPHIC DESIGNER',
    description_1: 'A passionate multimedia designer with experience in social media design, visual identity, and audiovisual asset creation.',
    description_2: 'He always stays up-to-date with the latest design trends to continue his professional development. His passion for video games is a reflection of his deep interest in art, storytelling, 3D modeling, and technology.',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/66d404d6-e2e4-471b-19c1-4bcabd78d700/public',
  },
  {
    id: 8,
    name: 'Alejandra gonzález',
    title: 'art director',
    description_1: 'A graphic designer in constant evolution with diverse interests in creative thinking and technology, Alejandra is always looking for new techniques to learn and apply in the real world.',
    description_2: `When she's not mastering the impossible layout, she’s out in the world getting involved in visual arts, nature and veganism, immersed in sci-fi and horror films, or working towards becoming a creative technologist.`,
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/41f8ea48-6dcc-411a-e280-a76251274600/public',
  },
  {
    id: 9,
    name: 'Alexandra patiño',
    title: 'Art director',
    description_1: 'With the passion of a branding specialist and the skills of an art director, Alexandra brings to the table more than 20 years of experience in high-end advertising.',
    description_2: 'Her journey includes top ad agencies like Ogilvy and Mather, Leo Burnett, Publicis, Rep Grey, and DDB. When she’s not on her computer creating stunning visuals, Alexandra is following some professional cycling race around the world or watching an intriguing documentary.',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/075020d9-0f28-41a9-be0b-3c0d40417800/public',
  },
  {
    id: 10,
    name: 'TERAGRON',
    title: 'GRAPHIC DESIGNER',
    description_1: 'It’s been 6 years since Tera started forging her path in design. With extensive knowledge in various artistic fields, her true passion lies in achieving the perfect balance between design, illustration, and strategy for every project she participates in.',
    description_2: 'When she’s not creating with her team, she’s eating sushi, playing The Sims™, or learning new techniques to grow further in her field.',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/fca86b81-5ac5-44f1-4683-6d6ed9c68200/public',
  },
  {
    id: 11,
    name: 'Álvaro Pérez-kattar',
    title: 'Partner & chief creative officer',
    description_1: 'A communicator, coach, and entrepreneur, Alvaro has built a career helping people and brands find their voice and direction.',
    description_2: 'From his days as a media host to founding platforms like The Way Hub and The Way Podcast, he brings a sharp instinct for storytelling and brand vision. When he’s not mixing strategy with soul at Alerta, he’s writing books, crossing time zones, or chasing the next big idea from an island, a city, or 30,000 feet in the air.',
    memberPhoto: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/00e1017a-7ec2-4ee6-9215-e0e835b7f800/public',
  },
];

const Portfolio = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + '<div class="internal-pagination"></div>' + '</span>';
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
            className='w-full h-full pl-[30%] justify-start items-center'
            style={{display: 'flex'}}
          >  
            
          </SwiperSlide>
          <SwiperSlide
            className='w-full h-full pl-[30%] justify-start items-center'
            style={{display: 'flex'}}
          >  
            <LazyLoadImage
                wrapperClassName='service-main-image absolute left-20 h-[90%] justify-center items-center'
                className='h-[90%]'
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/e81481c5-596c-4c84-920d-2a3110aff100/public"
                alt="Services alerta labs item image"
                effect="blur" // efecto visual mientras carga
            />
            <Swiper
              modules={[Autoplay, Pagination, EffectCardsStack]}
              effect="cards-stack"
              loop={true}
              direction='vertical'
              className="swiper-cards-component w-[30%] h-[50%] flex justify-center items-center"
              style={{ margin: 0, padding: '40px 0px', zIndex: 1000 }}
            >
              {team.map((member) => (
                // PASO 1: Añadir "group" aquí
                <SwiperSlide 
                  key={member.id} 
                  className='group relative w-full h-full border border-white'
                >
                    <div className="cards-stack-back w-full h-full filter blur-[2px] group-[.swiper-slide-active]:filter-none">
                      <img src={member.memberPhoto} alt="" />
                    </div>
                    <div className="cards-stack-front w-full h-full filter blur-[2px] group-[.swiper-slide-active]:filter-none">
                      <img src={member.memberPhoto} alt="" />
                    </div>
                    
                    {/* PASO 2: Modificar este div */}
                    <div 
                      className='absolute pl-7 w-[190%] h-[calc(100%_+_2px)] top-[-1px] right-[-186%] flex flex-col justify-center rounded-r-[16px] border-t border-r border-b border-white bg-black z-2 opacity-0 invisible transition-all duration-300 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:visible'
                    >
                      <h2 className='text-5xl font-semibold text-white font-[Space_Mono]'>{member.name.toUpperCase()}</h2>
                      <p className='mb-3 text-xl font-semibold text-white font-[Space_mono]'>{member.title.toUpperCase()}</p>
                      <p className='font-seismic-latin-variable-span mb-3 w-[90%] text-base text-white'>{member.description_1}</p>
                      <p className='font-seismic-latin-variable-span w-[90%] text-base text-white'>{member.description_2}</p>
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='absolute top-[12%] right-[18%]'>
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
                <div>
                  <h3 className='mb-5 text-white text-2xl font-[Space_Mono] text-center'>EXPERT TEAM</h3>
                  <p className='m-auto w-[90%] font-seismic-latin-variable-span-portfolio text-white text-center'>“Skilled in the latest technology and innovative design.”</p>
                </div>
                <div>
                  <h3 className='mb-5 text-white text-2xl font-[Space_Mono] text-center'>CLIENT-FOCUSED</h3>
                  <p className='m-auto w-[90%] font-seismic-latin-variable-span-portfolio text-white text-center'>“We collaborate to deliver results that matter.”</p>
                </div>
                <div>
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