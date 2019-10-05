function getDataFromApi(event) {
  event.preventDefault();
  const oldResults = document.getElementById("results");
  while (oldResults.firstChild) {
    oldResults.removeChild(oldResults.firstChild);
  }
  let searchInput = document.getElementById('searchinput').value;
  if (searchInput) {
    fetch(`https://coach-finder.herokuapp.com/api/v1/parts/search?q=${searchInput}`)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then(function(data) {
          renderResultInfo(data, searchInput)
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
    searchAgain.textContent = "Enter a Name, Color, or Style to Search"
    results.appendChild(searchAgain);
  }
}

function renderResultInfo(data, searchInput) {
  if (data && data.length) {
    const resultInfo = document.getElementById('resultInfo');
    resultInfo.textContent = `${data.length}` + ' results for ' + `${searchInput}` + ':';
    if (data.length <= 9) {
      renderResults(data);
    }
    else {renderSubArray(data)};
  }
  else {
    const searchAgain = document.createElement('p');
    searchAgain.textContent = "No results. Try a different search."
    results.appendChild(searchAgain);
  }
}

let dataArr;
let currentPage = 1;
let startIndex = 0;
let endIndex = 9;
function renderSubArray(data) {
  dataArr = data;
  const pageCount = Math.ceil(dataArr.length / 9);
  const subArray = data.slice(startIndex, endIndex);
  renderResults(subArray);
  if (currentPage < pageCount) {
    document.getElementById("loadmore").style.visibility = "visible";
    currentPage ++;
    startIndex += 9;
    endIndex += 9;
  }
  else {
    document.getElementById("loadmore").style.visibility = "hidden";
    currentPage = 1;
    startIndex = 0;
    endIndex = 9;
  }
}

function renderResults(data) {
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
