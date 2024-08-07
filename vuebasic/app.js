const app = Vue.createApp({
    data() {
      return {
        state: true,
        inputName: '',
        names: [],
        error: '',
        showError: false,
        result: '',
      }
    },
    computed: {
        isReady(){
          return this.names.length > 1; //jika nama lebih dari 1 maka isReady true/aktif
        }
    },
    methods:{
        addNameToList() {
            const userName = this.inputName; // mengambil nama dari inputName ke userName
            if (this.validate(userName)) { // jika nama sudah oke/ benar adanya maka push nama ke array
              this.names.push(userName);
              this.inputName = '';//setelah klik add makan kotak input kosong lagi
              this.showError = false //jika berhasil input dan benar maka showerror false
              console.log(this.names)
            } else {
                this.showError = true //mengubah showError menjadi true dan memanggil error : 'error nama' dari index.html
            }
          },
          validate(value){ //membaca value dari userName
            this.error='';
            if (value === ''){
              this.error = "name can't empty"
              return false
            }
            if (this.names.includes(value)){//include mengecek apakah username yang input ada di array names
              this.error = 'name must be unique'
              return false
            }
            return true
          },
         removeName(index){//dari index yang di click pada tombol di index.html
          this.names.splice(index, 1);//yang dihapus hanya 1 yaitu index yang dipilih
        },
        showResult(){//saat di klik state menjadi false dan mengalihkan ke page showResult dan menjalankan
          //generate result
          this.generateResult()
          this.state = false;
        },
        getRandomName(){
          return this.names[Math.floor(Math.random() * this.names.length)]
        },
        generateResult(){
          let randName = this.getRandomName()//random pertama
          if(this.result !== ''){//mengecek apakah hasil random sama
            while (randName === this.result) {//jika random sama maka random lagi
              randName = this.getRandomName();  
            }            
          }
          this.result = randName
        },
        resetApp() {
          this.state = true;
          this.inputName = '';
          this.names = [];
          this.error = '';
          this.showError = false;
          this.result = '';
          },
        getNewResult(){
          this.generateResult();
        }
  }
}).mount('#app')