<template>
  <div class="w-full">
    <q-table
      flat bordered
      virtual-scroll
      :rows="data"
      :columns="columns"
      :pagination="{rowsPerPage: rowsPerPage,rowsNumber: totalCount}"
      selection="multiple"
      v-model:selected="selected"
      row-key="account_code">
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
          <q-td class="sticky-checkbox">
            <q-checkbox v-model="props.selected" color="primary"/>
          </q-td>
          <q-td class="sticky-name" key="account_title" :props="props">
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
          <q-td class="sticky-action" key="actions" :props="props">
            <div class="flex items-center justify-between w-16">
              <img src="~assets/icons/show.svg" class="h-4 w-4" />
              <img src="~assets/icons/edit.svg" class="h-4 w-4" />
              <img src="~assets/icons/delete.svg" class="h-4 w-4" />
            </div>

          </q-td>


        </q-tr>
      </template>
      <template v-slot:bottom></template>
      <template v-slot:no-data>
        <div class="w-full flex items-center justify-center">
          <span>No records found</span>
        </div>
      </template>

    </q-table>

  </div>
</template>

<script setup lang="js">
import { ref } from "vue";

const data = ref([
  {
    account_title: 'بانک ملی شعبه تهران',
    account_code: '123456789123456789012345',
    account_number: '12345',
    sheba_number: 'IR-98-017-0000-0001-1020-1020',
    card_number: '6037-9980-7676-2010',
    gateway_status: true,
    pos_status: true
  }
])
const selected = ref([])
const page = ref(1)
const rowsPerPage = ref(10)
const totalCount = ref(100)

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
