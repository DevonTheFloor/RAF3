
let nimp = ()=> {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
      let response = JSON.parse(this.responseText);

     response.forEach(objet =>{
        document.getElementById('lesson').insertAdjacentHTML('afterbegin','<ul><li><img class="mini" src="UPIMG/' + objet.nom + '"></li><li><p>' + objet.com +'</p></li></ul>');
     });
    }
  }
  request.open('GET','/nimp/');
  request.send();
};
let Tout = document.getElementById('tout');
Tout.addEventListener("click",nimp);

//===================== ENGLISH


let eng = ()=> {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
      let response = JSON.parse(this.responseText);
      document.querySelector('#lesson').innerHTML= "";
     response.forEach(objet =>{
       document.getElementById('lesson').insertAdjacentHTML('afterbegin','<ul><li><img class="mini" src="UPIMG/' + objet.nom + '"></li><li><p>' + objet.com +'</p></li></ul>');
     });
    }
  }
  request.open('GET','/eng/');
  request.send();
};
let Eng = document.getElementById('anglais');
Eng.addEventListener('click',eng);

//================== FRANCAIS


let french = ()=> {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
      let response = JSON.parse(this.responseText);
    document.querySelector('#lesson').innerHTML= "";
     response.forEach(objet =>{
       document.getElementById('lesson').insertAdjacentHTML('afterbegin','<ul><li><img class="mini" src="UPIMG/' + objet.nom + '"></li><li><p>' + objet.com +'</p></li></ul>');
     });
    }
  }
  request.open('GET','/french/');
  request.send();
};
let French = document.getElementById('francais');
French.addEventListener('click',french);

//======================== HISTOIRE


let hist = ()=> {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
      let response = JSON.parse(this.responseText);
      document.querySelector('#lesson').innerHTML= "";
     response.forEach(objet =>{
       document.getElementById('lesson').insertAdjacentHTML('afterbegin','<ul><li><img class="mini" src="UPIMG/' + objet.nom + '"></li><li><p>' + objet.com +'</p></li></ul>');
     });
    }
  }
  request.open('GET','/histoire/');
  request.send();
};
let Histo = document.getElementById('histoire');
Histo.addEventListener('click',hist);

//========================== MATH


let math = ()=> {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
      let response = JSON.parse(this.responseText);
      document.querySelector('#lesson').innerHTML= "";
     response.forEach(objet =>{
       document.getElementById('lesson').insertAdjacentHTML('afterbegin','<ul><li><img class="mini" src="UPIMG/' + objet.nom + '"></li><li><p>' + objet.com +'</p></li></ul>');
     });
    }
  }
  request.open('GET','/maths/');
  request.send();
};
let Maths = document.getElementById('maths');
Maths.addEventListener('click',math);

//===================== PHYSIQUE


let phy = ()=> {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
      let response = JSON.parse(this.responseText);
      document.querySelector('#lesson').innerHTML= "";
     response.forEach(objet =>{
       document.getElementById('lesson').insertAdjacentHTML('afterbegin','<ul><li><img class="mini" src="UPIMG/' + objet.nom + '"></li><li><p>' + objet.com +'</p></li></ul>');
     });
    }
  }
  request.open('GET','/physique/');
  request.send();
};
let Phys = document.getElementById('physique');
Phys.addEventListener('click',phy);