<template>
    <div>
      <app-header></app-header>
      <div class="container">
        <profile-page 
        :name="name"
        :last="lastName"
        hardcode="nama harcode"
        ></profile-page><!-- binding value nama dari profilePage.vue -->
      </div>            <!-- hardcode statis/hardcode deklarasi disini lalu di proses di profilePage-->
      <app-footer></app-footer>
    </div>
  </template>
  <script>
     //import Footer from './components/appFooter.vue'//membuat koneksi footer tidak global/scope
     import profilePage from './components/user/profilePage.vue'
     export default {    
        //components: {
          //'app-footer': Footer //mengubah nama
        //},
        components: {
            profilePage
        },
        data() {
            return {
                name: 'Joko',//deklarasi yang nantinya digunakan pada profilePage
                lastName: 'Utomo'
            }
        }
    }
  </script>  
<style>
    body{
        padding: 0;
        margin: 0;
    }
    .container{
        min-height: 80vh;
        box-sizing: border-box;
        padding: 20px;
    }
</style>
  