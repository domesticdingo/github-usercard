/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let cards = document.querySelector('.cards');

axios.get("https://api.github.com/users/domesticdingo")
  .then(response => {
    console.log(response);
    let myInfo = response.data;
    cards.appendChild (card (myInfo))
  })
  .catch(err => console.log("The data wasn't returned, ", error))
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach((name) => {
  axios.get(`https://api.github.com/users/${name}`)
      .then(response => {
          let cards = document.querySelector('.cards')
          cards.appendChild(card (response.data))
      })
      .catch(err => console.log("The data wasn't returned, ", error))
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function card (param) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let info = document.createElement("div");
  let name = document.createElement("h3");
  let user = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let profLink = document.createElement("a");
  let followers = document.createElement("p");
  let following = document.createElement("p");
  let bio = document.createElement("p");

  card.appendChild(img);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(user);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);
  profile.appendChild(profLink);

  name.textContent = param.name;
  img.src = param.avatar_url;
  user.textContent = param.login;
  location.textContent = param.location;
  profile.textContent = "Profile: ";
  profLink.setAttribute('href', param.html_url)
  profLink.textContent = "Link";
  followers.textContent = "Followers: " + param.followers;
  following.textContent = "Following: " + param.following;
  bio.textContent = "Bio: " + param.bio;

  card.classList.add('card');

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
