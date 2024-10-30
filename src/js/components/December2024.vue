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
      <div class="border border-gray-300 bg-gray-200 px-4 py-3 rounded-lg text-center font-semibold text-gray-800">Header 1</div>
      <div class="border border-gray-300 bg-gray-200 px-4 py-3 rounded-lg text-center font-semibold text-gray-800">Header 2</div>
      <div class="border border-gray-300 bg-gray-200 px-4 py-3 rounded-lg text-center font-semibold text-gray-800">Header 3</div>
      <div class="border border-gray-300 bg-gray-200 px-4 py-3 rounded-lg text-center font-semibold text-gray-800">Header 4</div>
      <div class="border border-gray-300 bg-gray-200 px-4 py-3 rounded-lg text-center font-semibold text-gray-800">Header 5</div>
      <div class="border border-gray-300 bg-gray-200 px-4 py-3 rounded-lg text-center font-semibold text-gray-800">Header 6</div>
    </div>
    <!-- Body -->
    <div class="grid grid-cols-6 gap-1 mt-1">
      <div v-for="columnIndex in 6" :key="columnIndex" class="grid grid-rows-39 col-span-1 gap-2">
        <div v-for="rowIndex in 39" :key="rowIndex">
          <input
            v-if="columnIndex === 1"
            class="border border-gray-300 px-3 py-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
            placeholder="data"
          />
          <input
            v-else
            class="border border-gray-300 px-3 py-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
            placeholder=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
