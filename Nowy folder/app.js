const menuDiv = document.getElementById("menu");
const logbookDiv = document.getElementById("logbook");
const summaryDiv = document.getElementById("summary");


const menuBtn = document.getElementById("menu_Btn");
const logbookBtn = document.getElementById("logbook_Btn");
const summaryBtn = document.getElementById("summary_Btn");
const metryczka2 = document.querySelector("#metryczka2");

menuBtn.addEventListener('click',function () {
  menuDiv.classList.remove("hidden");
  logbookDiv.classList.add("hidden");
  summaryDiv.classList.add("hidden");
  metryczka2.classList.add("hidden");
});
logbookBtn.addEventListener('click', function () {
  menuDiv.classList.add("hidden");
  logbookDiv.classList.remove("hidden");
  summaryDiv.classList.add("hidden");
  metryczka2.classList.add("hidden");
});
summaryBtn.addEventListener('click', function () {
  menuDiv.classList.add("hidden");
  logbookDiv.classList.add("hidden");
  summaryDiv.classList.remove("hidden");
  metryczka2.classList.add("hidden");
});
const metryka=document.querySelector("#metryka");
metryka.addEventListener( 'click' , function (evt) {
  menuDiv.classList.add("hidden");
  logbookDiv.classList.add("hidden");
  summaryDiv.classList.add("hidden");
  metryczka2.classList.remove("hidden")

  const display=document.querySelector('#imie_nazwisko');
  
  const display2=document.querySelector('#klasa_rokszkolny');
  const display3=document.querySelector('#odbyta');
  const display4=document.querySelector('#when')
  const name=document.querySelector('#name');
  const surname=document.querySelector('#surname');
  const klasa=document.querySelector('#klasa');
  const date=document.querySelector('#date');
  const where=document.querySelector('#where');
  const datestart=document.querySelector('#dateStart')
  const dateend=document.querySelector('#dateEnd')
  display.innerHTML=`Imie i nazwisko: ${name.value} ${surname.value} `; 
  display2.innerHTML=`klasa: ${klasa.value} , rok szkolny: ${date.value} `;
  display3.innerHTML=`odbytej w ${where.value}`
  display4.innerHTML=`W terminie ${datestart.value} - ${dateend.value}`
  const edit=document.querySelector('#exit')
  edit.addEventListener('click', function(){
  menuDiv.classList.remove("hidden");
  logbookDiv.classList.add("hidden");
  summaryDiv.classList.add("hidden");
  metryczka2.classList.add("hidden");})
});
const dzial = document.getElementById("dzial");
const topic = document.getElementById("topic");

teachingProgram.forEach((element) => {
  const elem = document.createElement("option");
  elem.value = elem.innerText = element.name;
  dzial.appendChild(elem);
});

dzial.addEventListener("change", function () {
  topic.innerHTML = "";
  const unit = teachingProgram.filter((elem) => elem.name === this.value);

  unit[0].topic.forEach((element) => {
    const elem = document.createElement("option");
    elem.value = elem.innerText = element;
    topic.appendChild(elem);
  });
});




