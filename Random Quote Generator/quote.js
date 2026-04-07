let randomQuotes = [
    {text:"Life is what happens when you're busy making other plans." , author : "John Lennon"},
    {text:"The greatest glory in living lies not in never falling, but in rising every time we fall." , author : "Nelson Mandela"},
    {text:"You only live once, but if you do it right, once is enough." , author : "Mae West"},
    {text:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference." , author : "Robert Frost"},
    {text:"The only impossible journey is the one you never begin." , author : "Tony"},
    {text:"Education is the most powerful weapon which you can use to change the world." , author : "Nelson Mandela"},
    {text:"Genius is one percent inspiration and ninety-nine percent perspiration." , author : "Thomas Edison"},
    {text:"You miss 100% of the shots you don't take." , author : "Wayne Gretzky"},
    {text:"Believe you can and you're halfway there." , author : "Theodore Roosevelt "},
    {text:"Never let the fear of striking out stop you from playing the game." , author : "Babe Ruth "},

]
// Wrap the quote update with fade


let quotes = document.querySelector(".quotes");
let btn = document.querySelector("button");
btn.addEventListener("click" , () =>{
    let randomIndex = Math.floor(Math.random() * randomQuotes.length);
    quotes.innerHTML = randomQuotes[randomIndex].text;
    // quotes.style.fontFamily = "Arial, Helvetica, sans-serif";
    let name = document.querySelector(".authorname");
    name.innerHTML = `— ${randomQuotes[randomIndex].author}`;
    quotes.style.fontStyle = "italic";
});

// trigger it once on load
btn.click();



