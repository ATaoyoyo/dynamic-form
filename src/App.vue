<template>
  <div id="app">
    <DynamicFormPage />
  </div>
</template>

<script>
import DynamicFormPage from '@/view'

export default {
  name: 'App',
  components: { DynamicFormPage }
}
</script>

<style lang="less">
#app {
  margin: 0;
  padding: 0;
}
</style>
