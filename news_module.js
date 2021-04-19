
 
export function findByAuthor(){



    const news = [

        {
    
            caption: "Trump adopted by the Queen of Yorkshire",
    
            source: "Fox News",
    
            url: "http://www.foxnews.com",
    
            author: "Joe Mann",
    
            released: "2020-01-17 12:01:28 AM EST",
    
            story: "This is a really interesting story.  More to follow.."
    
        },
    
        {
    
            caption: "Dog for hire.  Solves crime and fluffy",
    
            source: "The Voxx",
    
            url: "https://www.washingtonpost.com/",
    
            author: "Mary Blige",
    
            released: "2019-11-17 8:21:01 PM EST",
    
            story: "Makes make hope that a dog can become President.  Hell, Trump can do it..."
    
        }
    
    ];

var resp_json = news;

console.log(resp_json.news[0].author);

    var news_content_html = document.getElementById('news_content');
var content_table = document.getElementById('my_table');

    targetAuthor = toString(document.getElementById('author_input')).value;


    

    let results =[];

    if (targetAuthor === null){
        return results;
        console.log(results);
    }

    for ( var i = 0 ; i < resp_json.news.length ; i ++){
        if(targetAuthor === resp_json.news[i].author){
           results.push(resp_json.news.story) ;
           news_content_html.innerHTML += resp_json.news[i].story;
           console.log(results);
        }else{
            alert('There is no news for that author');
        }

    }

    return results;
}

findByAuthor();



