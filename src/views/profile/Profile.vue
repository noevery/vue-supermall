<template>
  <div id="profile">
    <profile-top-bar />
    <profile-login />
    <profile-wallet />
    <profile-select />
  </div>
</template>

<script>
  import ProfileTopBar from './childComps/ProfileTopBar'
  import ProfileLogin from './childComps/ProfileLogin'
  import ProfileWallet from './childComps/ProfileWallet'
  import ProfileSelect from './childComps/ProfileSelect'

export default {
  name: "Profile",
  components: {
    ProfileTopBar,
    ProfileLogin,
    ProfileWallet,
    ProfileSelect
  }
};
</script>

<style scoped></style>
