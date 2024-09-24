function countdown(number) {
    let interval = setInterval(() => {
        console.log(number);
        number--;
        if (number < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

countdown(5);
