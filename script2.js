
var apiKey="399885ef1dffc6fdfd42c5f1a6bdb34c";
var appId="b2baeb67";
var cuisineBtn=(".")
var cuisine=["Pasta", "Quick", "Soup", "Pizza", "Vegetable", "Sandwich"];

function getRecipes() {
    console.log("hungry");
    var cuisine=$(this).attr("id");
    var recipeURL="https://api.edamam.com/search?q=" + cuisine + "&app_id=" + appId + "&app_key=" + apiKey;
    $.ajax ({
        url: recipeURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        response.hits.forEach(element => {
            console.log(element);
            $(".name").append(element.recipe.label);
            $(".recipe").append(element.recipe.url);
            
        });
    })

    }

    $(document).on("click", "button", getRecipes)
    

