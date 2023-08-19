const apiUrl = 'https://randomuser.me/api';
function getPerson() {
  return fetch(apiUrl)
    .then(response => response.json()) 
    .then(data => {
      let person1 = {
        fullName: data["results"][0]["name"],
        city: data["results"][0]["location"]["city"],
        timezone: data["results"][0]["location"]["timezone"],
        phone: data["results"][0]["phone"],
      }    
      const pstring = JSON.stringify(person1);
      var paragraph = document.createElement('p');
      paragraph.innerHTML = "<UL><LI> Name: "+person1.fullName["first"]+
      " "+person1.fullName["last"]+
      "</li><li> City: "+person1.city+"</li><li> Phone Number: "+person1.phone+"</li><li> Timezone: "+person1.timezone["description"]+"</li><ul>";

      var targetP = document.getElementById('persons');
    
      targetP.appendChild(paragraph);
  
      //console.log(person1)
      console.log(data["results"][0])
      })
    .catch(error => {
      console.error('Error fetching data:', error);
    });


}
p = getPerson()
console.log(p)

var button = document.getElementById('p-button');

button.addEventListener('click', getPerson);


