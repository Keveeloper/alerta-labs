import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import useSpacialStore from "../../store/SpacialStore";
import { useNavigate } from "react-router";
import useSpacialObjectStore from "../../store/spacial-object-store/SpacialObjectsStore";
import { spacialObjectsData } from "./spacial-objects/spacial-objects-data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef } from "react";
import { getImageUrl, ImagesUrls } from "../../shared/image-url/image-urls";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getImageUrlMobile } from "../../shared/image-url/image-urls-mobile";
import { useCustomNavigation } from "../shared/hooks/services-hooks/useServicesNavigation";
import ServiceInfo from "./components/service-info/ServiceInfo";
import { useIsMobile } from "../shared/hooks/useIsMobile";

const homeTilteInitialValue = 'EXPLORE THE UNIVERSE';
const servicesItems = [
    {
        id: 1,
        name: 'Astronaut',
        image: getImageUrlMobile('astronaut_mobile'),
        navigateValue: '/portfolio',
        fullHeight: true,
    },
    {
        id: 2,
        name: 'Station',
        image: getImageUrlMobile('station_mobile'),
        navigateValue: '[codecrumb] NEW tech, new tricks_',
        fullHeight: false,
    },
    {
        id: 3,
        name: 'Satellite',
        image: getImageUrlMobile('satellite_mobile'),
        navigateValue: '[UPDATE BASE] App-building in zero-G_',
        fullHeight: true,
    },
    {
        id: 4,
        name: 'Nebula',
        image: getImageUrlMobile('nebula_mobile'),
        navigateValue: '[UXXPlOSION] COSMIC CLARITY IN PIXELS_',
        fullHeight: false,
    },
    {
        id: 5,
        name: 'Cristal',
        image: getImageUrlMobile('cristal_mobile'),
        navigateValue: '[FUTUREBIT] EXPERIMENTAL TECH, YET ESSENTIAL_',
        fullHeight: false,
    },
    {
        id: 6,
        name: 'Asteroid',
        image: getImageUrl('asteroid'),
        navigateValue: '[BRAND BOULDER] BUILT TO CARRY IDENTITIES_',
        fullHeight: false,
    },

];

