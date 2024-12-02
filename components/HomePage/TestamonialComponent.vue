<template>
  <div class="bg-blue-900 py-16 px-4">
    <div class="lg:max-w-screen-xl mx-auto">
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
              <p class="text-gray-700 text-start md:text-center text-base sm:text-lg lg:text-xl mb-4">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref(5);

interface Testimonial {
  name: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Gary Toombs",
    message:
      "I needed the sale to be fast and before I knew it, I had sold my house and was able to move into a different property. Good service and very helpful on the phone with any questions I had.",
  },
  {
    name: "Noris Ndibu",
    message:
      "Thank you guys for keeping your word and completing the sale within my timelines. Had I gone with estate agents, I would not have received my money within 2 weeks. I used my own solicitor and felt that I was in complete control. Thanks again!",
  },
  {
    name: "Avni Khatri",
    message:
      "I am so grateful, these guys completed the sale really fast and always kept me updated by phone and email, they handled absolutely everything. I’m so delighted it’s been sorted so quickly. Thanks!",
  },
];
</script>

<style scoped>
:deep(.p-rating-option-active .p-rating-icon) {
  color: #ffe200;
}
</style>
