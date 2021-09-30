var op1 = "piedara";
var op2 = "papel";
var op3= "tijera";

var resultado = function(user,cpu){
    if(user != cpu){
        if(user ===op1 && cpu===op2){
            console.log("gana usuario con " + op1);
        }
        if(user ===op1 && cpu==op3){
        console.log("gana usuario con la opcion " + op1);
        }
        if(user ===op2 && cpu===op1){
            console.log("gana usuario con " + op2);
        }
        if(user ===op2 && cpu===op3){
            console.log("gana cpu con " + op3);
        }
        if(user ===op3 && cpu===op1){
            console.log("gana cpu con " + op1);
        }
        if(user ===op3 && cpu===op2){
            console.log("gana user con " + op3);
        }  
    }
    else{
        console.log("Empate");
    }

};
resultado(op1,op2);