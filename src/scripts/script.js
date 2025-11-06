const toggle = document.getElementById("tema-escuro-toggle");
const tema = document.getElementById("tema");
const perfilIcon = document.getElementById("perfil-icon");
const logoSenai = document.getElementById("logo-senai");

const hpTrianglePointer = document.getElementById("helpPageTrianglePointer");
const homeIcon = document.getElementById("dark-theme-home");
const bellIcon = document.getElementById("dark-theme-bell");
const chatIcon = document.getElementById("dark-theme-chat");
const lensIcon = document.getElementById("dark-theme-lens");
const questionIcon = document.querySelector(".dark-theme-question");
const bookIcon = document.getElementById("dark-theme-book");
const pencilIcon = document.getElementById("dark-theme-pencil");
const searchIcon = document.getElementById("dark-theme-search");
const tagIcon = document.getElementById("dark-theme-tag");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const darkMode = document.body.classList.contains("dark-mode");

  // -- Top Menu --
  tema.src = darkMode
    ? "/src/assets/images/sun-white-icon.svg"
    : "/src/assets/images/moon-icon.svg";

  perfilIcon.src = darkMode
    ? "/src/assets/images/perfil-white-icon.svg"
    : "/src/assets/images/perfil.svg";

  logoSenai.src = darkMode
    ? "/src/assets/images/logo-mini-white.svg"
    : "/src/assets/images/logo-mini.svg";

    // -- Help Page About --
  if (hpTrianglePointer)
    hpTrianglePointer.src = darkMode
      ? "/src/assets/images/white-trianglePointer-icon.svg"
      : "/src/assets/images/trianglePointer-icon.svg";

    // -- Navigation Bar --
  if (homeIcon)
    homeIcon.src = darkMode
      ? "/src/assets/images/home-white-icon.svg"
      : "/src/assets/images/home-icon.svg";

  if (bellIcon)
    bellIcon.src = darkMode
      ? "/src/assets/images/bell-white-icon.svg"
      : "/src/assets/images/bell-icon.svg";

  if (chatIcon)
    chatIcon.src = darkMode
      ? "/src/assets/images/chat-white-icon.svg"
      : "/src/assets/images/chat-icon.svg";

  if (lensIcon)
    lensIcon.src = darkMode
      ? "/src/assets/images/lens-white-icon.svg"
      : "/src/assets/images/lens-icon.svg";

      // -- Help Page Service --
  if (questionIcon)
    questionIcon.src = darkMode
      ? "/src/assets/images/question-white-icon.svg"
      : "/src/assets/images/question-icon.svg";

  if (bookIcon)
    bookIcon.src = darkMode
      ? "/src/assets/images/book-white-icon.svg"
      : "/src/assets/images/book-icon.svg";

  if (pencilIcon)
    pencilIcon.src = darkMode
      ? "/src/assets/images/pencil-white-icon.svg"
      : "/src/assets/images/pencil-icon.svg";

  if (searchIcon)
    searchIcon.src = darkMode
      ? "/src/assets/images/lens-white-icon.svg"
      : "/src/assets/images/search-icon.svg";

	// -- Tags Page --
  if (tagIcon)
    tagIcon.src = darkMode
      ? "/src/assets/images/tag-white-icon.svg"
      : "/src/assets/images/tag-icon.svg";

  tema.alt = darkMode ? "Tema Claro" : "Tema Escuro";
  perfilIcon.alt = darkMode ? "Perfil (tema escuro)" : "Perfil";
  logoSenai.alt = darkMode ? "Logo SENAI (tema escuro)" : "Logo SENAI";


});