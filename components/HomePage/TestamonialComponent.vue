<template>
  <div class="bg-primary-dark py-16 px-6 lg:px-8">
    <div class="lg:max-w-screen-xl mx-auto">
      <h1
        class="font-Lexend text-white text-center lg:text-start text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-6 px-8"
      >
        {{ headline }}
      </h1>
      <div class="flex flex-wrap gap-8 justify-start sm:justify-center">
        <Card
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white shadow-lg rounded-lg p-6 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_30%]"
        >
          <template #content>
            <div class="flex flex-col items-center text-center">
              <div class="flex text-yellow-400 mb-3">
                <Rating v-model="value" disabled />
              </div>
              <p
                class="text-gray-700 text-start md:text-center text-base sm:text-lg lg:text-xl mb-4"
              >
                {{ testimonial.message }}
              </p>
              <h3
                class="font-bold text-base sm:text-lg lg:text-xl text-gray-900"
              >
                {{ testimonial.name }}
              </h3>
            </div>
          </template>
        </Card>
<NuxtLink :to="buttonLink" class="primary-btn uppercase">
      {{ buttonText }}
    </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref(5);
defineProps({
  testimonials: {
    type: Array as PropType<{ name: string; message: string }[]>,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
:deep(.p-rating-option-active .p-rating-icon) {
  color: #ffe200;
}
</style>
