



document.getElementById("myBtn").addEventListener('click', async function () {
    var btn = document.getElementById("myBtn");
    shrinkButton(btn)
    go();
    setTimeout(reloadPage,1500)
  });
  
  async function shrinkButton(btn){
    btn.hidden = 'true';
  }
  
  async function go() {
     var holder = document.getElementById("myHolder")
     holder.innerHTML += `<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="#none"/>
      <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>`
   }
  
  async function reloadPage(){
    document.getElementById("myHolder").innerHTML = `<button id="myBtn" class="myButton">Login
    <span class="hiddenPanel">Get Your Game On</span>
    </button>`
    
    document.getElementById("myBtn").addEventListener('click', async function () {
    var btn = document.getElementById("myBtn");
    shrinkButton(btn)
    go();
    setTimeout(reloadPage,1500)
  });
    
   
  }

var mySelect = document.getElementById("testSelect2");

mySelect.addEventListener("change", function() {
  mySelect.style.padding = "5px";
  mySelect.style.backgroundColor = "#222";
  mySelect.style.color = "antiquewhite"
});