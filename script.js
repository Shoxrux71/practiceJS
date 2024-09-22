// let son = 20;
// let message = "kirish mumkin:"
// if(son > 10){
//     alert( message + son)
// }else{
//     alert("tushini suvga et")
// }
function yigindi(a,b){
    return a + b
}

const ayirma = (a,b)=> a-b;
console.log(yigindi(10,2))

let mevalar = ['olma','behi','nok'];
mevalar.push('uzum')
const newMevalar = mevalar.filter(m=> m !== 'olma');
console.log(mevalar)
console.log(newMevalar)

const btn = document.getElementById('click');
btn.addEventListener('click',()=>{
    document.body.style.background = 'lightBlue'
})