

function movieQuestion(){

    document.body.style.backgroundColor = "lightBlue";
    document.getElementById("questionToAsk").innerHTML = "Does this clip intrests you?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'movieQuestion1()'>Yes</button><button onclick = 'movieQuestion2()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/Eh993__rOxA";

}
// if they like romance
function movieQuestion1(){

    document.body.style.backgroundColor = "Crimson";
    document.getElementById("questionToAsk").innerHTML = "It seems you may like romance. Do you like this clip?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'movieQuestion3()'>Yes</button><button onclick = 'movieQuestion4()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/s7a_9CggQuE";

}

//if they like mystery
function movieQuestion2(){

    document.body.style.backgroundColor = "Brown ";
    document.getElementById("questionToAsk").innerHTML = "I see. You probably do not like romance movies much. How about this one?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'movieQuestion16()'>Yes</button><button onclick = 'movieQuestion6()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/Egcx63-FfTE";

}

//continuing from movie1, check to see if they like rom com in romance category
function movieQuestion3(){

    document.body.style.backgroundColor = "DeepPink";
    document.getElementById("questionToAsk").innerHTML = "Hmmm. I think I almost got it. What about this clip?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer0()'>Yes</button><button onclick = 'answer1()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/Z2lYA7L7PZY";

}

function movieQuestion4(){

    document.body.style.backgroundColor = "HotPink";
    document.getElementById("questionToAsk").innerHTML = "I promise i'm not a mind reader. How about this one?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer1()'>Yes</button><button onclick = 'answer0()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/0pdqf4P9MB8";

}


//see mystery thriller
function movieQuestion16(){

    document.body.style.backgroundColor = "HotPink";
    document.getElementById("questionToAsk").innerHTML = "Do you like this one too?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'movieQuestion5()'>Yes</button><button onclick = 'answer3()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/lfqHb6INj3w";



}


//see if they like crime drama. if they don't give a list of mystery action otherwise a list of crime drama.
function movieQuestion5(){

    document.body.style.backgroundColor = "GoldenRod";
    document.getElementById("questionToAsk").innerHTML = "Let's narrow this genre one more time. Do you like this trailer?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer2()'>Yes</button><button onclick = 'answer14()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/BV_nssS6Zkg";

}

//see if they like action
function movieQuestion6(){

    document.body.style.backgroundColor = "Cyan";
    document.getElementById("questionToAsk").innerHTML = "Maybe that wasn't your cup of tea. How about this clip?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'movieQuestion7()'>Yes</button><button onclick = 'movieQuestion8()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/kl8F-8tR8to";

}

//see if they like action spy movies 
function movieQuestion7(){

    document.body.style.backgroundColor = "#19ffff";
    document.getElementById("questionToAsk").innerHTML = "Hmmm ok ok. I see you like action stuff. Does this excite you?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer4()'>Yes</button><button onclick = 'movieQuestion9()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/7GqClqvlObY";

}

//see if they like action superhero movies
function movieQuestion9(){

    document.body.style.backgroundColor = "##e6ffff";
    document.getElementById("questionToAsk").innerHTML = "Do you want to be a superhero, too?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer5()'>Yes</button><button onclick = 'answer6()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/8wNgphPi5VM";

}


//see if they like sci-fi movies
function movieQuestion8(){

    document.body.style.backgroundColor = "DarkViolet";
    document.getElementById("questionToAsk").innerHTML = "Do you like space stuff?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'movieQuestion10()'>Yes</button><button onclick = 'movieQuestion11()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/2LqzF5WauAw";

}


//see if they like sci-fi robots
function movieQuestion10(){

    document.body.style.backgroundColor = "DarkViolet";
    document.getElementById("questionToAsk").innerHTML = "Do you spooky AI apocalypses?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer7()'>Yes</button><button onclick = 'movieQuestion12()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/EoQuVnKhxaM";

}

//see if they like sci-fi drama then 
function movieQuestion12(){

    document.body.style.backgroundColor = "DarkViolet";
    document.getElementById("questionToAsk").innerHTML = "My bad, let's take a step back.?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer8()'>Yes</button><button onclick = 'answer9()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/5wfrDhgUMGI";

}

//see if they like horror films
function movieQuestion11(){

    document.body.style.backgroundColor = "Tomato";
    document.getElementById("questionToAsk").innerHTML = "OK, let's try something spooky?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'movieQuestion13()'>Yes</button><button onclick = 'final()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/k10ETZ41q5o";

}

//see if they like horror comedy
function movieQuestion13(){

    document.body.style.backgroundColor = "Tomato";
    document.getElementById("questionToAsk").innerHTML = "What about this?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'movieQuestion14()'>Yes</button><button onclick = 'movieQuestion15()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/8m9EVP8X7N8";

}

//see if they like horror fantasy
function movieQuestion14(){

    document.body.style.backgroundColor = "Tomato";
    document.getElementById("questionToAsk").innerHTML = "Interesting. Do you like this then?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer10()'>Yes</button><button onclick = 'answer13()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/HUjZHFNMlOM";

}


//see horror and supernatural 
function movieQuestion15(){

    document.body.style.backgroundColor = "Tomato";
    document.getElementById("questionToAsk").innerHTML = "Do you like this?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer11()'>Yes</button><button onclick = 'answer12()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/zuZnRUcoWos";



}




//they like rom coms
function answer0(){

}

//they like rom dramas
function answer1(){
    
}

//they like crime drama
function answer2(){

}

//they like mystery action
function answer3(){
    
}

//they like action spy 
function answer4(){
    
}

//they like action superhero 
function answer5(){
    
}

//they like action adventure 
function answer6(){
    
}

//they like sci-fi robots space apocalyptic movies 
function answer7(){


    
}

//they like space, history, drama moveis like Hidden Figures, 
function answer8(){


    
}

//they may like moveis with sci-fi and inception stuff like inception
function answer9(){


    
}

//they like horror comedy fantasy
function answer10(){
    


}

//they like horror supernatural 
function answer11(){
    


}

//they like horror mystery 
function answer12(){
    


}

//they like horror comedies like scary movie lol
function answer13(){
    


}

//they like mystery trillers
function answer14(){
    


}


//they didnt like any of the trailer so give them a list of our favorite moveis to check out
function final(){



}