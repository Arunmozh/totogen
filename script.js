
let n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
let i=0,interval;
function Roll(params) {
   interval=setInterval(function(){
        if(i>=n.length-1){i=0}
        console.log(i>=n.length-1? true:false);
        i++
        document.getElementsByTagName("button")[0].setAttribute("onclick","Pick()")
        document.getElementsByTagName("button")[0].innerText="Pick";
    })
}
let index=0,numbers,output;
function Pick(){
    clearInterval(interval);
    if(document.getElementById('n5').innerText!=""&&index==0){
        for(let i=0;i<=5;i++){
            document.getElementById("n"+i).innerText="";
        }
    }
    document.getElementById("n"+index).innerText=n[i];
    index++;
    if(index>5){index=0}
    n.splice(i,1);
    for(let i=0;i<=5;i++){
        numbers[i]=document.getElementsByTagName("span")[i].innerText
    }
numbers.sort(function(a, b) {
  return a - b;
});
output=numbers.join(", ");

    document.getElementsByTagName("button")[0].setAttribute("onclick","copy()")
    document.getElementsByTagName("button")[0].innerText="copy";
}

function copy(params) {

navigator.clipboard.writeText(output)
  .then(() => {
    console.log("Text copied to clipboard");
  })
  .catch((error) => {
    console.error("Failed to copy text: ", error);
  });

    document.getElementsByTagName("button")[0].setAttribute("onclick","Roll()")
    document.getElementsByTagName("button")[0].innerText="Roll";
}
