$(window).ready(function(){
    $(".loading").fadeOut(2000,function(){
        $("body").css("overflow","visible");
    });
})

//side bar function

let sideInnerWidth = $(".side-inner").innerWidth();
$(".side").animate({left:-sideInnerWidth},0)
$(".open-close-icon").click(function(){
    let sideLeftValue =  $(".side").css("left");
    if(sideLeftValue == "0px"){
        $(".side").animate({left:-sideInnerWidth},1000)
        $(".open-close-icon").removeClass("fa-x");
        $(".open-close-icon").addClass("fa-align-justify");
    }else{
        $(".side").animate({left:0},1000)
        $(".open-close-icon").removeClass("fa-align-justify");
        $(".open-close-icon").addClass("fa-x");
    }
})

// list items display functions

$(".find").click(function(){
    $(".search").nextAll().removeClass("d-block"); 
    $(".search").nextAll().addClass("d-none"); 
    $(".search").prevUntil(".side").removeClass("d-block"); 
    $(".search").prevUntil(".side").addClass("d-none");  
    $(".search").removeClass("d-none");
    $(".search").addClass("d-block")
    $(".side").animate({left:-sideInnerWidth},0);
    $(".open-close-icon").removeClass("fa-x");
    $(".open-close-icon").addClass("fa-align-justify");
})
$(".cate").click(function(){
    category();
    $(".loading").fadeOut(2000,function(){
    $("body").css("overflow","visible");
    });
    $(".categories").nextAll().removeClass("d-block"); 
    $(".categories").nextAll().addClass("d-none"); 
    $(".categories").prevUntil(".side").removeClass("d-block"); 
    $(".categories").prevUntil(".side").addClass("d-none");  
    $(".categories").removeClass("d-none");
    $(".categories").addClass("d-block")
    $(".side").animate({left:-sideInnerWidth},0);
    $(".open-close-icon").removeClass("fa-x");
    $(".open-close-icon").addClass("fa-align-justify");
})
$(".are").click(function(){
    areaFind();
    $(".area").nextAll().removeClass("d-block"); 
    $(".area").nextAll().addClass("d-none"); 
    $(".area").prevUntil(".side").removeClass("d-block"); 
    $(".area").prevUntil(".side").addClass("d-none");  
    $(".area").removeClass("d-none");
    $(".area").addClass("d-block")
    $(".side").animate({left:-sideInnerWidth},0);
    $(".open-close-icon").removeClass("fa-x");
    $(".open-close-icon").addClass("fa-align-justify");
})
$(".ing").click(function(){
    ingFind();
    $(".ingredients").nextAll().removeClass("d-block"); 
    $(".ingredients").nextAll().addClass("d-none"); 
    $(".ingredients").prevUntil(".side").removeClass("d-block"); 
    $(".ingredients").prevUntil(".side").addClass("d-none");  
    $(".ingredients").removeClass("d-none");
    $(".ingredients").addClass("d-block")
    $(".side").animate({left:-sideInnerWidth},0);
    $(".open-close-icon").removeClass("fa-x");
    $(".open-close-icon").addClass("fa-align-justify");
})
$(".cont").click(function(){
    $(".contact").nextAll().removeClass("d-block"); 
    $(".contact").nextAll().addClass("d-none"); 
    $(".contact").prevUntil(".side").removeClass("d-block"); 
    $(".contact").prevUntil(".side").addClass("d-none");  
    $(".contact").removeClass("d-none");
    $(".contact").addClass("d-block");
    $(".side").animate({left:-sideInnerWidth},0);
    $(".open-close-icon").removeClass("fa-x");
    $(".open-close-icon").addClass("fa-align-justify");
})
function show(){
    $(".insideSearch").nextAll().removeClass("d-block"); 
    $(".insideSearch").nextAll().addClass("d-none"); 
    $(".insideSearch").prevUntil(".side").removeClass("d-block"); 
    $(".insideSearch").prevUntil(".side").addClass("d-none");  
    $(".insideSearch").removeClass("d-none");
    $(".insideSearch").addClass("d-block");
    
}

