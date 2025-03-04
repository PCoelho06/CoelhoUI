<template>
  <button :type="type || 'button'" :disabled="disabled || loading" :class="[
    'inline-flex items-center justify-center rounded-md font-medium transition-colors',
    {
      'bg-primary text-white hover:bg-primary': variant === 'primary',
      'bg-whitten text-dark hover:bg-stroke': variant === 'secondary',
      'border border-stroke bg-transparent text-dark hover:bg-whitten': variant === 'tertiary',
      'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
      'bg-green-600 text-white hover:bg-green-700': variant === 'success',
      'cursor-pointer': !disabled && !loading,
      'opacity-50 cursor-not-allowed': disabled,
      'cursor-wait': loading,
      'text-xs px-2 py-1': size === 'sm',
      'text-sm px-4 py-2': size === 'md',
      'text-base px-6 py-3': size === 'lg',
    }
  ]" @click="!disabled && !loading ? emit('click', $event) : undefined">
    <span v-if="loading" class="mr-2">
      <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path>
      </svg>
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}>();

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
</script>
