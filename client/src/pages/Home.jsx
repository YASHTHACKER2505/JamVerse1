import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import InfoCards from "../components/home/InfoCards";
import About from "../components/home/About";
import BookingForm from "../components/booking/BookingForm";
import PaymentCard from "../components/payment/PaymentCard";
import Terms from "../components/home/Terms";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoCards />
      <About />
      <BookingForm />
      <PaymentCard />
      <Terms />
<Contact />
<Footer />
    </>
  );
};

export default Home;