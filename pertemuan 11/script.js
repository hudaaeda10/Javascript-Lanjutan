// $('.button-search').on('click', function(){
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=faf412f6&s=' + $('.input-search').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCardMovie(m);
//             });
//             $('.movie-container').html(cards);
    
//             // ketik tombol di klik
//             $('.movie-details').on('click', function(){
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=faf412f6&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail =showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// })


// fetch 
const buttonSearch = document.querySelector('.button-search');
buttonSearch.addEventListener('click', function(){
    const inputSearch = document.querySelector('.input-search');
    fetch('http://www.omdbapi.com/?apikey=faf412f6&s=' + inputSearch.value)
        .then(response => response.json())
        .then(response => {
            const movie = response.Search;
            let cards = '';
            movie.forEach(m => cards += showCardMovie(m));
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;
            // Ketika tombol detail di klik
            const buttonMovieDetails = document.querySelectorAll('.movie-details');
            buttonMovieDetails.forEach(btn => {
                btn.addEventListener('click', function() {
                    const imdb = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=faf412f6&i=' + imdb)
                        .then(response => response.json())
                        .then(m => {
                            const  movieDetail = showMovieDetail(m);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetail;
                        });
                }); 
            });
        });
});

function showCardMovie(m) {
    return  `<div class="col-md-4 my-3">
                    <div class="card">
                        <img src="${m.Poster}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${m.Title}</h5>
                            <h5 class="card-title">${m.Year}</h5>
                            <h5 class="card-title"></h5>
                            <a href="#" class="btn btn-primary movie-details" data-toggle="modal" data-target="#movieDetails" data-imdbid="${m.imdbID}">Show Details</a>
                        </div>
                    </div>
                </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${m.Poster}" class="img-fluid">
                        </div>
                        <div class="col-md">
                            <ul class="list-group">
                                <li class="list-group-item"><strong>${m.Title} (${m.Year})</strong></li>
                                <li class="list-group-item"><strong>Directory : </strong>${m.Director}</li>
                                <li class="list-group-item"><strong>Writers :</strong>${m.Writer}</li>
                                <li class="list-group-item"><strong>Actors :</strong>${m.Actors}</li>
                                <li class="list-group-item"><strong>Plot:</strong><br>${m.Plot}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
}