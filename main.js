
const url = `http://api.weatherapi.com/v1/current.json?key=e9a5d3b74bf84418b11193028231901&q=London`;

const header = document.querySelector('.header')
const form = document.querySelector('#form')
const input = document.querySelector('#input-city')

function removeCard() {
    //delete previous card
    const prevCard = document.querySelector('.card');
    if (prevCard) prevCard.remove();
};


function showError(errorMessage) {
    //html card
    const html = `<div class="card">${data.error.message}</div>`
    //show this card
    header.insertAdjacentHTML('afterend', html);
};

function showCard(name, country, temp_c, condition) {
    //show in card
    //html card
const html = ` 
<div class="card">
    <h2 class="card-city">${name}<span>${country}</span></h2>    
    <div class="card-weather">
        <div class="card-value">${temp_c}<sup>°c</sup></div>
        <img src="./img/example.png" alt="Weather" class="card-img">
    </div>
    <div class="clouds">${condition}</div>
</div>`

//show this card
header.insertAdjacentHTML('afterend', html);
};


form.onsubmit = function (e) {
    //cancel form
    e.preventDefault();

    // take value input
   let city = input.value.trim();
    
   //server request
        //adress
        const url = `http://api.weatherapi.com/v1/current.json?key=e9a5d3b74bf84418b11193028231901&q=${city}`;

        //request
   fetch(url)
   .then((Response) => {
        return Response.json()
   })

   .then((data) => {
        // audit mistake city
        if(data.error) {
                removeCard();
                showError(data.error.message);
        } else {
            //show card
                // data object
                    console.log(data);
                    console.log(data.location.name);
                    console.log(data.location.country);
                    console.log(data.current.temp_c);
                    console.log(data.current.condition.text);

                    //delete previous card
                    removeCard();

                    showCard(
                        data.location.name, 
                        data.location.country, 
                        data.current.temp_c, 
                        data.current.condition.text
                    );
                }
   });
}
