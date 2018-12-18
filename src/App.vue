<template>
  <div>
    <div class="loader" v-if="loading">
      <a class="loader">Loader?</a>
    </div>
    <div class="container fade-in" v-else>
      <router-view></router-view>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  },
  created() {
    this.$http.get("http://jsonplaceholder.typicode.com/posts")
      .then(response => response.json(), error => console.log(error))
      .then(json => this.$store.state.posts = json, error => console.log(error))
      .then(() => setTimeout(() => {this.loading = false}, 1000))
    this.$http.get("http://jsonplaceholder.typicode.com/comments?postId=" + this.$route.params.id)
      .then(response => response.json(), error => console.log(error))
      .then(json => this.$store.state.comments = json, error => console.log(error));
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Asap:500");
div.loader {
  background: #ecf0f1;
}
a.loader {
  position: absolute;
  top: 50.7%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Asap;
  text-transform: uppercase;
  color: #e0e0e0 !important;
  font-size: 32px;
  white-space: nowrap;
  letter-spacing: 2px;
}
a.loader:after{
  content: 'LOADER?';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100;
  width: 100%;
  color: #475155;
  overflow: hidden;
  animation: colors 1.32s alternate infinite ease-in-out;
}

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes colors {
  0% {
    width: 0px;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}
</style>
