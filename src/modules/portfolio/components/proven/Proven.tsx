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
    <div className='absolute left-[3%] w-[80%] h-2/3 flex gap-5'>
        <div className='w-[45%] h-full'>
            <div>
                <h2 style={{ fontFamily: "Bebas Neue" }} className='text-white text-8xl text-end'>our proven</h2>
                <h2 style={{ fontFamily: "Bebas Neue" }} className='text-white text-8xl text-end'>development</h2>
                <h2 style={{ fontFamily: "Bebas Neue" }} className='text-white text-8xl text-end'>process</h2>
            </div>
            <div>
                <p className='font-seismic-latin-variable-span-portfolio text-white text-end'>Our transparent, collaborative</p>
                <p className='font-seismic-latin-variable-span-portfolio text-white text-end'>process keeps you involved</p>
                <p className='font-seismic-latin-variable-span-portfolio text-white text-end'>at every stage, from</p>
                <p className='font-seismic-latin-variable-span-portfolio text-white text-end'>concept to launch.</p>
            </div>
        </div>
        <Swiper
            loop
            direction='horizontal'
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="swiper-proven w-[55%] h-full"
        >
            {cards.map((card) => (
                <SwiperSlide className='p-9 w-full flex justify-center items-center border-white border-2 rounded-[var(--border-radius-20)] overflow-hidden' style={{height: '90%'}}>
                    <div className='mb-5 w-full h-[70%]'>
                        <LazyLoadImage
                            wrapperClassName='w-full h-full justify-center items-center'
                            className='h-full'
                            src={card.image}
                            alt="Services alerta labs item image"
                            effect="blur"
                        />
                    </div>
                    <h3 className='mb-5 text-3xl text-white font-[Exan]'>{card.title.toUpperCase()}</h3>
                    <p className='font-seismic-latin-variable-span-portfolio text-white'>{card.description}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}

export default Proven;