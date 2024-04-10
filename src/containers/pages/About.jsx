import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";

const Cases = () => {
    return (    
        <Layout> 
            <Navbar/>
            <div className="pt-32"> 
                About us 
            </div>
            <Footer/>
        </Layout>
    );
}

export default Cases;