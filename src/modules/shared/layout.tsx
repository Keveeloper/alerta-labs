import { LayoutProps } from "./types/types";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = (props: LayoutProps) => {

    const { children } = props;

    return (
        <> 
            <Navbar />
            {children}
            <Footer/>
        </>
    );

}

export default Layout;