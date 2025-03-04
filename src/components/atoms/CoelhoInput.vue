<template>
  <div class="relative">
    <label v-if="label" :for="id" class="block mb-2 text-sm font-medium text-dark">
      {{ label }}
    </label>

    <div class="relative">
      <div v-if="leftIcon" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <component :is="leftIcon" class="h-5 w-5 text-gray-400" />
      </div>

      <input :id="id" :type="showPassword ? 'text' : type" :value="modelValue" :disabled="disabled"
        :placeholder="placeholder" :class="[
          'w-full rounded-md font-medium transition-colors',
          'border border-stroke focus:border-primary focus:ring-1 focus:ring-primary',
          {
            'pl-10': leftIcon,
            'pr-10': rightIcon || type === 'password',
            'border-red-500 focus:border-red-500 focus:ring-red-500': error,
            'border-green-500 focus:border-green-500 focus:ring-green-500': success,
            'bg-whitten cursor-not-allowed opacity-50': disabled,
            'text-xs px-2 py-1': size === 'sm',
            'text-sm px-3 py-2': size === 'md',
            'text-base px-4 py-3': size === 'lg',
          }
        ]" @input="$emit('update:modelValue', (<HTMLInputElement>$event.target).value)" />

      <div v-if="type === 'password'" class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        @click="showPassword = !showPassword">
        <component :is="showPassword ? EyeIcon : EyeSlashIcon" class="h-5 w-5 text-gray-400 hover:text-gray-600" />
      </div>
      <div v-else-if="rightIcon" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <component :is="rightIcon" class="h-5 w-5 text-gray-400"
          :class="{ 'text-red-600': error, 'text-green-600': success }" />
      </div>
    </div>

    <p v-if="error" class="mt-1 text-xs text-red-500">{{ error }}</p>
    <p v-else-if="success" class="mt-1 text-xs text-green-500">{{ success }}</p>
    <p v-else-if="helperText" class="mt-1 text-xs text-gray-500">{{ helperText }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Component } from 'vue';
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/solid'

interface Props {
  modelValue?: string | number;
  type?: 'text' | 'number' | 'email' | 'password' | 'search';
  label?: string;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  error?: string;
  success?: string;
  helperText?: string;
  leftIcon?: Component;
  rightIcon?: Component;
  id?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  id: `input-${Math.random().toString(36).substr(2, 9)}`,
});

const showPassword = ref(false);
</script>
