const input = document.getElementById("input")
function reverseString(str){
    return str.split("").reverse().join("")
}
function check(){
    const value = input.value;
    const reverse = reverseString(value)
    if (value == reverse){
        alert(`Enter value ${value} is a pallindrome.`)
    }
    else{
        alert(`Ooops!,given pair of string is not a pallindrome.`)
    }
}