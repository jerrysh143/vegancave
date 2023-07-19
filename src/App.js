import Login from './Pages/AuthPage/Login.tsx';
import ResetPassword from './Pages/AuthPage/ResetPassword.tsx';
import SignUp from './Pages/AuthPage/SignUp.tsx';
import Home from './Pages/Homepage/index.tsx';
import Footer from './components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
