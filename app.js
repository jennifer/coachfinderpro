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
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

let data=
[
  {
    "catalog": "1992-fall-special-edition",
    "catalog_name": "FALL_SPECIAL_EDITION",
    "img_name": "scan0061.jpg",
    "img_url": "http://s3.amazonaws.com/pursefinderpro/pub/1992-fall-special-edition/scan0061.jpg",
    "part_number": "9907,9896,9930,9927",
    "text": "A. NEW WILLIS BAG No. 9927 $242 Full- length outside back pocket. Full-length front pocket under flap. Full-length inside zipper pocket. 48\" Adjustable shoulder strap detaches. 104\" x 9\" x 3\" Black shown. Bottle Green, British Tan, Butterscotch, Mahogany, Navy, Red, Stone. B.LOGAN BAG No. 9907 $228 Brass turnlock closure. Full-length outside back pocket. Full- length outside front pocket. Full-length inside zipper pocket. 44\" Adjustable shoulder strap. 11\" x 9\" x 4\" Bordeaux shown. Black, Bottle Green, British Tan, Butterscotch, Mahogany, Navy, Stone. coments C. NEW MURPHY BAG No. 9930 $182 Full-length outside back pocket. Full-length front pocke under flap. Full-length inside zipper pocket. 46\" Adjustable shoulder strap. 7\" x 9/4\" x 3\" British Ta shown. Black, Bottle Green, Butterscotch, Mahogany, Navy, Red, Stone. D. BARCLAY TOTE No. 9896 $286 Multipurpose tote for use as a briefcase or handbag Springlock tab closure. Inside organizational panel includes open pocket, zipper pocket and tw pen/pencil holders. Double handles. 16\" x 11%\" x 5%\" British Tan shown. Black, Bordeaus Mahogany. CLASSIC COLLECTION 63",
    "year": "1992"
  },
  {
    "catalog": "1993-holiday",
    "catalog_name": "HOLIDAY",
    "img_name": "scan0011.jpg",
    "img_url": "http://s3.amazonaws.com/pursefinderpro/pub/1993-holiday/scan0011.jpg",
    "part_number": "9907,9896,9930,9892,9927",
    "text": "C. WILLIS BAG No. 9927 $242 Brass turnlock closure. Full-length outside back pocket. Full-length front pocket under flap. Full- length inside zipper pocket. 48\" Adjustable shoulder strap detaches. 10/%\"x 9\" x 3\" Black shown. Bottle Green, British Tan, Butterscotch, Mahogany, Navy, Red, Stone. D. MURPHY BAG No. 9930 $182. Brass turnlock closure. Full-length outside back pocket. Full- length front pocket under flap. Full- length inside zipper pocket. 46\" Adjustable shoulder strap. 7\" x 9¥A\" x 3\" Red shown. Black, Bottle Green, British Tan, Butterscotch, Mahogany, Navy, Stone. E. LOGAN BAG No. 9907 $228 Brass turnlock closure. Full-length outside back pocket. Full-length front pocket under flap. Full- length inside zipper pocket. 44\" Adjustable shoulder strap. LI\" x 9\" x 4\" Bordeaux shown. A. BARCLAY TOTE No. 9896 $286 Multipurpose tote for use as a briefcase or handbag. Springlock tab closure. Inside organizational panel includes open pocket, zipper pocket Black, Bottle Green, British and two pen/pencil holders. Double handles. 16\" x 11%\" x 5%\" Black shown. Bordeaux, Tan, Butterscotch, Mahogany, British Tans Mahooanye Navy, Stone B. CHRYSTIE BAG No, 9892 $98 Springlock closure. Full-length inside zipper pocket. o. 48\" Sewn-on tubular shoulder strap. 7/4\" x 5o. \" x 3\" Black shown. Bone, Bottle Green, British Tan, Mahogany, Navy, Red. CLASSIC COLLECTION 17",
    "year": "1993"
  },
  {
    "catalog": "1993-holiday",
    "catalog_name": "HOLIDAY",
    "img_name": "scan0062.jpg",
    "img_url": "http://s3.amazonaws.com/pursefinderpro/pub/1993-holiday/scan0062.jpg",
    "part_number": "9907,9896,9930,9892,9927",
    "text": "A. BARCLAY TOTE No. 9896 $286 Multipurpose tote for use as a briefcase or handbag. Springlock tab closure. Inside organizational panel includes open pocket, zipper pocket and two pen/pencil holders. Double handles. 16\" x 11%\" x 6%\" Black shown. Bordeaux, British Tan, Mahogany. B. CHRYSTIE BAG No. 9892 $98 Springlock closure. Full-length inside zipper pocket. 48\" Sewn-on tubular shoulder strap. 7/4\" x 5%\" x 3\" Black shown. Bone, Bottle Green, British Tan, Mahogany, Navy, Red. D. MURPHY BAG No. 9930 $182 Brass turnlock closure. Full-length outside back pocket. Full- length front pocket under flap. Full- length inside zipper pocket. 46\" Adjustable shoulder strap. 7\" x 9\" x 5\" Red shown. Black, Bottle Green, British Tan, Butterscotch, Mahogany, Navy, Stone. C. WILLIS BAG No. 9927 $242 Brass turnlock closure. Full-length outside back pocket. Full-length front pocket under flap. Full- length inside zipper pocket. 48\" Adjustable shoulder strap detaches. 10%\" x 9\" x 3\" Black shown. Bottle Green, British Tan, Butterscotch, Mahogany, Navy, Red, Stone. E, LOGAN BAG No. 9907 $228 Brass turnlock closure. Full-length outside back pocket. Full-length front pocket under flap. Full- length inside zipper pocket. 44\" Adjustable shoulder strap. 11\"x 9\" x 4\" Bordeaux shown. Black, Bottle Green, British Tan, Butterscotch, Mahogany, Navy, Stone. CLASSIC COLLECTION 63",
    "year": "1993"
  },
  {
    "catalog": "1994-fall-late-autumn",
    "catalog_name": "FALL_LATE_AUTUMN",
    "img_name": "scan0009.jpg",
    "img_url": "http://s3.amazonaws.com/pursefinderpro/pub/1994-fall-late-autumn/scan0009.jpg",
    "part_number": "7155,9930,9927",
    "text": "B. WILLIS BAG No. 9927 $246 For work, for weekends. Brass turnlock closure. Full-length outside back pocket. Full-length front pocket under flap. Full-length inside zipper pocket. 48\" Adjustable shoulder strap detaches. 10'4\" x 9\" x 3\" Olive shown. Black, Bottle Green, British Tan, Mahogany, Navy, Red. Cc. MURPHY BAG No. 9930 $182 Sporty and compact. Brass turnlock closure. Full-length outside back pocket. Full-length front pocket under flap. Full-length inside zipper pocket. 46\" Adjustable   shoulder strap. 7\"x 9'4\"x 3\" British Tan shown. Black, Bottle Green, Mahogany, Navy, Olive, Red. D. CHANGE PURSE No. 7155 $42 Leather-lined. 44\" 3\" British Tan shown. Black. REFER TO PAGE 33 FOR THE COACH COLOR PALETTE AND NEW OLIVE CLASSIC COLLECTION [7",
    "year": "1994"
  },
  {
    "catalog": "1994-spring",
    "catalog_name": "SPRING",
    "img_name": "scan0023.jpg",
    "img_url": "http://s3.amazonaws.com/pursefinderpro/pub/1994-spring/scan0023.jpg",
    "part_number": "8647,9940,9930,9896,9927",
    "text": "C. WILLIS BAG No. 9927 $242 Brass turnlock closure. Full-length outside back pocket. Full- length front pocket under flap. Full-length inside zipper pocket. 48\" Adjustable shoulder strap detaches. 10%\" x 9\" x 3\" Bottle Green shown. Black, British Tan, Butterscotch, Mahogany, Navy, Red, Stone. D. NEW DOWEL FIELD BAG No. 9940 $324 Full-length back open pocket. Double flap turnlock closure for separate access to front gusseted pockets. Full-length inside zipper pocket. 41\" Adjustable shoulder strap with shoulder pad detaches. 15%\" x 10%\" x 4%\" British Tan shown. Black, Bordeaux, Mahogany. A. MURPHY BAG No. 9930 $182 Brass turnlock closure. Full-length outside back pocket. Full- length front pocket under flap. Full-length inside zipper pocket. 46\" Adjustable shoulder strap.   7\" x 9Y%\" x 5\" Navy shown. Black, Bottle Green, British Tan, Butterscotch, Mahogany, Red, Stone. B. BARCLAY TOTE No. 9896 $286 Multipurpose tote for use as a briefcase or handbag. Springlock tab closure. Inside organizational panel includes open pocket, zipper pocket and two pen/   pencil holders. Double handles. 16\" x 1A\" x 57%\" British Tan shown. Black, Bordeaux, Mahogany. TO ORDER TOLL-FREE 1-800-223-8647 24 HOURS-7 DAYS 56 CLASSIC COLLECTION CLASSIC COLLECTION 57",
    "year": "1994"
  }
];

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