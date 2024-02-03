const loadCountries = ()=>{
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = (countries)=>{
    // for(const country of countries){
    //     console.log()
    // }
    const countriesDiv = document.getElementById('countries');

    countries.forEach((country)=>{
        const div = document.createElement("div");
        // div.classList.add("country-div");
        // const h3 = document.createElement("h3");
        // h3.classList.add("country-h3");
        // h3.innerText = country.flags.png;
        // div.appendChild(h3);

         const p = document.createElement("p");
          p.classList.add("country-p");
        p.innerText = country.flag.alt;
        div.appendChild(p);

        countriesDiv.appendChild(div);

    })
}