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

export function findByAuthor(targetAuthor){

    targetAuthor = toString(document.getElementById('author_input')).value;


    var news_content_html = document.getElementById('news_content');

    let results =[];

    if (targetAuthor === null){
        return results;
    }

    for ( var i = 0 ; i < news.length ; i ++){
        if(targetAuthor === news[i].author){
           results.push(news.story) ;
           news_content_html.innerHTML = results;
           console.log(results);
        }else{
            alert('There is no news for that author');
        }

    }

    return results;
}