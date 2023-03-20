// const dolphin1 = 96;
// const dolphin2 = 108;
// const dolphin3 = 89;
// const avgDolphins = (dolphin1 + dolphin2 + dolphin3) / 3;
// const koalas1 = 88;
// const koalas2 = 91;
// const koalas3 = 110;
// const avgkoalas = (koalas1 + koalas2 + koalas3) / 3;
// if(avgDolphins == avgkoalas){
//     console.log(`series is draw`);
// }else if(avgDolphins > avgkoalas){
//     console.log(`winners are dolphins!!🤗 with score ${avgDolphins} and koalas are ${avgkoalas}`);
// }else if(avgkoalas > avgDolphins){
//     console.log(`winners are koalas`);
// };

//BONUS 1
const avgDolphins = (97 + 112 + 101) / 3;
const avgkoalas = (109 + 95 + 106) / 3;
console.log(avgDolphins, avgkoalas);
if(avgDolphins > avgkoalas && avgDolphins >= 100){
    console.log("Dolphins are winner");
}else if(avgkoalas > avgDolphins && avgkoalas >= 100) {
    console.log("Koalas are winner");
}else if(avgDolphins === avgkoalas && avgDolphins >= 100 && avgkoalas >= 100){
    console.log("Both wins the trophy");
}else{
    console.log(`No one is winner`);
}

//BONUS 2

