import emitter from "@adonisjs/core/services/emitter";
import mail from "@adonisjs/mail/services/main";
import env from "./env.js";

emitter.on('user:registered', async(user) => {
    // send email;
    await mail.send((message) => {
        message
          .to(user.email)
          .from(env.get('SMTP_USERNAME'))
          .subject('Verify your email address')
    });
});

emitter.on('user:reset:password', async(data) => {
    await mail.send((message) => {
        message
            .to(data.user.email)
            .from(env.get('SMTP_USERNAME'))
            .subject('Reset password')
            .html(`
                <h1>Password temp</h1>
                <h3><br>${data.newPassword}</br></h3>
            `)
    })
})