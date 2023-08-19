const input = document.getElementById("title_input");
const log = document.getElementById("main_title");

input.addEventListener("change", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}






const noun = document.getElementById("noun");
const verb = document.getElementById("verb");
const story = document.getElementById("story_result");
const adj = document.getElementById("adjective");


function updateStoryValue(e) {
    if (verb.value.length==0){
    alert("Please Enter a Verb")
    }
    if (noun.value.length==0){
    alert("Please Enter a Noun")
    }
    if (adj.value.length==0){
    alert("Please Enter an Adjective")
    }
    else{
        e.preventDefault()
        story.textContent =  "Last night I ate a "+noun.value+ ", and today I just had to "+verb.value+". What a "+adj.value+" day!";
    }
    }


button = document.getElementById("submit_button")
button.addEventListener("click", updateStoryValue);
            