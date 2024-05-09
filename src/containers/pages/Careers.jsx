import Header from "../../components/careers/Header";
import PositionsList from "../../components/careers/PositionList";
import Testimonial from "../../components/careers/Testimonial";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layout/Layout";
import { useEffect } from 'react'

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Layout>
            <Navbar />
            <div className="pt-32">
                <Header />
                <Testimonial />
                <PositionsList />

            </div>
            <Footer />
        </Layout>
    );
}

export default Careers;