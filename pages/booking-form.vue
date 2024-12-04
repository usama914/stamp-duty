<template>
  <div class="flex justify-center px-0 md:px-8 py-8 md:py-16 mb-12 md:mb-0">
    <div class="w-full max-w-[1000px]">
      <div class="flex flex-col space-y-2 mb-2 md:mb-8 px-6 lg:px-0">
        <h1 class="text-primary-dark text-2xl font-bold">Lets See If We Can Help You Make A Claim Today</h1>
        <p class="text-primary-dark text-sm">
          If you bought your property in the last 4 years and it needed renovations, you may have a claim. <span class="block font-bold mt-2 mb-3">Fill in the form below to find out in less than 3 minutes</span>
        </p>
      </div>
      <Card class="py-2">
        <template #content>
          <Stepper v-model:value="currentStep" class="w-full" linear>
            <StepList>
              <Step v-slot="{ activateCallback }" :value="1">
                <div @click="activateCallback">
                  <span class="md:block">Eligibility </span>
                </div>
              </Step>
              <Step v-slot="{ activateCallback }" :value="2">
                <div @click="activateCallback">
                  <span class="md:block">Property Details </span>
                </div>
              </Step>
              <Step v-slot="{ activateCallback }" :value="3">
                <div @click="activateCallback">
                  <span class="md:block">Contact Information </span>
                </div></Step
              >
            </StepList>
            <StepPanels>
              <StepPanel v-slot="{ activateCallback }" :value="1">
                <StepOne 
                  :formData="formData"
                  @next="activateCallback(2)"
                  @update:formData="updateFormData" 
                />
              </StepPanel>
              <StepPanel v-slot="{ activateCallback }" :value="2">
                <StepTwo
                  :formData="formData"
                  @next="activateCallback(3)"
                  @back="activateCallback(1)"
                  @update:formData="updateFormData"
                />
              </StepPanel>
              <StepPanel v-slot="{ activateCallback }" :value="3">
                <StepThree
                  :formData="formData"
                  @back="activateCallback(2)"
                  @update:formData="updateFormData"
                />
              </StepPanel>
            </StepPanels>
          </Stepper>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $seo } = useNuxtApp()

const title = 'Booking Form'
const description = 'Booking form for the Stamp Duty Refund website.'
$seo(title, description)

import StepOne from "~/components/BookingPage/StepOne.vue";
import StepTwo from "~/components/BookingPage/StepTwo.vue";
import StepThree from "~/components/BookingPage/StepThree.vue";

interface FormData {
  // Step 1
  propertyPurchased?: string;
  purchaseMethod?: string | null;
  probatePurchase?: string;
  repairsRequired?: string;
  // Step 2
  lawFirmName?: string;
  propertyCost?: string;
  purchaseDate?: Date | null;
  // Step 3
  email?: string;
  phone?: string;
  callTime?: string | null;
  postcode?: string;
}

const currentStep = ref(1);
const formData = ref<FormData>({});

const updateFormData = (data: Partial<FormData>) => {
  formData.value = {
    ...formData.value,
    ...data
  };
};
</script>

<style scoped>
:deep(.p-card) {
  background-color: #f4f4f4;
}
:deep(.p-steppanel) {
  background-color: #f4f4f4;
}

:deep(.p-step-active .p-step-title) {
  color: var(--primary-color-dark);
}

:deep(.p-step:has(~ .p-step-active) .p-stepper-separator) {
  background: var(--primary-color-dark);
}
:deep(.p-stepper-separator) {
  background: var(--primary-color-light);
}

:deep(.p-step-number) {
  color: white;
  background-color: var(--primary-color-dark);
}
:deep(.p-step-active .p-step-number) {
  color: white;
  background-color: var(--primary-color-dark);
}
:deep(.p-stepper-separator) {
  min-width: 30px;
}
:deep(.p-card) {
  border: 1px solid #dddddd;
  border-radius: 0;
}

@media (max-width: 970px) {
  :deep(.p-step-number) {
    display: none !important;
  }
  :deep(.p-step-title) {
    font-size: small;
  }
}

@media (max-width: 600px) {
  :deep(.p-steplist) {
    display: none !important;
  }
  :deep(.p-step) {
    padding: 0 !important;
  }
  :deep(.p-card-body) {
    padding: 10px 26px !important;
  }
  :deep(.p-stepper-separator) {
    display: none;
  }
  :deep(.p-step-title) {
    font-size: 12px;
    font-weight: 600;
    padding: 4px 8px;
    background-color: var(--primary-color-dark) !important;
    border-radius: 6px !important;
    color: white !important;
    margin-bottom: 10px;
    border: 0 !important;
  }
  :deep(.p-steppanels) {
    padding: 0 !important;
  }
}
</style>
