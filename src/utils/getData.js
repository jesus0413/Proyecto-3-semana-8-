const URI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const getData = async (strDrink) => {

    let URL_SEARCH = `${URI}${strDrink}`;
    console.log(`URL para ser consultada por el API: ${URL_SEARCH}`);
    try{
        const response = await fetch(URL_SEARCH);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.error('Error get Data',error);
    } 
}

export default getData;