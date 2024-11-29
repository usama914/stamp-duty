<template>
  <div class="flex flex-col space-y-4 w-full">
    <div>
      <label for="property-purchased"
        >Was the property purchased within the last four years?</label
      >
      <InputText
        id="property-purchased"
        v-model="formData.propertyPurchased"
        class="w-full"
      />
    </div>
    <div>
      <label for="purchase-method">How did you purchase the property?</label>
      <Dropdown
        id="purchase-method"
        :options="purchaseOptions"
        optionLabel="label"
        v-model="formData.purchaseMethod"
        class="w-full"
      />
    </div>
    <div>
      <label for="repairs-required"
        >Did you purchase the property via probate?</label
      >
      <RadioButtonGroup name="ingredient" class="flex gap-4 w-full">
        <div class="flex items-center gap-2 w-3/6">
          <label
            class="radio border w-full p-2 rounded flex items-center gap-2"
            for="yes"
          >
            <RadioButton
              inputId="yes"
              value="yes "
              class="radio-btn"
            />Yes</label
          >
        </div>
        <div class="flex items-center gap-2 w-3/6">
          <label
            class="radio border w-full p-2 rounded flex items-center gap-2"
            for="no"
          >
            <RadioButton inputId="no" value="no" class="radio-btn" />No</label
          >
        </div>
      </RadioButtonGroup>
    </div>
    <div>
      <label for="repairs-required"
        >Did the property require any repairs/renovations?</label
      >
      <InputText
        id="repairs-required"
        placeholder="roof leaks, cracks, mould, electrical issues, plumbing issues, heating problems, etc "
        v-model="formData.repairsRequired"
        class="w-full"
      />
    </div>
    <div class="flex justify-end pt-4">
      <Button
        class="primary-btn !w-20 !border-none"
        label="Next"
        @click="$emit('next')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const formData = ref({
  propertyPurchased: "",
  purchaseMethod: null,
  probatePurchase: null,
  repairsRequired: "",
});

const purchaseOptions = [
  { label: "Cash", value: "cash" },
  { label: "Mortgage", value: "mortgage" },
  { label: "Installments", value: "installments" },
];
</script>
