<template>
  <main>
    <h1 class="text-5xl font-extrabold">Test</h1>
    <div>
      <CoelhoButton @click="openModal">Open Modal</CoelhoButton>
      <CoelhoModal v-model="isOpen">
        <p>This is the modal content.</p>
      </CoelhoModal>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CoelhoButton from '@/components/atoms/CoelhoButton.vue'
import CoelhoModal from './components/organisms/CoelhoModal.vue';

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}
</script>
