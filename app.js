function getDataFromApi() {
  let searchInput = document.getElementById('searchinput').value;
  fetch(`https://cors-anywhere.herokuapp.com/https://coach-finder.herokuapp.com/api/v1/parts/search?q=${searchInput}`)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        data.forEach(renderResults);
        function renderResults(eachResult, index) {
          const results = document.getElementById('results');
          const catalogPage = document.createElement('li');
          const nameAndDate = document.createElement('p');
          const image = document.createElement('img');
          console.log(`${data[index].img_url}`);
          nameAndDate.textContent = `${data[index].catalog_name}` + " " +`${data[index].year}`;
          image.src=`${data[index].img_url}`;
            
          results.appendChild(catalogPage);
          catalogPage.appendChild(nameAndDate);
          catalogPage.appendChild(image);
        };
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}