//home function 

var home= document.querySelector(".homeshow");
async function displayhome(){
    let resopnse= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    var data1 = await resopnse.json();
    var contain=``;
    for(let i=0 ; i<data1.meals.length ; i++){
        contain+=`<div class="col-md-3 mull position-relative">
                    <img onclick="mealDetails('${data1.meals[i].idMeal}')" src="${data1.meals[i].strMealThumb}" class="w-100" alt="">
                    <div class="layer">
                       <p>${data1.meals[i].strMeal}</p>
                    </div>
                  </div>` 
    }
    home.innerHTML=contain;
}
displayhome();

//search functions

var nam= document.querySelector(".nameSearch");
var result= document.querySelector(".result");
async function display(){
    var plate = nam.value.trim()
    let resopnse= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${plate}`);
    var data1 = await resopnse.json();
    var contain=``;
    for(let i=0 ; i<data1.meals.length ; i++){
        contain+=`<div class="col-md-3 mull position-relative">
                    <img onclick="mealDetails('${data1.meals[i].idMeal}')" src="${data1.meals[i].strMealThumb}" class="w-100" alt="">
                    <div class="layer">
                       <p>${data1.meals[i].strMeal}</p>
                    </div>
                  </div>` ;
    }
    result.innerHTML=contain;
}
$(".nameSearch").on("input",display);

// search with single letter function

var lett= document.querySelector(".letter");
async function display2(){
    var plate = lett.value.trim()
    let resopnse= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${plate}`);
    var data = await resopnse.json();
    var contain=``;
    for(let i=0 ; i<data.meals.length ; i++){
        contain+=`<div class="col-md-3 mull position-relative">
                    <img onclick="mealDetails('${data.meals[i].idMeal}')" src="${data.meals[i].strMealThumb}" class="w-100" alt="">
                    <div class="layer">
                       <p>${data.meals[i].strMeal}</p>
                    </div>
                  </div>` 
    }
    result.innerHTML=contain;
}
$(".letter").on("input",display2);

// category functions

var elementData = document.getElementById("rowData");
var showData=document.getElementById("cateCar");
var lol=document.getElementById("rowDat");
async function category(){
    let resopnse= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let cateData = await resopnse.json();
    var contain=``;
    for(m = 0; m<cateData.categories.length; m++){
        contain += `<div class="col-md-3  position-relative mb-3">
                      <img onclick="cateDetails('${cateData.categories[m].strCategory}')" class="w-100 inimg" src="${cateData.categories[m].strCategoryThumb}">
                      <div class="layer text-center">
                          <p>${cateData.categories[m].strCategory}</p>
                          <p class="pt-2 fs-6" >${cateData.categories[m].strCategoryDescription.slice(0,200)}</p>
                          </div>
                    </div>`
    }
    elementData.innerHTML=contain;
}
async function cateDetails(term){
            let resopnses= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`)
            let cateDital = await resopnses.json();
            var carry=``;
            for(let p = 0; p<cateDital.meals.length;p++){
                carry+=`<div class="col-md-3 mull position-relative">
                            <img onclick="mealDetails('${cateDital.meals[p].idMeal}')" src="${cateDital.meals[p].strMealThumb}" class="w-100" alt="">
                            <div class="layer">
                               <p>${cateDital.meals[p].strMeal}</p>
                               </div>
                               </div>`
                    }
            showData.innerHTML=carry;
            $(".cateDeti").nextAll().removeClass("d-block"); 
            $(".cateDeti").nextAll().addClass("d-none"); 
            $(".cateDeti").prevUntil(".side").removeClass("d-block"); 
            $(".cateDeti").prevUntil(".side").addClass("d-none");  
            $(".cateDeti").removeClass("d-none");
            $(".cateDeti").addClass("d-block"); 
}

// area functions 

var same=document.getElementById("area");
async function areaFind(){
    let resopnse= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let areaData = await resopnse.json();
    console.log(areaData)
    var contain=``;
    for(m = 0; m<areaData.meals.length; m++){
        contain+=`
            <div class="col-md-3">
                <div onclick="getAreaMeals('${areaData.meals[m].strArea}')" class="rounded-2 text-center cursor-pointer">
                    <i class="fa-solid fa-house-laptop fa-4x mb-2"></i>
                    <h3>${areaData.meals[m].strArea}</h3> 
                </div>
            </div> 
    `}
    same.innerHTML=contain
}
async function getAreaMeals(city){
    let resopnses= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${city}`)
        let areaDital = await resopnses.json();
        var carry=``;
        for(let p = 0; p<areaDital.meals.length;p++){
            carry+=`<div class="col-md-3 mull position-relative">
                        <img onclick="mealDetails('${areaDital.meals[p].idMeal}')" src="${areaDital.meals[p].strMealThumb}" class="w-100" alt="">
                        <div class="layer">
                           <p>${areaDital.meals[p].strMeal}</p>
                           </div>
                           </div>`
                }
        showData.innerHTML=carry;
        $(".cateDeti").nextAll().removeClass("d-block"); 
            $(".cateDeti").nextAll().addClass("d-none"); 
            $(".cateDeti").prevUntil(".side").removeClass("d-block"); 
            $(".cateDeti").prevUntil(".side").addClass("d-none");  
            $(".cateDeti").removeClass("d-none");
            $(".cateDeti").addClass("d-block");
}

