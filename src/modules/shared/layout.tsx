import { LayoutProps } from "./types/types";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import CanvasComponent from "./components/CanvasComponent";

const Layout = (props: LayoutProps) => {

    const { children } = props;

    return (
        <> 
            <CanvasComponent/>
            <Navbar />
            {children}
            <Footer/>
        </>
    );

}

export default Layout;