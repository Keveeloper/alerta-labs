import { useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import { usePortfolioFooterStore } from '../../../../store/portfolio-footer/usePortfolioFooterStore';

const SwiperController = (props: { totalSlides: number }) => {
  const swiper = useSwiper();
  const { totalSlides } = props;

  // Usamos un selector para obtener solo la función y evitar re-renders.
  const setShowFooter = usePortfolioFooterStore((state) => state.setShowFooter);

  useEffect(() => {
    const handleSlideChange = () => {
      const lastSlide = swiper.realIndex === totalSlides - 1;
      setShowFooter(!lastSlide);
    };

    swiper.on('slideChange', handleSlideChange);

    return () => {
      swiper.off('slideChange', handleSlideChange);
    };
  }, [swiper, setShowFooter, totalSlides]);

  return null;
};

export default SwiperController;