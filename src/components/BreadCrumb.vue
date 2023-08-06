<template>
    <div class="w-full">
      <q-breadcrumbs class="text-gray-500" active-color="primary">
        <template v-slot:separator>
          <q-icon
            size="1.5em"
            name="chevron_right"
          />
        </template>
        <q-breadcrumbs-el>
          <template v-slot:default>
            <img src="~assets/icons/item6.svg" class="h-6 w-6" />
          </template>
        </q-breadcrumbs-el>
        <q-breadcrumbs-el class="text-gray-500" label="خزانه داری" />
        <q-breadcrumbs-el class="text-primary" label="تعریف حساب بانکی" />
      </q-breadcrumbs>
    </div>
</template>

<script setup lang="js">

</script>

<style scoped lang="scss">

</style>
