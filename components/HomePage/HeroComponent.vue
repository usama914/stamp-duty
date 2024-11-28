<template>
  <section
    class="flex flex-col justify-between items-center lg:gap-[5rem] lg:flex-row lg:max-w-screen-xl px-4 lg:px-8 py-8 lg:py-16 mx-auto"
  >
    <!-- Left Content -->
    <div class="w-full sm:space-y-6 lg:w-4/6 space-y-4">
      <NuxtImg class="mx-0 size-10" :src="logoSrc" alt="Logo"></NuxtImg>
      <div class="space-y-6">
        <div class="space-y-4">
          <h1
            class="font-Lexend text-3xl md:text-4xl lg:text-5xl text-primary-dark leading-[2.5rem] sm:leading-[3rem] lg:leading-[3.5rem]"
            v-html="headline"
          ></h1>
          <p
            class="text-base sm:text-lg lg:text-xl text-primary-dark"
          >
            {{ description }}
          </p>
        </div>
        <ul class="space-y-2">
          <li v-for="point in points" :key="point">
            <span
              class="flex items-baseline gap-2 text-sm sm:text-base md:text-lg rounded bg-primary-light mb-2 p-2 lg:px-8"
            >
              <div>
                <Icon icon="line-md:arrow-right" />
              </div>
              {{ point }}
            </span>
          </li>
        </ul>
        <div class="flex flex-col items-center space-y-2">
          <span class="text-primary-dark text-sm sm:text-base">
            {{ claimMessage }}
          </span>
          <NuxtLink class="primary-btn uppercase"> {{ buttonText }} </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Right Image -->
    <div
      class="w-full flex justify-center items-center bg-primary-light rounded-3xl md:w-4/6 lg:w-2/5 mt-8 lg:mt-0 p-6"
    >
      <NuxtImg
        class="w-full h-auto"
        :src="heroImageSrc"
        alt="Hero Image"
      ></NuxtImg>
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
  claimMessage: {
    type: String,
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
});
</script>
