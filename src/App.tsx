import Navbar from './components/Navbar';
import BrandPanel from './components/BrandPanel';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import './styles/auth.css';

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="container">
        <div className="login-layout">
          <BrandPanel />
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}