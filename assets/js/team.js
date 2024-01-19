
window.onload = function () {
  document.getElementById("cards").onmousemove = e => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }
  fetchJson('team_list.json').then(jsonData=>{
    jsonData.forEach(person => {
      // Extract information from each person
      const name = person.name;
      const role = person.role;
      const pictureDirectory = person.pictureDirectory;
      insertCard(name,role,pictureDirectory)
    })

  })
  
}

function insertCard(name, role, imgSrc) {
  // HTML content to be inserted
  const cardContent = `
      <div class="card">
          <div class="card-content">
              <div class="card-image">
                  <img src="${imgSrc}"/>
              </div>
              <div class="card-info-wrapper">
                  <div class="card-info">
                      <i class="fa-duotone fa-apartment"></i>
                      <div class="card-info-title">
                          <h3>${name}</h3>
                          <h4>${role}</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;

  // Get the element with the ID "card"
  const cardElement = document.getElementById("cards");
  // Check if the element exists
  if (cardElement) {
    // Insert the HTML content into the element
    cardElement.innerHTML = cardElement.innerHTML+cardContent;
  } else {
    console.error("Element with ID 'card' not found.");
  }
}

function fetchJson(input){
  return fetch(input)
    .then(response => {
      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON from the response
      return response.json();
    })
    .catch(error => {
      // Handle errors during the fetch
      console.error('Error during fetch:', error);
    });
}
// Call the function to insert the card content into the element with ID "card"
