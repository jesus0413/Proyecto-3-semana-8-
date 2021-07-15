import "./header.css";
import image from "../../assets/img/github-gato.png";

const Header = () => {
    const view = `
          <span class="header-home-img"><img src="${image}" alt="Logo"></span>
          <span><a href="#">Mas información</a></span>
      `;
    return view;
  };
  
  export default Header;