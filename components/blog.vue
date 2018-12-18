<template>
	<div>    
    <div class="showbox fadein" v-if="loader">
      <div class="loader">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
      </div>
    </div>
    <div class="fadein" v-else>
      <h1>blog</h1>
      <div class="color-block-wrapper" v-for="blog in data" v-bind:key="blog">
        <div class="color-block color-block-lblue">
          <div class="color-block-head">
            {{ blog.topic }}
          </div>
          <div class="color-block-text">
             {{ blog.title }} <br>
             {{ blog.article }}
          </div>
        </div>
        <div class="color-block-bottom">
          <a href="#" class="btn btn-transparent-lblue">Read blog...</a>
        </div>
      </div>
    </div>		
	</div>	
</template>
<script>
import axios from 'axios'
export default {
	data() {
		return {
			data: [],
      loader: true
		}		
	},
	created() {
    this.loader = true
		this.getData()
	},
	methods: {
		getData() {
			axios.get('https://personal-website-ac914.firebaseio.com/blogs.json').then( response => {
	      	console.log(response)
		    this.data = response.data
        this.loader = false
		  });
		}
	}
}
</script>
<style>

.fadein {
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
         -o-animation: fadein 1s; /* Opera < 12.1 */
            animation: fadein 1s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.loader {
  position: relative;
  margin: 0 auto;
  width: 100px;
}
.loader:before {
  content: '';
  display: block;
  padding-top: 100%;
}

.circular {
  -webkit-animation: rotate 2s linear infinite;
          animation: rotate 2s linear infinite;
  height: 100%;
  -webkit-transform-origin: center center;
          transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@-webkit-keyframes color {
  100%,
  0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}
@keyframes color {
  100%,
  0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}
body {
  background-color: #eee;
}

.showbox {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5%;
}

.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.btn,
a.btn {
  border-radius: 2px;
  letter-spacing: 0.8px;
  font-size: 14px;
  line-height: 1;
  padding: 16px 28px;
  text-transform: uppercase;
  -moz-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  -webkit-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
  border: 2px solid transparent;
}

.btn-transparent-lblue,
a.btn-transparent-lblue {
  border: 1px solid #005bb7;
  color: #005bb7;
  background: transparent;
}
.btn-transparent-lblue:hover,
a.btn-transparent-lblue:hover {
  border: 1px solid #005bb7;
  color: #fff;
  background: #005bb7;
}

.btn-transparent,
a.btn-transparent {
  border: 1px solid #004387;
  color: #004387;
  background: transparent;
}
.btn-transparent:hover,
a.btn-transparent:hover {
  border: 1px solid #004387;
  color: #fff;
  background: #004387;
}

.btn-transparent-green,
a.btn-transparent-green {
  border: 1px solid #49ac01;
  color: #49ac01;
  background: transparent;
}
.btn-transparent-green:hover,
a.btn-transparent-green:hover {
  border: 1px solid #49ac01;
  color: #fff;
  background: #49ac01;
}
.color-block {
  color: #fff;
  border-radius: 2px 2px 0 0;
  padding: 30px 40px 40px;
  max-height: 15000px;
  margin-top: 75px;
  position: relative;
}
.color-block-wrapper {
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: box-shadow 0.3s ease-in-out;
}
.color-block-wrapper:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
.color-block:before {
  content: '';
  border-radius: 2px 2px 0 0;
  width: calc(100% - 12px);
  height: 6px;
  position: absolute;
  top: -6px;
  left: 6px;
  opacity: 0.4;
  z-index: 20;
}
.color-block:after {
  content: '';
  border-radius: 2px 2px 0 0;
  width: calc(100% - 24px);
  height: 12px;
  position: absolute;
  top: -12px;
  left: 12px;
  opacity: 0.3;
  z-index: 10;
}

.color-block-head {
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 13px;
  line-height: 1;
  margin-bottom: 20px;
}

.color-block-bottom {
  background: #fff;
  padding: 30px 40px;
}

.color-block-text {
  width: 500px;
  letter-spacing: 0.5px;
  font-size: 20px;
}
.color-block-lblue {
  background: #005bb7;
  z-index: 30;
}
.color-block-lblue:before {
  background: #0064ca;
}
.color-block-lblue:after {
  background: #007fff;
}

.color-block-dblue {
  background: #004387;
}
.color-block-dblue:before {
  background: #0c457e;
}
.color-block-dblue:after {
  background: #135ba5;
}

.color-block-green {
  background: #49ac01;
}
.color-block-green:before {
  background: #49ac01;
}
.color-block-green:after {
  background: #82c600;
  opacity: 0.4;
}
.color-block-icon-list .color-block-text:after {
  content: '';
  display: block;
  width: 70px;
  height: 70px;
  position: absolute;
  background: url(https://image.ibb.co/nv13dV/icons.png) no-repeat;
  background-position: 10px -10px;
  right: 40px;
  top: calc(50% - 20px);
  opacity: 0.4;
}

.color-block-icon-person .color-block-text:after {
  content: '';
  display: block;
  width: 70px;
  height: 70px;
  position: absolute;
  background: url(https://image.ibb.co/nv13dV/icons.png) no-repeat;
  background-position: -60px -10px;
  right: 40px;
  top: calc(50% - 20px);
  opacity: 0.4;
}

.color-block-icon-lock .color-block-text:after {
  content: '';
  display: block;
  width: 70px;
  height: 70px;
  position: absolute;
  background: url(https://image.ibb.co/nv13dV/icons.png) no-repeat;
  background-position: -140px -10px;
  right: 40px;
  top: calc(50% - 20px);
  opacity: 0.4;
}
</style>