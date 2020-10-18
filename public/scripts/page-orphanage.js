const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//create map
const map = L.map("mapid", options).setView([lat, lng], 15);

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

L.marker([lat, lng], { icon }).addTo(map);

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

function validate(event) {
  const accept = confirm('Deseja realmente deletar?')

  if(accept) {
    return
  } else {
    event.preventDefault();   
  }
}