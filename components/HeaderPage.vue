<template>
  <header class="bg-primary-light text-white py-4">
    <div
      class="w-full lg:max-w-screen-xl mx-auto flex justify-between items-center px-4 lg:px-8"
    >
      <NuxtLink to="/">
        <NuxtImg width="70" src="/images/stamp-logo.png" />
      </NuxtLink>
      <nav v-if="!showLinks">
        <ul class="flex space-x-6 lg:space-x-10">
          <li
            v-for="link in links"
            :key="link.id"
            :class="{
              'hidden md:inline': link.hideOnMobile,
            }"
          >
            <template v-if="link.route">
              <NuxtLink
                :to="link.route"
                class="font-Lexend text-primary-dark transition-colors duration-200"
              >
                {{ link.name }}
              </NuxtLink>
            </template>
            <template v-else>
              <button
                @click="scrollToSection(link.id)"
                class="font-Lexend text-primary-dark transition-colors duration-200"
              >
                {{ link.name }}
              </button>
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";

// Define the links
const links = [
  { name: "Can I make a claim?", id: "can-i-make-a-claim", hideOnMobile: true },
  { name: "FAQs", id: "faqs", hideOnMobile: true },
  {
    name: "Start your claim",
    id: "start-your-claim",
    route: "/booking-form",
    hideOnMobile: false,
  },
];

// Function to scroll to a section
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Showing links only on the "/" route
const route = useRoute();
const showLinks = computed(() => route.path === "/booking-form");
</script>
