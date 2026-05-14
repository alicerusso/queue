<template>
  <Heading v-bind="$attrs" :has-internal-link="true" level="4"
    class="pt-3 pb-1 text-gray-600 dark:text-gray-200 font-semibold text-balance">
    <slot />
  </Heading>
</template>
