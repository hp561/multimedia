
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



function create(num, name, link) {
    var id = "movie" + num;
    document.getElementById(id).innerHTML = name;
    document.getElementById(id).href = link;
    document.getElementById("movieList").style.visibility = "visible"
}

//they like rom coms
function answer0(){
document.getElementById("questionToAsk").style.color = "white";
    document.body.style.backgroundColor = "#42f572";
    document.getElementById("questionToAsk").innerHTML = "Here is a list of movies you may like";
    document.getElementById("btnArea").style.visibility = 'hidden';
    document.getElementById("video").src = "";
    create(1, "It Happened One Night", "https://www.youtube.com/embed/Kd509cLN-9U");
    create(2, "The Bigh Sick", "https://www.youtube.com/embed/jcD0Daqc3Yw");
    create(3, "The Philadelphia Story", "https://www.youtube.com/embed/oCfuPPR7wnQ");
    create(4, "ENOUGH SAID", "https://www.youtube.com/embed/R09EnVNGnio");
    create(5, "CRAZY RICH ASIANS", "https://www.youtube.com/embed/ZQ-YX-5bAs0");
}

//they like rom dramas
function answer1(){
    document.getElementById("questionToAsk").style.color = "white";
    document.body.style.backgroundColor = "#42f572";
    document.getElementById("questionToAsk").innerHTML = "Here is a list of movies you may like";
    document.getElementById("btnArea").style.visibility = 'hidden';
    document.getElementById("video").src = "";
    create(1, "Blue Valentine", "https://www.youtube.com/embed/aILx69WrRhQ");
    create(2, "DEAR JOHN", "https://www.youtube.com/embed/r0fq5dd0C60");
    create(3, "The Spectacular Now", "https://www.youtube.com/embed/XDTBLSkUmYk");
    create(4, "The Notebook", "https://www.youtube.com/embed/FC6biTjEyZw");
    create(5, "THE VOW", "https://www.youtube.com/embed/PcL24s-S6ns");
}

//they like crime drama
function answer2(){
    document.getElementById("questionToAsk").style.color = "white";
    document.body.style.backgroundColor = "#42f572";
    document.getElementById("questionToAsk").innerHTML = "Here is a list of movies you may like";
    document.getElementById("btnArea").style.visibility = 'hidden';
    document.getElementById("video").src = "";
    create(1, "Spotlight", "https://www.youtube.com/embed/EwdCIpbTN5g");
    create(2, "WIND RIVER", "https://www.youtube.com/embed/s7WuKdVhrmA");
    create(3, "The Departed", "https://www.youtube.com/embed/iojhqm0JTW4");
    create(4, "Goodfellas", "https://www.youtube.com/embed/qo5jJpHtI1Y");
    create(5, "Se7en", "https://www.youtube.com/watch?v=znmZoVkCjpI");
}

//they like mystery action
function answer3(){
    document.getElementById("questionToAsk").style.color = "white";
    document.body.style.backgroundColor = "#42f572";
    document.getElementById("questionToAsk").innerHTML = "Here is a list of movies you may like";
    document.getElementById("btnArea").style.visibility = 'hidden';
    document.getElementById("video").src = "";
    create(1, "Kill Bill: Volume 1", "https://www.youtube.com/embed/7kSuas6mRpk");
    create(2, "Sherlock Holmes", "https://www.youtube.com/embed/Egcx63-FfTE");
    create(3, "SOURCE CODE", "https://www.youtube.com/embed/mnJegNyAb1w");
    create(4, "Unknown", "https://www.youtube.com/embed/vSXUgkCjdBM");
    create(5, "Eagle Eye", "https://www.youtube.com/embed/_wkqo_Rd3_Q");
}

//they like action spy
function answer4(){
   document.getElementById("questionToAsk").style.color = "white";
    document.body.style.backgroundColor = "#42f572";
    document.getElementById("questionToAsk").innerHTML = "Here is a list of movies you may like";
    document.getElementById("btnArea").style.visibility = 'hidden';
    document.getElementById("video").src = "";
    create(1, "Mission: Impossible(1996)", "https://www.youtube.com/embed/Ohws8y572KE");
    create(2, "Spy", "https://www.youtube.com/embed/YrY3v1eDmQY");
    create(3, "Body of Lies", "https://www.youtube.com/embed/bxQW8NGNb60");
    create(4, "Casino Royale", "https://www.youtube.com/embed/36mnx8dBbGE");
    create(5, "Salt", "https://www.youtube.com/embed/QZ40WlshNwU");
}

