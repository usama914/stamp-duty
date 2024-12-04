<template>
  <!-- Main section with hero content and image -->
  <section
    class="flex flex-col lg:max-w-screen-xl px-6 lg:px-8 py-10 lg:py-16 mx-auto"
  >
    <!-- Top content wrapper -->
    <div
      class="flex flex-col lg:flex-row lg:gap-[5rem] justify-between items-center"
    >
      <!-- Left Content -->
      <div class="w-full sm:space-y-6 lg:w-4/6 space-y-2">
        <div class="space-y-6">
          <div class="space-y-6">
            <h1
              class="font-Lexend text-3xl md:text-4xl lg:text-5xl text-primary-dark leading-[2rem] sm:leading-[2.5rem] lg:leading-[3.0rem]"
              v-html="headline"
            ></h1>
            <p class="text-base sm:text-lg lg:text-xl text-primary-dark">
              {{ description }}
            </p>
          </div>
          <ul class="space-y-2">
            <li v-for="point in points" :key="point">
              <span
                class="flex items-baseline gap-1 text-base sm:text-base md:text-lg rounded bg-primary-light mb-2 p-1 lg:px-8"
              >
                <div>
                  <Icon
                    icon="line-md:arrow-right"
                    style="font-size: 1.4rem; padding-top: 8px"
                  />
                </div>
                {{ point }}
              </span>
            </li>
          </ul>
          <div class="flex flex-col items-center space-y-1">
            <NuxtLink :to="buttonLink" class="primary-btn uppercase">
              {{ buttonText }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Right Image -->
      <div
        class="w-full flex justify-center items-center md:w-4/6 lg:w-2/5 mt-8 lg:mt-0"
      >
        <NuxtImg
          class="w-auto h-80 object-cover rounded-lg"
          :src="heroImageSrc"
          alt="Hero Image"
        ></NuxtImg>
      </div>
    </div>

    <!-- Features Section - Now below the image -->
    <div
      class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-8"
    >
      <div
        class="flex items-center space-x-2 text-primary-dark bg-gray-100 rounded-lg p-2"
      >
        <Icon icon="ph:star-fill" class="text-primary" />
        <span class="text-sm">Claims often settled in weeks</span>
      </div>
      <div
        class="flex items-center space-x-2 text-primary-dark bg-gray-100 rounded-lg p-2"
      >
        <Icon icon="ph:star-fill" class="text-primary" />
        <span class="text-sm">Simple and easy process</span>
      </div>
      <div
        class="flex items-center space-x-2 text-primary-dark bg-gray-100 rounded-lg p-2"
      >
        <Icon icon="ph:star-fill" class="text-primary" />
        <span class="text-sm">Average claim £16,000</span>
      </div>
      <div
        class="flex items-center space-x-2 text-primary-dark bg-gray-100 rounded-lg p-2"
      >
        <Icon icon="ph:star-fill" class="text-primary" />
        <span class="text-sm">Dedicated Claims Handler</span>
      </div>
      <div
        class="flex items-center space-x-2 text-primary-dark bg-gray-100 rounded-lg p-2"
      >
        <Icon icon="ph:star-fill" class="text-primary" />
        <span class="text-sm">25+ years experience</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  logoSrc: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  points: {
    type: Array as PropType<string[]>,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  heroImageSrc: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    required: true,
  },
});
</script>
