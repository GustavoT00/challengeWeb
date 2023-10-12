import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import { GiftExpertDApp } from './components/GiftExpertDApp'
import { ComponentApp } from './components/ComponentApp'
import { GifGrid } from './Hijos/GifGrid'
import Counter from './components/Counter'
import ToDoApp from './components/ToDoApp'
import App from './App'
import FirstApp from './components/FirstApp'
import NavComponent from './components/NavComponent'
import { MultipleCustomHooks } from './components/MultipleCustomHooks'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const RootComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <React.StrictMode>
      <App />
      <FirstApp title="My first App" value={10} />
      <ComponentApp />
      <GiftExpertDApp />
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <GifGrid category={searchTerm} />
      <Counter />
      <MultipleCustomHooks />
      <ToDoApp />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </BrowserRouter>

    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />);