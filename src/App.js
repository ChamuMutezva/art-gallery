import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.js';
import Location from './pages/Location.js';
import { DataProvider } from './context/DataContext.js';

import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="Location" element={<Location />} />
          </Routes>        
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
