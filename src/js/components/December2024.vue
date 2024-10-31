<template>
  <div class="overflow-x-auto bg-gray-100 p-2 rounded-lg shadow-md">
    <a
      href="index"
      class="inline-block mb-4 text-gray-900 font-semibold text-lg px-4 py-1 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:bg-gray-100"
    >
      Home
    </a>
    <div class="grid grid-cols-6 gap-1">
      <!-- Header -->
      <div
        v-for="(header, index) in headers"
        :key="index"
        class="border border-gray-300 bg-gray-200 px-0.5 py-3 rounded-lg text-center font-semibold text-gray-800 text-sm"
      >
        {{ header }}
      </div>
    </div>
    <!-- Body -->
    <div class="grid grid-cols-6 gap-1 mt-1">
      <div v-for="(columnData, columnIndex) in data" :key="columnIndex" class="grid grid-rows-39 col-span-1 gap-2">
        <div v-for="(col, rowIndex) in columnData" :key="rowIndex">
          <input
            v-model="data[columnIndex][rowIndex]"
            @input="saveData"
            class="border border-gray-300 px-3 py-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
            :placeholder="columnIndex === 0 ? 'data' : ''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: ["Data", "Income", "Products", "Auto", "Family", "Other"],
      data: this.loadData(),
    };
  },
  methods: {
    saveData() {
      localStorage.setItem("spreadsheetData", JSON.stringify(this.data));
    },
    loadData() {
      const savedData = localStorage.getItem("spreadsheetData");
      if (savedData) {
        return JSON.parse(savedData);
      }
      return Array.from({ length: 6 }, () => Array(39).fill(""));
    },
  },
};
</script>
