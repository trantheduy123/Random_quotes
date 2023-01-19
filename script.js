function generate(){
    var quotes = {
        "-Albert Einstein": '“We cannot solve problems with the kind of thinking we employed when we came up with them.”',
        "—Mahatma Gandhi": '“Learn as if you will live forever, live like you will die tomorrow.”',
        "—Mark Twain": '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”',
        "—Norman Vincent Peale": '“When you change your thoughts, remember to also change your world.”',
        "—Winston S. Churchill": '“Success is not final; failure is not fatal: It is the courage to continue that counts.”',
        "—Colin R. Davis": '“The road to success and the road to failure are almost exactly the same.”'
    }

    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random()* authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML =
     quote;
    document.getElementById("author").innerHTML =
     author;
}