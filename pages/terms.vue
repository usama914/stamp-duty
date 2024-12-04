<template>
  <div class="flex flex-col lg:max-w-screen-xl px-6 lg:px-8 py-8 lg:py-16 mx-auto">
    <h1 class="text-3xl font-bold text-primary-dark mb-6 text-center">Terms of Business</h1>
    
    <div class="prose prose-lg max-w-none">
      <!-- Introduction -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Introduction</h2>
        <p class="mb-4">
          These terms and conditions apply between you, the User of this Website (including any sub-domains, unless 
          expressly excluded by their own terms and conditions), and XIOTS Ltd t/a Stamp Duty Refund, the owner 
          and operator of this Website. Please read these terms and conditions carefully, as they affect your legal rights.
        </p>
        <p class="mb-4">
          Your agreement to comply with and be bound by these terms and conditions is deemed to occur upon your 
          first use of the Website. If you do not agree to be bound by these terms and conditions, you should 
          stop using the Website immediately.
        </p>
        <p class="mb-4">
          You must be at least 18 years of age to use this Website. By using the Website and agreeing to these 
          terms and conditions, you represent and warrant that you are at least 18 years of age.
        </p>
      </div>

      <!-- Intellectual Property -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Intellectual Property and Acceptable Use</h2>
        <p class="mb-4">
          All Content included on the Website, unless uploaded by Users, is the property of XIOTS Ltd t/a Stamp 
          Duty Refund, our affiliates or other relevant third parties.
        </p>
        <p class="mb-4">You may, for your own personal, non-commercial use only:</p>
        <ul class="list-disc ml-6 mb-4">
          <li>Retrieve, display and view the Content on a device</li>
          <li>Print one copy of the Content</li>
        </ul>
      </div>

      <!-- Prohibited Use -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Prohibited Use</h2>
        <p class="mb-4">You may not use the Website for any of the following purposes:</p>
        <ul class="list-disc ml-6 mb-4">
          <li>In any way which causes damage to the Website or interferes with any other person's use</li>
          <li>In any way which is harmful, unlawful, illegal, abusive, harassing, or threatening</li>
          <li>Making unauthorized copies of content protected by copyright</li>
        </ul>
      </div>

      <!-- Limitation of Liability -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Limitation of Liability</h2>
        <p class="mb-4">
          Nothing in these terms and conditions will limit or exclude our or your liability for death or personal 
          injury resulting from negligence or fraud.
        </p>
        <p class="mb-4">
          To the maximum extent permitted by law, XIOTS Ltd t/a Stamp Duty Refund accepts no liability for any:
        </p>
        <ul class="list-disc ml-6 mb-4">
          <li>Business losses, such as loss of profits or commercial opportunities</li>
          <li>Loss or corruption of any data, database or software</li>
          <li>Any special, indirect or consequential loss or damage</li>
        </ul>
      </div>

      <!-- Company Details -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Company Details</h2>
        <div class="ml-4">
          <p class="mb-2">
            XIOTS Ltd t/a Stamp Duty Refund is a company incorporated in England and Wales with registered 
            number 13719085.
          </p>
          <p class="font-bold mt-4">Registered Office:</p>
          <p>Suite 1M Lions Drive</p>
          <p>Shadsworth Business Park</p>
          <p>Blackburn</p>
          <p>BB1 2QS</p>
          <p class="mt-2">Website: <a href="https://stampduty-refund.co.uk" class="text-primary-dark hover:underline">stampduty-refund.co.uk</a></p>
        </div>
      </div>

      <!-- Last Updated -->
      <div class="mt-8 text-sm text-gray-600">
        <p>These Terms of Business were last updated on {{ currentDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $seo } = useNuxtApp()
$seo({
  title: 'Terms of Business',
  description: 'Terms and conditions for using the Stamp Duty Refund website.'
});

const currentDate = new Date().toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
</script>

<style>
.prose {
  max-width: none;
}
</style>
