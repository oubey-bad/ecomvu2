<template>
    <p v-if=" authStore.user ">{{ authStore.user.name }}</p>
</template>
<script setup>
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
</script>
<style scoped></style>
