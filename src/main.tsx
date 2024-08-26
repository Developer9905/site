import  React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Spinner from './components/resuable/Spinner.tsx';

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2 saniyə sonra loading-i false-a dəyişirik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function, komponent unmount olunduqda timer-ı təmizləyir
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {loading ? <Spinner /> : <App />}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<RootComponent />);
