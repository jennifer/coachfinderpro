function getDataFromApi(event) {
  event.preventDefault();
  let searchInput = document.getElementById('searchinput').value;
  const oldResults = document.getElementById("results");
  while (oldResults.firstChild) {
    oldResults.removeChild(oldResults.firstChild);
  }
  if (searchInput) {
    fetch(`https://coach-finder.herokuapp.com/api/v1/parts/search?q=${searchInput}`)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then(function(data) {
          renderResults(data, searchInput)
        });
        document.getElementById('searchinput').value = '';
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }
  else {
    const searchAgain = document.createElement('p');
    searchAgain.textContent = "Enter a Name, Color, 0r Style to Search"
    results.appendChild(searchAgain);
  }
}

function renderResults(data, searchInput) {
  if (data && data.length) {
    const resultsInfo = document.getElementById('resultsInfo');
    resultsInfo.textContent = `${data.length}` + ' results for ' + `${searchInput}` + ':';
    data.forEach(renderEachResult);
    function renderEachResult(eachResult, index) {
      const results = document.getElementById('results');
      const catalogPage = document.createElement('li');
      const nameAndDate = document.createElement('p');
      const image = document.createElement('img');
      nameAndDate.textContent = `${data[index].catalog_name}` + " " +`${data[index].year}`;
      image.src=`${data[index].img_url}`;
        
      results.appendChild(catalogPage);
      catalogPage.appendChild(nameAndDate);
      catalogPage.appendChild(image);
    }
  }
  else {
    const searchAgain = document.createElement('p');
    searchAgain.textContent = "No results. Try a different search."
    results.appendChild(searchAgain);
  }
}