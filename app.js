const app =Vue.createApp({
    data(){
        return{
            firstName: 'Dennis',
            lastName: 'Kemboi',
            email: 'denkogei24@gmail.com',
            gender: 'male',
            picture:'https://randomuser.me/api/portraits/men/59.jpg'
        }
    }
})


app.mount('#app')