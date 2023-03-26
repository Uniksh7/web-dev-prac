

// //alert dialog box
// //window.alert("Hello")

// //confirm dialog box
// //let answer=window.confirm("Are you sure you want to exit?")
// //console.log(answer)

// //prompt dialog box
// // let answer= window.prompt("What is capital city of Nepal?")
// // if (answer = "Kathmandu"){
// //     window.alert("You are correct")
// // }
// // console.log(answer)

// //document
// // window.document.body.style.backgroundColor="red";
// // document.body.style.fontFamily="sans-serif"

// // document.body.innerHTML="CSS"
// // document.body.innerHTML="<h1> CSS </h1>"

// //selector by id
// // let movies= document.getElementById("movies");
// // movies.style.backgroundColor="cyan"
// // console.log(movies)

// //selector by class name
// // let movies= document.getElementsByClassName("movieslist")
// // console.log(movies)

// //query selector
// let movies = document.querySelector(".movieslist")
// movies.classList.add("big-red")
// movies.classList.remove("big-red")

// //query selector all
// let movies1= document.querySelectorAll(".movieslist")
// movies1[1].style.backgroundColor="blue"

// //Event listener
// // document.addEventListener("click", function(){
// //     window.alert("You Clicked")
// // });

// //Button
// let button= document.querySelector('.click')
// button.addEventListener("click",function(){
//     window.alert("You pressed a button")
// });

let button= document.querySelector('.click')
button.addEventListener("click",function(){
    document.body.classList.toggle("dark")
    if(button.textContent=="Dark Mode"){
        button.textContent="Light mode"
    }
    else{
        button.textContent="Dark Mode"
    }
});