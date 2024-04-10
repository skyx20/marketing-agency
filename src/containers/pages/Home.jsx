import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";

const Home = () => {
    return (    
        <Layout> 
            <Navbar/>
            <div className="pt-32"> 
                Home 
            </div>
            <Footer/>
        </Layout>
    );
}

export default Home;