//they like action superhero
function answer5(){
    document.getElementById("questionToAsk").style.color = "white";
    document.body.style.backgroundColor = "#42f572";
    document.getElementById("questionToAsk").innerHTML = "Here is a list of movies you may like";
    document.getElementById("btnArea").style.visibility = 'hidden';
    document.getElementById("video").src = "";
    create(1, "The Dark Knight", "https://www.youtube.com/embed/EXeTwQWrcwY");
    create(2, "Avengers: Endgame", "https://www.youtube.com/embed/TcMBFSGVi1c");
    create(3, "SPIDER-MAN: INTO THE SPIDER-VERSE", "https://www.youtube.com/embed/g4Hbz2jLxvQ");
    create(4, "Iron Man(2008)", "https://www.youtube.com/embed/8ugaeA-nMTc");
    create(5, "Captain America", "https://www.youtube.com/embed/JerVrbLldXw");
}

//they like action adventure
function answer6(){
    document.getElementById("questionToAsk").style.color = "white";
    document.body.style.backgroundColor = "#42f572";
    document.getElementById("questionToAsk").innerHTML = "Here is a list of movies you may like";
    document.getElementById("btnArea").style.visibility = 'hidden';
    document.getElementById("video").src = "";
    create(1, "Avatar", "https://www.youtube.com/embed/6ziBFh3V1aM");
    create(2, "Fast and Furious", "https://www.youtube.com/embed/2TAOizOnNPo");
    create(3, "Indiana Jones(1981)", "https://www.youtube.com/embed/XkkzKHCx154");
    create(4, "Man of Steel", "https://www.youtube.com/embed/T6DJcgm3wNY");
    create(5, "Die Hard", "https://www.youtube.com/embed/jaJuwKCmJbY");
}

//they like sci-fi robots space apocalyptic movies
function answer7(){
    document.getElementById("questionToAsk").style.color = "white";
    document.body.style.backgroundColor = "#42f572";
    document.getElementById("questionToAsk").innerHTML = "Here is a list of movies you may like";
    document.getElementById("btnArea").style.visibility = 'hidden';
    document.getElementById("video").src = "";
    create(1, "The Terminator 2", "https://www.youtube.com/embed/CRRlbK5w8AE");
    create(2, "The Matrix", "https://www.youtube.com/embed/vKQi3bBA1y8");
    create(3, "Jurassic Park", "https://www.youtube.com/embed/lc0UehYemQA");
    create(4, "E.T.", "https://www.youtube.com/embed/qYAETtIIClk");
    create(5, "RoboCop", "https://www.youtube.com/embed/6tC_5mp3udE");
}

//they like space, history, drama moveis like Hidden Figures,
function answer8(){
    document.getElementById("questionToAsk").style.color = "white";
    document.body.style.backgroundColor = "#42f572";
    document.getElementById("questionToAsk").innerHTML = "Here is a list of movies you may like";
    document.getElementById("btnArea").style.visibility = 'hidden';
    document.getElementById("video").src = "";
    create(1, "Hidden Figures", "https://www.youtube.com/embed/5wfrDhgUMGI");
    create(2, "Star Trek", "https://www.youtube.com/embed/iGAHnZ555nI");
    create(3, "Star Wars Episode 4: A New Hope", "https://www.youtube.com/embed/1g3_CFmnU7k");
    create(4, "Space Cowboys", "https://www.youtube.com/embed/7PAZBAV43Zw");
    create(5, "Apollo 13", "https://www.youtube.com/embed/KtEIMC58sZo");
}

//they may like moveis with sci-fi and inception stuff like inception
function answer9(){
    document.getElementById("questionToAsk").style.color = "white";
    document.body.style.backgroundColor = "#42f572";
    document.getElementById("questionToAsk").innerHTML = "Here is a list of movies you may like";
    document.getElementById("btnArea").style.visibility = 'hidden';
    document.getElementById("video").src = "";
    create(1, "Inception", "https://www.youtube.com/embed/YoHD9XEInc0");
    create(2, "Total Recall(1990)", "https://www.youtube.com/embed/WFMLGEHdIjE");
    create(3, "Interstellar", "https://www.youtube.com/embed/2LqzF5WauAw");
    create(4, "TRON: LEGACY", "https://www.youtube.com/embed/L9szn1QQfas");
    create(5, "The Prestige", "https://www.youtube.com/embed/ijXruSzfGEc");
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
