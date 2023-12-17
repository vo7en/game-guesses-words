let s = 4;
let worlds = [
  "програмирование",
  "код",
  "язык",
  "ладно",
  "артыта",
  "аытатыола"
];
let world = worlds[Math.floor(Math.random()*worlds.length)];//язык
let answerArray = [];

for (let i = 0; i < world.length; i++){
answerArray[i] = "_";
}
let remain1 = world.length;//0

while (remain1 >0){
    alert(answerArray.join(" "));
    let guess = prompt("Угадайте букву или нажмите отмена для выхода из игры");
   guess = guess.toLowerCase()
   if (s === 2){
    alert("ты проиграл!",);
   }
   if (s === 3){
    alert("у тебя осталась 1 попытка",s--);
   }
   if (guess !== world, s===4){
     alert("у тебя осталось 2 попытки",s--);
   }
    if (guess === null){
        break;
    } else if (guess.length !== 1){
        alert("пожалуйста введите только 1 букву");
    } else {
       for (let j = 0; j<world.length; j++){
        if (world[j]=== guess){
            answerArray[j] = guess;
            remain1--;
         }
       }
    }

}



alert(answerArray.join(" "));
alert("отлично! Было загадано слово "+ world)