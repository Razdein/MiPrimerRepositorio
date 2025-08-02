    const btn = document.getElementById("toggleBtn");
    const contenido = document.getElementById("contenido");

    btn.addEventListener("click", () => {
      const visible = contenido.style.display === "block";
      contenido.style.display = visible ? "none" : "block";
      btn.textContent = visible ? "Mostrar más" : "Mostrar menos";
    });