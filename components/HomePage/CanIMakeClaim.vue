<template>
  <section
    id="can-i-make-a-claim"
    class="bg-primary-dark mb-16 lg:mb-20 "
  >
    <div
      class="w-full flex flex-col justify-between items-center lg:flex-row lg:max-w-screen-xl lg:gap-[5rem] lg:items-end md:space-y-0 space-y-6 mx-auto px-6 lg:px-8"
    >
      <!-- Left Content -->
      <div
        class="w-full flex flex-col space-y-6 md:space-y-9 lg:w-4/6 py-8 md:py-12 lg:py-16"
      >
        <div class="space-y-4 md:space-y-6">
          <h1
            class="font-Lexend text-3xl sm:text-4xl lg:text-5xl text-white leading-[2.5rem] sm:leading-[3rem] lg:leading-[3.5rem]"
            v-html="headline"
          ></h1>
          <p
            class="w-full text-white text-base sm:text-lg lg:text-xl sm:w-5/6"
            v-html="description"
          ></p>
        </div>
        <ul class="space-y-3">
          <li v-for="point in points" :key="point">
            <span
              class="flex items-baseline gap-3 rounded bg-primary-light text-sm sm:text-base lg:text-lg mb-2 p-2"
            >
              <div>
                <Icon icon="fluent-emoji-high-contrast:check-mark" />
              </div>
              {{ point }}
            </span>
          </li>
        </ul>
        <NuxtLink :to="buttonLink" class="secondary-btn w-full uppercase"> {{ buttonText }} </NuxtLink>
      </div>

      <!-- Right Image -->
      <div class="w-full md:w-2/5">
        <NuxtImg class="w-full h-auto" :src="imageSrc" alt="Claim Image" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  points: {
    type: Array as () => string[],
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    required: true,
  },
});
</script>
