var readlineSync = require('readline-sync');

// var chalk = require('chalk');
// const correct = chalk.bold.green;
// const incorrect = chalk.bold.red;
// const white = chalk.bold.white;
// const Q = chalk.bold.yellow;

var figlet = require('figlet');
var score=0

function asciiText(text){
    figlet.text(text, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}

function intro(){    
    var profile = readlineSync.question(Q("Welcome, what is your name and what football club do you support? "));
    player = String(profile)
    lst = player.split(" ");
    console.log("\n");
    console.log(white("Player Profile\nName: ",lst[0]));
    if(lst.length >2)
        console.log(white("Club: ",lst[1],lst[2])); // for club names with 2 words
    else
        console.log(white("Club: ",lst[1]));
    console.log("\n");
}

function QuesRun(question,answer){
    var ans = readlineSync.question(question);
    if(ans.toLowerCase()==answer){
        console.log("Correct !");
        score +=1;
    }else{
        console.log("Incorrect :(");
    }
    // console.log("Score: ",score);
}

function level1(){

    console.log("================================")
    console.log("    Level 1     ")
    console.log("================================\n")

    var Q_1 = [{
        Q: 'How many teams are in the premier league? ',
        A: '20'},{
        Q: 'How many titles have Manchester united won? ',
        A: '13'},{
        Q: 'What position does David de gea play in? ',
        A: 'goalkeeper'},{
        Q: 'Who is the manager of Manchester City? ',
        A: 'pep guardiola'},{
        Q: 'In 2019, Romelu Lukaku left Man-Utd for which club? ',
        A: 'inter milan'},{
        Q: 'Arsene wenger was the manager of which football club? ',
        A: 'arsenal'},{
        Q: 'Mo Salah plays for which football club? ',
        A: 'liverpool'},{
        Q: 'St. James park is the home ground of which football club? ',
        A: 'newcastle united'
    }]

    for(var i=0;i<5;i++){
        var x = Math.floor(Math.random() * Q_1.length);
        QuesRun(Q_1[x].Q,Q_1[x].A);
        Q_1.splice(x,1);
    }

    if (score>=3){
        console.log("\nCongrats ... You have cleared level 1");
        console.log("Current score: ",score);
        console.log("\n");
        return 1;
    }else{
        console.log("\nYou need to get 3 or more questions correct to progress to the next level, try level 1 again (Ctrl+C to exit)\n");
        level1()
    }
}

function level2(){
    console.log("================================")
    console.log("    Level 2     ");
    console.log("================================")
    var Q_2 = [{
        Q: 'How many teams get relegated in each season of the PL? ',
        A: '3'},{
        Q: 'Which Real madrid winger previously played for Tottenham hotspur? ',
        A: 'gareth bale'},{
        Q: 'Who is the all time premier league top scorer? ',
        A: 'alan shearer'},{
        Q: 'Did Luka modric ever play in the premier league? ',
        A: 'yes'},{
        Q: 'Which team won the title in 2016 against all odds? ',
        A: 'leicester'}]

    for(var i=0;i<Q_2.length;i++){
        QuesRun(Q_2[i].Q,Q_2[i].A);
    }
}

function main(){
    level1();
    level2();
    console.log("\nFinal Score: "+score);
}

asciiText("CLI Premier League Quiz")
setTimeout(() => {  main() }, 1000);