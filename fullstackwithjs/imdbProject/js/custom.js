let search = document.getElementById('searchText');

search.addEventListener('keypress', e => {
    let searchText = e.target.value;
    getMovies(searchText);//calling grtmovies function as callback function

});
function getMovies(searchText){
    let api = `http://www.omdbapi.com/?s=${searchText}&apikey=34696847`;
 
    window.fetch(api).then(data => {
        //next step is converting  response data into json object
        //how to convert res obj into json object
       let jsonData = data.json();
        jsonData.then(movie => {
          let movies = movie.Search;
          let output ="";
          for(let imdbmovie of movies){
              output +=`
              <h1>${imdbmovie.Title}</h1>
              <p>${imdbmovie.Year}</p>
              <p>${imdbmovie.imdbId}</p>
              <p>${imdbmovie.Type}</p>
              <img src="${imdbmovie.Poster}"/>`;
              document.getElementById('template').innerHTML = output;
          }

        }).catch();//if rejects excuting catch block

    }).catch(err => console.log(err));//fectching data from omdb server....
}