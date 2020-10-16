const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create map
const map = L.map("mapid", options).setView([-8.0612817, -34.8926457], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add maker
L.marker([-8.0612817, -34.8926457], { icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  // remove todas as classes active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  //seleciona a imagem clicada
  const image = button.children[0];
  //atualiza o container da imagem
  const imageContainer = document.querySelector(".orphanage-details > img");
  imageContainer.src = image.src;
  //adiciona a classe active para esse botão
  button.classList.add("active");
}
