<template>
  <header class="bg-primary-light text-white p-4 ">
    <div class="w-full md:w-4/6 mx-auto flex justify-between items-center">
      <NuxtImg width="70" src="/images/stamp-logo.png" />
      <nav>
        <ul class="flex space-x-6 lg:space-x-10">
          <li
            v-for="link in links"
            :key="link.id"
            :class="{
              'hidden md:inline': link.hideOnMobile,
            }"
          >
            <button
              @click="scrollToSection(link.id)"
              class="font-Lexend text-primary-dark transition-colors duration-200"
            >
              {{ link.name }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const links = [
  { name: "Can I make a claim?", id: "can-i-make-a-claim", hideOnMobile: true },
  { name: "FAQs", id: "faqs", hideOnMobile: true },
  { name: "Start your claim", id: "start-your-claim", hideOnMobile: false },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
