var movieInput = $('.generate-button');
var currentUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=81c11b26813d4daaf9110f49a732fd2c&language=en-US&sort_by=popularity.desc&include_video=false&page=1';
var values;
//function to take the values of the genres we want to display
function checkBox(name) {
     values = [];
    let checkBoxes = document.querySelectorAll(`input[name=${name}]:checked`);
    checkBoxes.forEach(element => {
        values.push($(element).val());

    });
    return values;
}
function displayMovies(movie){
    var movieDiv= $('<div>');
    movieDiv.addClass('movie');
    movieDiv.text(movie.title);
    $('.moviesDisplay').append(movieDiv);
}
//click event to generate the movie with the new parameters
$('#generate').on('click', function () {
    console.log('click');
     checkBox('genre');
    if (values.length != 0) {
        currentUrl += '&with_genres=' + values.join(',')
        console.log(currentUrl);
    }
    $.ajax({url: currentUrl,
        method: 'GET'}).then((res)=>{ console.log(res)
        res.results.forEach(displayMovies);
        
        })
});