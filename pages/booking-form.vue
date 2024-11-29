<template>
  <div
    class="card flex justify-center items-center lg:max-w-screen-xl py-8 lg:py-16 px-8 mx-auto"
  >
    <Stepper v-model:value="currentStep" class="w-full" linear>
      <StepList>
        <Step v-slot="{ activateCallback }" :value="1">
          <div @click="activateCallback">Type and Duration</div>
        </Step>
        <Step v-slot="{ activateCallback }" :value="2">
          <div @click="activateCallback">Property Details</div>
        </Step>
        <Step v-slot="{ activateCallback }" :value="3">
          <div @click="activateCallback">Your Contact Details</div></Step
        >
        <Step v-slot="{ activateCallback }" :value="4">
          <div @click="activateCallback">Your Signature</div></Step
        >
      </StepList>
      <StepPanels>
        <!-- Step 1 -->
        <StepPanel v-slot="{ activateCallback }" :value="1">
          <StepOne @next="activateCallback(2)" />
        </StepPanel>
        <!-- Step 2 -->
        <StepPanel v-slot="{ activateCallback }" :value="2">
          <StepTwo @next="activateCallback(3)" @back="activateCallback(1)" />
        </StepPanel>
        <!-- Step 3 -->
        <StepPanel v-slot="{ activateCallback }" :value="3">
          <StepThree @next="activateCallback(4)" @back="activateCallback(2)" />
        </StepPanel>
        <!-- Step 4 -->
        <StepPanel v-slot="{ activateCallback }" :value="4">
          <StepFour @back="activateCallback(3)" />
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import StepOne from "~/components/BookingPage/StepOne.vue";
import StepTwo from "~/components/BookingPage/StepTwo.vue";
import StepThree from "~/components/BookingPage/StepThree.vue";
import StepFour from "~/components/BookingPage/StepFour.vue";

const currentStep = ref(1);

// const nextStep = (step: number) => {
//   currentStep.value = step;
//   console.log("step # ", currentStep.value);
// };

// const previousStep = (step: number) => {
//   currentStep.value = step;
//   console.log("step # ", currentStep.value);
// };
</script>

<style scoped>
:deep(.p-step-active .p-step-title) {
  color: var(--primary-color-dark);
}

:deep(.p-step:has(~ .p-step-active) .p-stepper-separator) {
  background: var(--primary-color-dark);
}

:deep(.p-step-active .p-step-number) {
  border-color: var(--p-stepper-step-number-active-border-color);
  color: var(--primary-color-dark);
}
</style>
