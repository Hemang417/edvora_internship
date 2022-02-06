import './App.css';
import Container from './components/Container';
import Header from './components/Header'

function App() {
  return (
    <div className='homepage-background'>
      <div className='sidebar'>
        
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
