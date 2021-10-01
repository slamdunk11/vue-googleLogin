<template>
  <div>
    로그인 테스트 화면입니다
    <button
      @click="handleLogin"
    >
      Google ID로 로그인
    </button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data: () => ({
  }),
  methods: {
    async handleLogin() {
      try {
        const GoogleUser = await this.$gAuth.signIn();
        console.log(GoogleUser);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>