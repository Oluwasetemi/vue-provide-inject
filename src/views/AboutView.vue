<script setup>
import { inject } from 'vue'
import { useState } from '@/main'
import { stringify } from '@/utils'

const state = useState()
const text = stringify(state)

const store = inject('Gstore')

console.log('store', store)
</script>

<template>
  <div class="about">
    <h1>This is an about page {{ store.count }}</h1>
    <button @click="store.increment">+1</button>

    <pre lang="yaml">{{ text }}</pre>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
