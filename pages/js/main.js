var check_btn = document.querySelector(".check-btn");
var sport = document.querySelector("#sport_zone");
check_btn.addEventListener("click",()=>{
    sport.classList.toggle("disable");
});