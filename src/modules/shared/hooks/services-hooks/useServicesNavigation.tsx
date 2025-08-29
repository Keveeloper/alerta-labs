import { useNavigate } from "react-router";
import useSpacialObjectStore from "../../../../store/spacial-object-store/SpacialObjectsStore";
import { spacialObjectsData } from "../../../home/spacial-objects/spacial-objects-data";

export const useCustomNavigation = () => {
    const navigate = useNavigate();
    const { setSpacialObjectKey } = useSpacialObjectStore();

    const handleNavigation = (text: string, onClose?: () => void) => {
        switch (text) {
            case '/packages':
                navigate(text);
                break;
            case '/portfolio':
                navigate(text);
                break;
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
        if (onClose) onClose();
    };

    return handleNavigation;
};