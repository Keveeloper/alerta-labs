import { useState } from "react";
import useSpacialStore from "../../store/SpacialStore";
import { useNavigate } from "react-router";
import useSpacialObjectStore from "../../store/spacial-object-store/SpacialObjectsStore";
import { spacialObjectsData } from "./spacial-objects/spacial-objects-data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef } from "react";

const homeTilteInitialValue = 'EXPLORE THE UNIVERSE';

const Home = () => {

    const { setSpacialObject } = useSpacialObjectStore();
    const { setTextHovered } = useSpacialStore();
    const navigate = useNavigate();
    const [stationHighlighted, setStationHighlighted] = useState<string>('1cd060bc-6e36-4286-3d92-234765af0300');
    const [cristalHighlighted, setCristalHighlighted] = useState<string>('c86ffcab-84fb-4f9c-401b-7eb5d2a69900');
    const [nebulaHighlighted, setNebulaHighlighted] = useState<string>('642af0a5-a5a3-4134-fcf7-c785a9f01500');
    const [satelliteHighlighted, setSatelliteHighlighted] = useState<string>('4667d586-b939-47bb-4a00-312799925e00');
    const [asteroidHighlighted, setAsteroidHighlighted] = useState<string>('96444b46-5e0f-4433-4dc0-2f1abc3c1600');
    const [ astronauthighlighted, setAstronautHighlighted ] = useState<string>('5827b1f3-6cab-47c0-136f-338815997400');
    const [ homeTitle, setHomeTitle ] = useState<string>(homeTilteInitialValue);
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
                setNebulaHighlighted('3745c65f-ceda-4557-f643-11551e716000');
                setHomeTitle('X DESIGN');
                break;
            case '[UPDATE BASE] App-building in zero-G_':
                setSatelliteHighlighted('9d447971-ee1b-46d8-6cd0-48bc1c688900');
                setHomeTitle('APP DEVELOPMENT');
                break;
            case '[BRAND BOULDER] BUILT TO CARRY IDENTITIES_':
                setAsteroidHighlighted('e5f7495d-19fa-46b8-9a2f-098f3a727300');
                setHomeTitle('WHITE LABEL');
                break;
            case 'astronaut':
                setAstronautHighlighted('09cb6e8c-0893-4171-0e4a-dce1538b5d00');
                break;
            default:
                break;
        }
    }
            
    const handleMouseLeave = () => {
        setStationHighlighted('1cd060bc-6e36-4286-3d92-234765af0300');
        setCristalHighlighted('c86ffcab-84fb-4f9c-401b-7eb5d2a69900');
        setNebulaHighlighted('642af0a5-a5a3-4134-fcf7-c785a9f01500');
        setSatelliteHighlighted('4667d586-b939-47bb-4a00-312799925e00');
        setAsteroidHighlighted('96444b46-5e0f-4433-4dc0-2f1abc3c1600');
        setAstronautHighlighted('5827b1f3-6cab-47c0-136f-338815997400');
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
                setSpacialObject(spacialObjectsData.station);
                navigate('/services');
                break;
            case '[FUTUREBIT] EXPERIMENTAL TECH, YET ESSENTIAL_':
                setSpacialObject(spacialObjectsData.cristal);
                navigate('/services');
                break;
            case '[UXXPlOSION] COSMIC CLARITY IN PIXELS_':
                setSpacialObject(spacialObjectsData.nebula);
                navigate('/services');
                break;
            case '[UPDATE BASE] App-building in zero-G_':
                setSpacialObject(spacialObjectsData.satellite);
                navigate('/services');
                break;
            case '[BRAND BOULDER] BUILT TO CARRY IDENTITIES_':
                setSpacialObject(spacialObjectsData.asteroide);
                navigate('/services');
                break;
            default:
                break;
        }
    }

    return (
        <main className="w-full h-lvh">
            {/* <img
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/67101712-efc2-4dcf-3bea-0fbafde64f00/public" alt="solar system background" 
                className="fixed w-full h-full left-1/2 -translate-x-1/2 object-cover mix-blend-screen"
            /> */}
            <LazyLoadImage
                wrapperClassName='fixed w-full h-full mix-blend-screen'
                className="w-full h-full object-cover"
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/67101712-efc2-4dcf-3bea-0fbafde64f00/public"
                alt="Alerta labs background space image"
                effect="blur"
            />
            {/* <img
                src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${astronauthighlighted}/public`}
                alt="astronaut alerta labs" 
                className="absolute w-[400px] bottom-[8%] left-1/2 -translate-x-1/2 cursor-pointer"
                onMouseEnter={() => handleHover("astronaut")}
                onMouseLeave={handleMouseLeave}
            /> */}
            <LazyLoadImage
                wrapperClassName="absolute w-[400px] bottom-[5%] left-1/2 -translate-x-1/2 cursor-pointer"
                className="w-full"
                src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${astronauthighlighted}/public`}
                alt="astronaut alerta labs"
                effect="blur"
                onMouseEnter={() => handleHover("astronaut")}
                onMouseLeave={handleMouseLeave}
            />
            <LazyLoadImage
                wrapperClassName="absolute w-[213px] top-[8%] right-[20%] -translate-x-1/2 cursor-pointer"
                className="w-full"
                src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${cristalHighlighted}/public`}
                alt="astronaut alerta labs"
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
            {/* <img
                src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${stationHighlighted}/public`} alt="Station" 
                className="absolute w-[320px] bottom-[15%] right-[5%] cursor-pointer"
                onMouseEnter={() => handleHover("[codecrumb] NEW tech, new tricks_")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("[codecrumb] NEW tech, new tricks_")}
            /> */}
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
            {/* <img
                src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${satelliteHighlighted}/public`} alt="Satellite" 
                className="absolute w-[400px] bottom-[5%] left-0 cursor-pointer z-1"
                onMouseEnter={() => handleHover("[UPDATE BASE] App-building in zero-G_")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("[UPDATE BASE] App-building in zero-G_")}
            /> */}
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
            <img 
                className="absolute w-full h-full z-1 pointer-events-none"
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/d2a95ff8-65a1-439b-cc90-ded1b8d0aa00/public" 
                alt="vignette" 
            />
            {homeTitle === homeTilteInitialValue && 
                <p className="absolute left-[5%] bottom-26 text-white text-2xl font-[Space_Mono] font-bold z-2">CHOOSE YOUR PATH AND</p>
            }
            <h1 className="absolute left-[5%] bottom-15 text-white text-5xl font-[Space_Mono] font-bold z-2">{homeTitle}</h1>
        </main>
    );

}

export default Home;