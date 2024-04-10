import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";

const Services = () => {
    return (    
        <Layout> 
            <Navbar/>
            <div className="pt-32"> 
                Services 
            </div>
            <Footer/>
        </Layout>
    );
}

export default Services;