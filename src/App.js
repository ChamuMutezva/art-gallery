import MainPage from './pages/MainPage.js';
import { DataProvider } from './context/DataContext.js';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <MainPage />
      </DataProvider>
    </div>
  );
}

export default App;
