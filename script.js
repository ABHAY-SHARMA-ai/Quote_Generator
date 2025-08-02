const quotes = [
    { quote: "The best way to get started is to quit talking and begin doing .", author :"Walt Disney" },
        { quote: "Don't let yesterday take up too much of today .",author: "Will Rogers"   },
        { quote: "Success is not in what you have ,but who you are.",author:"Bo Bennett"}
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => { let random = Math.floor(Math.random()* quotes.length); quoteText.textContent = quotes[random].quote; authorText.textContent ='- ${quotes[random].author}';});