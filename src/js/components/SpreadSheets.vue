<!-- SpreadSheets.vue -->
<template>
  <component :is="monthYearComponent"></component>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  props: {
    year: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
  },
  computed: {
    monthYearComponent() {
      const monthComponentMap = {
        2024: {
          January: "January2024",
          December: "December2024",
        },
        2025: {
          January: "January2025",
          December: "December2025",
        },
      };

      // Safely access the component name and return it
      const componentName = monthComponentMap[this.year]?.[this.month];
      return componentName ? defineAsyncComponent(() => import(`./${componentName}.vue`)) : null;
    },
  },
};
</script>
