// Formdan veri alma ve kaydetme
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tarifForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault(); //Sayfanın yenilenmesini engeller
        const isim = document.getElementById("isim").value;
        const malzemeler = document.getElementById("malzemeler").value;
        const hazirlanis = document.getElementById("hazirlanis").value;
  
        const tarif = { isim, malzemeler, hazirlanis };
        let tarifler = JSON.parse(localStorage.getItem("tarifler")) || [];
        tarifler.push(tarif);
        localStorage.setItem("tarifler", JSON.stringify(tarifler));
  
        alert("Tarif kaydedildi!");
        form.reset();
      });
    }
  
    // Tabloda tarifleri gösterme
    const tablo = document.getElementById("tarifTablo");
    if (tablo) {
      let tarifler = JSON.parse(localStorage.getItem("tarifler")) || [];
      tarifler.forEach(tarif => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${tarif.isim}</td>
          <td>${tarif.malzemeler}</td>
          <td>${tarif.hazirlanis}</td>
        `;
        tablo.appendChild(tr);
      });
    }
  });
  