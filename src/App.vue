<script setup lang="ts">
import { computed } from 'vue'
import FailurePage from './pages/FailurePage.vue'
import SuccessPage from './pages/SuccessPage.vue'

const currentPath = window.location.pathname.toLowerCase()

const currentPage = computed(() => {
  if (currentPath === '/failure' || currentPath.includes('fail')) {
    return FailurePage
  }
  return SuccessPage
})
</script>

<template>
  <component :is="currentPage" />
</template>
