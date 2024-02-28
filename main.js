

    //define the end (eg 1 hour, 2 hours from now...)
    const endTime = new Date("March 9 2024");

    //function to update the display
    function updateDisplay() {
        console.log("working")
        const now = new Date();
        const timeleft = endTime - now;

        //to change the UI when the timer elapses
        if (timeleft <= 0) {
           // document.getElementById("image").src = "iphone.jpg";
           // document.getElementById("hidden").style.display = "flex";
           // document.getElementById("timer-container").style.display = "none";

            //document.getElementByYd("iphone").style.display = "none";
        }

        //calculate days, hours, minutes and seconds
        const days = Math.floor(timeleft / (1000*60*60*24));
        const hours = Math.floor(timeleft % (1000*60*60*24) / (1000*60*60));
        const minutes = Math.floor(timeleft % (1000*60*60) / (1000*60));
        const seconds = Math.floor(timeleft % (1000*60) / 1000);
        console.log("working 2")

        //display the time left
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        console.log("working 3")
    }

    //update the display immediately and then every second
    updateDisplay();
    setInterval(updateDisplay, 1000);
