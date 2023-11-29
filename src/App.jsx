import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import MyHeader from './assets/components/Header';
import Home from './assets/components/Home'
import Footer from './assets/components/Footer';
import Values from './assets/components/Values';
import Departments from './assets/components/Departments';
import Doctors from './assets/components/Doctors';

const App = () => {
  return (
    <>
      <MyHeader></MyHeader>
      <Home></Home>
      <Values></Values>
      <Departments></Departments>
      <Doctors></Doctors>>
      <Footer></Footer>
    </>
  );
};

export default App;
