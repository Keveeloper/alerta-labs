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
      name: 'Gato software',
      logo: '4537c06f-0d35-4284-c498-970c0f587700',
      type: 'SOFTWARE AS A SERVICE',
      image: '2086c880-c65a-4cd6-df50-da479501cc00'
    },
    {
      name: 'Ojos de tiburón',
      logo: 'fc16914e-3600-4679-2986-f0a650a47900',
      type: 'Website',
      image: '467c5833-01fc-40fc-d32b-1aba76176000'
    },
    {
      name: 'Natural',
      logo: 'be30440c-4b03-4ec6-38c3-f9e435856b00',
      type: 'Website, e comerce',
      image: '06f66812-11cf-40ee-4417-404f29363600'
    },
    {
      name: 'Debugploy',
      logo: 'ff9b5e98-5596-43eb-67f0-5e765ee51100',
      type: 'Website',
      image: '826ec877-aa57-486f-b94d-8431c2c02700'
    },
    {
      name: 'Impormedical',
      logo: '93822d5c-3823-4948-af48-f2377cb94c00',
      type: 'E COMERCE',
      image: '5d98cc75-5529-4098-34fa-ac3538791c00'
    },
    {
      name: 'Fluttr',
      logo: '99989662-d27e-4163-c8e2-b7290b9df800',
      type: 'Website, LAndingpage, mobile Game',
      image: '645ce9c7-07c8-4b37-a54f-8021b53dd400'
    },
    {
      name: 'GMDVita',
      logo: 'b94319ad-136e-4a88-1c6c-db175884ef00',
      type: 'Website',
      image: 'af11f58a-187f-4a86-ce70-8f8f1072ce00'
    },
    {
      name: 'Brain5tormers',
      logo: 'a1316a42-9459-4ac8-fc86-c454a096eb00',
      type: 'Website',
      image: '7f098956-4e9e-4880-8708-d7ace984a200'
    },
    {
      name: 'Alerta',
      logo: 'ad1266a6-2a7f-4981-d924-36fc18099800',
      type: 'Website',
      image: '4f87c981-ae63-4606-d24c-c741b4a5bd00'
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
                <img style={{height: '75%'}} src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${img.image}/public`} alt="" />
                <h2 className='font-[Exan] text-2xl'>{img.type.toUpperCase()}</h2>
                <img style={{width: '50%', height: '15%', objectFit: 'contain', objectPosition: 'left'}} src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${img.logo}/public`} alt="" />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperPosters;