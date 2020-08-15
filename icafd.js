
 const counters = document.querySelectorAll('.counter');
 const speed = 200; // The lower the slower
 
 counters.forEach(counter => {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/update/icafd.co.in/asish123/?amount=1");
    xhr.responseType = "json";
    xhr.onload = function fun() {
        // const tar = this.response.value;
       
       document.getElementById('cnt').setAttribute("data-target",this.response.value);
     
     }
    xhr.send();

    
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
    
            // Lower inc to slow and higher to slow
            const inc = target / speed;
    
            // console.log(inc);
            // console.log(count);
    
            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                setTimeout(updateCount, 100);
            } else {
                counter.innerText = target;
            }
        };
    
        updateCount();
    });

    




    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    //Get the button:
    mybutton = document.getElementById("myBtn");

    mynav = document.getElementById("myTopnav");

    var child = mynav.children;
    // child.style.color = '#ffffff';
    // child.style.backgroundColor = '#004831';

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }

        // for the cursor down menu appear code ////////////

        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            mynav.style.backgroundColor = "black";
            mynav.style.boxShadow= "1px 1px 20px 1px #7e0b0b";
            for (let i = 0; i < child.length; i++) {
                child[i].style.color = '#ffffff';
              }
            
            
        } else {
            mynav.style.backgroundColor = "transparent";
            
            for (let i = 0; i < child.length; i++) {
                child[i].style.color = '#7e0b0b';
              }
            mynav.style.boxShadow= "0px 0px 0px 0px #fff";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 

    // function adj()
    // {
    //     var x = document.getElementById("myTopnav");
    //     var y = document.getElementsByClassName("section");
    //     for(var i = 0; i < y.length; i++){
	// 	y[i].style.paddingTop = x.style.height;

    // Set the date we're counting down to
var countDownDate = new Date("Dec 13, 2020 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
 
  document.getElementById("days").innerHTML = `${days}<span class="small" >DAYS</span>` ; 
  document.getElementById("hours").innerHTML = `${hours}<span class="small" >HOURS</span>`;
  document.getElementById("minutes").innerHTML = `${minutes}<span class="small" >MINUTES</span>`; 
  document.getElementById("seconds").innerHTML = `${seconds}<span class="small" >SECONDS</span>`;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);