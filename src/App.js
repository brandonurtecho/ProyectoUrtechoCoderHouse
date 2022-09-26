import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  let greeting = "Bienvenido"
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting={greeting}></ItemListContainer>
    </div>
  );
}

export default App;
