var apiKey = "399885ef1dffc6fdfd42c5f1a6bdb34c";
var appId = "b2baeb67";
var cuisineBtn = (".")
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
            divStyled.attr('class', 'card');
            var divFood = $('<div>');
            var divMoreInfo = $('<button>');
            divMoreInfo.html(`<a href="${element.recipe.url}">More Info</a>`)
            divFood.text(element.recipe.label);
            console.log(element);
            divStyled.append(divFood).append(divMoreInfo);
            $(".name").append(divStyled);

            // $(".recipe").append(element.recipe.url);

            console.log(element);
            $(".name").append(element.recipe.label);
            $(".recipe").append(element.recipe.url);

        });
    })

}

//test branch



    $(document).on("click", ".food button", function (e) {
    $(document).on("click", "button", function (e) {
        $(".name").empty();
        $(".recipe").empty();
        getRecipes($(e.target));
    })
    })
$(document).on("click", ".food button", function (e) {
            $(document).on("click", "button", function (e) {
                $(".name").empty();
                $(".recipe").empty();
                getRecipes($(e.target));
            })
})
