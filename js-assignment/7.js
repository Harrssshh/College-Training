function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function delayedLogSequence(messages, delays) {
    for (let i = 0; i < messages.length; i++) {
        await wait(delays[i]); 
        console.log(messages[i]); 
    }
}

delayedLogSequence(["Message 1", "Message 2", "Message 3"], [1000, 2000, 3000]);
