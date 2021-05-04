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

        released: "2021-05-06 8:21:01 PM EST",

        story: "Makes make hope that a dog can become President.  Hell, Trump can do it...",

        keyword: ["Dog" , "crime" , "fluffy"]

    },

    {

        caption: "The Avengers have time travelled to the past",

        source: "The Daily Buggle",

        url: "https://marvelcinematicuniverse.fandom.com/wiki/Avengers",

        author: "Loki",

        released: "2021-05-05 8:21:01 PM EST",

        story: "Loki took the tassaract and travelled to another dimension  Hell, The time authority agency captured him ...",

        keyword: ["Loki" , "OdinSon" , "Avengers"]

    },

    {

        caption: "The new Batman movie will star Robert Pattisnon",

        source: "The Daily Planet",

        url: "https://dc.fandom.com/wiki/DC_Comics_Database",

        author: "Louis Lane",

        released: "2021-05-04 8:21:01 PM EST",

        story: "now comes another reboot of the most famous Batman franchise, Christian Bale now stars as ...",

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

var str = (resp_json_par[0].released).toString();

console.log(str.substring(0 ,10));


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



/********************************************************************************************* */

export function findByKeyword(){

    var resp_json = JSON.stringify(news);
    
    console.log(resp_json[0]);
    
    var resp_json_par = JSON.parse(resp_json);
    
    console.log(resp_json_par);
    
    console.log(resp_json_par[0].author);
    
    console.log(resp_json_par[0].keyword[1]);
   
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
                    alert('There is no news for that keyword');
                }
            
        }
    }

        return results;
    }

  

/***************************************************************************************** */


export function findBydate(){

    var resp_json = JSON.stringify(news);
    
    console.log(resp_json[0]);
    
    var resp_json_par = JSON.parse(resp_json);
    
    console.log(resp_json_par);
    
    console.log(resp_json_par[0].author);
    
    console.log(resp_json_par[0].keyword[1]);
    
 
    var news_content_html = document.getElementById('news_content');
    var content_table = document.getElementById('my_table');
    var targetAuthor = (document.getElementById('author_input').value).toString();
    var targetKeyword = (document.getElementById('keyword_input').value).toString();
    var targetDate = document.getElementById('date_input').value;
    console.log(targetDate);
    console.log(targetKeyword);
    
    let results =[];
    
        if (targetDate === null){
            return results;
            
        }
    
        console.log(results);
    
        for ( var i = 0 ; i < resp_json_par.length ; i ++){
                var match_date = resp_json_par[i].released;
                console.log(match_date);
                var match_date_value = match_date.substring(0,10);
                var match_date_string = match_date_value.toString();
                var target_date_string = targetDate.toString();
                console.log(match_date_string);
                console.log(target_date_string);
            if(target_date_string === match_date_string){
               results.push(resp_json_par[i].story) ;
              /** 
               news_content_html.innerHTML += resp_json.news[i].story;
               */
               console.log(results);
               news_content_html.innerHTML = results;
    
            }else{
                alert('There is no news for that date which you have entered')
                console.log((resp_json_par[0].released).substring(0,11));
            }
    
        }

        return results;
    }

    


    /*************************************************************************** */

   export function myPageLoad(){

    var resp_json = JSON.stringify(news);

    console.log(resp_json[0]);

    var resp_json_par = JSON.parse(resp_json);

    var news_content_html = document.getElementById("todays_news");

    var today = new Date();

    var date = (
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate()
    ).toString();


        for ( var i = 0 ; i < resp_json_par.length ; i ++){
            var match_date = resp_json_par[i].released;
                console.log(match_date);
                var match_date_value = match_date.substring(0,10);
                var match_date_string = match_date_value.toString();
            if(date === match_date_string){
             
               news_content_html.innerHTML = `
               <div>
               <h4>This is the news for today</h4>
               <p>The Tile of the story : ${resp_json_par[i].caption}</p> <br>
               <p>The Tile of the story : ${resp_json_par[i].source}</p> <br>
               <p>The Tile of the story : ${resp_json_par[i].author}</p> <br>
                <p>The Tile of the story : ${resp_json_par[i].released}</p> <br>
               <p>The Tile of the story : ${resp_json_par[i].story}</p>
               `;
    
            }else{
                alert('There is no news for that date which you have entered')
                console.log((resp_json_par[0].released).substring(0,11));
            }
    
        }

    }

    myPageLoad();

