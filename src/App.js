import './App.css';
import { ContextProvider } from './contexts/ContextProvider';
import Main from './pages/Main/Main';
function App() {

  return (
    <ContextProvider>
      <Main />
    </ContextProvider>

  );
}

export default App;
