<template>
  <div v-if="currentStep !== 3" class="p-4 max-w-md mx-auto mt-5">
    <div :class="['transform transition duration-500 ease-out', transitionClass]">
      <!-- Header -->
      <h1 class="text-3xl font-semibold text-gray-800 mb-6">Cash Mate</h1>

      <!-- Step 1: Choose Year -->
      <div v-if="currentStep === 1" class="space-y-4">
        <p class="text-lg text-gray-600 font-medium">Choose Year</p>
        <select v-model="selectedYear" class="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        <button
          @click="handleClick('goToMonth')"
          :class="['rounded-lg px-6 py-2 mt-4 font-medium transition duration-500 ease-out', clickedButton === 'goToMonth' ? 'opacity-50 scale-105' : 'bg-blue-500 text-white hover:opacity-80']">
          Go Next
        </button>
      </div>

      <!-- Step 2: Choose Month -->
      <div v-if="currentStep === 2" class="space-y-4">
        <p class="text-lg text-gray-600 font-medium">Choose Month</p>
        <select v-model="selectedMonth" class="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <div class="flex justify-between mt-4">
          <button
            @click="handleClick('goToYear')"
            :class="['rounded-lg px-6 py-2 font-medium transition duration-500 ease-out', clickedButton === 'goToYear' ? 'opacity-50 scale-105' : 'bg-gray-300 text-gray-700 hover:opacity-80']">
            Back
          </button>
          <button
            @click="handleClick('goToSpreadsheet')"
            :class="['ml-2 rounded-lg px-6 py-2 font-medium transition duration-500 ease-out', clickedButton === 'goToSpreadsheet' ? 'opacity-50 scale-105' : 'bg-blue-500 text-white hover:opacity-80']">
            Go Next
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Step 3: Spreadsheet -->
  <spread-sheets v-if="currentStep === 3" :year="selectedYear" :month="selectedMonth"></spread-sheets>
</template>

<script>
import SpreadSheets from './components/SpreadSheets.vue';
export default {
  components: {
    SpreadSheets
  },
  data() {
    return {
      currentStep: 1,
      selectedYear: null,
      selectedMonth: null,
      clickedButton: null,
      transitionClass: '',
    };
  },
  methods: {
    handleClick(button) {
      this.clickedButton = button;
      this.transitionClass = 'opacity-0 scale-110';

      setTimeout(() => {
        this.transitionClass = '';
        this.clickedButton = null;
        this[button]();
      }, 600);
    },
    goToYear() {
      this.currentStep = 1;
    },
    goToMonth() {
      if (this.selectedYear) {
        this.currentStep = 2; 
      } else {
        alert("Please select a year.");
      }
    },
    goToSpreadsheet() {
      if (this.selectedMonth) {
        this.currentStep = 3;
      } else {
        alert("Please select a month."); 
      }
    },
  },
};
</script>
