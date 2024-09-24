function repeatAction(action, interval, duration) {
    return new Promise(resolve => {
        let totalTime = 0;
        const repeat = setInterval(() => {
            action();
            totalTime += interval;
            if (totalTime >= duration) {
                clearInterval(repeat);
                resolve(); 
            }
        }, interval);
    });
}

repeatAction(() => console.log("Repeating action..."), 1000, 5000).then(() => console.log("Action stopped!"));
