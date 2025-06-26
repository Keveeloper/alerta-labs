import { Route, Routes } from "react-router";
import { lazy } from "react";
import { Suspense } from "react";
import Loader from "../modules/shared/components/Loader";

const Layout = lazy(() => import("../modules/shared/layout"));
const Home = lazy(() => import("../modules/home/Home"));
const Contact = lazy(() => import("../modules/contact/Contact"));
const Services = lazy(() => import("../modules/services/Services"));
const PackagesView = lazy(() => import("../modules/packages/Packages"));
const Portfolio = lazy(() => import("../modules/portfolio/Portfolio"));

const RootRouter = () => {

    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <Suspense fallback={<Loader/>}>
                        <Layout>
                            <Home/>
                        </Layout>
                    </Suspense>
                }
            />
            <Route 
                path="/services"
                element={
                    <Suspense fallback={<Loader/>}>
                        <Layout>
                            <Services/>
                        </Layout>
                    </Suspense>
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
            <Route 
                path="/portfolio"
                element={
                    <Suspense fallback={<Loader/>}>
                        <Layout>
                            <Portfolio/>
                        </Layout>
                    </Suspense>
                } 
            />
        </Routes>
    );
}

export default RootRouter;