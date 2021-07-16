import "../../components/Search/Search.css";

const Search = () => {
  const view = `
            <div class="search">
                <h1 class="search--title">Search here your Cocktail Favorite!</h1>
                <input class="search--input" id="search--input" type="text">
                <div class="search--buttons">   
                    <a href="#results"><button class="search-button">Search</button></a>
                </div>
            </div>
      `;

      document.addEventListener('click', () => {
        const userSearch = document.getElementById("search--input").value;
        localStorage.setItem('userSearch',userSearch);
        }); 

  return view;
    };
    export default Search;