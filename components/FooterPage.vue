<template>
  <footer class="bg-gray-300 text-white md:p-0 mt-auto">
    <div
      class="w-full flex justify-start flex-col lg:max-w-screen-xl mx-auto p-4 lg:px-8"
    >
      <ul>
        <li v-for="point in points" :key="point">
          <span class="flex items-baseline gap-1 text-black text-sm p-1">
            {{ point }}
          </span>
        </li>
      </ul>
      <ul class="flex gap-2 justify-start align-center flex-wrap mt-3 text-sm">
        <li v-for="link in links" :key="link.name">
          <NuxtLink
            :to="withUtmParams(link.site)"
            class="text-black font-bold underline hover:text-blue-600"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useUtmTracking } from "~/composables/useUtmTracking";

const { withUtmParams } = useUtmTracking();

const points = ref<string[]>([
  "© 2024 XIOTS Ltd t/a Stamp Duty Refund is registered in England and Wales under company number: 13719085. ",
  "VAT registration number GB461809579. ICO Registration Number ZB416277. ",
  "Registered office: Suite 1M Lions Drive, Shadsworth, Business Park, Blackburn, BB1 2QS. ",
  "A list of directors is available from Companies House.",
]);

interface Tab {
  name: string;
  site: string;
}

const links = ref<Tab[]>([
  {
    name: "Privacy policy",
    site: "/privacy",
  },
  {
    name: "Cookie policy",
    site: "/cookies",
  },
  {
    name: "Complaints policy",
    site: "/complaints",
  },
  {
    name: "Terms of business",
    site: "/terms",
  },
]);
</script>
