

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
    document.getElementById("btnArea").innerHTML = "<button onclick = 'movieQuestion5()'>Yes</button><button onclick = 'movieQuestion6()'>No</button>";
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
    document.getElementById("questionToAsk").innerHTML = "I see. You probably do not like romance movies much. How about this one?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer1()'>Yes</button><button onclick = 'answer0()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/0pdqf4P9MB8";

}

//see if they like crime drama. if they don't give a list of mystery action otherwise a list of crime drama.
function movieQuestion5(){

    document.body.style.backgroundColor = "GoldenRod";
    document.getElementById("questionToAsk").innerHTML = "Let's narrow some genres in this category then. Do you like this trailer?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer2()'>Yes</button><button onclick = 'answer3()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/BV_nssS6Zkg";

}

//see if they like action
function movieQuestion6(){

    document.body.style.backgroundColor = "Cyan";
    document.getElementById("questionToAsk").innerHTML = "Maybe that wasn't your cup of tea. How about this clip?";
    document.getElementById("btnArea").innerHTML = "<button onclick = 'answer3()'>Yes</button><button onclick = 'answer2()'>No</button>";
    document.getElementById("video").src = "https://www.youtube.com/embed/kl8F-8tR8to";

}





//they like rom coms
function answer0(){

}

//they like rom dramas
function answer1(){
    
}


