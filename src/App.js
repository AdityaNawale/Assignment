import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Outlet } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <div>
     <Outlet/>
    </div>
  );
}

export default App;
