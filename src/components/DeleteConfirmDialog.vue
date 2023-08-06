<template>
  <q-dialog v-model="deleteDialog">
    <div class="bg-white dialog--mini flex space-y-4 pb-6">
      <div class="w-full flex items-center justify-between p-4">
        <q-icon name="close" class="cursor-pointer" size="sm" @click="deleteDialog = false"/>
        <div class="text-black text-bold">هشدار !</div>
      </div>
      <q-separator class="w-full"/>
      <div class="w-full p-4 flex" dir="rtl">
        <div class="w-full text-bold mb-4">آیا میخواهید شماره حساب های زیر را حذف کنید؟</div>
        <div class="w-full" v-for="(number , i) in multiItems" :key="i">
          {{number}}
        </div>
      </div>
      <q-separator class="w-full"/>
      <div class="w-full flex p-2 items-center justify-around">
        <q-btn outline class="px-8 rounded-lg w-36" label="انصراف"  @click="deleteDialog = false;multiItems = []"/>
        <q-btn unelevated class="px-8 rounded-lg w-36" label="حذف" color="primary" @click="deleteItems"/>
      </div>
    </div>
  </q-dialog>

</template>

<script setup lang="js">
import { ref, watch } from "vue";

import useEventsBus from "src/constants/eventBus";
const { bus } = useEventsBus()

const deleteDialog = ref(false)
const multiItems = ref([])

watch(()=>bus.value.get('deleteConfirm'), (val) => {
  // destruct the parameters
  const [data] = val ?? []
  deleteDialog.value = true
  if (data[1].length){
    // user want to delete multiple row
    data[1].forEach(item=>{
      multiItems.value.push(item.account_number)
    })
  }else{
    // user want to delete single row
    multiItems.value.push(data[0].account_number)

  }
})
const deleteItems = () => {
  deleteDialog.value = false
}
</script>

<style scoped lang="scss">

</style>
