document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var targetSectionId = this.getAttribute("href").substring(1);
      sections.forEach(function (section) {
        if (section.id === targetSectionId) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var loadDataButton = document.getElementById("load-data");
  var dataContainer = document.getElementById("data-container");

  loadDataButton.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",
      true
    );

    xhr.onload = function () {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var fact = data.text;

        var html = `
                    <h4>Random Cat Fact</h4>
                    <p>${fact}</p>
                `;
        dataContainer.innerHTML = html;
      } else {
        dataContainer.innerHTML = "Failed to load data. Please try again.";
      }
    };

    xhr.onerror = function () {
      dataContainer.innerHTML = "Failed to load data. Please try again.";
    };

    xhr.send();
  });
});

const historyYears = document.querySelectorAll(".history-year");
const historyContents = document.querySelectorAll(".history-content");

historyYears.forEach((year) => {
  year.addEventListener("click", () => {
    const targetId = year.getAttribute("data-target");
    historyContents.forEach((content) => {
      if (content.id === targetId) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
