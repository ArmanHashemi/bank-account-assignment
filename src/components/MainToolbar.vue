<template>
  <div class="w-full flex items-center justify-between">
    <div class="flex flex-wrap items-center">
      <div class="relative-position">
        <q-circular-progress
          indeterminate
          :value="80"
          size="50px"
          :thickness="0.1"
          color="green"
          track-color="transparent"
        />
        <img src="~assets/images/user.png" class="w-12 h-12 absolute-center p-1">

      </div>
      <div class="px-2 relative-position">
        <img src="~assets/icons/alarm.svg" class="w-8 h-8" />
        <q-badge color="red" rounded floating style="right: 9px !important;" />
      </div>
      <div class="px-2">
        <img src="~assets/icons/mobile.svg" class="w-8 h-8" />
      </div>
      <div class="bg-gray-100 text-black flex items-center justify-between p-2 rounded-md">
        <q-icon name="expand_more" />
        <div class="flex items-center space-x-2">
          <span class="text-md text-bold">سال مالی ۱۴۰۲</span>
          <img src="~assets/icons/calendar2.svg" class="h-5 w-5" />
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="mr-4 text-black flex items-center space-x-2">
        <span class="text-md text-bold">پنج شنبه, ۲۷ مرداد ۱۴۰۲</span>
        <img src="~assets/icons/calendar1.svg" class="h-5 w-5" />
      </div>
      <div class="mr-4 text-black flex items-center space-x-2">
        <span class="text-md text-bold">ساعت ۱۳:۳۱</span>
        <img src="~assets/icons/clock.svg" class="h-5 w-5" />
      </div>

    </div>


  </div>
</template>

<script setup lang="js">

</script>

<style scoped lang="scss">

</style>
