<template>
  <q-layout view="hHr lpR ffr">

    <q-header bordered class="bg-white h-20 flex items-center">
      <q-toolbar>
        <main-toolbar />
        <q-btn rounded dense icon="arrow_forward" unelevated class="q-mini-drawer-hide text-grey-7 bg-white border-solid border-1 border-gray-200" style="position: absolute;right: -20px;border-width: 1px" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      show-if-above
      side="right"
      bordered
      class="px-4"
    >
      <right-drawer :menu="data"/>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="js">
import { ref } from 'vue'
import { data } from 'src/constants/drawer'
import MainToolbar from "components/MainToolbar";
import RightDrawer from "components/RightDrawer";
const rightDrawerOpen = ref(true)

</script>
<style>

</style>
