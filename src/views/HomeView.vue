<script setup>
import { useFetch } from '@vueuse/core'
import { computed } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import { stringify } from '@/utils'
import { useState } from '@/main'

const state = useState()
const text = stringify(state)

const { isFetching, error, data } = useFetch('https://api.github.com/users/Oluwasetemi')
const githubData = computed(() => JSON.parse(data?.value))
console.log('githubData', githubData)

console.log('isFetching', isFetching)
console.log('error', error)
console.log('data', data)
</script>

<template>
  <main>
    <TheWelcome :loading="isFetching" :github="githubData" />
    <div>
      <input v-model="state.name" type="text" />
      <input v-model="state.color" type="text" />
      <input v-model="state.size" type="text" />

      <pre lang="yaml">{{ text }}</pre>
    </div>
  </main>
</template>
