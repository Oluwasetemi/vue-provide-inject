<script setup>
import { useFetch } from '@vueuse/core'
import { computed } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'

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
  </main>
</template>
