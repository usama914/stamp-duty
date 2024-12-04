<template>
  <div class="mb-4">
    <label>Was the property purchased within the last four years?</label>
    <RadioButtonGroup 
      v-model="localFormData.propertyPurchased" 
      name="propertyPurchased" 
      class="flex gap-4 w-full"
    >
      <div class="flex items-center gap-2 w-3/6">
        <label class="radio border w-full p-2 rounded flex items-center gap-2" for="years-yes">
          <RadioButton inputId="years-yes" value="yes" class="radio-btn" />Yes
        </label>
      </div>
      <div class="flex items-center gap-2 w-3/6">
        <label class="radio border w-full p-2 rounded flex items-center gap-2" for="years-no">
          <RadioButton inputId="years-no" value="no" class="radio-btn" />No
        </label>
      </div>
    </RadioButtonGroup>
  </div>

  <div class="mb-4">
    <label>How did you purchase the property?</label>
    <Select
      v-model="localFormData.purchaseMethod"
      :options="purchaseOptions"
      optionLabel="label"
      optionValue="value"
      placeholder="Select Purchase Method"
      class="w-full"
    />
  </div>

  <div class="mb-4">
    <label>Did you purchase the property via probate?</label>
    <RadioButtonGroup 
      v-model="localFormData.probatePurchase" 
      name="probatePurchase" 
      class="flex gap-4 w-full"
    >
      <div class="flex items-center gap-2 w-3/6">
        <label class="radio border w-full p-2 rounded flex items-center gap-2" for="probate-yes">
          <RadioButton inputId="probate-yes" value="yes" class="radio-btn" />Yes
        </label>
      </div>
      <div class="flex items-center gap-2 w-3/6">
        <label class="radio border w-full p-2 rounded flex items-center gap-2" for="probate-no">
          <RadioButton inputId="probate-no" value="no" class="radio-btn" />No
        </label>
      </div>
    </RadioButtonGroup>
  </div>

  <div>
    <label>Did the property require any repairs/renovations?</label>
    <RadioButtonGroup 
      v-model="localFormData.repairsRequired" 
      name="repairsRequired" 
      class="flex gap-4 w-full"
    >
      <div class="flex items-center gap-2 w-3/6">
        <label class="radio border w-full p-2 rounded flex items-center gap-2" for="repairs-yes">
          <RadioButton inputId="repairs-yes" value="yes" class="radio-btn" />Yes
        </label>
      </div>
      <div class="flex items-center gap-2 w-3/6">
        <label class="radio border w-full p-2 rounded flex items-center gap-2" for="repairs-no">
          <RadioButton inputId="repairs-no" value="no" class="radio-btn" />No
        </label>
      </div>
    </RadioButtonGroup>
  </div>

  <div class="flex justify-end pt-4">
    <Button
      :label="buttonLabel"
      class="primary-btn !w-full md:!w-[50%] !border-none"
      :disabled="!isFormValid"
      @click="handleNext"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['next', 'update:formData']);

interface FormData {
  propertyPurchased: string;
  purchaseMethod: string | null;
  probatePurchase: string;
  repairsRequired: string;
}

const props = defineProps({
  formData: {
    type: Object,
    required: true
  }
});

const localFormData = ref({
  propertyPurchased: props.formData.propertyPurchased || '',
  purchaseMethod: props.formData.purchaseMethod || null,
  probatePurchase: props.formData.probatePurchase || '',
  repairsRequired: props.formData.repairsRequired || '',
});

const isFormValid = computed(() => {
  const { propertyPurchased, purchaseMethod, probatePurchase, repairsRequired } = localFormData.value;
  return Boolean(
    propertyPurchased && 
    purchaseMethod && 
    probatePurchase && 
    repairsRequired
  );
});

const buttonLabel = computed(() => {
  return isFormValid.value ? 'Continue' : 'Continue';
});

const handleNext = () => {
  if (isFormValid.value) {
    emit('update:formData', localFormData.value);
    emit('next');
  }
};

const purchaseOptions = [
  { label: "Personally/standard mortage", value: "Personally/standard mortage" },
  { label: "As a property developer", value: "As a property developer" },
  { label: "Through a Limited Business", value: "Through a Limited Business" },
  { label: "Through a Limited Liability Partnership", value: "Through a Limited Liability Partnership" },
  { label: "Other", value: "Other" },
];
</script>
