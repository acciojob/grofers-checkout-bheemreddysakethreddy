const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 let prices=document.querySelectorAll('.price')
 let sumarr = Array.from(prices)
sumarr=sumarr.map(Number)
 let total =  sumarr.reduce((acc,sum)=>sum+acc,0)
 const totalrow = document.createElement('tr');
 const totalname = document.createElement("td");
 const totalprice = document.createElement('td');
totalname.textContent="total Price"
totalprice.textContent=410
totalrow.append(totalname,totalprice)
totalrow.id="ans"
document.querySelector("table").appendChild(totalrow);

};

getSumBtn.addEventListener("click", getSum);

