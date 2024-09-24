function countdown(number, callback) {
    let interval = setInterval(() => {
        console.log(number);
        number--;
        if (number < 0) {
            clearInterval(interval);
            if (callback) callback(); 
        }
    }, 1000);
}

countdown(5, () => console.log("Countdown finished!"));
