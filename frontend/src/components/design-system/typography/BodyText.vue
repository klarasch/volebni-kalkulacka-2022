<script setup lang="ts">
export interface Props {
  tag?: 'p' | 'span';
  size: 'extra-small' | 'small' | 'medium' | 'large';
  color?: string;
}

withDefaults(defineProps<Props>(), {
  tag: 'p',
  color: 'rgb(var(--color-neutral-fg))',
});
</script>

<template>
  <component :is="tag" :class="[size]">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  font-family: var(--typography-body-family);
  color: v-bind(color);
}

*:deep() a {
  color: rgb(var(--color-primary-fg));

  &:hover {
    color: rgb(var(--color-primary-fg-hover));
    text-decoration: underline;
  }

  &:active {
    color: rgb(var(--color-primary-fg-active));
  }
}

.extra-small {
  font-size: var(--typography-body-extra-small-size);
  line-height: var(--typography-body-extra-small-line-height);
  letter-spacing: var(--typography-body-extra-small-letter-spacing);
}

.small {
  font-size: var(--typography-body-small-size);
  line-height: var(--typography-body-small-line-height);
  letter-spacing: var(--typography-body-small-letter-spacing);
}

.medium {
  font-size: var(--typography-body-medium-size);
  line-height: var(--typography-body-medium-line-height);
  letter-spacing: var(--typography-body-medium-letter-spacing);
}

.large {
  font-size: var(--typography-body-large-size);
  line-height: var(--typography-body-large-line-height);
  letter-spacing: var(--typography-body-large-letter-spacing);
}
</style>
