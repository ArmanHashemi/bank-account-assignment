<template>
  <div :class="bgColor" class="flex items-center justify-center border-2 rounded-xl p-2 cursor-pointer hover:bg-gray-300">
    <img :src="image" class="h-6 w-6">
    <div  :class="contentClass" class="px-2  text-bold" v-if="label">{{label}}</div>
  </div>
</template>

<script setup lang="js">
defineProps({
  image:{
    type: String,
    required: false
  },
  label:{
    type: String,
    required: false
  },
  bgColor:{
    type: String,
    required: false
  },
  contentClass:{
    type: String,
    required: false
  }
})
</script>

<style scoped lang="scss">

</style>
