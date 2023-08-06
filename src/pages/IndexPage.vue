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
          <q-input dense color="teal" borderless class="rounded-xl border-2 w-64" v-model="input" placeholder="جستجو">
            <template v-slot:prepend>
              <q-avatar>
                <img :src="search" class="h-6 w-6">
              </q-avatar>
            </template>
          </q-input>

          <custom-button :image="filterIcon"/>
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
import BreadCrumb from "components/BreadCrumb";
import CustomButton from "components/CustomButton";
import { print,excel,remove,add,camera,pdf,filterIcon,search } from 'src/constants/images'
import MyTable from "components/MyTable";
const input = ref('')
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]

const selected = ref([])

 function getSelectedString () {
   return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.length}`
 }
</script>
<style lang="sass">
.my-sticky-column-table
  max-width: 100%

  thead tr:first-child th:first-child
    /* bg color is important for th; just specify one */
    background-color: #00b4ff

  td:first-child
    background-color: #00b4ff

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1
.my-sticky-last-column-table
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  max-width: 100%

  thead tr:last-child th:last-child
    /* bg color is important for th; just specify one */
    background-color: #00b4ff

  td:last-child
    background-color: #00b4ff

  th:last-child,
  td:last-child
    position: sticky
    right: 0
    z-index: 1
</style>
