import Clients from "components/about/Clients";
import Features from "components/about/Features";
import Header from "components/about/Header";
import Images from "components/about/Images";
import Team from "components/about/Team";
import TestStats from "components/about/TestStats";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";
import {useEffect} from 'react'


const Cases = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        }, []);

    return (    
        <Layout> 
            <Navbar/>
            <div className="pt-32"> 
                <Header/>
                <TestStats/>
                <Images/>
                <Clients/>
                <Features/>
                <Team/>

            </div>
            <Footer/>
        </Layout>
    );
}

export default Cases;