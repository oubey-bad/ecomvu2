<template>
  <p>{{ authStore.user }}</p>
</template>
<script setup>
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();


</script>
<style scoped>

</style>
