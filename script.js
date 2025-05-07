function validateAndRedirect() {
  const username = document.getElementById("vards").value;
  const password = document.getElementById("numurs").value;
  if (username && password) {
    alert("Veiksmīgi esat ierakstījušies!")
    window.location.href = "index.html";
  }
}
 function otrais(){
   const username = document.getElementById("vards1").value;
   const password = document.getElementById("numurs1").value;
    const password2 = document.getElementById("velreiz").value;
   if (username && password && password2 ) {
     alert("Veiksmīgi esat pieslēgušies!")
     window.location.href = "index.html";
 }
 }

function sudzibas() {
  const username = document.getElementById("vards").value;
   const password = document.getElementById("numurs").value;
    const password2 = document.getElementById("apraksts").value;
   if (username && password && password2 ) {
     alert("Veiksmīgi esat nosūtījuši savu sūdzību!")
     window.location.href = "index.html";
}
}