//ingredients function 

var mohamed=document.getElementById("ingData");
async function ingFind(){
    let resopnse= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let ingData = await resopnse.json();
    console.log(ingData)
    var contain=``;
    for(m = 0; m<20; m++){
        contain+=`
            <div class="col-md-3">
                <div onclick="getIngredientsMeals('${ingData.meals[m].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${ingData.meals[m].strIngredient}</h3>
                    <p>${loco= ingData.meals[m].strDescription}</p>
                </div>
            </div>
    `    
    }
    mohamed.innerHTML=contain;
}
async function getIngredientsMeals(ingredient){
    let resopnses= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        let ingDital = await resopnses.json();
        var carry=``;
        for(let p = 0; p<ingDital.meals.length;p++){
            carry+=`
                <div class="col-md-3 mull position-relative">
                    <img onclick="mealDetails('${ingDital.meals[p].idMeal}')" src="${ingDital.meals[p].strMealThumb}" class="w-100" alt="">
                    <div class="layer">
                       <p>${ingDital.meals[p].strMeal}</p>
                    </div>
                </div>`      
        }
        showData.innerHTML=carry;
        $(".cateDeti").nextAll().removeClass("d-block"); 
        $(".cateDeti").nextAll().addClass("d-none"); 
        $(".cateDeti").prevUntil(".side").removeClass("d-block"); 
        $(".cateDeti").prevUntil(".side").addClass("d-none");  
        $(".cateDeti").removeClass("d-none");
        $(".cateDeti").addClass("d-block");
}

// meal detials display function

