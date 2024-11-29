<template>
  <div class="flex flex-col space-y-4 w-full">
    <div>
      <label for="repairs-required"
        >Was the property purchased within the last four years?</label
      >
      <RadioButtonGroup name="ingredient" class="flex gap-4 w-full">
        <div class="flex items-center gap-2 w-3/6">
          <label
            class="radio border w-full p-2 rounded flex items-center gap-2"
            for="years-yes"
          >
            <RadioButton
              inputId="years-yes"
              value="yes"
              class="radio-btn"
            />Yes</label
          >
        </div>
        <div class="flex items-center gap-2 w-3/6">
          <label
            class="radio border w-full p-2 rounded flex items-center gap-2"
            for="years-no"
          >
            <RadioButton
              inputId="years-no"
              value="no"
              class="radio-btn"
            />No</label
          >
        </div>
      </RadioButtonGroup>
    </div>
    <div>
      <label for="purchase-method">How did you purchase the property?</label>
      <Dropdown
        id="purchase-method"
        :options="purchaseOptions"
        placeholder="- - -"
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
        >Did the property require any repairs/renovations?
        <span class="text-sm">
          (roof leaks, cracks, mould, electrical issues, plumbing issues,
          heating problems, etc)
        </span>
      </label>
      <RadioButtonGroup name="ingredient" class="flex gap-4 w-full">
        <div class="flex items-center gap-2 w-3/6">
          <label
            class="radio border w-full p-2 rounded flex items-center gap-2"
            for="repairs-yes"
          >
            <RadioButton
              inputId="repairs-yes"
              value="yes "
              class="radio-btn"
            />Yes</label
          >
        </div>
        <div class="flex items-center gap-2 w-3/6">
          <label
            class="radio border w-full p-2 rounded flex items-center gap-2"
            for="repairs-no"
          >
            <RadioButton
              inputId="repairs-no"
              value="no"
              class="radio-btn"
            />No</label
          >
        </div>
      </RadioButtonGroup>
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
  { label: "Personally/standard mortage", value: "1" },
  { label: "As a property developer", value: "2" },
  { label: "Through a Limited Business", value: "3" },
  { label: "Through a Limited Liability Partnership", value: "4" },
  { label: "Other", value: "5" },
];
</script>
