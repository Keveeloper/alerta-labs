import { useState } from "react";
import useSpacialStore from "../../store/SpacialStore";
import { Link } from "react-router";

const Home = () => {

    const { setTextHovered } = useSpacialStore();
    const [stationHighlighted, setStationHighlighted] = useState<string>('1cd060bc-6e36-4286-3d92-234765af0300');
    const [cristalHighlighted, setCristalHighlighted] = useState<string>('c86ffcab-84fb-4f9c-401b-7eb5d2a69900');
    const [nebulaHighlighted, setNebulaHighlighted] = useState<string>('642af0a5-a5a3-4134-fcf7-c785a9f01500');

    const handleHover = (text: string) => {
        setTextHovered(text);
        switch (text) {
            case '[codecrumb] NEW tech, new tricks_':
                setStationHighlighted('53b980b5-3df2-4291-1cc2-b1a699a35200');
                break;
            case '[futurebit] Experimental TECH, yet essential_':
                setCristalHighlighted('b6af95e2-98c6-4d16-576c-75c04cf87100');
                break;
            case '[UXxplosion] Cosmic clarity in pixels_':
                setNebulaHighlighted('3745c65f-ceda-4557-f643-11551e716000');
                break;
                default:
                    break;
                }
            }
            
    const handleMouseLeave = () => {
        setStationHighlighted('1cd060bc-6e36-4286-3d92-234765af0300');
        setCristalHighlighted('c86ffcab-84fb-4f9c-401b-7eb5d2a69900');
        setNebulaHighlighted('642af0a5-a5a3-4134-fcf7-c785a9f01500');
    }

    return (
        <main className="w-full h-lvh">
            <img 
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/47a4e8a6-c2b3-429f-c834-86343375a200/public" alt="solar system background" 
                className="fixed w-full h-full left-1/2 -translate-x-1/2 object-cover mix-blend-screen"
            />
            <img 
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/09cb6e8c-0893-4171-0e4a-dce1538b5d00/public" alt="astronaut alerta labs" 
                className="absolute bottom-[8%] left-1/2 -translate-x-1/2"
            />
            <img 
                src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${cristalHighlighted}/public`} alt="Glass diamonds" 
                className="absolute w-[213px] top-[8%] right-[20%] -translate-x-1/2"
                onMouseEnter={() => handleHover("[futurebit] Experimental TECH, yet essential_")}
                onMouseLeave={handleMouseLeave}
            />
            <img 
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/2a615b82-df16-482f-e78c-571588b7f600/public" alt="Asteroid" 
                className="absolute top-[20%] right-0 -translate-x-1/2"
                onMouseEnter={() => handleHover("[brand boulder] Built to carry identities_")}
                />
            <img 
                src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${stationHighlighted}/public`} alt="Station" 
                className="absolute w-[320px] bottom-[15%] right-[5%]"
                onMouseEnter={() => handleHover("[codecrumb] NEW tech, new tricks_")}
                onMouseLeave={handleMouseLeave}
            />
            <img 
                src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/973bfea9-3bb4-408f-1b85-0110a76cb300/public" alt="Satellite" 
                className="absolute w-[400px] bottom-[5%] left-0 z-1"
                onMouseEnter={() => handleHover("[update base] App-building in zero-G_")}
                />
            <Link to={'/services'}>
                <img 
                    src={`https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/${nebulaHighlighted}/public`} alt="Nebula" 
                    className="absolute w-[508px] top-[5%] left-[10%]"
                    onMouseEnter={() => handleHover("[UXxplosion] Cosmic clarity in pixels_")}
                    onMouseLeave={handleMouseLeave}
                />
            </Link>
        </main>
    );

}

export default Home;