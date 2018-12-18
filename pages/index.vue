<template>
  <section class="container">
    <div>
      <!-- <h1>Hi! I’m Zholaman.</h1> -->
      <div class="right-side">
        <div class="logo"><h1>zhola.</h1></div>
        <div class="wrapper">
          <h1 class="text-lead">hi! I’m Zholaman.</h1>
          <h2>I make astoundingly simple things by designing and coding, and I love it.</h2>
          <ul class="menu">
            <li><a href="#" class="menu-btn" @click="blog = false; portfolio = true;" v-bind:class="{'active' : portfolio}">portfolio</a>
            <li><a href="#" class="menu-btn" @click="blog = true; portfolio = false;" v-bind:class="{'active' : blog}">blog</a>            
            <li><a href="#" class="menu-btn">about</a>
            <li><a href="#" class="menu-btn">contact</a></li>
          </ul>
        </div> 
        <div class="social">
          <p>made in <strong>Kazakhstan</strong>.</p>
        </div>       
      </div> 
      <div class="left-side">
        <portfolio v-if="portfolio"/>
        <blog v-if="blog"/>
      </div>        
    </div>
  </section>
</template>

<script>
import blog from '~/components/blog.vue'
import portfolio from '~/components/portfolio.vue'

export default {
  data() {
    return {
      portfolio: true,
      blog: false
    }
  },
  components: {
    blog,
    portfolio
  }
}
</script>

<style>
.text-lead {
  text-align: left;
}
h1 {
  font-size: calc(2.5rem + 1vw);
  font-weight: 700;
  margin: 2rem 0 0; 
  text-align: center;
  line-height: 90px;
  letter-spacing: -0.02em;
}
h2 {
  font-size: 21px;
  line-height: 1.4;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  margin-top: 20px;
}
.right-side {
  padding: 2%;
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100vh;
  width: 50vw;
}
.wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px 10%;
}
.right-side .logo {
  position: absolute;
  top: 0px;
  right: 35px;
}
.right-side .logo h1 {
  font-size: 26px;
}
.menu {
  list-style-type: none;
  margin: 0;
  text-align: left;
  margin-top: 10%;
}
.menu li {
  display: inline-block;
  margin: 0 10px;
}
a.menu-btn {
  font-size: 20px;
  color: black;
  text-decoration: none;
  padding-bottom: 8px;
  transition: all 0.5s;
  padding: 10px;
}
a.menu-btn:hover {
  background-color: black;
  color: white;
  padding: 10px;
}
a.active {
  background-color: black;
  color: white;
  padding: 10px;
}
.right-side .social {
    position: absolute;
    right: 35px;
    bottom: 35px;
    text-align: right;
}
.right-side .social p {
    font-size: 15px;
    margin: 7px 0px 0px;
}
@media only screen and (max-width: 1024px) {
    .right-side {
      position: static !important;
    }
    .left-side {
      position: static !important;
      width: 100% !important;
    }
}
.left-side {
  padding: 2%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50vw;
}
/*.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}*/
</style>

