/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, n * 1000);
    });
}

wait(5)
  .then(() => {
    console.log('Resolved after 5 seconds');
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });