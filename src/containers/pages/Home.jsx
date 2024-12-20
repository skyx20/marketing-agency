import CTA from "../../components/home/CTA";
import Features from "../../components/home/Features";
import Header from "../../components/home/Header";
import Incentives from "../../components/home/Incentives";
import LogoCloud from "../../components/home/LogoCloud";
import UseCases from "../../components/home/UseCases";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layout/Layout";
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Layout>
            <Navbar />
            <div className="pt-32">
                <Header />
                <Incentives />
                <UseCases />
                <Features />
                <CTA />
            </div>
            <Footer />
        </Layout>
    );
}

export default Home;