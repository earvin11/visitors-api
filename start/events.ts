import emitter from "@adonisjs/core/services/emitter";

emitter.on('user:registered', (user) => {
    // console.log(user);
    // send email;
})