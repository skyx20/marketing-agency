import CasesList from "components/cases/CasesList";
import Header from "components/cases/Header";
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
                <CasesList/>
            </div>
            <Footer/>
        </Layout>
    );
}

export default Cases;