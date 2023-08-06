<template>
  <div class="w-full">
    <q-table
      style="height: 400px"
      flat bordered
      virtual-scroll
      :rows="data"
      :columns="columns"
      :pagination="{rowsPerPage: rowsPerPage,rowsNumber: rowsPerPage}"
      selection="multiple"
      v-model:selected="selected"
      row-key="account_number">
      <template v-slot:header="props">
        <q-tr :props="props" class="text-justify-start bg-gray-100">
          <q-th class="sticky-checkbox" style="text-align: start !important">
            <q-checkbox v-model="props.selected" color="primary"/>
          </q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props" :class="col.className">
            {{col.label}}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props" class="text-justify-start cursor-pointer">
          <q-td class="sticky-checkbox bg-white">
            <q-checkbox v-model="props.selected" color="primary"/>
          </q-td>
          <q-td class="sticky-name bg-white" key="account_title" :props="props">
            <div>{{ props.row.account_title }}</div>

          </q-td>
          <q-td class="" key="account_code" :props="props">
            <div>{{ props.row.account_code }}</div>

          </q-td>
          <q-td class="" key="account_number" :props="props">
            <div>{{ props.row.account_number }}</div>

          </q-td>
          <q-td class="" key="sheba_number" :props="props">
            <div>{{ props.row.sheba_number }}</div>

          </q-td>
          <q-td class="" key="card_number" :props="props">
            <div>{{ props.row.card_number }}</div>

          </q-td>
          <q-td class="" key="gateway_status" :props="props">
            <div class="bg-green-400 p-1 rounded-xl text-center text-white" v-if="props.row.gateway_status">فعال</div>
            <div class="bg-red-400 p-1 rounded-xl text-center text-white" v-else>غیرفعال</div>

          </q-td>
          <q-td class="" key="pos_status" :props="props">
            <div class="bg-green-400 p-1 rounded-xl text-center text-white" v-if="props.row.pos_status">فعال</div>
            <div class="bg-red-400 p-1 rounded-xl text-center text-white" v-else>غیرفعال</div>
          </q-td>
          <q-td class="sticky-action bg-white shadow-md" key="actions" :props="props">
            <div class="flex items-center justify-between w-16">
              <img src="~assets/icons/show.svg" class="h-4 w-4" />
              <img src="~assets/icons/edit.svg" class="h-4 w-4" />
              <img @click.prevent="deleteItem(props.row)" src="~assets/icons/delete.svg" class="h-4 w-4" />
            </div>
          </q-td>
        </q-tr>
      </template>
      <template v-slot:bottom>
        <div class="w-full flex items-center justify-center">
        <div @click="loadMore" class="w-32 flex items-center justify-between bg-gray-50 cursor-pointer">
            <img src="~assets/icons/loadmore.svg" class="h-5 w-5" :class="{'rotating': loading}"/>
            <span class="text-md text-bold">مشاهده بیشتر</span>
          <q-icon name="expand_more" size="sm"/>

        </div>
        </div>
      </template>
      <template v-slot:no-data>
        <div class="w-full flex items-center justify-center">
          <span>No records found</span>
        </div>
      </template>

    </q-table>
    <q-dialog v-model="filterDialog">
      <div class="bg-white dialog--mini flex space-y-4 pb-6">
        <div class="w-full flex items-center justify-between p-4">
          <q-icon name="close" class="cursor-pointer" size="sm" @click="filterDialog = false"/>
          <div class="flex space-x-2 items-center">
            <div class="text-black text-bold">فیلتر ها</div>
            <div class="flex items-center justify-center border rounded-xl p-2 cursor-pointer">
              <img src="~assets/icons/filter.svg" class="h-6 w-6">
            </div>
          </div>
        </div>
        <q-separator class="w-full"/>
        <div class="w-full p-4 flex" dir="rtl">
          <div class="w-full text-bold">وضعیت کارتخوان</div>
          <q-select dense borderless class="mt-2 w-full border border-gray-400 rounded-md px-2" map-options emit-value
                    v-model="pos_status" :options="statusOptions" />
          <div class="w-full text-bold mt-6">وضعیت درگاه</div>
          <q-select dense borderless class="mt-2 w-full border border-gray-400 rounded-md px-2" map-options emit-value
                    v-model="gateway_status" :options="statusOptions" />
        </div>
        <q-separator class="w-full"/>
        <div class="w-full flex p-2 items-center justify-around">
          <q-btn outline class="px-8 rounded-lg w-36" label="انصراف"  @click="filterDialog = false"/>
          <q-btn unelevated class="px-8 rounded-lg w-36" label="تایید" color="primary" @click="filterData"/>
        </div>
      </div>
    </q-dialog>
  </div>
</template>

<script setup lang="js">
import { getData,filterByStatus,search } from "src/constants/tableData";
import useEventsBus from "src/constants/eventBus";
import { onMounted, ref, watch } from "vue";
import { useQuasar } from 'quasar'
const { bus } = useEventsBus()

const $q = useQuasar()

const statusOptions = [
  {
    label: 'فعال',
    value: true
  },
  {
    label: 'غیر فعال',
    value: false
  }
]
const data = ref()
const selected = ref([])
const rowsPerPage = ref(10)
const loading = ref(false)
const filterDialog = ref(false)
const pos_status = ref(true)
const gateway_status = ref(true)
const columns= [
  { name: 'account_title', label: 'عنوان حساب', field: 'account_title', align: 'left',className: 'sticky-name' },
  { name: 'account_code', label: 'کد حساب', field: 'account_code', align: 'left',className: '' },
  { name: 'account_number', label: 'شماره حساب', field: 'account_number', align: 'left',className: '' },
  { name: 'sheba_number', label: 'شماره شبا', field: 'sheba_number', align: 'left',className: '' },
  { name: 'card_number', label: 'شماره کارت', field: 'card_number', align: 'left',className: '' },
  { name: 'gateway_status', label: 'وضعیت درگاه', field: 'gateway_status', align: 'left',className: '' },
  { name: 'pos_status', label: 'وضعیت کارتخوان', field: 'pos_status', align: 'left',className: '' },
  { name: 'actions', label: '', field: 'actions', align: 'left',className: 'sticky-action' },
]


watch(()=>bus.value.get('showFilter'), (val) => {
  // destruct the parameters
  const [showFilter] = val ?? []
  filterDialog.value = showFilter
})
watch(()=>bus.value.get('onSearch'), (val) => {
  // destruct the parameters
  const [searchText] = val
  data.value = search(searchText)
})

onMounted(()=> {
  data.value = getData(rowsPerPage.value)
})

// mock api service
const loadMore = ()=> {
  loading.value = true
  setTimeout(()=> {
    loading.value = false
    data.value = getData(rowsPerPage.value+=10)
  },2000)
}

const deleteItem = (row) => {

}
const filterData = () => {
  data.value = filterByStatus(pos_status.value,gateway_status.value)
  filterDialog.value = false
}

</script>

<style scoped lang="scss">
.sticky-checkbox {
  position: sticky;
  width: 30px;
  left: 0;
  z-index: 2;
  background: #f3f4f6;
}
.sticky-name {
  position: sticky;
  left: 70px;
  z-index: 2;
  background: #f3f4f6;
}
.sticky-action {
  position: sticky;
  padding: 5px;
  left: 0;
  z-index: 2;
  background: #f3f4f6;
}

</style>
