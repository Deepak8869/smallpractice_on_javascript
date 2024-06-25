 const btn = document.getElementById("btn");
 const output = document.querySelector(".output");


 let quote = ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." , "So many books, so little time",  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." , "A room without books is like a body without a soul." , "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." , "You know you're in love when you can't fall asleep because reality is finally better than your dreams." , "You only live once, but if you do it right, once is enough." , "In three words I can sum up everything I've learned about life: it goes on." ];

btn.addEventListener('click' , () => {
  
  let random = Math.floor(Math.random()*quote.length);
  output.textContent  = quote[random];
})

