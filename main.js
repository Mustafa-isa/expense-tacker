let balance = document.getElementById("balance");
let money_plus = document.getElementById("money-plus");
let minus_minus = document.getElementById("money-minus");
let ul = document.querySelector(".list");
let form = document.getElementById("form");
let text = document.getElementById("text");
let amount = document.getElementById("amount");
let transaction = [
  { id: 1, text: "buy", amount: 120 },
  { id: 1, text: "buy", amount: 432 },
  { id: 1, text: "buy", amount: -120 }
];

function ubdateData(e) {
  e.preventDefault();
  if (text.value === "") {
    alert("please enter text");
  } else {
    const transact = {
      id: generteId(),
      text: text.value,
      amount: +amount.value
    };
    transaction.push(transact);
    addDom();
    apdate();
    text.value = "";
    amount.value = "";
  }
}
//DELET TRANSACITON

function generteId() {
  return Math.floor(Math.random() * 100000);
}
function addDom() {
  for (let trans of transaction) {
    let sign = trans.amount < 0 ? "-" : "+";
    let item = document.createElement("li");
    item.classList.add(sign == "-" ? "miuns" : "blus");
    item.innerHTML = `${trans.text} <span>${trans.amount}</span>
    <button id="deleted" onclick="del(${transaction.id})">x</button>
    `;
    ul.append(item);
  }
  
}
function del(id) {
    transaction = transaction.filter(transaction => {
      return transaction.id !== id;
    });
 apdate() 
 ubdateData


  }
addDom();
//fiter result
function apdate() {
  let amounts = transaction.map(transaction => transaction.amount);

  let total = amounts.reduce((e, a) => {
    return e + a;
  });

  let income = amounts
    .filter(item => {
      return item > 0;
    })
    .reduce((e, a) => {
      return e + a;
    });
  let expense =
    amounts
      .filter(item => {
        return item < 0;
      })
      .reduce((e, a) => {
        return e + a;
      }) * -1;
  balance.innerHTML = `$${total}`;
  money_plus.innerHTML = ` $${income}`;
  minus_minus.innerHTML = `$${expense}`;
}
apdate();
form.addEventListener("submit", ubdateData);
