$(document).ready(function () {
    var apiKey = "399885ef1dffc6fdfd42c5f1a6bdb34c";
    var appId = "b2baeb67";
    var cuisineBtn = (".");
    var cantSearch = false;
    // var cuisine=["Pasta", "Quick", "Soup", "Pizza", "Vegetable", "Sandwich"];

    function getRecipes(food) {
        // $("#recipeDisplay").empty();
        console.log("hungry");
        var cuisine = $(food).attr("id");
        var recipeURL = "https://api.edamam.com/search?q=" + cuisine + "&app_id=" + appId + "&app_key=" + apiKey;
        $.ajax({
            url: recipeURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            response.hits.forEach(element => {

                var divStyled = $('<div>');
                divStyled.attr('class', 'row');
                var divSize = $('<div>');
                divSize.addClass('col s12');
                var divColor = $('<div>');
                divColor.addClass('card red card blue-grey darken-4');
                var divText = $('<div>');
                divText.addClass('card-content white-text');
                // divStyled.attr('class', 'card');
                var divFood = $('<span>');
                divFood.addClass('card-title');
                var cardAction = $('<div>');
                cardAction.addClass('card-action');
                var divMoreInfo = $('<button>');
                divMoreInfo.attr('class', 'btn btn-primary red accent-4')
                divMoreInfo.html(`<a href="${element.recipe.url}" target="_blank">Full Recipe</a>`)
                divFood.text(element.recipe.label);
                console.log(element);
                cardAction.append(divMoreInfo);
                divText.append(divFood).append(cardAction);
                divColor.append(divText);
                divSize.append(divColor);
                divStyled.append(divSize);
                $(".name").append(divStyled);

                // $(".recipe").append(element.recipe.url);

                console.log(element);
                cantSearch = false;

            });
        })

    }

    //test branch


    $(document).on("click", "button", function (e) {

        if (!cantSearch) {
            cantSearch = true;
            $(".name").empty();
            $(".recipe").empty();
            getRecipes($(e.target));
        }

    })


    $('.sidenav').sidenav();

})