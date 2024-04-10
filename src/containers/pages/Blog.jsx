import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";

const Blog = () => {
    return (    
        <Layout> 
            <Navbar/>
            <div className="pt-32"> 
                Blog 
            </div>
            <Footer/>
        </Layout>
    );
}

export default Blog;