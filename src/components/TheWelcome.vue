<script setup>
import { inject } from 'vue'

const store = inject('Gstore')
const { loading, github } = defineProps(['loading', 'github'])
</script>

<template>
  <h1>Home {{ store.count }}</h1>
  <h2 v-if="loading">loading</h2>
  <h2 v-else-if="github">Welcome {{ github.login }}</h2>
</template>
