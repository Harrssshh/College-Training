function delayedLogSequence(messages, delays) {
    let promise = Promise.resolve();

    messages.forEach((message, index) => {
        promise = promise.then(() => {
            return wait(delays[index]).then(() => console.log(message));
        });
    });

    return promise;
}
delayedLogSequence(["Message 1", "Message 2", "Message 3"], [1000, 2000, 3000]);
