import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import { GiftExpertDApp } from './components/GiftExpertDApp'
import { ComponentApp } from './components/ComponentApp'
import { GifGrid } from './Hijos/GifGrid'
import Counter from './components/Counter'
import ToDoApp from './components/ToDoApp'
import App from './App'
import FirstApp from './components/FirstApp'
import Navbar from './components/NavBar'
import { MultipleCustomHooks } from './components/MultipleCustomHooks'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext'
import Routes from './components/Routes'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Login from './components/LoginPage'
import Logout from './components/LogoutButton'
import PrivateRoute from './components/PrivateRoute'

const RootComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <React.StrictMode>
      <Provider store={store}>
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
        <AuthProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </AuthProvider>
      </Provider>
    </React.StrictMode>
    
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />);