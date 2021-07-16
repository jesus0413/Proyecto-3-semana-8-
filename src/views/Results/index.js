import "../Results/results.css";
import getData from "../../utils/getData";


const Results = async() => {

    let userInput = localStorage.getItem('userSearch');

    const drinks = await getData(userInput);
      const view = `
 <div class="container--results">
        <h1>Results</h1>
        <div class="container-grid">
        ${drinks.drinks.map(drink => `  
            <div class="item-container">
                <div class="result-title">${drink.strDrink}</div>
                <div class="result-img"><img src="${drink.strDrinkThumb}"width="400"height="400"></div>
                <div class ="components">Ingredients:
                <div class="result-measure">
                <ol>
                   <li>${drink.strMeasure1}</li>
                    <li>${drink.strMeasure2}</li>
                     <li>${drink.strMeasure3}</li>
                     <li>${drink.strMeasure4}</li>
                     <li>${drink.strMeasure5}</li>
                        </ol>
                    </div>
                
                <div class="ingredient">
                <ul>
                   <li>${drink.strIngredient1}</li>
                    <li>${drink.strIngredient2}</li>
                     <li>${drink.strIngredient3}</li>
                     <li>${drink.strIngredient4}</li>
                     <li>${drink.strIngredient5}</li>
                        </ul>
                    </div>
                    </div>
                <div class="result-instructions"translate="yes">how to prepare: ${drink.strInstructions}</div>
            </div>

        `).join('')}
        </div>
    </div>`;
    return view;
}
export default Results;