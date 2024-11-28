<template>
  <section
    id="faqs"
    class="mx-auto flex flex-col w-full lg:max-w-screen-xl mb-[5rem] px-4 lg:px-8"
  >
    <div class="space-y-5">
      <h1
        class="font-Lexend text-3xl sm:text-4xl lg:text-5xl leading-[2.5rem] sm:leading-[3rem] lg:leading-[3.5rem]"
        v-html="title"
      ></h1>
      <p class="text-base sm:text-lg lg:text-xl" v-html="description"></p>
    </div>
    <div class="h-auto card my-5">
      <Accordion value="0">
        <AccordionPanel
          class="mb-2"
          v-for="tab in tabs"
          :key="tab.title"
          :value="tab.value"
        >
          <AccordionHeader class="!text-black !bg-primary-gray">{{
            tab.title
          }}</AccordionHeader>
          <AccordionContent class="!bg-neutral-300">
            <div v-if="tab.list && tab.list.length">
              <p class="m-0 !text-black">{{ tab.content }}</p>
              <ul class="list-disc ml-6 mt-2">
                <li v-for="(item, index) in tab.list" :key="index">
                  <p class="!text-black">
                    {{ item }}
                  </p>
                </li>
              </ul>
            </div>
            <p v-else class="m-0 !text-black">{{ tab.content }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
    <div class="flex w-full md:w-3/5">
      <NuxtLink class="primary-btn w-full uppercase">
        {{ buttonText }}</NuxtLink
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Tab {
  title: string;
  content: string;
  list?: string[];
  value: string;
}

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
});

const tabs = ref<Tab[]>([
  {
    title: "What is Stamp Duty Land Tax?",
    content:
      "Stamp duty land tax - SDLT is a tax targeted at buyers of land, property and rights over property (like leases). You pay stamp duty when you purchase property, or a piece of land. Not all purchases attract stamp duty. The rules over when you have to pay stamp duty and how much you must pay are extremely complicated. Generally, the following 6 factors will affect whether and how much you have to pay:",
    list: [
      "Whether the land/property is used residentially or non-residentially",
      "How much you paid for the land",
      "Who you are: an individual, a company, or a partnership",
      "Where you live, if you are a UK resident or non-resident",
      "Why you bought the land/property",
      "Whether you have bought anything else in a related transaction",
    ],
    value: "0",
  },
  {
    title: "How do I claim SDLT refund?",
    content:
      "To claim an SDLT refund, you will need to ensure you meet the eligibility criteria. Our team specializes in helping clients navigate the process for maximum refund efficiency.",
    value: "1",
  },
  {
    title: "What happens after I submit a claim?",
    content:
      "Once you submit a claim, our team reviews the documents and submits them to HMRC. You can expect updates throughout the process until your claim is processed.",
    value: "2",
  },
]);
</script>

<style>
.p-accordioncontent-content {
  background-color: var(--primary-color-gray) !important;
}
</style>