const Home = () => {

    const { setSpacialObjectKey } = useSpacialObjectStore();
    // const isMobile = useIsMobile();
    // const spacialObject: any = spacialObjectsData(isMobile)[spacialObjectKey];
    const { textHoovered, setTextHovered, homeTitle, setHomeTitle } = useSpacialStore();
    const handleNavigation = useCustomNavigation();
    const navigate = useNavigate();
    const [ stationHighlighted, setStationHighlighted ] = useState<string>(ImagesUrls['station']);
    const [ cristalHighlighted, setCristalHighlighted ] = useState<string>(ImagesUrls['cristal']);
    const [ nebulaHighlighted, setNebulaHighlighted ] = useState<string>(ImagesUrls['nebula']);
    const [ satelliteHighlighted, setSatelliteHighlighted ] = useState<string>(ImagesUrls['satellite']);
    const [ asteroidHighlighted, setAsteroidHighlighted ] = useState<string>(ImagesUrls['asteroid']);
    const [ astronauthighlighted, setAstronautHighlighted ] = useState<string>(ImagesUrls['astronaut']);
    // const [ homeTitle, setHomeTitle ] = useState<string>(homeTilteInitialValue);
    const timeoutRef = useRef<number | null>(null);
    
    const handleHover = (text: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // setInObject(true);
        setTextHovered(text);
        switch (text) {
            case '[codecrumb] NEW tech, new tricks_':
                setStationHighlighted('53b980b5-3df2-4291-1cc2-b1a699a35200');
                setHomeTitle('WEB SERVICES');
                break;
            case '[FUTUREBIT] EXPERIMENTAL TECH, YET ESSENTIAL_':
                setCristalHighlighted('b6af95e2-98c6-4d16-576c-75c04cf87100');
                setHomeTitle('EMERGING TECH');
                break;
            case '[UXXPlOSION] COSMIC CLARITY IN PIXELS_':
                setNebulaHighlighted('a7fdfdbc-9728-4d11-ac67-a0ff7eebe600');
                setHomeTitle('X DESIGN');
                break;
            case '[UPDATE BASE] App-building in zero-G_':
                setSatelliteHighlighted('9d447971-ee1b-46d8-6cd0-48bc1c688900');
                setHomeTitle('APP DEVELOPMENT');
                break;
            case '[BRAND BOULDER] BUILT TO CARRY IDENTITIES_':
                setAsteroidHighlighted('f7427cea-1112-4bd0-99c6-9a06dabcdf00');
                setHomeTitle('WHITE LABEL');
                break;
            case '[ALERTA LINK] MISSION CONTROL_':
                setAstronautHighlighted('deb8e976-73d2-4e12-c95e-ab24ef20a600');
                setHomeTitle('COMMAND AGENT');
                break;
            default:
                break;
        }
    }
            
    const handleMouseLeave = () => {
        setStationHighlighted('1cd060bc-6e36-4286-3d92-234765af0300');
        setCristalHighlighted('c86ffcab-84fb-4f9c-401b-7eb5d2a69900');
        setNebulaHighlighted('843780a4-94af-4d9e-6e5f-c101aa487800');
        setSatelliteHighlighted('4667d586-b939-47bb-4a00-312799925e00');
        setAsteroidHighlighted('0f85095f-b206-4f45-b4aa-ca5575d50b00');
        setAstronautHighlighted('a3980ff6-3869-4b3c-1340-366c8e145000');
        // Cancelamos cualquier timeout anterior
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Creamos un nuevo timeout que solo actualiza si el usuario no vuelve a entrar a un objeto
        timeoutRef.current = setTimeout(() => {
            setTextHovered('[ALERTA SERVICES] UNIVERSE OF CAPABILITIES_');
            setHomeTitle(homeTilteInitialValue);
        }, 1000);
        
    }

    const handleClick = (text: string) => {
        switch (text) {
            case '[codecrumb] NEW tech, new tricks_':
                // setSpacialObject(spacialObjectsData.station);
                setSpacialObjectKey('station');
                navigate('/services');
                break;
            case '[FUTUREBIT] EXPERIMENTAL TECH, YET ESSENTIAL_':
                // setSpacialObject(spacialObjectsData.cristal);
                setSpacialObjectKey('cristal');
                navigate('/services');
                break;
            case '[UXXPlOSION] COSMIC CLARITY IN PIXELS_':
                // setSpacialObject(spacialObjectsData.nebula);
                setSpacialObjectKey('nebula');
                navigate('/services');
                break;
            case '[UPDATE BASE] App-building in zero-G_':
                // setSpacialObject(spacialObjectsData.satellite);
                setSpacialObjectKey('satellite');
                navigate('/services');
                break;
            case '[BRAND BOULDER] BUILT TO CARRY IDENTITIES_':
                // setSpacialObject(spacialObjectsData.asteroide);
                setSpacialObjectKey('asteroide');
                navigate('/services');
                break;
            case '[ALERTA LINK] MISSION CONTROL_':
                navigate('/portfolio');
                break;
            default:
                break;
        }
    }

    const handleSlideChange = (realIndex: number) => {
        switch (realIndex) {
            case 0:
                setHomeTitle('COMMAND AGENT');
                setTextHovered('[ALERTA LINK] MISSION CONTROL_'.toUpperCase());
                break;
            case 1:
                setHomeTitle('WEB SERVICES');
                setTextHovered('[codecrumb] NEW tech, new tricks_'.toUpperCase());
                break;
            case 2:
                setHomeTitle('APP DEVELOPMENT');
                setTextHovered('[UPDATE BASE] App-building in zero-G_'.toUpperCase());
                break;
            case 3:
                setHomeTitle('X DESIGN');
                setTextHovered('[UXXPlOSION] COSMIC CLARITY IN PIXELS_'.toUpperCase());
                break;
            case 4:
                setHomeTitle('EMERGING TECH');
                setTextHovered('[FUTUREBIT] EXPERIMENTAL TECH, YET ESSENTIAL_'.toUpperCase());
                break;
            case 5:
                setHomeTitle('WHITE LABEL');
                setTextHovered('[BRAND BOULDER] BUILT TO CARRY IDENTITIES_'.toUpperCase());
                break;
        
            default:
                break;
        }
    }

    return (
        
        <main className="relative w-full h-lvh">
            <LazyLoadImage
                wrapperClassName='fixed w-full h-full mix-blend-screen'
                className="w-full h-full object-cover"
                src={getImageUrlMobile('home_background_mobile')}
                alt="Alerta labs background space image"
                effect="blur"
            />
            <div className="absolute w-full h-[calc(100lvh-160px)] top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
                <div className="h-[10%] w-full bg-gradient-to-t from-transparent to-black">
                    <h2 className="m-auto w-[80%] font-semibold text-base text-center text-white font-[Space_Mono]">{'Swipe to explore the UNIVERSE'.toUpperCase()}</h2>
                </div>
                <Swiper
                    loop
                    direction={'horizontal'}
                    pagination={{ clickable: true }}
                    // modules={[Pagination]}
                    className="w-full h-full"
                    onSlideChange={(swiper) => {
                        handleSlideChange(swiper.realIndex);
                    }}
                >
                    {servicesItems.map((serviceItem) => (
                        <SwiperSlide className="">
                            <LazyLoadImage
                                wrapperClassName='service-main-image w-full h-full justify-center items-center '
                                className={`${serviceItem.fullHeight ? 'h-full' : 'h-[70%]'} object-contain`}
                                src={serviceItem.image}
                                alt="Services alerta labs item image"
                                effect="blur"
                                onClick={() => handleNavigation(serviceItem.navigateValue || '')}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <ServiceInfo homeTitle={homeTitle} textHoovered={textHoovered} />

            </div>
            <div className="hidden">
                <LazyLoadImage
                    wrapperClassName="absolute w-[400px] bottom-[5%] left-1/2 -translate-x-1/2 cursor-pointer"
                    className="w-full"
                    src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${astronauthighlighted}/public`}
                    alt="astronaut alerta labs"
                    effect="blur"
                    onMouseEnter={() => handleHover("[ALERTA LINK] MISSION CONTROL_")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("[ALERTA LINK] MISSION CONTROL_")}
                />
                <LazyLoadImage
                    wrapperClassName="absolute w-[213px] top-[8%] right-[20%] -translate-x-1/2 cursor-pointer"
                    className="w-full"
                    src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${cristalHighlighted}/public`}
                    alt="Cristal alerta labs"
                    effect="blur"
                    onMouseEnter={() => handleHover("[FUTUREBIT] EXPERIMENTAL TECH, YET ESSENTIAL_")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("[FUTUREBIT] EXPERIMENTAL TECH, YET ESSENTIAL_")}
                />
                <LazyLoadImage
                    wrapperClassName="absolute w-[228px] top-[20%] right-0 -translate-x-1/2 cursor-pointer"
                    className="w-full"
                    src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${asteroidHighlighted}/public`}
                    alt="Asteroid"
                    effect="blur"
                    onMouseEnter={() => handleHover("[BRAND BOULDER] BUILT TO CARRY IDENTITIES_")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("[BRAND BOULDER] BUILT TO CARRY IDENTITIES_")}
                />
                <LazyLoadImage
                    wrapperClassName="absolute w-[320px] bottom-[15%] right-[5%] cursor-pointer"
                    className="w-full"
                    src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${stationHighlighted}/public`}
                    alt="Station"
                    effect="blur"
                    onMouseEnter={() => handleHover("[codecrumb] NEW tech, new tricks_")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("[codecrumb] NEW tech, new tricks_")}
                />
                <LazyLoadImage
                    wrapperClassName="absolute w-[350px] bottom-[5%] left-0 cursor-pointer z-1"
                    className="w-full"
                    src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${satelliteHighlighted}/public`}
                    alt="Satellite"
                    effect="blur"
                    onMouseEnter={() => handleHover("[UPDATE BASE] App-building in zero-G_")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("[UPDATE BASE] App-building in zero-G_")}
                />
                <LazyLoadImage
                    wrapperClassName="absolute w-[558px] top-[2%] left-[3%] cursor-pointer"
                    className="w-full"
                    src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${nebulaHighlighted}/public`}
                    alt="Nebula"
                    effect="blur"
                    onMouseEnter={() => handleHover("[UXXPlOSION] COSMIC CLARITY IN PIXELS_")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("[UXXPlOSION] COSMIC CLARITY IN PIXELS_")}
                />
            </div>
            <img 
                className="absolute w-full h-full z-1 pointer-events-none opacity-80 object-fit
                           sm:opacity-100"
                src={getImageUrl('vignette')}
                alt="vignette" 
            />
            {/* {homeTitle === homeTilteInitialValue && 
                <p className="absolute left-[5%] bottom-26 text-white text-2xl font-[Space_Mono] font-bold z-2">CHOOSE YOUR PATH AND</p>
            } */}
            {/* <h1 className="absolute left-[5%] bottom-15 text-white text-5xl font-[Space_Mono] font-bold z-2">{homeTitle}</h1> */}
        </main>
    );

}

export default Home;