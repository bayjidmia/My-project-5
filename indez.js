//heart button
const button = document.getElementsByClassName('fa-regular')
for(const btn of button){
    btn.addEventListener('click',function (){
        const lovebtn=document.getElementById('love-btn')
        let nowheart =Number(lovebtn.innerText);
        nowheart++;
        lovebtn.innerText=nowheart;

    })
}
