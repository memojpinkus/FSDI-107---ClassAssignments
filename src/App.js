import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QtyPicker from './components/qtyPicker';
import Catalog from './components/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return(<div className = "App">
          <NavBar></NavBar>
          <Catalog></Catalog>
          <Footer></Footer>
        </div>);
}

export default App;