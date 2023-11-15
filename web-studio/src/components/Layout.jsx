import { Outlet } from 'react-router-dom';
import Header from '../section/Header';
import Footer from '../section/Footer';
import Container from './Container';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <main>
        <Outlet />
      </main>
      <footer className="bg-background ">
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
};

export default Layout;
