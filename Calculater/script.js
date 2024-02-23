const mainScreen = document.getElementById("result")

function input(x){
    mainScreen.value = mainScreen.value+x;
}

function allclear(){
    mainScreen.value =' ';
} 

function del(){
    mainScreen.value =  mainScreen.value.slice(0,-1)
}


function eql(){
    try{
        mainScreen.value = eval(mainScreen.value)
    }
    catch{
        mainScreen.value = 'ERROR'
    }
}
