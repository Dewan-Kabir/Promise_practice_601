
 
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

var resp_json = JSON.stringify(news);

console.log(resp_json[0]);

var resp_json_par = JSON.parse(resp_json);

console.log(resp_json_par);

console.log(resp_json_par[0].author);


/** 
console.log(resp_json[0]);

**/

var news_content_html = document.getElementById('news_content');
var content_table = document.getElementById('my_table');
var targetAuthor = (document.getElementById('author_input').value).toString;
console.log(targetAuthor);


    

let results =[];

    if (targetAuthor === null){
        return results;
        
    }

    console.log(results);

    for ( var i = 0 ; i < resp_json_par.length ; i ++){
        if(targetAuthor === resp_json_par.author){
           results.push(resp_json_par.story) ;
          /** 
           news_content_html.innerHTML += resp_json.news[i].story;
           */
           console.log(results);
        }else{
            alert('There is no news for that author');
        }

    }

    return results;
}

findByAuthor();



