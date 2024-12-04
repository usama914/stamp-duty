<template>
  <header class="bg-primary-light text-white py-4">
    <div
      class="w-full lg:max-w-screen-xl mx-auto flex justify-between items-center px-4 lg:px-8"
    >
      <NuxtLink :to="homeLink" class="flex items-center space-x-2 text-primary-dark">
        <Icon icon="fluent-mdl2:home-verify" style="width: 40px; height: 40px;" />
        <span class="font-Lexend text-primary-dark text-xl">Stamp Duty Refund</span>
      </NuxtLink>
      <nav v-if="!showLinks">
        <ul class="space-x-6 lg:space-x-10 hidden md:flex">
          <li
            v-for="link in links"
            :key="link.id"
            :class="{
              'hidden md:inline': link.hideOnMobile,
            }"
          >
            <template v-if="link.route">
              <NuxtLink
                :to="withUtmParams(link.route)"
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
import { useUtmTracking } from "~/composables/useUtmTracking";

const { withUtmParams } = useUtmTracking();

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

// Add UTM parameters to home link
const homeLink = computed(() => withUtmParams('/'));
</script>
