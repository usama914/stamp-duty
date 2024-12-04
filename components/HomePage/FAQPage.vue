<template>
  <section
    id="faqs"
    class="mx-auto flex flex-col w-full lg:max-w-screen-xl mb-[5rem] px-6 lg:px-8"
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
      <NuxtLink :to="buttonLink" class="primary-btn w-full uppercase">
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
  buttonLink: {
    type: String,
    required: true,
  },
});

const tabs = ref<Tab[]>([
  {
    title: "What is Stamp Duty Land Tax (SDLT)?",
    content: "Stamp Duty Land Tax (SDLT) is a government tax that applies when you purchase property or land in the UK. This tax also covers rights over property, such as leases. While not every property purchase is subject to SDLT, the regulations governing payment requirements and amounts can be complex. Your SDLT liability depends on several key factors:",
    list: [
      "The property's classification (residential or non-residential use)",
      "The purchase price of the property or land",
      "Your buyer status (individual, company, or partnership)",
      "Your residency status (UK resident or non-resident)",
      "The purpose of your purchase",
      "Any related property transactions",
    ],
    value: "0",
  },
  {
    title: "What is the time limit for making an SDLT refund claim?",
    content: "There is a strict time limit for SDLT refund claims. You must submit your claim within 4 years of your property purchase date. After this period, HMRC will not consider any refund applications, regardless of their merit.",
    value: "1",
  },
  {
    title: "What are your service fees?",
    content: "We believe in transparent pricing and operate on a 'No Win No Fee' basis. Our fee structure is straightforward: we charge 27.5% + VAT (total 33%) of the refunded amount, but only if your claim is successful. If we cannot secure a refund for you, you won't pay anything for our services.",
    value: "2",
  },
  {
    title: "How long does the SDLT refund process take?",
    content: "The typical processing time for an SDLT refund claim is approximately 10 weeks from the date we receive all required documentation. This timeline represents the average period for HMRC to review and reach a decision on your claim.",
    value: "3",
  },
  {
    title: "What amount can I expect to reclaim?",
    content: "The refund amount varies for each case, as it depends on your specific circumstances. Many of our successful clients have received a complete refund of their original SDLT payment. However, the final amount depends on meeting our eligibility criteria and providing all necessary documentation to support your claim.",
    value: "4",
  },
  {
    title: "Why was Stamp Duty Land Tax introduced?",
    content: "SDLT was introduced in 2003 as part of a major reform of property taxation in the UK. This new system, which applies specifically to property and land buyers, was implemented for two primary reasons: First, it addressed the widespread issue of tax avoidance under the previous stamp duty system by creating more robust anti-avoidance measures. Second, it aimed to establish a fairer, more logical taxation framework, although the system remains complex. While SDLT may still have its intricacies, it generally provides a more equitable approach to property taxation when applied correctly.",
    value: "5",
  },
]);
</script>

<style>
.p-accordioncontent-content {
  background-color: var(--primary-color-gray) !important;
}
</style>
