
const button = document.getElementsByClassName('fa-regular')
for(const btn of button){
    btn.addEventListener('click',function (){
        const lovebtn=document.getElementById('love-btn')
        let nowheart =Number(lovebtn.innerText);
        nowheart++;
        lovebtn.innerText=nowheart;

    })
}

const callbtn=document.getElementsByClassName('btn-2')
 for(const call of callbtn){
    call.addEventListener('click',function () {
     const servicename=call.parentNode.parentNode.childNodes[1].childNodes[3].innerText
     const phoneNumber =call.parentNode.parentNode.childNodes[3].childNodes[1].innerText

      const minuscoin =20 ;
            const coin =Number(document.getElementById('coin-1').innerText)            
            if(coin<minuscoin){
              alert('you have less than 20 coins')
              return;
            }
            const finalcoin=coin-minuscoin;
            document.getElementById('coin-1').innerText=finalcoin;
  
           alert(servicename+'-'+phoneNumber) 
     
      const now = new Date();
        const timeString = now.toLocaleTimeString(); 

      const historysection =document.getElementById('history-list')
     const newcart =document.createElement('div')
        newcart.innerHTML =`
          <div class="  flex justify-between items-center mb-2 w-[250px] mx-auto  h-[80px]  bg-gray-100 rounded-md drop-shadow-4xl]">
        <div class="ml-2">
            <h2 class="w-[50x] font-semibold">${servicename}</h2>
            <h3 class=" font-semibold">${phoneNumber}</h3>
        </div>
        <span class="mr-2">Time: ${timeString}</span>
    </div>
        `
      historysection.appendChild(newcart)
}) }

  document.getElementById('clear-btn').addEventListener('click',function () {
     const clearhistory =document.getElementById('history-list')
      clearhistory.innerHTML='';})


 const copybtns =document.getElementsByClassName('btn-1');

 for (const copybtn of copybtns){
   copybtn.addEventListener('click',function () {
    const newphoneNumber =copybtn.parentNode.parentNode.childNodes[3].childNodes[1].innerText
     navigator.clipboard.writeText(newphoneNumber)
     alert('copied nunber'+newphoneNumber)

     const copy =document.getElementById('copy-btn')
     let newcopy =Number(copy.innerText)
     newcopy++;
     copy.innerText=newcopy;
   })
 }