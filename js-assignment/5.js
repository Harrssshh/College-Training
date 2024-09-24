function countdown(number) {
    return new Promise(resolve => {
        let interval = setInterval(() => {
            console.log(number);
            number--;
            if (number < 0) {
                clearInterval(interval);
                resolve(); 
            }
        }, 1000);
    });
}

countdown(5).then(() => console.log("Countdown finished!"));
