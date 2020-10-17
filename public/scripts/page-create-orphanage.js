//create map
const map = L.map("mapid").setView([-8.0612817, -34.8926457], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add maker

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon

  marker && map.removeLayer(marker);

  // add icon layer

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar campo de fotos

function addPhotoField() {
  // pegar o container de #images
  const container = document.querySelector("#images");

  // pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone do ultima caixa de upload adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verifica se o campo está vazio, se estiver não adiciona o container
  if (newFieldContainer.children[0].value == "") {
    return;
  }
  // limpar conteudo escrito no campo antes de adicionar ao container #images
  newFieldContainer.children[0].value = "";

  //adicionar o clone ao container #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    // limpar campo
    span.parentNode.children[0].value = "";
    return;
  }
  // deletar campo
  span.parentNode.remove();
}

//select yer or no

function toggleSelect(event) {
  //retirar a class .active dos botões
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // colocar o active no botao clicado
  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

// valida se o mapa está sendo selecionado no formulario
function validate(event) {
  const mapMark = document.querySelector('[name="lat"]');

  if (mapMark.value == "") {
    event.preventDefault();
    alert("Selecione um ponto no mapa");
  }
}
