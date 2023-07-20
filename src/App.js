// import Login from './Pages/AuthPage/Login';
// import ResetPassword from './Pages/AuthPage/ResetPassword';
// import SignUp from './Pages/AuthPage/SignUp';
import Home from './Pages/Homepage/index';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />
      <Home />
      {/* <Login /> */}
      {/* <ResetPassword /> */}
      {/* <SignUp /> */}
      <Footer />
    </div>
  );
}

export default App;
