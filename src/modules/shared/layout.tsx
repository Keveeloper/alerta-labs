import { LayoutProps } from "./types/types";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import CanvasComponent from "./components/CanvasComponent";
import { usePortfolioFooterStore } from "../../store/portfolio-footer/usePortfolioFooterStore";

const Layout = (props: LayoutProps) => {

    const { children } = props;
    const { showFooter } = usePortfolioFooterStore();

    return (
        <> 
            <CanvasComponent/>
            <Navbar />
            {children}
            {showFooter && <Footer/>}
        </>
    );

}

export default Layout;