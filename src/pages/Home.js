import Footer from '../components/Footer';
import Form from '../components/Form';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
