function enviarEmail(body,to,callback) {
    setTimeout(() => {
            console.log(`
            Para:${to},
            --------------------------
            ${body}
            --------------------------
            De: Victor lima
            `)
            callback()
    }, 8000);
}

console.log("Inicio do envio de email")
enviarEmail("Seja bem vindo","teste@hotmail.com",()=>{
    console.log("Seu email foi enfiado deve chegar em minutos")
    console.log("Tudo ok!")
})
