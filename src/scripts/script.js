        const toggle = document.getElementById("tema-escuro-toggle");
        const tema = document.getElementById("tema");
        const perfilIcon = document.getElementById("perfil-icon");
        const logoSenai = document.getElementById("logo-senai");
        const hpTrianglePointer = document.getElementById("helpPageTrianglePointer");
        const HomeIcon = document.getElementById("dark-theme-home");
        
        const BellIcon = document.getElementById("dark-theme-bell");
        
        const ChatIcon = document.getElementById("dark-theme-chat");
        
        const LensIcon= document.getElementById("dark-theme-lens");
        
        const QuestionIcon = document.getElementById("dark-theme-question");
        
        const BookIcon= document.getElementById("dark-theme-book");
        
        const PencilIcon= document.getElementById("dark-theme-pencil");
        
        const SearchIcon= document.getElementById("dark-theme-search");
        
        toggle.addEventListener("click", () => {
          document.body.classList.toggle("dark-mode");
          const darkMode = document.body.classList.contains("dark-mode");
  
          tema.src = darkMode
            ? "/src/assets/images/sun-white-icon.svg"
            : "/src/assets/images/moon-icon.svg";
  
          perfilIcon.src = darkMode
            ? "/src/assets/images/perfil-white-icon.svg"
            : "/src/assets/images/perfil.svg";
  
          logoSenai.src = darkMode
            ? "/src/assets/images/logo-mini-white.svg"
            : "/src/assets/images/logo-mini.svg";

             TrianglePointer.src = darkMode
             ? "/src/assets/images/white-trianglePointer-icon.svg"
             : "/src/assets/images/trianglePointer-icon.svg"

             HomeIcon.src = darkMode
             ? "/src/assets/images/home-white-icon.svg"
             : "/src/assets/images/home-icon.svg" 
             BellIcon.src = darkMode
             ? "/src/assets/images/bell-white-icon.svg"
             : "/src/assets/images/bell-icon.svg" 
             ChatIcon.src = darkMode
             ? "/src/assets/images/chat-white-icon.svg"
             : "/src/assets/images/chat-icon.svg" 

             LensIcon.src = darkMode
             ? "/src/assets/images/lens-white-icon.svg"
             : "/src/assets/images/lens-icon.svg" 

             QuestionIcon.src = darkMode
             ? "/src/assets/images/question-white-icon.svg"
             : "/src/assets/images/question-icon.svg" 
             BookIcon.src = darkMode
             ? "/src/assets/images/book-white-icon.svg"
             : "/src/assets/images/book-icon.svg" 
             PencilIcon.src = darkMode
             ? "/src/assets/images/pencil-white-icon.svg"
             : "/src/assets/images/pencil-icon.svg" 

             SearchIcon.src = darkMode
             ? "/src/assets/images/lens-white-icon.svg"
             : "/src/assets/images/search-icon.svg" 
  
             
          tema.alt = darkMode ? "Tema Claro" : "Tema Escuro";
          perfilIcon.alt = darkMode ? "Perfil (tema escuro)" : "Perfil";
          logoSenai.alt = darkMode ? "Logo SENAI (tema escuro)" : "Logo SENAI";

        });