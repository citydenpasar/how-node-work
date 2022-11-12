const fs = require('fs');
//* untuk merubah password
const crypto = require('crypto');
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log('Timer 1 Finished'), 0);
setImmediate(() => console.log('Immediate 2 Finished'));

fs.readFile('text-file.txt', () => {
    console.log('i/o finished');
    console.log("----------------------------------------------------------------");

    setTimeout(() => console.log('Timer 1 Finished'), 0);
    setTimeout(() => console.log('Timer 3 Finished'), 3000);
    setImmediate(() => console.log('Immediate 2 Finished'));

    process.nextTick(() => console.log('Process.nextTick'));

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, "Password Encrypted");

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, "Password Encrypted");

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, "Password Encrypted");

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, "Password Encrypted");

    // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    //     console.log(Date.now() - start, "Password Encrypted");
    // });
    // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    //     console.log(Date.now() - start, "Password Encrypted");
    // });
    // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    //     console.log(Date.now() - start, "Password Encrypted");
    // });
});

console.log("Hello from the top-level code");