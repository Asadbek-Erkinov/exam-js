// 1-masala

var firstForm = document.querySelector(".first-form");
var firstInput = document.querySelector(".first-input");
var firstBtn = document.querySelector(".first-btn");
var firstResult = document.querySelector(".first-result");

firstForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var firstInputValue = firstInput.value;
  var son = 0;

  for (var i = 0;  i < firstInputValue.length; i++) {
    son += parseInt(firstInputValue[i], 10);
  }

  firstResult.textContent = "Raqamlar yig'indisi " + son;
})



// 2-masala 

// var secondForm = document.querySelector(".second-form");
// var secondInput = document.querySelector(".second-input");
// var secondBtn = document.querySelector(".second-btn");
// var secondResult = document.querySelector(".second-result");

// secondFormForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   var secondInputValue = secondInput.value;
//   var raqam = 0;

//   for (var b = 0;  b < secondInputValueInputValue.length; b++) {
//      var currentDigit = parseInt(secondInputValueInputValue[b], 10);

//      if (currentDigit > raqam) {
//       raqam = currentDigit;
//      }
//   }

//   secondResult.textContent = "Eng katta son" + raqam;
// })


// 3-masala 

var thirdForm = document.querySelector(".third-form");
var thirdInput = document.querySelector(".third-input");
var thirdBtn = document.querySelector(".third-btn");
var thirdResult = document.querySelector(".third-result");

thirdForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var thirdInputVAlue = thirdInput.value.trim();

  if (!thirdInputVAlue) {
    thirdResult.textContent = "Sonni kiriting !";
    return;
  }

  var reversed = thirdInputVAlue.split("").reverse().join("");

  thirdResult.textContent = "Teskari son: " + reversed;
})

// 4-masala

var fourthForm = document.querySelector(".fourth-form");
var fourthInput = document.querySelector(".fourth-input");
var fourthBtn = document.querySelector(".fourth-btn");
var fourthResult = document.querySelector(".fourth-result");

fourthForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var fourthInputValue = fourthInput.value.trim();

  if (!fourthInputValue) {
    fourthResult.textContent = "Iltimos son kiriting ";
    return;
  }

  var reversed = fourthInputValue.split("").reverse().join("");

  if (fourthInputValue === reversed) {
    fourthResult.textContent = "✅ Palindrom: " + fourthInputValue;
  } else {
    fourthResult.textContent = "❌ Palindrom emas: " + fourthInputValue;
  }
})

// 5-masala

var fifthForm = document.querySelector(".fifth-form");
var fifthInput = document.querySelector(".fifth-input");
var fifthBtn = document.querySelector(".fifth-btn");
var fifthResult = document.querySelector(".fifth-result");

fifthForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var fifthInputValue = fifthInput.value.trim();

  if (!fifthInputValue) {
    fifthResult.textContent = "sonni kiriting: ";
    return; 
  }

  var addCount = 0;
  var addDigits = [];

  for (var i = 0; i < fifthInputValue.length; i++) {
    var digit = parseInt(fifthInputValue[i], 10);

    if (digit % 2 === 1) {
      addCount++;
      addDigits.push(digit);
    }
  }

  fifthResult.textContent = `Toq raqamlar soni : ${addCount} ta (${addDigits.join(", ")})`;
})

// 6-masala

var sixthForm = document.querySelector(".sixth-form");
var sixthInput = document.querySelector(".sixth-input");
var sixthBtn = document.querySelector(".sixth-btn");
var sixthResult = document.querySelector(".sixth-result");

sixthForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var sixthInputValue = sixthInput.value.trim();

  if (!sixthInputValue) {
    sixthResult.textContent = "Sonni kiriting: ";
    return;
  }


  var zeroCount = 0;

  for (var i = 0; i < sixthInputValue.length; i++) {
    if (sixthInputValue[i] === 0) {
      zeroCount++;
    }
  }

  sixthResult.textContent = `0 raqamlar soni ${zeroCount} ta`;
})

// 7-masala

var sevenForm = document.querySelector(".seven-form");
var sevenInput = document.querySelector(".seven-input");
var sevenBtn = document.querySelector(".seven-btn");
var sevenResult = document.querySelector(".seven-result");

sevenForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var sevenInputValue = sevenInput.value.trim();

  if (!sevenInputValue) {
    sevenResult.textContent = "text kiriting: ";
    return;
  }

  var length = sevenInputValue.length;

  sevenResult.textContent = `Satr uzunligi: ${length} ta`;
})


// 8-masala

var eigthForm = document.querySelector(".eigth-form");
var eigthInput = document.querySelector(".eigth-input");
var eigthBtn = document.querySelector(".eigth-btn");
var eigthResult = document.querySelector(".eigth-result");

eigthForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var eigthInputValue = eigthInput.value.trim();

  if (!eigthInputValue) {
    eigthResult.textContent = "So'zni kiriting";
  }

  var kattaText = eigthInputValue.toUpperCase();

  eigthResult.textContent = `Katta text ${kattaText}`;
})

// 9-masala 

var nineForm = document.querySelector(".nine-form");
var nineInput = document.querySelector(".nine-input");
var nineBtn = document.querySelector(".nine-btn");
var nineResult = document.querySelector(".nine-result");

nineForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var nineInputValue = nineInput.value.trim().toLowerCase();

  if (!nineInputValue) {
    nineResult.textContent = "so'z kiriting : ";
    return;
  }

  var aCount = 0;

  for (var i = 0; i < nineInputValue.length; i++) {
    if (nineInputValue[i] === 'a') {
      aCount++;
    }
  }

  nineResult.textContent = `"a" harfi ${aCount} marta qatnashgan`;
});

// 10-masala 

var tenForm = document.querySelector(".ten-form");
var tenInput = document.querySelector(".ten-input");
var tenBtn = document.querySelector(".ten-btn");
var tenResult = document.querySelector(".ten-result");

tenForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var tenInputValue = tenInput.value.trim();

  if (!tenInputValue) {
    tenResult.textContent = "so'zni kiriting : ";
    return;
  }

  var reversed = tenInputValue.split("").reverse().join("");

  tenResult.textContent = `bu so'zning teskarisi ${reversed}`;
})