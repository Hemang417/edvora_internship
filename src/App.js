import './App.css';
import Container from './components/Container';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className='homepage-background'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <Header />
        <Container />
        <Container />
      </div>
    </div>
  );
}

export default App;
