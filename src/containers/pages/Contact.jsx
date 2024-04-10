import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";

const Contact = () => {
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