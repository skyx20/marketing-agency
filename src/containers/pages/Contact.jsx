import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";
import {useEffect} from 'react'

const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
        }, []);
    return (    
        <Layout> 
            <Navbar/>
            <div className="pt-32"> 
                Contact 
            </div>
            <Footer/>
        </Layout>
    );
}

export default Contact;