async function mealDetails(stat){
    let resopnses= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${stat}`)
    let data2 = await resopnses.json();
    var ship=``;
    ship=` 
        <div class="col-md-4">
            <img class="w-100 inimg rounded-3" src="${data2.meals[0].strMealThumb}" alt="">
            <h2 class="inname text-white">${data2.meals[0].strMeal}</h2>
            </div>
         <div class="col-md-8 text-white">
             <h2>Instructions</h2>
             <p class="instruction">${data2.meals[0].strInstructions}</p>
        
        <h3 class=" fw-bolder">Area : <span class="fw-bolder place">${data2.meals[0].strArea} </span></h3>
        <h3 >Category : <span class="fw-bolder type">${data2.meals[0].strCategory} </span></h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-2">${data2.meals[0].strMeasure1 + data2.meals[0].strIngredient1}</li><li class="alert star2 alert-info m-2 p-1">${data2.meals[0].strMeasure2 + data2.meals[0].strIngredient2}</li><li class="alert star3 alert-info m-2 p-1">${data2.meals[0].strMeasure3 + data2.meals[0].strIngredient3}</li><li class="alert star4 alert-info m-2 p-1">${data2.meals[0].strMeasure4 + data2.meals[0].strIngredient4}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure5 + data2.meals[0].strIngredient5}</li><li class="alert  alert-info m-2 p-1">${data2.meals[0].strMeasure6 + data2.meals[0].strIngredient6}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure7 + data2.meals[0].strIngredient7}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure8 + data2.meals[0].strIngredient8}</li><li class="alert  alert-info m-2 p-1">${data2.meals[0].strMeasure9 + data2.meals[0].strIngredient9}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure10 + data2.meals[0].strIngredient10}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure11 + data2.meals[0].strIngredient11}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure12 + data2.meals[0].strIngredient12}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure13 + data2.meals[0].strIngredient13}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure14 + data2.meals[0].strIngredient14}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure15 + data2.meals[0].strIngredient15}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure16 + data2.meals[0].strIngredient16}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure17 + data2.meals[0].strIngredient17}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure18 + data2.meals[0].strIngredient18}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure19 + data2.meals[0].strIngredient19}</li><li class="alert alert-info m-2 p-1">${data2.meals[0].strMeasure20 + data2.meals[0].strIngredient20}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
            
        <li class="alert tag alert-danger m-2 p-1">${data2.meals[0].strTags}</li>
        </ul>

        <a target="_blank" href="${data2.meals[0].strSource}" class="btn sour btn-success">Source</a>
        <a target="_blank" href="${data2.meals[0].strYoutube}" class="btn tube btn-danger">Youtube</a>
    </div>`
    lol.innerHTML=ship;
        
        $(".insideSearch").nextAll().removeClass("d-block"); 
        $(".insideSearch").nextAll().addClass("d-none"); 
        $(".insideSearch").prevUntil(".side").removeClass("d-block"); 
        $(".insideSearch").prevUntil(".side").addClass("d-none");  
        $(".insideSearch").removeClass("d-none");
        $(".insideSearch").addClass("d-block");
}

//contact us functions
function isValid(regex,element)
{
   if(regex.test(element.value)==true){
    element.nextElementSibling.classList.replace("d-block","d-none");
    return true;
   }else{
    element.nextElementSibling.classList.replace("d-none","d-block");
    return false;
   }
}
var NameRegex= /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
var phoneRegex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
var mailRegex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
var ageRegex=/^(1[89]|[2-9]\d)$/;
var NameInput = document.getElementById("nameInput");
var phoneInput = document.getElementById("phoneInput");
var emailInput = document.getElementById("emailInput");
var ageInput = document.getElementById("ageInput");
var passwordInput = document.getElementById("passwordInput");
var repasswordInput = document.getElementById("repasswordInput");
var userList=[];
function inputsValidation(){
    if( isValid(NameRegex,NameInput) &
    isValid(phoneRegex,phoneInput) &
    isValid( mailRegex,emailInput) &
    isValid(ageRegex, ageInput) & isValid(passwordRegex,passwordInput) &
    isValid(passwordRegex,repasswordInput) ){
        document.querySelector("#submitBtn").removeAttribute('disabled');
        var user={
            username:NameInput.value,
            userEmail:emailInput.value,
            userPhone:phoneInput.value,
            userage:ageInput.value,
            userpassword:passwordInput.value
        }
        userList.push(user);
        console.log(userList);
    }   
}
$("#submitBtn").click(function(){
    NameInput.value = null;
    emailInput.value = null;
    ageInput.value = null;
    passwordInput.value = null;
    repasswordInput.value = null;
    phoneInput.value = null;

})

