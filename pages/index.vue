<template>
  <div>
    <HeroComponent
      :logo-src="heroLogoSrc"
      :headline="heroHeadline"
      :description="heroDescription"
      :points="heroPoints"
      :claim-message="heroClaimMessage"
      :button-text="heroButtonText"
      :hero-image-src="heroImageSrc"
    />
    <CanIMakeClaim
      :headline="claimHeadline"
      :description="claimDescription"
      :points="claimPoints"
      :button-text="claimButtonText"
      :image-src="claimImageSrc"
    />
    <FAQPage :title="faqTitle" :description="faqDescription" />
  </div>
</template>

<script setup lang="ts">
import HeroComponent from "~/components/HomePage/HeroComponent.vue";
import CanIMakeClaim from "~/components/HomePage/CanIMakeClaim.vue";
import FAQPage from "~/components/HomePage/FAQPage.vue";

// ----------- components/HomePage/HeroComponent.vue

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
const heroClaimMessage =
  "Use our free claim checker to find out if you qualify for a claim";
const heroButtonText = "CHECK IF I CAN CLAIM";
const heroImageSrc = "/images/hero-img.svg";

// ----------- components/HomePage/CanIMakeClaim.vue 
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
const claimButtonText = "CHECK IF I CAN CLAIM";
const claimImageSrc = "/images/claim-refund.png";

// ----------- components/HomePage/FAQPage.vue
const faqTitle = "FAQs";
const faqDescription = `
  Below are some of the most common questions asked about Stamp Duty Land
  Tax (SDLT) <br />
  and the process of making a claim.
`;
</script>
