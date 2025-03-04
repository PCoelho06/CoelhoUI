<template>
  <div class="inline-flex" :class="[sizeClasses]" role="status" :aria-label="ariaLabel">
    <!-- Spinner circulaire -->
    <template v-if="type === 'spinner'">
      <svg class="animate-spin" :class="[sizeClasses]" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" :class="[strokeClass]" cx="12" cy="12" r="10" stroke-width="4" />
        <path class="opacity-75" :class="[fillClass]"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </template>

    <!-- Points -->
    <template v-else-if="type === 'dots'">
      <div class="flex space-x-1 items-center">
        <div class="animate-bounce" :class="[dotSizeClasses]" :style="{ animationDelay: '0ms' }" />
        <div class="animate-bounce" :class="[dotSizeClasses]" :style="{ animationDelay: '150ms' }" />
        <div class="animate-bounce" :class="[dotSizeClasses]" :style="{ animationDelay: '300ms' }" />
      </div>
    </template>

    <!-- Barre de progression linéaire -->
    <template v-else-if="type === 'linear'">
      <div class="relative overflow-hidden w-full" :class="[linearHeightClass]">
        <div class="absolute inset-0 animate-linear-progress" :class="[colorClass]" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type SpinnerColor = 'primary' | 'secondary' | 'white' | 'success' | 'danger' | 'warning';

interface Props {
  type?: 'spinner' | 'dots' | 'linear';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: SpinnerColor | string;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'spinner',
  size: 'md',
  color: 'primary',
  ariaLabel: 'Loading',
});

// Classes de taille pour le conteneur
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12',
  };
  return sizes[props.size];
});

// Classes de taille pour les points
const dotSizeClasses = computed(() => {
  const sizes = {
    sm: 'h-1 w-1',
    md: 'h-2 w-2',
    lg: 'h-3 w-3',
    xl: 'h-4 w-4',
  };
  return `rounded-full ${sizes[props.size]} ${colorClass.value}`;
});

// Classe de hauteur pour le loader linéaire
const linearHeightClass = computed(() => {
  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4',
  };
  return heights[props.size];
});

// Classes de couleur
const colorClass = computed(() => {
  const colors: Record<SpinnerColor, string> = {
    primary: 'bg-primary',
    secondary: 'bg-stroke',
    white: 'bg-white',
    success: 'bg-green-500',
    danger: 'bg-red-500',
    warning: 'bg-yellow-500'
  };

  return colors[props.color as SpinnerColor] || `bg-[${props.color}]`;
});

const fillClass = computed(() => {
  const colors: Record<SpinnerColor, string> = {
    primary: 'fill-primary',
    secondary: 'fill-stroke',
    white: 'fill-white',
    success: 'fill-green-500',
    danger: 'fill-red-500',
    warning: 'fill-yellow-500'
  };

  return colors[props.color as SpinnerColor] || `fill-[${props.color}]`;
});

const strokeClass = computed(() => {
  const colors: Record<SpinnerColor, string> = {
    primary: 'stroke-primary',
    secondary: 'stroke-stroke',
    white: 'stroke-white',
    success: 'stroke-green-500',
    danger: 'stroke-red-500',
    warning: 'stroke-yellow-500'
  };

  return colors[props.color as SpinnerColor] || `stroke-[${props.color}]`;
});

</script>

<style scoped>
@keyframes linear-progress {
  0% {
    left: -100%;
    width: 100%;
  }

  50% {
    left: 100%;
    width: 100%;
  }

  100% {
    left: 100%;
    width: 0%;
  }
}

.animate-linear-progress {
  animation: linear-progress 2s infinite;
}
</style>
