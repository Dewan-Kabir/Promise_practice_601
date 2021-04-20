var news = [

    {

        caption: "Trump adopted by the Queen of Yorkshire",

        source: "Fox News",

        url: "http://www.foxnews.com",

        author: "Joe Mann",

        released: "2020-01-17 12:01:28 AM EST",

        story: "This is a really interesting story.  More to follow..",

        keyword: ["Trump"  , "Queen of Yorkshire"]

    },

    {

        caption: "Dog for hire.  Solves crime and fluffy",

        source: "The Voxx",

        url: "https://www.washingtonpost.com/",

        author: "Mary Blige",

        released: "2019-11-17 8:21:01 PM EST",

        story: "Makes make hope that a dog can become President.  Hell, Trump can do it...",

        keyword: ["Dog" , "crime" , "fluffy"]

    }

];
 
export function findByAuthor(){



    

var resp_json = JSON.stringify(news);

console.log(resp_json[0]);

var resp_json_par = JSON.parse(resp_json);

console.log(resp_json_par);

console.log(resp_json_par[0].author);

console.log(resp_json_par[0].keyword[1]);

console.log(substr(resp_json_par[0].released));


/** 
console.log(resp_json[0]);

**/

var news_content_html = document.getElementById('news_content');
var content_table = document.getElementById('my_table');
var targetAuthor = (document.getElementById('author_input').value).toString();
console.log(targetAuthor);


    

let results =[];

    if (targetAuthor === null){
        return results;
        
    }

    console.log(results);

    for ( var i = 0 ; i < resp_json_par.length ; i ++){
        if(targetAuthor === resp_json_par[i].author){
           results.push(resp_json_par[i].story) ;
          /** 
           news_content_html.innerHTML += resp_json.news[i].story;
           */
           console.log(results);
           news_content_html.innerHTML = results;

        }else{
            alert('There is no news for that author');
        }

    }

    return results;
}

findByAuthor();

/********************************************************************************************* */

export function findByKeyword(){



    

    var resp_json = JSON.stringify(news);
    
    console.log(resp_json[0]);
    
    var resp_json_par = JSON.parse(resp_json);
    
    console.log(resp_json_par);
    
    console.log(resp_json_par[0].author);
    
    console.log(resp_json_par[0].keyword[1]);
    
    
    /** 
    console.log(resp_json[0]);
    
    **/
    
    var news_content_html = document.getElementById('news_content');
    var content_table = document.getElementById('my_table');
    var targetAuthor = (document.getElementById('author_input').value).toString();
    var targetKeyword = (document.getElementById('keyword_input').value).toString();
    console.log(targetKeyword);
    
    
        
    
    let results =[];
    
        if (targetKeyword === null){
            return results;
            
        }
    
        console.log(results);
    

        
        

        
for (var k = 0 ; k < resp_json_par.length; k ++){
            var test_news = resp_json_par[k];
        for ( var i = 0 ; i < test_news.keyword.length ; i ++){
             var match_keyword = test_news.keyword[i];

        /**  for (var j = 0 ; j< match_keyword.length ; j ++){ **/ /** Need to add the ending } */
                if (targetKeyword === match_keyword){
                    results.push(targetKeyword);
                    console.log(results);
                    news_content_html.innerHTML = test_news.story;

                }else{
                    alert('There is no news for that author');
                }
            
        }
    }

        return results;
    }

    findByKeyword();

/***************************************************************************************** */


export function findBydate(){



    

    var resp_json = JSON.stringify(news);
    
    console.log(resp_json[0]);
    
    var resp_json_par = JSON.parse(resp_json);
    
    console.log(resp_json_par);
    
    console.log(resp_json_par[0].author);
    
    console.log(resp_json_par[0].keyword[1]);
    
    
    /** 
    console.log(resp_json[0]);
    
    **/
    
    var news_content_html = document.getElementById('news_content');
    var content_table = document.getElementById('my_table');
    var targetAuthor = (document.getElementById('author_input').value).toString();
    var targetKeyword = (document.getElementById('keyword_input').value).toString();
    console.log(targetKeyword);
    
    
        
    
    let results =[];
    
        if (targetKeyword === null){
            return results;
            
        }
    
        console.log(results);
    

        
        

        
for (var k = 0 ; k < resp_json_par.length; k ++){
            var test_news = resp_json_par[k];
        for ( var i = 0 ; i < test_news.keyword.length ; i ++){
             var match_keyword = test_news.keyword[i];

        /**  for (var j = 0 ; j< match_keyword.length ; j ++){ **/ /** Need to add the ending } */
                if (targetKeyword === match_keyword){
                    results.push(targetKeyword);
                    console.log(results);
                    news_content_html.innerHTML = test_news.story;

                }else{
                    alert('There is no news for that author');
                }
            
        }
    }

        return results;
    }

    findByKeyword();

