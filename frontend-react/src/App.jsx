import { useState, useEffect } from "react";
import "./App.css";
import Giris from "./components/Giris";
import Profil from "./components/Profil";

function App() {
  // Token var mı yok mu? Başlangıçta localStorage'a bakıyoruz.
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="container">
      <h1>Frontend & Backend Projesi 🚀</h1>

      {/* KARAR ANI (Conditional Rendering) */}
      {/* Token varsa PROFIL göster, yoksa GIRIS göster */}

      {token ? <Profil setToken={setToken} /> : <Giris setToken={setToken} />}
    </div>
  );
}

export default App;
