<template>
  <div class="flex flex-col space-y-4">
    <div>
      <label for="law-firm-name"
        >What is the name of the law firm that handled the purchase?</label
      >
      <InputText
        id="law-firm-name"
        v-model="formData.lawFirmName"
        class="w-full"
      />
    </div>
    <div>
      <label for="property-cost">Property Cost</label>
      <InputText
        id="property-cost"
        v-model="formData.propertyCost"
        type="number"
        class="w-full"
      />
    </div>
    <div>
      <label for="purchase-date">Purchase Date (month and year)</label>
      <Calendar
        id="purchase-date"
        v-model="formData.purchaseDate"
        class="w-full"
        dateFormat="mm/yy"
        showButtonBar
      />
    </div>
    <div class="flex justify-between pt-4">
      <Button
        label="Back"
        class="secondary-btn !w-20 !border-none !text-black"
        @click="$emit('back')"
      />
      <Button
        label="Next"
        class="primary-btn !w-20 !border-none"
        @click="$emit('next')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

const formData = ref({
  lawFirmName: "",
  propertyCost: "0",
  purchaseDate: null,
});
</script>
