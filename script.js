var movieInput = $('.generate-button');
var currentUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=81c11b26813d4daaf9110f49a732fd2c&language=en-US&sort_by=popularity.desc&include_video=false&page=1';
var values;
moviesArray = [];
//function to take the values of the genres we want to display
function checkBox(name) {
    values = [];
    let checkBoxes = document.querySelectorAll(`input[name=${name}]:checked`);
    checkBoxes.forEach(element => {
        values.push($(element).val());

    });
    return values;
}
//looping through the movies array created by generate
function displayMovies(movieArr) {
    $('.moviesDisplay').empty();
    movieArr.forEach((movie) => {
        ;
        var movieDiv = $('<div>');
        movieDiv.addClass('movie');
        movieDiv.text(movie.title);
        $('.moviesDisplay').append(movieDiv);
    })
}
//click event to generate the movie with the new parameters
$('#generate').on('click', function () {
    console.log('click');
    moviesArray= []; 
    $('.moviesDisplay').empty();
    checkBox('genre');
    if ($('.yearInput'))(
        currentUrl += `&primary_release_year=${$('.yearInput').val()}`
    )
    if (values.length != 0) {
        currentUrl += '&with_genres=' + values.join(',')
        console.log(currentUrl);
    }
    $.ajax({
        url: currentUrl,
        method: 'GET'
    }).then((res) => {
        console.log(res)
        for(var i= 0; i < 5 ; i++){
       var element = res.results[i];
            moviesArray.push(element);
            
        };
        // displaying the movies list
        displayMovies(moviesArray);

    })
});

// ask the user if they want to take realsed year into consideration
function releasedYear(option) {
    var radioOptions = $('input[name="radio"]');
    if (option.val() == 'yes') {
        var yearDiv = $('<div>');
        var yearLabel = $('<label>');
        var yearInput = $('<input>');
        yearInput.attr('type', 'number');
        yearInput.addClass('yearInput');
        yearDiv.addClass('yearDiv');
        yearLabel.text('Select your Year:');
        yearDiv.append(yearLabel).append(yearInput);
        $('.year-display').append(yearDiv);
    } else {
        $('.year-display').empty();
    }
};
function displayInfo(movie){
 var displayedInfo = $(movie).text();
var settings= {
    url:`http://www.omdbapi.com/?t=${displayedInfo}&apikey=9aaffc86`,
    method:'GET'
}
 $.ajax(settings).then((res)=>{console.log(res)
var movieTitle = $('<h1>');
var moviePoster = $('<img>');
var movieDescription=$('<p>');
movieTitle.text(res.Title);
moviePoster.attr('src',res.Poster);
movieDescription.text(res.Plot);
$('#poster').append(movieTitle).append(moviePoster).append(movieDescription);
})
}

$(document).on('change', 'input[name="radio"]', function (e) {
    releasedYear($(e.target))
})
$(document).on('click','.movie',function(e){
    $('#poster').empty();
    displayInfo(e.target);
})