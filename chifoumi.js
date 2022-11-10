let player;
let random;
let computer;


player = window.prompt('Choisissez pierre feuille ou ciseaux');

player = player.toLowerCase();


random = Math.random();


if(random < 1 / 3)
{
    computer = 'pierre';
}

else if(random < 2 / 3) 
{
    computer = 'feuille';
}

else
{
    computer = 'ciseaux';
}






 
 if(computer === player){
 	document.write("Egalité")
 } else {
 	switch(computer) {
 		case "pierre": if(player = "feuille"){
 			document.write("Le computer a Gagné") } else {
 				document.write("Le player a Gagné")
 			}
 		
 		break;


 		case "feuille": if(player = "ciseaux"){
 			document.write("Le computer a Gagné") } else {
 				document.write("Le player a Gagné")
 			}
 		
 		break;
 		case "ciseaux": if(player = "pierre"){
 			document.write("Le computer a Gagné") } else {
 				document.write("Le player a Gagné")
 			}
		break;
		
 		} 
		
 		
 	}
    