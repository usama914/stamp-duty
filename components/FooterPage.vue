<template>
  <footer class="bg-gray-300 text-white md:p-0 mt-auto">
    <div
      class="w-full flex justify-start flex-col lg:max-w-screen-xl mx-auto p-4 lg:px-2"
    >
      <ul>
        <li v-for="point in points" :key="point">
          <span class="flex items-baseline gap-1 text-black text-sm p-1">
            {{ point }}
          </span>
        </li>
      </ul>
      <ul class="flex gap-5 justify-start align-center flex-wrap mt-3">
        <li v-for="link in links" :key="link.name">
          <a
            :href="link.site"
            class="text-black font-bold underline hover:text-blue-600"
            target="_blank"
            rel=""
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
const points = ref<string[]>([
  "© 2024 Swimby Carroll Anderson Ltd t/a Hardcastle Swim by is registered in England and Wales under company number: 15684524. ",
  "VAT registration number 471786848 . ICO Registration Number ZB760262. ",
  "Registered office: 76 King Street, Manchester, M2 4NH. ",
  "A list of directors is available from Companies House.",
]);

interface Tab {
  name: string;
  site: string;
}
const links = ref<Tab[]>([
  {
    name: "Privacy policy",
    site: "https://hardcastleswimby.co.uk/privacy",
  },
  {
    name: "Cookie policy",
    site: "https://hardcastleswimby.co.uk/cookies",
  },
  {
    name: "Complaints policy",
    site: "https://hardcastleswimby.co.uk/complaints",
  },
  {
    name: "Terms of business",
    site: "https://hardcastleswimby.co.uk/terms",
  },
]);
</script>
