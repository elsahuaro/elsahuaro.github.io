"use strict";var votes=["pan","prd","mc","pan-prd","pan-mc","prd-mc","pan-prd-mc","pri","pvem","na","pri-pvem","pri-na","pvem-na","pri-pvem-na","pt","morena","pes","pt-morena","pt-pes","morena-pes","pt-morena-pes","mz","bronco","nulo","otro"],stack=[].concat(Array(18).fill("pan")).concat(Array(14).fill("pri")).concat([,,].fill("prd")).concat([,,].fill("pvem")).concat([,,,,,].fill("pt")).concat([,].fill("mc")).concat(Array(44).fill("morena")).concat([,,].fill("pes")).concat([,].fill("na")).concat([,].fill("pt-morena")).concat([,,].fill("pt-morena-pes")).concat([,,,,,].fill("bronco")).concat([,,,].fill("nulo")),stack_idx=0;function shuffle(a){for(var d=a.length-1;0<d;d--){var b=Math.floor(Math.random()*d),c=a[d];a[d]=a[b],a[b]=c}}var nextVote=function(){//return votes[Math.floor(Math.random() * votes.length)];
var a=stack[stack_idx];return stack_idx++,a};window.onload=function(){var a={width:1210,height:600,scene:[LoadingScene,WelcomeScene,DrawVoteScene,CategorizeVoteScene],backgroundColor:"#AABBCC",parent:"conteo-votos"};shuffle(stack);new Phaser.Game(a)};
