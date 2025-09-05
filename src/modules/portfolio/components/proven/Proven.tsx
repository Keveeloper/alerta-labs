import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const cards = [
  {
    id: 1,
    image: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/2a180888-6118-4db3-ebc1-ffe1d561e300/public',
    title: "Discovery and Strategy",
    description: "Initial phase of analysis and planning to define goals, strategies, and a clear roadmap for the digital project.",
  },
  {
    id: 2,
    image: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3ef63235-f13a-4b51-9d31-48378408a300/public',
    title: "Design and prototyping",
    description: "Creation of visual concepts and functional prototypes to validate ideas before final development.",
  },
  {
    id: 3,
    image: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/5cfaab6a-7c33-42ac-e9cc-32f421729000/public',
    title: "agile development and interaction",
    description: "Flexible development methodology based on iterative cycles, prioritizing continuous improvement and adaptability.",
  },
  {
    id: 4,
    image: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/8765b7ab-da49-45ac-e3f0-78be4afab300/public',
    title: "Quality assurance and testing",
    description: "Comprehensive software evaluation and testing process to ensure optimal performance, security, and user experience.",
  },
  {
    id: 1,
    image: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/23dfff4d-fe9a-4032-d937-e0be8c726300/public',
    title: "deployment and support",
    description: "Implementation and long-term maintenance of digital solutions, ensuring their stability and evolution over time.",
  },
];

const Proven = () => {
  return (
    <div className='m-auto w-[90%] h-[80%] left-auto flex flex-col items-start gap-5
    md:m-0 md:w-[80%] md:h-2/3 md:flex-row md:left-[3%]'>
        <div className='w-full h-auto
        md:w-[45%] md:h-full'>
            <div className='hidden md:block'>
                <h2 style={{ fontFamily: "Bebas Neue" }} className='text-white text-8xl text-end'>our proven</h2>
                <h2 style={{ fontFamily: "Bebas Neue" }} className='text-white text-8xl text-end'>development</h2>
                <h2 style={{ fontFamily: "Bebas Neue" }} className='text-white text-8xl text-end'>process</h2>
            </div>
            {/* mobile */}
            <div className='block md:hidden'>
                <h2 style={{ fontFamily: "Bebas Neue" }} className='text-white text-2xl text-start'>our proven development process</h2>
            </div>
            <div className='hidden md:block'>
                <p className='font-seismic-latin-variable-span-portfolio text-white text-end'>Our transparent, collaborative</p>
                <p className='font-seismic-latin-variable-span-portfolio text-white text-end'>process keeps you involved</p>
                <p className='font-seismic-latin-variable-span-portfolio text-white text-end'>at every stage, from</p>
                <p className='font-seismic-latin-variable-span-portfolio text-white text-end'>concept to launch.</p>
            </div>
            {/* mobile */}
            <div className='block md:hidden'>
                <p className='font-seismic-latin-variable-span-portfolio text-white text-start'>Our transparent, collaborative process keeps you involved at every stage, from concept to launch.</p>
            </div>
        </div>
        <Swiper
            loop
            direction='horizontal'
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="swiper-proven w-[93%] h-full
            md:w-[55%]"
            style={{ margin: 0 }}
        >
            {cards.map((card) => (
                <SwiperSlide 
                  className='p-3 w-full flex justify-center items-center border-white border-2 rounded-[var(--border-radius-20)] overflow-hidden
                             md:p-9' 
                  style={{height: '90%'}}
                >
                    <div className='mb-3 w-full h-[60%]
                                    md:mb-5 md:h-[70%]'>
                        <LazyLoadImage
                            wrapperClassName='w-full h-full justify-center items-center rounded-xl'
                            className='h-full'
                            src={card.image}
                            alt="Services alerta labs item image"
                            effect="blur"
                        />
                    </div>
                    <div className='h-[40%] overflow-y-scroll custom-scrollbar
                                    md:h-[30%]'>
                      <h3 className='mb-1 text-base text-white font-[Exan] font-semibold
                                     md:mb-5 md:text-3xl'>{card.title.toUpperCase()}</h3>
                      <p className='font-seismic-latin-variable-span-portfolio text-white'>{card.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}

export default Proven;