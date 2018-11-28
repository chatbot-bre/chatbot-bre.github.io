//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chatbot', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  const msg = ['J\'aime Brebeuf!','Monsieur Racine est trop cool!!!','Bonjour cher programmeur!']
  botMessage = msg[Math.floor(Math.random()*(msg.length))];;

  if (lastUserMessage === 'au revoir' || lastUserMessage =='salut') {
    const msg = ['Je vais te manquer', 'On se reverra!']
    botMessage = msg[Math.floor(Math.random()*(msg.length))];;
  }

  else if ((new RegExp("bonjour")).test(lastUserMessage) === true) {
    const msg = ['Salutations!', 'Bonjour mon amigo!', 'Je pense que tu es un etudiant!']
    botMessage = msg[Math.floor(Math.random()*(msg.length))];;
  }

  else if ((new RegExp("bonjour")).test(lastUserMessage) === true) {
    const msg = ['Salutations!', 'Bonjour mon amigo!', 'Je pense que tu es un etudiant!']
    botMessage = msg[Math.floor(Math.random()*(msg.length))];;
  }

  else if ((new RegExp("histoire")).test(lastUserMessage) === true) {
    const msg = ["Il y a tres longtemps, un Brebeuvien s'est aventure dans le bureau de Monsieur Racine. Monsieur Racine l'a accueilli et ils sont maintenant de tres bons amis!",
    "Il etait une fois des gens jouaient au hockey dans la rue. Maintenant, ce ne sont que les reals qui jouent au hockey a l'exterieur puisque la plupart des gens jouent a NHL 2018 sur XBOX.",
    "Je me rappelle du temps ou Fortnite '<a href='https://fr.wikipedia.org/wiki/Club_Penguin' target='\\blank'>'n'existait pas'</a>' <a href='https://create.cprewritten.net/'><img style='width:400px;' src='http://images5.fanpop.com/image/photos/25300000/club-penguin-club-penguin-25388027-1280-1024.jpg'></a>."]
    botMessage = msg[Math.floor(Math.random()*(msg.length))];;
  }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
