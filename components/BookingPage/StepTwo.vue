<template>
  <div class="flex flex-col space-y-4">
    <div>
      <label for="law-firm-name">What is the name of the law firm that handled the purchase?</label>
      <InputText
        id="law-firm-name"
        placeholder="Enter name of the Law firm"
        v-model="localFormData.lawFirmName"
        class="w-full"
      />
    </div>
    <div>
      <label for="property-cost">Property Cost</label>
      <InputNumber v-model="localFormData.propertyCost" inputId="percent" prefix="£ " fluid />
    </div>
    <div>
      <label for="purchase-date">Purchase Date (month and year)</label>
      <div class="flex gap-4">
        <DatePicker
          v-model="localFormData.purchaseMonth"
          placeholder="Select Month and Year"
          view="month"
          dateFormat="MM yy"
          showIcon
          fluid
          iconDisplay="input"
          class="w-full"
        >
          <template #inputicon="slotProps">
            <Icon icon="majesticons:calendar-line" @click="slotProps.clickCallback" />
          </template>
        </DatePicker>
      </div>
    </div>
    <div class="flex justify-between pt-4">
      <Button
        label="Back"
        class="secondary-btn !w-20 !border-none mr-2 md:mr-0 !text-black"
        @click="$emit('back')"
      />
      <Button
        :label="buttonLabel"
        class="primary-btn !w-full md:!w-80 !border-none"
        :disabled="!isFormValid"
        @click="handleNext"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['next', 'back', 'update:formData']);

const props = defineProps({
  formData: {
    type: Object,
    required: true
  }
});

const localFormData = ref({
  lawFirmName: props.formData.lawFirmName || "",
  propertyCost: props.formData.propertyCost || "",
  purchaseMonth: props.formData.purchaseMonth || null,
});

const isFormValid = computed(() => {
  const { lawFirmName, propertyCost, purchaseMonth } = localFormData.value;
  return Boolean(
    lawFirmName && 
    propertyCost && 
    purchaseMonth
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
</script>

