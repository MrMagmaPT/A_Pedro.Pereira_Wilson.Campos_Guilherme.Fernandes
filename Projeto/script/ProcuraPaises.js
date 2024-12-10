document.addEventListener("DOMContentLoaded", function() {
    const countriesContainer = document.getElementById('countries');
    let countriesData = [];

    // Função para criar um card de país
    function createCountryCard(country, countryName) {
        const countryCard = document.createElement('div');
        countryCard.className = 'col-md-4';
        countryCard.innerHTML = `
            <div class="card">
                <img src="${country.flags.png}" class="card-img-top" alt="${countryName}">
                <div class="card-body">
                    <h5 class="card-title">${countryName}</h5>
                </div>
            </div>
        `;
        countryCard.addEventListener('click', () => {
            window.location.href = `detalhes.html?name=${countryName}`;
        });
        return countryCard;
    }

    // Função para exibir os países
    function displayCountries(countries) {
        countriesContainer.innerHTML = '';  // Limpar os cards existentes
        countries.forEach(country => {
            const countryName = country.name.common;
            const countryCard = createCountryCard(country, countryName);
            countriesContainer.appendChild(countryCard);
        });
    }

    // Função para fazer a chamada AJAX
    function BuscarPaises() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.com/v3.1/all", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                countriesData = JSON.parse(xhr.responseText);
                displayCountries(countriesData);
            }
        };
        xhr.send();
    }

    $.ajax({
        type: 'GET',
          dataType:"jsonp",
        url: 'https://restcountries.com/v3.1/all',
        headers:{         
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
            
        },
        success: function (data, status, xhr) {
          console.log('data: ', data);
        }
      });

    // Chamar a função para buscar os países
    BuscarPaises();

    // Adicionar evento de pesquisa
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCountries = countriesData.filter(country => {
            const countryName = country.name.common;
            return countryName.toLowerCase().includes(searchTerm);
        });
        displayCountries(filteredCountries);
    });
});

