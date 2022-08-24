let submitBtn = document.querySelector(`.submit-btn`);
let totalResult = document.querySelector(`.total-result`);
let form = document.querySelector(`.tip-form`);
let amount = document.getElementById(`amount`);
let peopleShare = document.getElementById(`people-share`);
let tipPercent = document.getElementById(`tip-percent`);
let errorDisplay = document.querySelector(`.error-display`);
let billError = document.querySelector(`.bill-error`);
let shareError = document.querySelector(`.share-error`);
let serviceError = document.querySelector(`.service-error`);
let tipPercentOptions = tipPercent.options;

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  if (
    amount.value > 0 &&
    peopleShare.value > 0 &&
    tipPercentOptions.selectedIndex === 1
  ) {
    let tipAmountValue = (parseFloat(amount.value) * 20) / 100;
    let tipTotalValue = tipAmountValue + parseFloat(amount.value);
    let amountOweValue = tipTotalValue / parseFloat(peopleShare.value);
    let tipAmount = document.querySelector(`.tip-amount`);
    let tipTotal = document.querySelector(`.total-amount`);
    let amountOwe = document.querySelector(`.amount-owe`);
    let preloader = document.querySelector(`.preloader`);
    preloader.classList.add(`active`);
    setTimeout(() => {
      tipAmount.textContent = `Tip Amount $${tipAmountValue}`;
      tipTotal.textContent = `Tip Total $${tipTotalValue}`;
      amountOwe.textContent = `Each Person Owes $${amountOweValue}`;
      totalResult.style.display = `grid`;
      preloader.classList.remove(`active`);
    }, 2000);

    errorDisplay.style.display = `none`;
  } else if (
    amount.value > 0 &&
    peopleShare.value > 0 &&
    tipPercentOptions.selectedIndex == 2
  ) {
    let tipAmountValue = (parseFloat(amount.value) * 10) / 100;
    let tipTotalValue = tipAmountValue + parseFloat(amount.value);
    let amountOweValue = tipTotalValue / parseFloat(peopleShare.value);
    let tipAmount = document.querySelector(`.tip-amount`);
    let tipTotal = document.querySelector(`.total-amount`);
    let amountOwe = document.querySelector(`.amount-owe`);
    let preloader = document.querySelector(`.preloader`);
    preloader.classList.add(`active`);
    setTimeout(() => {
      tipAmount.textContent = `Tip Amount $${tipAmountValue}`;
      tipTotal.textContent = `Tip Total $${tipTotalValue}`;
      amountOwe.textContent = `Each Person Owes $${amountOweValue}`;
      totalResult.style.display = `grid`;
      errorDisplay.style.display = `none`;
      preloader.classList.remove(`active`);
    }, 2000);
  } else if (
    amount.value > 0 &&
    peopleShare.value > 0 &&
    tipPercentOptions.selectedIndex == 3
  ) {
    let tipAmountValue = (parseFloat(amount.value) * 2) / 100;
    let tipTotalValue = tipAmountValue + parseFloat(amount.value);
    let amountOweValue = tipTotalValue / parseFloat(peopleShare.value);
    let tipAmount = document.querySelector(`.tip-amount`);
    let tipTotal = document.querySelector(`.total-amount`);
    let amountOwe = document.querySelector(`.amount-owe`);
    let preloader = document.querySelector(`.preloader`);
    preloader.classList.add(`active`);
    setTimeout(() => {
      tipAmount.textContent = `Tip Amount $${tipAmountValue}`;
      tipTotal.textContent = `Tip Total $${tipTotalValue}`;
      amountOwe.textContent = `Each Person Owes $${amountOweValue}`;
      totalResult.style.display = `grid`;
      errorDisplay.style.display = `none`;
      preloader.classList.remove(`active`);
    }, 2000);
  }
  //   warning alert
  else if (
    (amount.value == 0 || amount.value == ``) &&
    (peopleShare.value == 0 || peopleShare.value == ``) &&
    tipPercentOptions.selectedIndex == 0
  ) {
    errorDisplay.style.display = `block`;
    billError.style.display = `block`;
    shareError.style.display = `block`;
    serviceError.style.display = `block`;
  } else if (
    (amount.value == 0 || amount.value == ``) &&
    (peopleShare.value == 0 || peopleShare.value == ``) &&
    tipPercentOptions.selectedIndex > 0
  ) {
    errorDisplay.style.display = `block`;
    billError.style.display = `block`;
    shareError.style.display = `block`;
    serviceError.style.display = `none`;
  } else if (
    (amount.value == 0 || amount.value == ``) &&
    peopleShare.value > 0 &&
    tipPercentOptions.selectedIndex == 0
  ) {
    errorDisplay.style.display = `block`;
    billError.style.display = `block`;
    serviceError.style.display = `block`;
    shareError.style.display = `none`;
  } else if (
    amount.value > 0 &&
    (peopleShare.value == 0 || peopleShare.value == ``) &&
    tipPercentOptions.selectedIndex == 0
  ) {
    errorDisplay.style.display = `block`;
    billError.style.display = `none`;
    shareError.style.display = `block`;
    serviceError.style.display = `block`;
  } else if (
    (amount.value == 0 || amount.value == ``) &&
    peopleShare.value > 0 &&
    tipPercentOptions.selectedIndex > 0
  ) {
    errorDisplay.style.display = `block`;
    billError.style.display = `block`;
    shareError.style.display = `none`;
    serviceError.style.display = `none`;
  } else if (
    amount.value > 0 &&
    (peopleShare.value == 0 || peopleShare.value == ``) &&
    tipPercentOptions.selectedIndex > 0
  ) {
    errorDisplay.style.display = `block`;
    billError.style.display = `none`;
    shareError.style.display = `block`;
    serviceError.style.display = `none`;
  } else if (
    amount.value > 0 &&
    peopleShare.value > 0 &&
    tipPercentOptions.selectedIndex == 0
  ) {
    errorDisplay.style.display = `block`;
    billError.style.display = `none`;
    shareError.style.display = `none`;
    serviceError.style.display = `block`;
  }
  setTimeout(() => {
    totalResult.style.display = `none`;
    errorDisplay.style.display = `none`;
    amount.value = ``;
    peopleShare.value = ``;
    tipPercentOptions.selectedIndex = 0;
  }, 5000);
});
