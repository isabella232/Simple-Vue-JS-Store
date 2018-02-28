<template>
<div class="container">    
    <div class="row text-center">
      <div class="col">
        <div class="header-section">
          <slot name="before-logo" />
          <img src="../assets/logo.png">
          <h1>Demo Toko</h1>
        </div>
        <hr/>
        <slot name="content"/>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "MainLayout"
};
</script>

