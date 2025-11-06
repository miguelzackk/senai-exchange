document.addEventListener("DOMContentLoaded", () => {
  //  Alternar Tema Escuro / Claro
  const perfilIcon = document.getElementById("perfil-icon");
  const logoSenai = document.getElementById("logo-senai");
  const temaIcon = document.getElementById("tema");
  const temaBtn = document.getElementById("tema-escuro-toggle");
  const homeIcon = document.getElementById("dark-theme-home");
  const bellIcon = document.getElementById("dark-theme-bell");
  const chatIcon = document.getElementById("dark-theme-chat");
  const lensIcon = document.getElementById("dark-theme-lens");

  // Função para alternar tema escuro
  function alternarTema() {
    document.body.classList.toggle("dark-mode");
    const darkMode = document.body.classList.contains("dark-mode");

    // Ícones do topo
    if (temaIcon)
      temaIcon.src = darkMode
        ? "/src/assets/images/sun-white-icon.svg"
        : "/src/assets/images/moon-icon.svg";
    if (perfilIcon)
      perfilIcon.src = darkMode
        ? "/src/assets/images/perfil-white-icon.svg"
        : "/src/assets/images/perfil.svg";
    if (logoSenai)
      logoSenai.src = darkMode
        ? "/src/assets/images/logo-mini-white.svg"
        : "/src/assets/images/logo-mini.svg";

    // Ícones da navbar inferior
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
  }

  if (temaBtn) {
    temaBtn.addEventListener("click", alternarTema);
  }

  //  suport icon -> Página "Sobre"
  const lampBtn = document.getElementById("lamp-btn");
  if (lampBtn) {
    lampBtn.addEventListener("click", () => {
      window.location.href = "/src/pages/helpPageAbout/helpPageAbout.html";
    });
  }

  //  Sidebar
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const perfilBtn = document.getElementById("perfil-btn");
  const closeBtn = document.getElementById("close-menu");

  perfilBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });

  // Fecha ao clicar fora
  if (overlay) {
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    });
  }
  // Pesquisa (filtros, limpar etc.)
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.querySelector(".clear-search");
  const recentList = document.getElementById("recentList");

  // Função de filtro reutilizável
  function filterUsers(text) {
    if (!recentList) return;
    const q = (text || "").toLowerCase().trim();
    const users = recentList.querySelectorAll(".user-card");
    users.forEach((u) => {
      const name = (u.dataset.name || u.textContent || "").toLowerCase();
      u.style.display = q === "" ? "flex" : name.includes(q) ? "flex" : "none";
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const has = searchInput.value.trim().length > 0;
      if (clearBtn) clearBtn.style.display = has ? "inline-flex" : "none";
      filterUsers(searchInput.value);
    });
    if (clearBtn) clearBtn.style.display = "none";
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      clearBtn.style.display = "none";
      filterUsers("");
    });
  }

  // Clicar na linha da pesquisa copia texto
  const lineAction = document.getElementById("submit-line");
  const lineLeft = document.querySelector(".search-line-left");
  if (lineAction && lineLeft && searchInput) {
    lineAction.addEventListener("click", () => {
      searchInput.value = lineLeft.textContent.trim();
      searchInput.dispatchEvent(new Event("input"));
    });
  }

  // Remover itens com animação
  document.querySelectorAll(".remove-search").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".user-card, .search-item");
      if (!item) return;
      item.style.transition = "all 0.28s ease";
      item.style.opacity = "0";
      item.style.height = "0";
      item.style.margin = "0";
      item.style.padding = "0";
      setTimeout(() => item.remove(), 300);
    });
  });

  // Inicializa com todos visíveis
  filterUsers("");
});
