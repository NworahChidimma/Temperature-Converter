 let C = 


function celciusConverter(C) {
    if (C===undefined){
        console.log("You did not put a value in Celcius")
    } else{
           let cF =  (C* 9/5) + 32 
    console.log(C,"Celcius is", cF,"Farenheit")
    let cK = C + 273.15
    console.log(C, "in Celcius is", cK, "Kelvin")
    }
} 
C()

let F =

function farenheitConverter(F) {
    if(F===undefined){
        console.log("You did not put a value in Farenheit")
    }
    else{
         let fC = (F - 32) * 5/9
    console.log(F,"in Farenheit is", fC, "Celcius")
    let fK = (F - 32)*5/9 + 273.15
    console.log(F, "in Farenheit is", fK, "Kelvin")
    }
}
F()

let K =

function kelvinConverter(K) {
    if (K===undefined) {
        console.log("you did not put a value  in Kelvin")
    }
    else{
          let kC = K - 273.15
    console.log(K, "in Kelvin is", kC, "Celcius")
    let kF = (K - 273.15)* 9/5 + 32
    console.log(K, "in Kelvin is", kF, "in Farenheit")
    }
}
K()