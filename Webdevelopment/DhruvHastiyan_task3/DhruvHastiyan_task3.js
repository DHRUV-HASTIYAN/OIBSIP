function convertTemperature(){

    let temp = parseFloat(
        document.getElementById("temp").value
    );

    let from =
        document.getElementById("fromUnit").value;

    let to =
        document.getElementById("toUnit").value;

    if(isNaN(temp)){
        alert("Please enter a valid temperature.");
        return;
    }

    let celsius;

    if(from==="C"){
        celsius=temp;
    }
    else if(from==="F"){
        celsius=(temp-32)*5/9;
    }
    else{
        celsius=temp-273.15;
    }

    let result;

    if(to==="C"){
        result=celsius;
    }
    else if(to==="F"){
        result=(celsius*9/5)+32;
    }
    else{
        result=celsius+273.15;
    }

    let symbol=(to==="K")?"K":"°"+to;

    document.getElementById("output").innerHTML =
    result.toFixed(2)+" "+symbol;
}