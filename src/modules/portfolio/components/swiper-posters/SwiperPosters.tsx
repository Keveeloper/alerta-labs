import { useState, useEffect, useRef } from 'react';

// 1. Importaciones de Swiper y sus módulos
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Parallax } from 'swiper/modules';

// 2. Importaciones de los estilos
// Estilos base de los módulos de Swiper que vamos a usar
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/parallax';

// Estilos personalizados de la librería que compraste
import './posters-slider.scss';
import './main.scss';

const portfolioJobs = [
    {
        image: 'https://swiperjs.com/demos/images/nature-1.jpg'
    },
    {
        image: 'https://swiperjs.com/demos/images/nature-2.jpg'
    },
    {
        image: 'https://swiperjs.com/demos/images/nature-3.jpg'
    },
    {
        image: 'https://swiperjs.com/demos/images/nature-4.jpg'
    },
    {
        image: 'https://swiperjs.com/demos/images/nature-5.jpg'
    },
    {
        image: 'https://swiperjs.com/demos/images/nature-6.jpg'
    },
    {
        image: 'https://swiperjs.com/demos/images/nature-7.jpg'
    },
    {
        image: 'https://swiperjs.com/demos/images/nature-8.jpg'
    },
    {
        image: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/4f87c981-ae63-4606-d24c-c741b4a5bd00/public'
    },
]
const SwiperPosters = () => {
  // Estado para guardar la instancia de Swiper una vez que se inicializa
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  // Referencia al contenedor del Swiper para poder medir su tamaño
  const swiperElRef = useRef<any>(null);

  // useEffect se encarga de los "efectos secundarios", como añadir event listeners.
  // Replicaremos aquí la lógica del 'resize' del archivo original.
  useEffect(() => {
    // Si la instancia de Swiper o la referencia al elemento no existen, no hacemos nada.
    if (!swiperInstance || !swiperElRef.current) return;

    // La misma función del archivo original para calcular el desplazamiento
    const calcNextOffset = () => {
      const parentWidth = swiperElRef.current.parentElement.offsetWidth;
      const swiperWidth = swiperElRef.current.offsetWidth;
      let nextOffset =
        (parentWidth - (parentWidth - swiperWidth) / 2) / swiperWidth;
      nextOffset = Math.max(nextOffset, 1);
      return `${nextOffset * 100}%`;
    };

    // La función que se ejecutará cada vez que la ventana cambie de tamaño
    const onResize = () => {
      // Verificamos que swiper no esté destruido
      if (swiperInstance.destroyed) return;
      // Actualizamos dinámicamente los parámetros del efecto
      swiperInstance.params.creativeEffect.next.translate = [
        calcNextOffset(),
        0,
        0,
      ];
      // Forzamos la actualización de Swiper
      swiperInstance.update();
    };

    // Añadimos el listener
    window.addEventListener('resize', onResize);

    // Llamamos a la función una vez al inicio para establecer el valor inicial
    onResize();

    // ¡MUY IMPORTANTE! La función de limpieza
    // Se ejecuta cuando el componente se "desmonta" para evitar fugas de memoria.
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [swiperInstance]); // Este efecto se ejecutará solo cuando swiperInstance cambie

  return (
    // Usamos la clase 'posters-slider' en el contenedor principal,
    // tal como lo esperaba el CSS original.
    <div className="posters-slider">
      <Swiper
        // Asignamos la referencia al elemento Swiper
        ref={swiperElRef}
        // Guardamos la instancia de Swiper en nuestro estado cuando esté lista
        onSwiper={setSwiperInstance}
        // Aquí pasamos TODA la configuración del archivo posters-slider.js
        modules={[Parallax, EffectCreative]}
        effect="creative"
        speed={600}
        resistanceRatio={0}
        grabCursor={true}
        parallax={true}
        creativeEffect={{
          limitProgress: 4,
          perspective: true,
          shadowPerProgress: true,
          prev: {
            shadow: true,
            translate: ['-90%', 0, -320],
          },
          next: {
            // Empezamos con un valor por defecto, useEffect lo corregirá
            translate: ['100%', 0, 0],
          },
        }}
        initialSlide={portfolioJobs.length - 1}
        style={{marginRight: '15%'}}
      >
        {portfolioJobs.map((img) => (
            <SwiperSlide 
                style={{justifyContent: 'space-between'}}
                className='px-7 py-10 flex-col border border-white rounded-[var(--border-radius-20)] bg-black'
            >
                <img style={{height: '75%'}} src={img.image} alt="" />
                <div>Hola mundo</div>
                <p>Hola cuates</p>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperPosters;