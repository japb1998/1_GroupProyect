var movieInput = $('.generate-button');
var currentUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=81c11b26813d4daaf9110f49a732fd2c&language=en-US&sort_by=popularity.desc&include_video=false&page=1';
var values;
moviesArray = [];
//function to take the values of the genres we want to display
function checkBox(name) {
    values = [];
    let checkBoxes = $(`input[name=${name}]:checked`);
    console.log(checkBoxes[0]);

    for (var i = 0; i < checkBoxes.length; i++) {
        console.log(checkBoxes[i])
        values.push(checkBoxes[i].value)
    }
    return values;
}
//looping through the movies array created by generate
function displayMovies(movieArr) {
    $('#poster').empty();
    movieArr.forEach((movie) => { 
        displayInfo(movie.title);
    })
}
//click event to generate the movie with the new parameters
$('#generate').on('click', function () {
    console.log('click');
    moviesArray = [];
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
        for (var i = 0; i < 5; i++) {
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

function displayInfo(movie) {
    var settings = {
        url: `http://www.omdbapi.com/?t=${movie}&apikey=9aaffc86`,
        method: 'GET'
    }
    $.ajax(settings).then((res) => {
        if(res.Response != "False"){
        console.log(res)
        var cardDiv = $('<div>');
        // cardDiv.addClass('row');
        var ColDiv =$('<div>').addClass('post col s12 m6');
        var cardContent = $('<div>').addClass('card-content white-text');
        var cardColor= $('<div>').addClass('card blue-grey darken-4');
        var cardTitle = $('<span>').addClass('card-title');
        var moviePoster = $('<img>');
        var movieDescription = $('<p>');
        moviePoster.attr('src', res.Poster);
        movieDescription.text(res.Plot);
        cardTitle.text(res.Title);
        cardContent.append(cardTitle).append(moviePoster).append(movieDescription);
        cardColor.append(cardContent);
        ColDiv.append(cardColor);
        cardDiv.append(ColDiv);
        $('#poster').append(cardDiv);}
    })
}

$(document).on('change', 'input[name="radio"]', function (e) {
    releasedYear($(e.target))
})
$(document).on('click', '.movie', function (e) {
    $('#poster').empty();
    displayInfo(e.target);
})