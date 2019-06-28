/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//Create an array of quote objects to hold the properties.

let quotes = [
  {
    source: 'Cersei Lannister'  ,
    quote:  'When you play the game of thrones, you win or you die.',
    citation: 'Game of Thrones: Season 1; Episode 7',
    year: '2011'
  },
  {
    source: 'Ned Stark' ,
    quote:  'The man who passes the sentence should swing the sword.',
    citation: 'Game of Thrones: Season 1; Episode 1',
    year: '2011'
  },
  {
    source: 'Tyrion Lannister'  ,
    quote:  'Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.',
    citation: 'Game of Thrones: Season 1; Episode 1',
    year: '2011'
  },
  {
    source: 'Tywin Lannister'  ,
    quote:  'A lion does not concern himself with the opinion of sheep.',
    citation: 'Game of Thrones: Season 1; Episode 7',
    year: '2011'
  },
  {
    source: 'Lord Varys'  ,
    quote:  'Storms come and go,the big fish eat the little fish, and I keep on paddling.',
    citation: 'Game of Thrones: Season 2; Episode 2',
    year: '2012'
  },
  {
    source: 'Petyr Baelish'  ,
    quote:  'The past is gone for good. You can sit here mourning its departure, or prepare for the future.',
    citation: 'Game of Thrones: Season 6; Episode 10',
    year: '2016'
  },
  {
    source: 'Samwell Tarly'  ,
    quote:  'I was nothing at all. And when you are nothing at all, there is no reason to be afraid.',
    citation: 'Game of Thrones: Season 4; Episode 9',
    year: '2014'
  },
  {
    source: 'Jorah Mormont'  ,
    quote:  'No one can survive in this world without help. No one.',
    citation: 'Game of Thrones: Season 2; Episode 7',
    year: '2012'
  },
  {
    source: 'Jon Snow'  ,
    quote:  'I dun want it.',
    citation: 'Game of Thrones: Season 8; Episode 1, 2, 3, 4, and 5',
    year: '2019'
  }
];
// console.log(quotes);


//getRandomQuote function pulls the random quotes from the array of objects.

function getRandomQuote() {
    let randomQuotes = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuotes];
}
//console.log(getRandomQuote());

//refresh function which refreshes the page every 20 seconds.
function refresh() {
 document.location.reload();
}

//colors variable for the random background colors
let colors = [
      '#7FFF00',
      '#FF4500',
      '#FF0000',
      '#EE82EE',
      '#008080',
      '#6A5ACD',
      '#4169E1',
      '#7FFFD4',
      '#000000'
];

//printQuote function which calls the getRandomQuote function and assigns it to the printRandomQuote variable.
function printQuote() {
    //sets a value for the variables lsited below.
    let html = '';
    //calls the getRandomQuote for the list of quotes and properties in the array of objects.
    let printRandomQuote = getRandomQuote(quotes);

    //selects the body from the css file to be able to add random colors.
    let Cbody = document.querySelector("body")
    //for loop which goes through the colors variable and picks a random color
    for(let i = 0; i <colors.length; i++){
      var randomColor = Math.floor(Math.random() * colors.length);
        Cbody.style.backgroundColor = colors[randomColor]
    };

  //displays the quote from the html file.
    html += '<p class="quote">' + printRandomQuote.quote + '</p>';
 //displays the source from the html file.
    html += '<p class="source">' + printRandomQuote.source;
//conditional statements whether the quote has a citation or year or both.
  if ("citation" in printRandomQuote) {
    html += '<span class="citation">' + printRandomQuote.citation + '</span>';
  }

  if ("year" in printRandomQuote) {
    html += '<span class="year">' + printRandomQuote.year + '</span>';
  }
    html += '</p>';
 //displays html content
 document.getElementById("quote-box").innerHTML = html;
  return html;
}
//displays a random quote when the page first loads
printQuote();
//console.log(printQuote());
//refreshes the page every 20 seconds.
setTimeout(refresh, 20000);

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
