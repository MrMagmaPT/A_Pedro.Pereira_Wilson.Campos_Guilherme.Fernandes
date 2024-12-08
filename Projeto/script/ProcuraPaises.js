/*const countryNamesPT = {
    "Afghanistan": "Afeganistão",
    "Albania": "Albânia",
    "Algeria": "Argélia",
    "Andorra": "Andorra",
    "Angola": "Angola",
    "Antigua and Barbuda": "Antígua e Barbuda",
    "Argentina": "Argentina",
    "Armenia": "Arménia",
    "Australia": "Austrália",
    "Austria": "Áustria",
    "Azerbaijan": "Azerbaijão",
    "Bahamas": "Bahamas",
    "Bahrain": "Barém",
    "Bangladesh": "Bangladesh",
    "Barbados": "Barbados",
    "Belarus": "Bielorrússia",
    "Belgium": "Bélgica",
    "Belize": "Belize",
    "Benin": "Benim",
    "Bhutan": "Butão",
    "Bolivia": "Bolívia",
    "Bosnia and Herzegovina": "Bósnia e Herzegovina",
    "Botswana": "Botsuana",
    "Brazil": "Brasil",
    "Brunei": "Brunei",
    "Bulgaria": "Bulgária",
    "Burkina Faso": "Burquina Faso",
    "Burundi": "Burundi",
    "Cabo Verde": "Cabo Verde",
    "Cambodia": "Camboja",
    "Cameroon": "Camarões",
    "Canada": "Canadá",
    "Central African Republic": "República Centro-Africana",
    "Chad": "Chade",
    "Chile": "Chile",
    "China": "China",
    "Colombia": "Colômbia",
    "Comoros": "Comores",
    "Congo (Congo-Brazzaville)": "Congo (Congo-Brazzaville)",
    "Costa Rica": "Costa Rica",
    "Croatia": "Croácia",
    "Cuba": "Cuba",
    "Cyprus": "Chipre",
    "Czechia (Czech Republic)": "Chequia (República Checa)",
    "Denmark": "Dinamarca",
    "Djibouti": "Djibouti",
    "Dominica": "Dominica",
    "Dominican Republic": "República Dominicana",
    "DR Congo (Congo-Kinshasa)": "República Democrática do Congo (Congo-Kinshasa)",
    "Ecuador": "Equador",
    "Egypt": "Egito",
    "El Salvador": "El Salvador",
    "Equatorial Guinea": "Guiné Equatorial",
    "Eritrea": "Eritreia",
    "Estonia": "Estónia",
    "Eswatini": "Eswatini",
    "Ethiopia": "Etiópia",
    "Fiji": "Fiji",
    "Finland": "Finlândia",
    "France": "França",
    "Gabon": "Gabão",
    "Gambia": "Gâmbia",
    "Georgia": "Geórgia",
    "Germany": "Alemanha",
    "Ghana": "Gana",
    "Greece": "Grécia",
    "Grenada": "Granada",
    "Guatemala": "Guatemala",
    "Guinea": "Guiné",
    "Guinea-Bissau": "Guiné-Bissau",
    "Guyana": "Guiana",
    "Haiti": "Haiti",
    "Honduras": "Honduras",
    "Hungary": "Hungria",
    "Iceland": "Islândia",
    "India": "Índia",
    "Indonesia": "Indonésia",
    "Iran": "Irão",
    "Iraq": "Iraque",
    "Ireland": "Irlanda",
    "Israel": "Israel",
    "Italy": "Itália",
    "Jamaica": "Jamaica",
    "Japan": "Japão",
    "Jordan": "Jordânia",
    "Kazakhstan": "Cazaquistão",
    "Kenya": "Quénia",
    "Kiribati": "Kiribati",
    "Kuwait": "Kuwait",
    "Kyrgyzstan": "Quirguistão",
    "Laos": "Laos",
    "Latvia": "Letónia",
    "Lebanon": "Líbano",
    "Lesotho": "Lesoto",
    "Liberia": "Libéria",
    "Libya": "Líbia",
    "Liechtenstein": "Liechtenstein",
    "Lithuania": "Lituânia",
    "Luxembourg": "Luxemburgo",
    "Madagascar": "Madagáscar",
    "Malawi": "Malawi",
    "Malaysia": "Malásia",
    "Maldives": "Maldivas",
    "Mali": "Mali",
    "Malta": "Malta",
    "Marshall Islands": "Ilhas Marshall",
    "Mauritania": "Mauritânia",
    "Mauritius": "Maurícia",
    "Mexico": "México",
    "Micronesia": "Micronésia",
    "Moldova": "Moldávia",
    "Monaco": "Mónaco",
    "Mongolia": "Mongólia",
    "Montenegro": "Montenegro",
    "Morocco": "Marrocos",
    "Mozambique": "Moçambique",
    "Myanmar (Burma)": "Mianmar (Birmânia)",
    "Namibia": "Namíbia",
    "Nauru": "Nauru",
    "Nepal": "Nepal",
    "Netherlands": "Países Baixos",
    "New Zealand": "Nova Zelândia",
    "Nicaragua": "Nicarágua",
    "Niger": "Níger",
    "Nigeria": "Nigéria",
    "North Korea": "Coreia do Norte",
    "North Macedonia": "Macedônia do Norte",
    "Norway": "Noruega",
    "Oman": "Omã",
    "Pakistan": "Paquistão",
    "Palau": "Palau",
    "Palestine State": "Estado da Palestina",
    "Panama": "Panamá",
    "Papua New Guinea": "Papua Nova Guiné",
    "Paraguay": "Paraguai",
    "Peru": "Peru",
    "Philippines": "Filipinas",
    "Poland": "Polônia",
    "Portugal": "Portugal",
    "Qatar": "Catar",
    "Romania": "Romênia",
    "Russia": "Rússia",
    "Rwanda": "Ruanda",
    "Saint Kitts and Nevis": "São Cristóvão e Nevis",
    "Saint Lucia": "Santa Lúcia",
    "Saint Vincent and the Grenadines": "São Vicente e Granadinas",
    "Samoa": "Samoa",
    "San Marino": "San Marino",
    "Sao Tome and Principe": "São Tomé e Príncipe",
    "Saudi Arabia": "Arábia Saudita",
    "Senegal": "Senegal",
    "Serbia": "Sérvia",
    "Seychelles": "Seicheles",
    "Sierra Leone": "Serra Leoa",
    "Singapore": "Singapura",
    "Slovakia": "Eslováquia",
    "Slovenia": "Eslovênia",
    "Solomon Islands": "Ilhas Salomão",
    "Somalia": "Somália",
    "South Africa": "África do Sul",
    "South Korea": "Coreia do Sul",
    "South Sudan": "Sudão do Sul",
    "Spain": "Espanha",
    "Sri Lanka": "Sri Lanka",
    "Sudan": "Sudão",
    "Suriname": "Suriname",
    "Sweden": "Suécia",
    "Switzerland": "Suíça",
    "Syria": "Síria",
    "Taiwan": "Taiwan",
    "Tajikistan": "Tajiquistão",
    "Tanzania": "Tanzânia",
    "Thailand": "Tailândia",
    "Timor-Leste": "Timor-Leste",
    "Togo": "Togo",
    "Tonga": "Tonga",
    "Trinidad and Tobago": "Trindade e Tobago",
    "Tunisia": "Tunísia",
    "Turkey": "Turquia",
    "Turkmenistan": "Turquemenistão",
    "Tuvalu": "Tuvalu",
    "Uganda": "Uganda",
    "Ukraine": "Ucrânia",
    "United Arab Emirates": "Emirados Árabes Unidos",
    "United Kingdom": "Reino Unido",
    "United States of America": "Estados Unidos da América",
    "Uruguay": "Uruguai",
    "Uzbekistan": "Uzbequistão",
    "Vanuatu": "Vanuatu",
    "Vatican City": "Cidade do Vaticano",
    "Venezuela": "Venezuela",
};
*/

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

document.addEventListener("DOMContentLoaded", function() {
    const countriesContainer = document.getElementById('countries');
    let countriesData = [];

    // Função para exibir os países
    function displayCountries(countries) {
        countriesContainer.innerHTML = '';  // Limpar os cards existentes
        countries.forEach(country => {
            const countryName = country.name.common;
            const countryCard = createCountryCard(country, countryName);
            countriesContainer.appendChild(countryCard);
        });
    }

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => {
            countriesData = countries;
            displayCountries(countries);
        })
        .catch(error => console.error('Erro ao buscar países:', error));

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

