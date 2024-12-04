<template>
  <div>
    <HeroComponent
      :logo-src="heroLogoSrc"
      :headline="heroHeadline"
      :description="heroDescription"
      :points="heroPoints"
      :button-text="heroButtonText"
      :button-link="heroButtonLink"
      :hero-image-src="heroImageSrc"
    />
    <CanIMakeClaim
      :headline="claimHeadline"
      :description="claimDescription"
      :points="claimPoints"
      :button-text="claimButtonText"
      :button-link="heroButtonLink"
      :image-src="claimImageSrc"
    />
    <FAQPage
      :title="faqTitle"
      :button-text="faqButtonText"
      :button-link="heroButtonLink"
      :description="faqDescription"
    />
    <TestamonialComponent
      :headline="testimonialHeadline"
      :testimonials="testimonials"
      :button-text="testimonialButtonText"
      :button-link="heroButtonLink"
    />
  </div>
</template>

<script setup lang="ts">
import HeroComponent from "~/components/HomePage/HeroComponent.vue";
import CanIMakeClaim from "~/components/HomePage/CanIMakeClaim.vue";
import FAQPage from "~/components/HomePage/FAQPage.vue";
import TestamonialComponent from "~/components/HomePage/TestamonialComponent.vue";
import { useRoute } from "vue-router";
import { useUtmTracking } from "~/composables/useUtmTracking";

const { $seo } = useNuxtApp();
const route = useRoute();
const { saveUtmParams, withUtmParams } = useUtmTracking();

// Update heroButtonLink to include UTM params
const heroButtonLink = computed(() => withUtmParams("/booking-form"));

// Save UTM parameters when landing on the homepage
onMounted(() => {
  saveUtmParams(route);
});

// Data for Hero Component
const heroLogoSrc = "/images/home-logo.png";
const heroHeadline = `
  Did you know that <strong>30%</strong> of
  <strong>homebuyers</strong> unknowingly
  <strong>
    overpay Stamp Duty Land 
    Tax</strong>
  (SDLT)?
`;
const heroDescription =
  "HMRC estimates 30% of homebuyers overpay, totalling £2 billion annually. Use our online system to find out if you have a claim.";
const heroPoints = [
  "Our average claim value is in excess of £16,000.",
  "We can get refunds within an average of 6 weeks.",
  "We have a 100% success rate on cases we submit to HMRC.",
  "We provide you with dedicated case handler from start to finish. No call centres",
];
const heroButtonText = "Check if I can claim";
const heroImageSrc = "/images/hero-img.png";

// Data for CanIMakeClaim Component
const claimHeadline = "Can I make a claim?";
const claimDescription = `
  If you can answer yes to the questions below you could be entitled
  to a refund:
`;
const claimPoints = [
  "The property was uninhabitable due to damp, mould, roof leaks, cracks, asbestos, structural issues, infestation, Japanese Knotweed, cavity wall tie issues or subsidence",
  "You can provide receipts, invoices or quotes for the cost of the work to repair the property",
  "You can provide pictures of the property evidencing the issues at the point of purchase",
  "Or you purchased the property through Probate",
];
const claimButtonText = "Check if I can claim";
const claimImageSrc = "/images/claim-refund.png";

// Data for FAQ component
const faqTitle = "FAQs";
const faqDescription =
  "Below are some of the most common questions asked about Stamp Duty Land Tax (SDLT) and the process of making a claim.";
const faqButtonText = "Check if I can claim";

// Data for testimonials
const testimonialHeadline = "Customer Reviews";
const testimonialButtonText = "Check if I can claim";
const testimonials = [
  {
    name: "Gary Toombs",
    message:
      "The stamp duty refund process was straightforward and efficient. The team helped me understand my eligibility and before I knew it, my claim was processed. Their customer service was excellent, always ready to answer any questions I had.",
  },
  {
    name: "Noris Ndibu",
    message:
      "I'm so pleased I checked my stamp duty claim eligibility. The team processed my refund much faster than expected - just 6 weeks! Using their service instead of trying to claim directly with HMRC saved me time and hassle. Professional service throughout.",
  },
  {
    name: "Avni Khatri",
    message:
      "I had no idea I could claim back stamp duty on my property purchase. The team was incredibly helpful, kept me updated throughout the process, and handled all the HMRC paperwork. Delighted to receive my refund - thank you!",
  },
];

// SEO
const title = "Stamp Duty Refund - Claim Your Overpaid Stamp Duty";
const description =
  "Claim your overpaid Stamp Duty Land Tax (SDLT) with our online system. Find out if you qualify for a refund in less than 3 minutes.";
$seo(title, description);
</script>
