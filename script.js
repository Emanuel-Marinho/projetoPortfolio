function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/fotoEmanuel.jpeg")
    img.setAttribute("alt", "Minha imagem sorrindo")
  } else {
    img.setAttribute("src", "assets/fotoEmanuelDark.jpg")
    img.setAttribute("alt", "Minha imagem sério")
  }
}
