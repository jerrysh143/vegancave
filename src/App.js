// import Login from './Pages/AuthPage/Login';
// import ResetPassword from './Pages/AuthPage/ResetPassword';
// import SignUp from './Pages/AuthPage/SignUp';
import Home from './Pages/homepage/Home';
import About from "./Pages/aboutUs/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
