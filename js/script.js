const {createApp} = Vue;
createApp ({
    data(){
        return{
            title: "Ciao titolo",
            mails: [],
            total: 15,
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    },
    methods: {
        getEmail() {
            axios.get(this.apiUrl).then(result => {
                console.warn(result.data.response);
                this.mails.push(result.data.response);
            });
        }
    },
    mounted() {
        for (let index = 0; index < this.total; index++) {
            this.getEmail();
        }
    }
}).mount("#app")



/*
axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(result => {
    console.log(result.data);
});


axios.get(this.apiUrl).then(result => {
    console.log(result.data);
});

*/