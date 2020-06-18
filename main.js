let btn_one = document.getElementById('tab-1');
let btn_two = document.getElementById('tab-2');
let btn_the = document.getElementById('tab-3');
let btn_fou = document.getElementById('tab-4');
let blc_one = document.querySelector('.tab-block-one');
let blc_two = document.querySelector('.tab-block-two');
let blc_the = document.querySelector('.tab-block-the');
let blc_fou = document.querySelector('.tab-block-fou');
let arrow_one = document.querySelector('#tab-1 > div:nth-of-type(2)');
let arrow_two = document.querySelector('#tab-2 > div:nth-of-type(2)');
let arrow_the = document.querySelector('#tab-3 > div:nth-of-type(2)');
let arrow_fou = document.querySelector('#tab-4 > div:nth-of-type(2)');

let btn_base = [btn_one, btn_two, btn_the, btn_fou];
let blc_base = [blc_one, blc_two, blc_the, blc_fou];
let arrow_base = [arrow_one, arrow_two, arrow_the, arrow_fou];
let hidden_num = [0, 0, 0, 0];

function hiddenBlock(b) {
  for (i = 0; i < blc_base.length; i++) blc_base[i].style.display = "none"; 
  for (i = 0; i < btn_base.length; i++) btn_base[i].style = "background: springgreen; margin-top: -2px; border-radius: 0px 0px 0px 0px;";
  for (i = 0; i < arrow_base.length; i++) arrow_base[i].style.transform = "rotate(0deg) translateX(0px)";
  for (i = 0; i < hidden_num.length; i++) hidden_num[i] = 0;
}
function showBlock(a) {
  blc_base[a].style.display = "block";
  btn_base[a].style = "background: palegreen; margin-top: 14px; border-radius: 8px 8px 0px 0px;";
  if (a == 0) btn_base[a].style.marginTop = "-2px";
  arrow_base[a].style.transform = "rotate(180deg) translateX(12px)";
  hidden_num[a] = 1;
}

btn_one.addEventListener('click', (e) => {
  if (hidden_num[0] == 1) hiddenBlock();
  else if (blc_one.style.display = "none") {hiddenBlock(); showBlock(0);}
});

btn_two.addEventListener('click', (e) => {
  if (hidden_num[1] == 1) hiddenBlock();
  else if (blc_two.style.display = "none") {hiddenBlock(); showBlock(1);}
});

btn_the.addEventListener('click', (e) => {
  if (hidden_num[2] == 1) hiddenBlock();
  else if (blc_the.style.display = "none") {hiddenBlock(); showBlock(2);}
});

btn_fou.addEventListener('click', (e) => {
  if (hidden_num[3] == 1) hiddenBlock();
  else if (blc_one.style.display = "none") {hiddenBlock(); showBlock(3);} 
});


