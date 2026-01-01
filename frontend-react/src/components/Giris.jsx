import { useState } from "react";

function Giris({ setToken }) {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  const girisYap = async () => {
    try {
      console.log("Sunucuya istek gönderiliyor...");
      const cevap = await fetch("http://localhost:3000/api/giris", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, sifre: sifre }),
      });

      const veri = await cevap.json();

      if (cevap.ok) {
        alert("Giriş Başarılı! Hoşgeldin 🚀");
        localStorage.setItem("token", veri.token);
        // ÖNEMLİ: Ana kumandayı güncelle ki sayfa değişsin!
        setToken(veri.token);
      } else {
        alert("Hata: " + veri.hata);
      }
    } catch (error) {
      alert("Sunucuya bağlanılamadı! Backend açık mı?");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px" }}>
      <h2>Giriş Yap</h2>
      <form>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: "block",
            marginBottom: "10px",
            padding: "8px",
            width: "100%",
          }}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
          style={{
            display: "block",
            marginBottom: "10px",
            padding: "8px",
            width: "100%",
          }}
        />
        <button
          type="button"
          onClick={girisYap}
          style={{ padding: "10px 20px" }}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default Giris;
