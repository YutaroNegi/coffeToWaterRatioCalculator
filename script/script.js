function calcRatio(){
    let waterInput = document.getElementById("waterA")
    let coffeeInput = document.getElementById("coffeeA")
    let result = document.getElementById("resultA")

    let water = waterInput.value
    let coffee = coffeeInput.value
    let ratio = (water/coffee)


    Math.round(ratio)

    ratio1 = ratio.toFixed(0)

    if(water == 0 || coffee ==0){
        result.innerHTML = `<p>please insert a number</p>`
    }else
    result.innerHTML = `<p> 1 : ${ratio1}</p>`
}

function calcWater(){
    let ratioInput = document.getElementById("ratioB")
    let coffeeInput = document.getElementById("coffeeB")
    let result = document.getElementById("resultB")

    let ratio = ratioInput.value
    let coffee = coffeeInput.value
    let water = (ratio*coffee)

    if(ratio == 0 || coffee ==0){
        result.innerHTML = `<p>please insert a number</p>`
    }else
    result.innerHTML = `<p>${water}ml</p>`

}

function calcCoffee(){
    let waterInput = document.getElementById("waterC")
    let ratioInput = document.getElementById("ratioC")
    let result = document.getElementById("resultC")

    let water = waterInput.value
    let ratio = ratioInput.value
    let coffee = (water/ratio)

    Math.round(coffee)
    coffee1 = coffee.toFixed(2)

    if(water == 0 || ratio ==0){
        result.innerHTML = `<p>please insert a number</p>`
    }else 
    result.innerHTML = `<p>${coffee1}g</p>`
}
