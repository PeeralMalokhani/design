import logo from './logo.svg';
import './App.css';
import Picture1 from './source/form/assets/images/bg-sidebar-desktop.svg'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
    <div className="container">
    <img src={Picture1} alt="" />
    <Sidebar/>
    </div>
    </>
  );
}

export default App;
