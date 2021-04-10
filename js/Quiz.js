class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.title.hide();
     question.input1.hide();
     question.button.hide();
     question.input2.hide();

    //write code to change the background color here
     background("lightblue")
    //write code to show a heading for showing the result of Quiz
      text("Result Of Quiz", 350,0)
    //call getContestantInfo() here
     Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
     if(allContestants !== undefined){
       //write code to add note here
       fill("blue")
       textSize(20)
       text("Contestant who answered correctly is highlighted in green color",130,230)
     }

    //write code to highlight contest who answered correctly
      for(var plr in allContestants){
        var correctAns = "1"
        if (correctAns === allContestants[plr].answer){
          fill("green")
         // text("Congo!" + allContestant[plr].name + "" )
        }else{
          fill("red")
          //text("Oops! No problem! you can do better next time!" + allCo)
          }
        
      }
  }

}
