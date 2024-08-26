import { useEffect, useState } from "react";
import { MainRouter } from "./routers/router";
import Spinner from "./components/resuable/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2 saniyə sonra loading-i false-a dəyişirik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Spinner /> : <MainRouter />;
}

export default App;
