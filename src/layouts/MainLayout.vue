<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-avatar square>
          <img src="~assets/logo-dark.svg" />
        </q-avatar>
        <q-toolbar-title>
          {{ productName }}
        </q-toolbar-title>

        <q-toggle
          :model-value="isDark"
          color="grey-1"
          icon-color="grey-7"
          keep-color
          checked-icon="dark_mode"
          unchecked-icon="light_mode"
          size="lg"
          @update:model-value="setDark"
        />
        <q-btn stretch flat icon="fa-brands fa-github" />
      </q-toolbar>

      <q-tabs align="center" no-caps>
        <q-route-tab v-for="(item, index) of tabs" :key="index" v-bind="item" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component, route }">
        <KeepAlive v-if="isProduct">
          <component :is="Component" :key="route.path" />
        </KeepAlive>
        <component :is="Component" v-else :key="route.path" />
      </router-view>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref } from 'vue'

const productName = process.env.PRODUCT_NAME
const isProduct = process.env.PROD

import { isDark, setDark } from '../lib/dark'

const tabs = ref([
  {
    to: '/analyze',
    label: 'Analyze',
  },
  {
    to: '/compare',
    label: 'Compare',
  },
])
</script>
