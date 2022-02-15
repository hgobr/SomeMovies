import Logo from '../components/Logo';
import Movies from '../components/Movies';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Movies />
    </div>
  );
};

export default Home;
