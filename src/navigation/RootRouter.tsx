import { Route, Routes } from "react-router";
import Layout from "../modules/shared/layout";
import Home from "../modules/home/Home";
import Contact from "../modules/contact/Contact";
import Services from "../modules/services/Services";
import PackagesView from "../modules/packages/Packages";

const RootRouter = () => {

    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <Layout>
                        <Home/>
                    </Layout>
                }
            />
            <Route 
                path="/services"
                element={
                    <Layout>
                        <Services/>
                    </Layout>
                } 
            />
             <Route 
                path="/contact"
                element={
                    <Contact/>
                } 
            />
            <Route 
                path="/packages"
                element={
                    <PackagesView/>
                } 
            />
        </Routes>
    );
}

export default RootRouter;