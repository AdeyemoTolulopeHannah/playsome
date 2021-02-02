 var truth = [
     'How many people have you kissed ?',
     'How many people have you had sex with ?',
     'what is your sexual fantansy ?',
     'who is your crush ?',
     'Are you bisexual ?',
     'What is the secret that your parent do not know about you?',
     'where is the weirdiest place you have had sex before?',
     'Who is your celebrity crush? ',
     'when was the last time you had sex?',
     'what is your toxic trait?'
 ] 
 let dare =[
    'kiss the person beside you',
    'Twerk for a minute',
    'Wear the opposite underwear till the end of the game',
    'kiss a person ear',
    'Tell a stranger you want to kiss him/her',
    'Ask a stranger to be your partner',
    'Kiss a  stranger ',
    'Give a someone a lap dance for 2 minutes'
    

    
]


 
 function displayTruth() {
     var index = Math.floor(Math.random() * (truth.length));
     document.getElementById('display').innerHTML = truth[index];
 }

 function displaydare() {
    var index = Math.floor(Math.random() * (dare.length));
    disp.innerHTML = dare[index];
}
var disp = document.getElementById('display');
var displayT = document.getElementById('truthbtn');
var displayD = document.getElementById('darebtn');

displayT.addEventListener("click" , displayTruth);
displayD.addEventListener("click" , displaydare);

displayT.addEventListener("click" , more);
displayD.addEventListener('click', more);
function more () {
    if  (disp.style.display === "none"){
      disp.style.display = "block";
    }
    else{
        disp.style.display = 'none';
      }
   
      };
      


 
    