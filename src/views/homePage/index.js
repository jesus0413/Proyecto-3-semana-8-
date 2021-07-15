import "./homepage.css";
import Search from "../../components/Search";
const Homepage = () => {
  const view = `
          <div class="container--homepage">
           ${Search()}
          </div>
      `;
  return view;
};
export default Homepage;