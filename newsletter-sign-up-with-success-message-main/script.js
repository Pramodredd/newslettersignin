function validateEmail() {
    var emailInput = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      document.getElementById('error-message').style.display = 'inline';
      document.getElementById("email").style.borderColor="hsl(4, 100%, 67%)";
      document.getElementById("email").style.color="hsl(4, 100%, 67%)";
      document.getElementById("email").style.backgroundColor="hsl(5, 100%, 95%)";
    } else {
      // Forward to a different web page
      window.location.href = 'success.html'; // Replace with your desired URL
    }
    localStorage.setItem('d',emailInput);
}
  
  var a = localStorage.getItem('d');
function display(){
    var b=document.getElementById("email");
    b.textContent=a;
    }