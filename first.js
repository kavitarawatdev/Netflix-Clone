let firstMovieBar = document.getElementsByClassName("movie-1");
let secondMovieBar = document.getElementsByClassName("movie-01");
let right = document.querySelector(".slideRight");
let left = document.querySelector(".slideLeft");
let movies = document.querySelectorAll(".movie");
let slideButton = document.querySelectorAll(".slide");
let answers = document.querySelectorAll(".ans");
let countclick = 0;
let qstns = document.querySelectorAll(".FAQ");
let plus = document.querySelectorAll(".fa-plus");
let xmark = document.querySelectorAll(".fa-xmark");



//function for showing rightmovie bar
const rightMovieBar = () => {
  for(movies of firstMovieBar){
    movies.style.display = "none";
  };
  for (movies of secondMovieBar){
    movies.style.display = "block";
  };
  right.style.display = "none";
  left.style.display = "flex";
};


//function for showing left movie bar
const leftMovieBar = () =>{
  for(movies of firstMovieBar){
    movies.style.display = "block";
  };
  for (movies of secondMovieBar){
    movies.style.display = "none";
  };
  right.style.display = "flex";
  left.style.display = "none";
};

//adding event listeners to movie slide bars
right.addEventListener("click", rightMovieBar);
left.addEventListener("click", leftMovieBar);

//function for scaling size of movie on hovering
movies.forEach((movie)=> {
  movie.addEventListener("mouseenter", (e) => {
    movie.style.transform = "scale(1.1, 1.1)";
  } );
  movie.addEventListener("mouseleave", (e) => {
    movie.style.transform = "none";
  }); 
}) ;


//function for showing FAQ ans
const showAns = (A) => {
  answers.forEach((ans) => {
    ans.style.display="none";
    answers[A].style.display="block";
  })
}

//function for hiding FAQ ans
const hideAns = (A) => {
  answers.forEach((ans) => {
    answers[A].style.display="none";
  })
}

//function for showing x mark 
const showXMark = (X) => {
  xmark.forEach((mark)=>{
    xmark[X].style.display = "flex";
    mark.style.display = "none";
  })
}

//function for hiding plusmark 
const hidePlusMark = (P)=> {
  plus.forEach((plusMark)=> {
    plusMark.style.display="block";
    plus[P].style.display="none";
  })
}

//event listener for each faq
qstns.forEach((qsn,Q)=> {
  qsn.addEventListener("click", (e)=> {
    document.querySelector("footer").style.top ="480%";
    if(Q===0){
      showAns(0);
      showXMark(0);
      hidePlusMark(0); 
    }if(Q===1){
      showAns(1);
      showXMark(1);
      hidePlusMark(1);
    }if(Q===2 ){
      showAns(2);
      showXMark(2);
      hidePlusMark(2);
    }if(Q===3 ){
      showAns(3);
      showXMark(3);
      hidePlusMark(3);
    }if(Q===4 ){
      showAns(4);
      showXMark(4);
      hidePlusMark(4);
    }if(Q== 5){
      showAns(5);
      hidePlusMark(5);
      showXMark(5);
    }
  })
})
