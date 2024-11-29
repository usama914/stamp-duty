<template>
  <div class="flex flex-col space-y-4">
    <div>
      <label for="law-firm-name"
        >What is the name of the law firm that handled the purchase?</label
      >
      <InputText
        id="law-firm-name"
        placeholder="Enter name of the Law firm"
        v-model="formData.lawFirmName"
        class="w-full"
      />
    </div>
    <div>
      <label for="property-cost">Property Cost</label>
      <InputText
        id="property-cost"
        placeholder="Enter property cost"
        v-model="formData.propertyCost"
        type="text"
        class="w-full"
      />
    </div>
    <div>
      <label for="purchase-date">Purchase Date (month and year)</label>

      <DatePicker
        v-model="formData.purchaseDate"
        placeholder="Enter purchase date"
        showIcon
        fluid
        iconDisplay="input"
        class="w-full"
        ><template #inputicon="slotProps">
          <Icon
            icon="majesticons:clock-line"
            @click="slotProps.clickCallback"
          />
        </template>
      </DatePicker>
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
  propertyCost: "",
  purchaseDate: null,
});
</script>
