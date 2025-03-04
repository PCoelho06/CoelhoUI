<template>
  <div class="space-y-1">
    <!-- Label -->
    <CoelhoText v-if="label" as="label" :for="id" class="block mb-1" weight="medium">
      {{ label }}
    </CoelhoText>

    <!-- Input Group Container -->
    <div class="relative flex">
      <!-- Prefix -->
      <div v-if="prefix || $slots.prefix"
        class="flex items-center px-3 border border-r-0 border-stroke rounded-l-md bg-whitten"
        :class="{ 'opacity-50': disabled }">
        <CoelhoIcon v-if="prefix" :icon="prefix" size="sm" class="text-dark" />
        <slot name="prefix" />
      </div>

      <!-- Input -->
      <CoelhoInput :id="id" :prefix="prefix || $slots.prefix ? true : false"
        :suffix="suffix || $slots.suffix || action ? true : false" :type="type" v-model="inputValue" v-bind="$attrs"
        :disabled="disabled" :placeholder="placeholder" :class="[
          'flex-1'
        ]" :error="!!error" @blur="handleBlur" />

      <!-- Suffix -->
      <div v-if="suffix || $slots.suffix" class="flex items-center px-3 border border-l-0 border-stroke bg-whitten"
        :class="[
          { 'opacity-50': disabled },
          { 'rounded-r-md': !action }
        ]">
        <CoelhoIcon v-if="suffix" :icon="suffix" size="sm" class="text-dark" />
        <slot name="suffix" />
      </div>

      <!-- Action Button -->
      <CoelhoButton v-if="action" :variant="actionVariant" :disabled="disabled" class="rounded-l-none px-4"
        @click="$emit('action')">
        <CoelhoIcon v-if="actionIcon" :icon="actionIcon" size="sm" class="mr-1" />
        {{ actionLabel }}
      </CoelhoButton>
    </div>

    <!-- Error Message -->
    <CoelhoText v-if="error" size="sm" color="text-red-500" class="mt-1">
      {{ error }}
    </CoelhoText>

    <!-- Helper Text -->
    <CoelhoText v-else-if="helper" size="sm" color="text-gray-500" class="mt-1">
      {{ helper }}
    </CoelhoText>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';
import { CoelhoInput, CoelhoButton, CoelhoIcon, CoelhoText } from '../'

interface Props {
  modelValue: string;
  label?: string;
  prefix?: Component;
  suffix?: Component;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password' | 'search';
  error?: string;
  helper?: string;
  disabled?: boolean;
  action?: boolean;
  actionLabel?: string;
  actionIcon?: Component;
  actionVariant?: 'primary' | 'secondary' | 'danger';
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  actionVariant: 'primary',
  id: `input-${Math.random().toString(36).substr(2, 9)}`,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'action'): void;
}>();

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const handleBlur = (event: FocusEvent) => {
  emit('blur', event);
};
</script>
