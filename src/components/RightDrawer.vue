<template>
  <div class="flex flex-col w-full h-full">
    <div class="w-full flex p-2 space-y-4">
      <div class="w-full flex items-center justify-end space-x-2">
        <img src="~assets/images/logo.svg" class="h-8">
      </div>
      <div class="bg-gray-100 w-full flex items-center justify-between p-2 rounded-xl">
        <img src="~assets/icons/item5.svg" class="h-8 w-8" />
        <div class="flex items-center space-x-8">
          <span class="text-md text-bold">شرکت اپل</span>
          <q-icon name="apple" size="md" />
        </div>

      </div>
    </div>
    <div class="flex-1 overflow-scroll">
      <q-expansion-item
        switch-toggle-side
        expand-separator
        no-border
        :default-opened="item.link === 'treasury'"
        :expand-icon-class="{'opacity-0' : !item.subs.length}"
        v-for="(item,i) in menu" :key="i"
      >
        <template v-slot:header>
          <div class="flex w-full justify-between items-center">
            <span class="">{{ item.label }}</span>
            <img :src="item.icon" class="h-6 w-6" />
          </div>
        </template>
        <div class="flex w-full p-2 items-center justify-start" v-if="item.subs.length">
          <div class="w-full mx-2 p-2 border-r text-right cursor-pointer" :class="{'text-primary text-bold' : sub.link === 'create'}" v-for="(sub,j) in item.subs" :key="j">{{ sub.title }}</div>
        </div>
      </q-expansion-item>
    </div>
    <div class="flex w-full py-4 border-t">
        <div class="w-full flex items-center justify-end space-x-8">
          <span class="text-md text-bold">راهنما</span>
          <img src="~assets/icons/item9.svg" class="h-8 w-8" />
        </div>
        <div class="w-full flex items-center justify-between">
          <span>ورژن ۱.۰.۴</span>
          <div class="flex items-center justify-end space-x-8">
            <span class="text-md text-bold">پشتیبانی</span>
            <img src="~assets/icons/item11.svg" class="h-8 w-8" />
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="js">
defineProps({
  menu: {
    type: Array,
    required: true
  }
});
</script>

<style scoped lang="scss">

</style>
