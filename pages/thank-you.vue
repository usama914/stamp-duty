<template>
  <div class="flex justify-center items-center min-h-[60vh] px-4">
    <div class="max-w-2xl text-center">
      <svg
        class="w-20 h-20 mx-auto mb-0 text-primary-dark"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h1 class="text-3xl font-bold text-primary-dark mb-4">
        Thank You for Your Submission
      </h1>
      <p class="text-lg mb-4">
        We have received your information and one of our team members will get
        in touch with you shortly.
      </p>
      <p class="text-md mb-6">
        Your reference number:
        <span class="font-bold">{{ referenceNumber }}</span>
      </p>
      <NuxtLink to="/" class="text-primary-dark hover:underline">
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { $seo } = useNuxtApp();
const route = useRoute();
const referenceNumber = route.query.ref || "N/A";

// Add conversion tracking
onMounted(() => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11048283478/V1e5CKyCqPIZENbanZQp'
    });
  }
});

const title = "Thank You for Your Submission"
const description = "Thank you for submitting your information to Stamp Duty Refund."
$seo(title, description)
</script>
