function weatherAPI(city) {
  const APIKey = 'e992da56e11487f3a9bfbf4bc4469dcc';
  // Here we are building the URL we need to query the database
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  // Here we run our AJAX call to the OpenWeatherMap
  $.ajax({
    url: queryURL,
    method: 'GET',
  })
  // We store all of the retrieved data inside of an object called "response"
    .then((response) => {
    // Log the queryURL
      // Log the resulting object
      // console.log(response);
      // Transfer content to HTML
      const temp = response.main.temp * (9 / 5) - 459.67;
      $('#city').html(`<h5>${response.name} Weather Details</h5>`);
      $('#wind').text(`Wind Speed: ${response.wind.speed}`);
      $('#humidity').text(`Humidity: ${response.main.humidity}`);
      $('#temp').text(`Temperature (F) ${temp.toFixed(2)}`);
    });
}
$(document).on('click', '#submit-search', (event) => {
  event.preventDefault();
  const searchCity = $('#search-city').val().trim();
  weatherAPI(searchCity);
});
