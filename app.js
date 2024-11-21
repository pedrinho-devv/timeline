// Dados da linha do tempo
const timelineData = [
    {
      title: "📍 2019 - O início de tudo",
      text: "A primeira mensagem que mandei para ela.",
      img: "IMG-20241120-WA0022.jpg",
    },
    {
      title: "💌 2020 - O pedido de namoro",
      text: "O momento que mudou nossas vidas para sempre.",
      img: "foto2.jpg",
    },
    {
      title: "❤️ 2023 - Nossa primeira foto",
      text: "Um marco em nossas vidas. Uma foto de dois apaixonados",
      img: "foto3.jpg",
    },
  ];
  
  // Selecionando os elementos
  const markers = document.querySelectorAll(".timeline-marker");
  const content = document.getElementById("timeline-content");
  const title = content.querySelector("h3");
  const text = content.querySelector("p");
  const image = content.querySelector("img");
  
  // Adicionando evento de clique nos marcadores
  markers.forEach((marker) => {
    marker.addEventListener("click", () => {
      const index = marker.getAttribute("data-index");
      const data = timelineData[index];
  
      // Atualizando conteúdo
      title.textContent = data.title;
      text.textContent = data.text;
      image.setAttribute("src", data.img);
  
      // Mostrando a seção com animação
      content.style.display = "block";
    });
  });
  