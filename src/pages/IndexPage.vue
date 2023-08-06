<template>
  <q-page class="flex flex-col p-6" dir="rtl">
    <bread-crumb />
    <div class="mt-4 w-full flex items-center justify-between">
      <div class="flex">
      <div class="flex items-center">
        <span class="text-black text-bold text-xl">تعریف حساب بانکی</span>
        <span class="rounded-full bg-gray-200 px-2 mx-2 text-bold">۱۲۰ حساب</span>
      </div>
      <div class="w-full">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
      </div>
      <div class="flex space-x-2">
        <custom-button :image="pdf"/>
        <custom-button :image="camera" label="آموزش ویدیویی"/>
      </div>
    </div>
    <div class="mt-4 w-full flex justify-between items-center">
      <div class="flex">
        <div class="flex space-x-2">
          <q-input @update:model-value="onInput"  dense color="teal" borderless class="rounded-xl border-2 w-64" v-model="text" placeholder="جستجو">
            <template v-slot:prepend>
              <q-avatar>
                <img :src="search" class="h-6 w-6">
              </q-avatar>
            </template>
          </q-input>

          <custom-button :image="filterIcon" @click="emit('showFilter',true)"/>
        </div>
      </div>
      <div class="">
        <div class="flex space-x-2">
          <custom-button :image="print"/>
          <custom-button :image="excel"/>
          <custom-button :image="remove"/>
          <custom-button :image="add" label="حساب جدید" content-class="text-white" bg-color="bg-primary border-primary"/>
        </div>
      </div>
    </div>
    <div class="mt-4 w-full">
      <my-table />
    </div>
  </q-page>
</template>

<script setup lang="js">
import { ref } from "vue";
import useEventsBus from 'src/constants/eventBus';
const { emit } = useEventsBus()

import BreadCrumb from "components/BreadCrumb";
import CustomButton from "components/CustomButton";
import { print,excel,remove,add,camera,pdf,filterIcon,search } from 'src/constants/images'
import MyTable from "components/MyTable";
const text = ref('')
const onInput = ()=> {
  setTimeout(()=>{
    emit('onSearch',text.value)
  },100)
}
</script>
