var updateCallback = function(data){
    
    const apiKey = '611fd8da';
    const defaultImage = 'no-img.gif'
    var value = data.newValue;

    var line = value[value.length -1];
    var movieName = line.text;
    if (line.source.toLowerCase()==="visitor"){
   
    var url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`
 
   
    
    fetch(url)
    .then(function(response){
  
    return response.json();
    }
    ).then(function(res){
     
    document.getElementById("title").innerHTML = res.Title?res.Title:'N/A';
    document.getElementById("actor").innerHTML = res.Actors?res.Actors:'N/A';
    document.getElementById("genre").innerHTML = res.Genre?res.Genre:'N/A';
    document.getElementById("director").innerHTML = res.Director?res.Director:'N/A';
    document.getElementById("language").innerHTML = res.Language?res.Language:'N/A';
    document.getElementById("poster").src = res.Poster?res.Poster:defaultImage;

    
    
    }).catch(function(error){
    console.log("Error Message : "+error);
    })
    }
    };
    
    
    
    var notifyWhenDone = function(error) {
    if (err){
    console.log("Error Occured in notify : "+err);
    }
    
    errorMessage.innerHTML = "Unable to find the movie";
    };
    
    var chatText = "chatTranscript.lines";

    lpTag.agentSDK.init({});
    lpTag.agentSDK.bind(chatText, updateCallback, notifyWhenDone);
