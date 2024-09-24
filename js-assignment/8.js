function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

function randomDelayMessage(message) {
    const randomDelay = Math.floor(Math.random() * 4000) + 1000; 

    return wait(randomDelay).then(() => {
        console.log(`Message: "${message}" (after ${randomDelay / 1000} seconds)`);
    });
}

randomDelayMessage("This message appears after a random delay!");
