import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/";

// async function getWeatherByCity(city) {
//   ///////////////////////////////////////////utilizing XMLHttpRequest method////////////////////////////////////////

//   let request = new XMLHttpRequest();
//   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

//   request.addEventListener("loadend", function () {
//     const response = JSON.parse(this.responseText);
//     if (this.status === 200) {
//       printElements(response, city);
//     }
//   });

//   request.open("GET", url, true);
//   request.send();

//   function printElements(apiResponse, city) {
//     document.querySelector(
//       ".showHumdidity"
//     ).text = `The humidity in ${city} is ${apiResponse.main.humidity}%.`;
//     document.querySelector(
//       ".showTemp"
//     ).text = `The temperature in ${city} is ${apiResponse.main.temperature}%.`;
//   }

// }


///////////////////////////////////////////utilizing Fetch API method/////////////////////////////////////////////

// async function getWeatherByCity2(city) {
//   try {
//     let response = await fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
//     );
//     let jsonifiedResponse = await response.json();
//     return jsonifiedResponse;
//   } catch (error) {
//     return error(
//       "There was an issue in handling your requests: " + error.message
//     );
//   }
// }
// $(document).ready(function () {
//   $("#weatherLocation").click(function () {
//     const city = $("#location").val("");

//     (async () => {
//       const response = await getWeatherByCity2(city);
//       getElements(response);
//     })();

//     function getElements(response) {
//       $(".showHumdidity").text(
//         `The humidity in ${city} is ${response.main.humidity}%.`
//       );
//       $(".showTemp").text(
//         `The temperature in ${city} is ${response.main.temp} degrees.`
//       );
//     }
//   });
// });

///////////////////////////////////////////utilizing jQuery AJAX method/////////////////////////////////////////////

$(document).ready(function () {
  $("#weatherLocation").click(function () {
    const city = $("#location").val("");
    console.log(city);
    $.ajax({
      type: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`,
      dataType: "json",
      success: getElements(),
      error: error(),
    });

    function getElements(response) {
      $(".showHumdidity").text(
        `The humidity in ${city} is ${response.main.humidity}%.`
      );
      $(".showTemp").text(
        `The temperature in ${city} is ${response.main.temp} degrees.`
      );
    }

    function error(xhr, status, error) {
      alert(
        "Result: " +
          status +
          " " +
          error +
          " " +
          xhr.status +
          " " +
          xhr.statusText
      );
    }
  });
});
