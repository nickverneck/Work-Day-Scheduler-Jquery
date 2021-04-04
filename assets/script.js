var hourDiv = document.querySelectorAll(".hour");
var currentDayEl = $("#currentDay");
currentDayEl.text(moment().format("Do MMMM YYYY"))
// lets make sure the whole page is loaded before we start using Jquery
$('document').ready(function()
{
    //once .saveBtn has been clicked we will grab the values we need
    // and save them on local storage on their individual keys compared to ID
    // we could save everything in one key and loop through with Object.keys(JSON)[i] but for simplicity 
    // ID = KEY and Description = value
     
    $('.saveBtn').on('click',function()
    {
        
        var textVal = $(this).siblings('.description').val();
        var textTime = $(this).parent().attr('id');
      
        localStorage.setItem(textTime,textVal);
    }
    )
// Lets create a function to check what time is it.
// once it knows the time it will fill the hour divs with grey if it's past that time
// red if is current hour and green if is future hour

function setColor()
{
var currentTime = moment().hour(); 
 

for (i = 0 ; i < hourDiv.length; i++)
{
    // since I starts at zero lets create a variable that will start at the same hour as our scheduler 
    j= i+9;
    var textBox = hourDiv[i].children[1];
   
    if (j < currentTime)
    {
       $(textBox).removeClass("present future")
       $(textBox).addClass("past")
      
    }
    else if (j === currentTime)
    {
       $(textBox).removeClass("past future")
       $(textBox).addClass("present")
    }
    else
    {
        $(textBox).removeClass("past present")
       $(textBox).addClass("future")
    }
}
}
// Lets create a function that will check if we have if we have anything on localstorage
// if it does it will start filling the text area with the values found on local storage.
function loadLocalStorage()
{
    if (localStorage.length > 0)
    {
        for (i = 0 ; i < hourDiv.length; i++)
        {
           
            j= i+9;
            var textBox = hourDiv[i].children[1];
            $(textBox).text(localStorage.getItem(hourDiv[i].id));
            
        }
    }
   
}

loadLocalStorage();
setColor();


// gotta create a function to update it's colors as the time passes.


}
)