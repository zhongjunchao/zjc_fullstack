// 剪刀石头布的游戏
var playerAction = process.argv[2];
console.log(process.argv)
if (['rock','paper','scissor'].indexOf(playerAction)==-1){
    console.log('请输入正确的');
    return;
}
var computerAction;
var random =Math.random()*3
if(random<1){
    computerAction='rock';
    console.log('电脑出了石头')
}else if(random>2){
    computerAction='scissor';
    console.log('电脑出了剪刀')
}else{
    computerAction='paper';
    console.log('电脑出了布');
}

if (computerAction==playerAction){
    console.log('平局')
}else if (
    (computerAction == 'rock' && playerAction == 'scissor') ||
    (computerAction == 'scissor' && playerAction == 'paper') ||
    (computerAction == 'paper' && playerAction == 'rock')
  ) {
   console.log('你输了')   
  } else {
    console.log('你赢了');
  }