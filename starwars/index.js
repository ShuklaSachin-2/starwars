let getData = async (url) => {
  let res = await fetch(url);
  let data = await res.json();
  //   console.log(data);
  return data.results;
};

let search = async () => {
  let query = document.getElementById("query").value;
  let url = ` https://swapi.dev/api/people/?search=${query}`;

  let searchData = await getData(url);

  console.log(searchData);
  appendinsearch(searchData);
};

function appendinsearch(searchData) {
  const movies = document.querySelector("#movies");
  movies.innerHTML = null;
  searchData.forEach((element) => {
    let card = document.createElement("div");

    card.class = "card";
    card.addEventListener("click", () => {
      display([element]);
    });

    let left = document.createElement("div");
    left.id = "left";

    let name = document.createElement("p");
    let birth = document.createElement("p");
    let gender = document.createElement("p");
    name.innerText = element.name;
    birth.innerText = element.birth_year;
    gender.innerText = element.gender;
    let right = document.createElement("div");
    left.append(name, birth);
    right.append(gender);
    card.append(left, right);
    movies.append(card);
  });
}
let html;
let cont = document.getElementById("cont");
function display(el) {
  let a = document.querySelector(".search");
  let b = document.querySelector("#movies");
  // let a = document.querySelector("search");
  a.innerHTML = null;
  b.innerHTML = null;
  // search.innerHTML = null;
  console.log(el);
  el.forEach((el) => {
    // console.log(html);
    // let box = document.createElement("div");
    html = `<div class="app">
      <div class="person">
        <h1 class="character-name">${el.name}</h1>
        <div>
          <div>
            <h2>Personal Info</h2>
            <h4>"Birth Year" : ${el.birth_year}</h4>
            <h4>"Gender :" ${el.gender}</h4>
            <h4>"Height :" ${el.height}</h4>
          </div>
          <div>
            <h2>Anatomy</h2>
            <h4>"Eye Color :" ${el.eye_color}</h4>
            <h4>"Mass :" ${el.mass}</h4>
            <h4>"Hair Color :" ${el.hair_color}</h4>
          </div>
        </div>
        <button class="backButton">Go Back</button>
      </div>
    </div>`;
    cont.insertAdjacentHTML("beforeend", html);
    console.log(html);
    let btn = document
      .querySelector(".backButton")
      .addEventListener("click", () => {
        window.location.reload();
      });

    // cont.style.opacity = 1;
  });
}

let id;
function debounce(func, delay) {
  console.log("id", id);
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
}
