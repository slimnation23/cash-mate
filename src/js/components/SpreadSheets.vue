<!-- SpreadSheets.vue -->
<template>
  <component :is="monthYearComponent"></component>
</template>

<script>
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
      // Map year and month to specific component names
      const monthComponentMap = {
        '2024': {
          January: 'January2024',
          Desember: 'Desember2024',
          // Add more months if needed
        },
        '2025': {
          January: 'January2025',
          December: 'December2025',
          // Add more months if needed
        },
      };

      // Get the component name based on selected year and month
      const componentName = monthComponentMap[this.year]?.[this.month];
      
      // Import and return the component dynamically
      return componentName ? () => import(`./${componentName}.vue`) : null;
    },
  },
};
</script>
