document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const countryName = urlParams.get('name');
    console.log('Country Name:', countryName);  // Log para depuração

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {
            console.log('API Response:', response);  // Log para depuração
            return response.json();
        })
        .then(countries => {
            console.log('Country Data:', countries);  // Log para depuração
            const country = countries[0];
            document.getElementById('country-name').textContent = country.name.common;
            document.getElementById('capital').textContent = country.capital ? country.capital[0] : 'N/A';
            document.getElementById('region').textContent = country.region;
            document.getElementById('subregion').textContent = country.subregion;
            document.getElementById('population').textContent = country.population.toLocaleString();
            document.getElementById('area').textContent = `${country.area.toLocaleString()} km²`;
            document.getElementById('flag').src = country.flags.png;
        })
        .catch(error => console.error('Erro ao buscar detalhes do país:', error));
});

jsonData = localStorage['jsonData'];
console.log("json");
console.log(JSON.parse(jsonData));

var countriesData = JSON.parse(jsonData);


for(var i=0;i<countriesData.length;i++){
    console.log(countriesData[i].name);
}