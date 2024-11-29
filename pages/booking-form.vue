<template>
  <div class="flex justify-center items-center py-16 px-2 md:px-8">
    <Card class="card flex justify-center items-center lg:max-w-screen-lg py-8">
      <template #content>
        <Stepper v-model:value="currentStep" class="w-full" linear>
          <StepList>
            <Step v-slot="{ activateCallback }" :value="1">
              <div @click="activateCallback">
                <span class="md:hidden">Details </span>
                <span class="hidden md:block"> Type and Duration </span>
              </div>
            </Step>
            <Step v-slot="{ activateCallback }" :value="2">
              <div @click="activateCallback">
                <span class="md:hidden">Property </span>
                <span class="hidden md:block">Property Details </span>
              </div>
            </Step>
            <Step v-slot="{ activateCallback }" :value="3">
              <div @click="activateCallback">
                <span class="md:hidden">Contact </span>
                <span class="hidden md:block"> Your Contact Details </span>
              </div></Step
            >
            <Step v-slot="{ activateCallback }" :value="4">
              <div @click="activateCallback">
                <span class="md:hidden">Signature </span>
                <span class="hidden md:block"> Your Signature </span>
              </div></Step
            >
          </StepList>
          <StepPanels>
            <!-- Step 1 -->
            <StepPanel v-slot="{ activateCallback }" :value="1">
              <StepOne @next="activateCallback(2)" />
            </StepPanel>
            <!-- Step 2 -->
            <StepPanel v-slot="{ activateCallback }" :value="2">
              <StepTwo
                @next="activateCallback(3)"
                @back="activateCallback(1)"
              />
            </StepPanel>
            <!-- Step 3 -->
            <StepPanel v-slot="{ activateCallback }" :value="3">
              <StepThree
                @next="activateCallback(4)"
                @back="activateCallback(2)"
              />
            </StepPanel>
            <!-- Step 4 -->
            <StepPanel v-slot="{ activateCallback }" :value="4">
              <StepFour @back="activateCallback(3)" />
            </StepPanel>
          </StepPanels>
        </Stepper>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import StepOne from "~/components/BookingPage/StepOne.vue";
import StepTwo from "~/components/BookingPage/StepTwo.vue";
import StepThree from "~/components/BookingPage/StepThree.vue";
import StepFour from "~/components/BookingPage/StepFour.vue";

const currentStep = ref(1);
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
  box-shadow: 10px 10px 5px 0px rgba(222, 222, 222, 1);
  border: 1px solid #dddddd;
  /* box-shadow: 7px 7px 10px 4px rgba(230, 230, 230, 1); */
}

@media (max-width: 970px) {
  :deep(.p-step-number) {
    display: none !important;
  }
  :deep(.p-step-title) {
    font-size: small;
  }
}
</style>
