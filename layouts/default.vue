<template>
  <div>
    <VmHeader />
    <main>
      <Nuxt />
      <VmLoginModal />
      <VmRegistrationModal />
      <VmCheckoutModal />
    </main>
    <VmFooter />
  </div>
</template>
<script>
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import VmHeader from "@/components/Header.vue";
import VmFooter from "@/components/Footer.vue";
import VmLoginModal from "@/components/Modal/Login.vue";
import VmRegistrationModal from "@/components/Modal/Registration.vue";
import VmCheckoutModal from "@/components/Modal/Checkout.vue";
export default {
  components: {
    VmHeader,
    VmFooter,
    VmLoginModal,
    VmRegistrationModal,
    VmCheckoutModal
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
