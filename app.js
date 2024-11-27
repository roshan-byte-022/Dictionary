const input = document.querySelector(".input");
const btn = document.querySelector(".button");
const result = document.querySelector(".result");
const star = document.querySelector("body");

btn.addEventListener("click", ()=>{
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            result.innerHTML = data[0].meanings[0].definitions[0].definition;
                })
  .catch(error => result.innerHTML = error);
});

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
})