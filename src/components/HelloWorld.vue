<template>
  <div class="hello">
    <div class="g-signin2" data-width="300" data-onsuccess="onSignIn"></div>
    <!-- <button data-onsuccess="onSignIn">구글 로그인</button> -->
  <a href="#" onclick="signOut();">Sign out</a>
  </div>
</template>

<script>
export default {
  data(){
    return {
    
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    onSignIn(googleUser){
      console.log("제발 되자");
      var profile = googleUser.getBasicProfile();
      console.log("로그인 된거임?");
      console.log('ID: ' + profile.getId());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
          var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);

  
  },
  //   signOut() {
    
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
