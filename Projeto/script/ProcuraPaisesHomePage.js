const countries_container = document.querySelector("countriesHomePage");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restfulcountries.com/v.3.1/name/United%20Kingdom");
//final Results=xhr.send();
xhr.send();

xhr.addEventListener("load", function(){ 
     //     console.log(this);
     console.log(this.responseText);
     const [data]=JSON.parse(this.responseText);
     console.log(data);
     const htmlUI=' <div class="container text-center mt-5" id="countriesHomePage">
            <p class="escolha-pais">Países</p>
            <p>Escolha um destino para explorar a sua singularidade, cultura e atrações. Descubra os lugares mais cativantes do mundo, cada um oferecendo experiências inesquecíveis.</p>
            <div class="row mt-4 linha" id="countries">       
                <div class="col-md-4">
                    <div class="card">
                        <img src="${data.flag.png}" class="card-img-top" alt="País">
                        <div class="card-body">
                            <h5 class="card-title">${data.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>';

        countries_container.insertAdjacentHTML('beforeend', htmlUI);
})

// xhr.open("GET", "https://restfulcountries.com/v.3.1/name/USA");
// xhr.open("GET", "https://restfulcountries.com/v.3.1/name/Canada");
