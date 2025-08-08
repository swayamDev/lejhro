import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import BackToTopButton from "@/components/BackToTopButton";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Blog />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Home;
