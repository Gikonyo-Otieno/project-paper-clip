document.addEventListener("DOMContentLoaded", () => {

    // Rendering the event cards
     function renderOneEvent(event) {

        //Building event cards
        let card = document.createElement("div");
        card.className = "card"
        card.innerHTML = ` 
        <h4 class="my-0 fw-normal">${event.name}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">${event.price1}<small class="text-muted fw-light">/reg</small></h1><h1 class="card-title pricing-card-title">${event.price2}<small class="text-muted fw-light">/vip</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>${event.date}</li>
          <li>${event.time}</li>
          <li>${event.venue}</li>
          <li>${event.description}</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-primary" id="btn">Get tickets</button>`

      //Add event card to DOM
        document.querySelector("#hero").appendChild(card);
        card.addEventListener("click", function () {
            alert("Ticket request received successfully")
        })

     } 
     
     function getAllEvents () {
        fetch('http://localhost:3000/eventData')
        .then(res => res.json())
        .then(eventData => eventData.forEach(event => renderOneEvent(event)))
        console.log('before');
     }
    //  })

     //fetch requests
    //  function getEvents() {
    //     fetch('http://localhost:3000/eventData')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .then(eventData => eventData.forEach(event => renderOneEvent(event)))
    //     console.log('hi')
    //  }

     //Initial Render
     function initialize(){
        getAllEvents();
        
     }
     initialize();


    //  Adding event listeners
    let login = document.querySelector('#login')
    login.addEventListener('click',  () => {
        alert("Services are currently unavailable. Please try again later.")
    })
    let form = document.querySelector('#home_section')
    form.addEventListener('submit', () => {
        event.preventDefault()
        alert("Unable to submit, please try later.")
    })
    let signUp = document.querySelector('#signup')
    signUp.addEventListener('click',  () => {
        alert("Services are currently unavailable. Please try again later.")
    })
    let input = document.querySelector('#input')
    input.addEventListener('click',  () => {
        alert("You are being tracked.")
    })
    
});     