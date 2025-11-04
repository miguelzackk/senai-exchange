const toggle = document.getElementById("tema-escuro-toggle");
const tema = document.getElementById("tema");
const perfilIcon = document.getElementById("perfil-icon");
const logoSenai = document.getElementById("logo-senai");

const hpTrianglePointer = document.getElementById("helpPageTrianglePointer");
const homeIcon = document.getElementById("dark-theme-home");
const bellIcon = document.getElementById("dark-theme-bell");
const chatIcon = document.getElementById("dark-theme-chat");
const lensIcon = document.getElementById("dark-theme-lens");
const questionIcon = document.getElementById("dark-theme-question");
const bookIcon = document.getElementById("dark-theme-book");
const pencilIcon = document.getElementById("dark-theme-pencil");
const searchIcon = document.getElementById("dark-theme-search");

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

  tema.alt = darkMode ? "Tema Claro" : "Tema Escuro";
  perfilIcon.alt = darkMode ? "Perfil (tema escuro)" : "Perfil";
  logoSenai.alt = darkMode ? "Logo SENAI (tema escuro)" : "Logo SENAI";


});

// SideBar Funcional
(function () {
      const drawer = document.getElementById("drawer");
      const menuToggle = document.getElementById("menuToggle");
      const mainContent = document.getElementById("mainContent");

      function openDrawer() {
        drawer.classList.add("open");
        drawer.setAttribute("aria-hidden", "false");
        document.body.classList.add("overlay");
      }

      function closeDrawer() {
        drawer.classList.remove("open");
        drawer.setAttribute("aria-hidden", "true");
        document.body.classList.remove("overlay");
      }

      menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        if (drawer.classList.contains("open")) closeDrawer();
        else openDrawer();
      });

      // fechar ao clicar fora
      document.addEventListener("click", (event) => {
        if (
          drawer.classList.contains("open") &&
          !drawer.contains(event.target) &&
          !menuToggle.contains(event.target)
        ) {
          closeDrawer();
        }
      });

      // fechar com ESC
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
      });
    })();