document.addEventListener("DOMContentLoaded", function () {

  const searchButton = document.querySelector(".search-box button");
  const searchInput = document.querySelector(".search-box input");

  searchButton.addEventListener("click", function () {

    const search = searchInput.value.trim();

    if (search === "") {
      alert("Please enter a city or location to search.");
    } else {
      alert("Searching for properties in: " + search);
    }

  });

  const sellButton = document.querySelector(".sell-btn");

  sellButton.addEventListener("click", function () {
    alert("Property listing will be available soon!");
  });

  const loginButton = document.querySelector(".login-btn");

  loginButton.addEventListener("click", function () {
    alert("Login and registration will be added soon!");
  });

});
