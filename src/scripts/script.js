document.addEventListener("DOMContentLoaded", () => {
  // ============================
  // 🔹 Alternar Tema Escuro / Claro
  // ============================
  const toggle = document.getElementById("tema-escuro-toggle");
  const tema = document.getElementById("tema");
  const perfilIcon = document.getElementById("perfil-icon");
  const logoSenai = document.getElementById("logo-senai");

  const homeIcon = document.getElementById("dark-theme-home");
  const bellIcon = document.getElementById("dark-theme-bell");
  const chatIcon = document.getElementById("dark-theme-chat");
  const lensIcon = document.getElementById("dark-theme-lens");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const darkMode = document.body.classList.contains("dark-mode");

      // Ícones do top menu
      tema.src = darkMode
        ? "/src/assets/images/sun-white-icon.svg"
        : "/src/assets/images/moon-icon.svg";
      perfilIcon.src = darkMode
        ? "/src/assets/images/perfil-white-icon.svg"
        : "/src/assets/images/perfil.svg";
      logoSenai.src = darkMode
        ? "/src/assets/images/logo-mini-white.svg"
        : "/src/assets/images/logo-mini.svg";

      // Ícones do footer
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
    });
  }

  // ============================
  // 🔹 Menu Lateral (Sidebar)
  // ============================
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const perfilBtn = document.getElementById("perfil-btn");
  const closeBtn = document.getElementById("close-menu");

  // Abre o menu
  perfilBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("active");
  });

  // Fecha o menu
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });

  // Fecha clicando fora do menu
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });
});