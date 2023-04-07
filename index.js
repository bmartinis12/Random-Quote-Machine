const QUOTEHOLDER = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  }, {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe"
  }, {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  }, {
    quote: "So many books, so little time.",
    author: "Frank Zappa"
  }, {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch"
  }, {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  }
]
window.onload = start;
function start(){
  changeQuote();
}
function changeQuote(){
  
 let randomIndex = Math.floor(Math.random() * QUOTEHOLDER.length);
 let randomQuote = QUOTEHOLDER[randomIndex]; 
 
 let twitter = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22";
  let quoteInFormat = randomQuote.quote.replace(/ /g, "%20");
 twitter += quoteInFormat;
  let authorInFormat = randomQuote.author.replace(/ /g, "%20");
twitter += authorInFormat;
 

document.getElementById("tweet-quote").href = twitter; document.getElementById("text").innerText = '" ' + randomQuote.quote + ' "'; document.getElementById("author").innerText = " - " + randomQuote.author;
}
