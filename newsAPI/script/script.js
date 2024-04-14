let GET = 'https://newsapi.org/v2/everything?q=microsoft&from=2024-04-14&sortBy=popularity&apiKey=6c31c64b71254e2f9605db60b4301570'
const apiKey = "6c31c64b71254e2f9605db60b4301570";
let searchItem = "Apple";
var url = `https://newsapi.org/v2/everything?q=${searchItem}&from=2024-04-14&sortBy=popularity&apiKey=${apiKey};`;

var req = new Request(GET);

fetch(req).then(function (response) {
  console.log(response.json());
});
