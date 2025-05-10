<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <MyHeader/>
  <div id="about"><TopBooks/></div>
  <div id="books"><BookBox :books="books"/></div>
  <div class="tips" id="tips"> 
    <h1>TIPS</h1><br>
    <p>1. Start Small & Be Consistent</p>
    <p>2. Pick Books That Genuinely Interest You</p>
    <p>3. Set a Reading Goal</p>
    <p>4. Eliminate Distractions</p>
    <p>5. Engage with the Book</p>
  </div>
  <footer>
    <div id="contact"><strong>CONTACT</strong></div><br>
          <div class="contactus">
              <div class="icons"><i class="fa-brands fa-linkedin"></i></div>
              <div class="icons"><i class="fa-solid fa-phone"></i></div>
              <div class="icons"><i class="fa-regular fa-envelope"></i></div>
              <div class="icons"><i class="fa-brands fa-twitter"></i></div>
              <div class="icons"><i class="fa-brands fa-youtube"></i></div>
          </div>
  </footer>
</template>

<script>

// Step 1 import the componenet
import MyHeader from './components/MyHeader.vue'
import BookBox from './components/BookBox.vue'
import TopBooks from './components/TopBooks.vue'
export default {
  name: 'App',
//Step 2 register the component
  components:{
    MyHeader,
    TopBooks,
    BookBox,
  },

  data(){
  return {
    books: []
  }
  },
  
  methods: {
     async fetchbook(){
      const res = await fetch("https://project-1-624w.onrender.com/api")
      const data = await res.json()
      console.log(data)
      return data
     }

  },
  async created(){
    this.books = await this.fetchbook()
  },

}
  






</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Montserrat', sans-serif;
}
.container {
  max-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 0.3em solid black;
  padding: 30px;
  border-radius: 5px;
}

div{
  margin-bottom: 0.5em;
  text-align: center;
}
.tips{
  background-color: rgb(171, 221, 210);
}
p{
  font-size: 30px
}
.contactus {
  width: 100%;
  max-width: 600px; /* Adjust as needed */
  margin: 0 auto;
  padding: 15px 0;
  font-size: 0; /* Removes whitespace between inline blocks */
  text-align: center; /* Centers the row of icons */
}
.icons {
  display: inline-block;
  width: 20%; /* 100% / 5 icons = 20% each */
  font-size: 24px; /* Reset font size */
}
#contact{
  font-size: 30px;
  margin-top: 20px;
}
</style>
