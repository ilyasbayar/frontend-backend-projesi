// src/components/Profil.jsx

function Profil({ setToken }) {
  // Çıkış Yapma Fonksiyonu
  const cikisYap = () => {
    // 1. Token'ı cepten (localStorage) sil
    localStorage.removeItem("token");

    // 2. Ana kumandaya (App.jsx) haber ver: "Token artık yok"
    setToken(null);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid green",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2>🔓 Özel Alana Hoşgeldin!</h2>
      <p>Şu an giriş yapmış durumdasın.</p>
      <p>Bu yazıyı sadece token sahibi olanlar görebilir.</p>

      <button
        onClick={cikisYap}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Çıkış Yap 🚪
      </button>
    </div>
  );
}

export default Profil;
// src/components/Giris.jsx
