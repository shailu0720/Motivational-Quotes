const quotes = [
    {quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney"},
    {quote: "Don't let yesterday take up too much of today.", author: "Will Rogers"},
    {quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi"},
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
    {quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "Your limitation—it’s only your imagination.", author: "Unknown"},
    {quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown"},
    {quote: "Great things never come from comfort zones.", author: "Unknown"},
    {quote: "Dream it. Wish it. Do it.", author: "Unknown"}
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const q = quotes[randomIndex];

    // Fade out old quote
    const quoteEl = document.getElementById("quote");
    const authorEl = document.getElementById("author");
    quoteEl.style.opacity = 0;
    authorEl.style.opacity = 0;

    setTimeout(() => {
        quoteEl.textContent = `"${q.quote}"`;
        authorEl.textContent = `- ${q.author}`;
        quoteEl.style.opacity = 1;
        authorEl.style.opacity = 1;
    }, 300);
}

// Initial quote
displayQuote();

// New quote button
document.getElementById("new-quote").addEventListener("click", displayQuote);
