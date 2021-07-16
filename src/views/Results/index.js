import "../Results/results.css";
import getData from "../../utils/getData";

const Results = async() => {

    let userInput = localStorage.getItem('userSearch');

    const drinks = await getData(userInput);
      const view = `
 <div class="container--results">
        <h1>Resultados de la búsqueda</h1>
        <div class="container--results-grid">
        ${drinks.strDrink.map(drink => `  
            <div class="item-container">
                <div class="result-title">${drink.strDrink}</div>
                <div class="result-img"><img src="${drink.strDrinkThumb}"></div>
                <div class="result-measure">Medidas:
                <ol>
                   <li>${drink.strMeasure1}</li>
                    <li>${drink.strMeasure2}</li>
                     <li>${drink.strMeasure3}</li>
                     <li>${drink.strMeasure4}</li>
                     <li>${drink.strMeasure5}</li>
                        </ol>
                    </div>
                
                <div class="result-ingredient">Ingredientes:
                <ol>
                   <li>${drink.strIngredient1}</li>
                    <li>${drink.strIngredient2}</li>
                     <li>${drink.strIngredient3}</li>
                     <li>${drink.strIngredient4}</li>
                     <li>${drink.strIngredient5}</li>
                        </ol>
                    </div>
                <div class="result-instructions">Como preparar: ${drink.strInstructions}</div>
            </div>
        `).join('')}
        </div>
    </div>`;
    return view;
}
export default Results;