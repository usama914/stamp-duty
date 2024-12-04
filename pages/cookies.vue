<template>
  <div class="flex flex-col lg:max-w-screen-xl px-6 lg:px-8 py-8 lg:py-16 mx-auto">
    <h1 class="text-3xl font-bold text-primary-dark mb-6 text-center">Cookie Policy</h1>
    
    <div class="prose prose-lg max-w-none">
      <!-- Scope Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Scope of This Policy</h2>
        <p class="mb-4">
          XIOTS Ltd t/a Stamp Duty Refund (we or us or our) uses cookies when you visit our website, 
          https://stampduty-refund.co.uk/, (the Website) to help customise the Website and improve your experience.
        </p>
        <p class="mb-4">
          When you visit the Website, and before we place cookies on your computer, you will be presented with a 
          message bar requesting your consent to set those cookies. By giving your consent, you are enabling us 
          to provide a better experience and service. You may deny consent to the placing of cookies; however, 
          certain features of the Website may not function fully or as intended.
        </p>
        <p class="mb-4">
          This Cookie Policy should be read alongside our Privacy Policy, which can be found at: 
          <a href="https://stampduty-refund.co.uk/privacy" class="text-primary-dark hover:underline">
            https://stampduty-refund.co.uk/privacy
          </a>.
        </p>
      </div>

      <!-- What Are Cookies Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">What Are Cookies?</h2>
        <p class="mb-4">
          A cookie is a small text file placed on your computer by this Website when you visit certain parts 
          of the Website and/or when you use certain features of the Website.
        </p>
        <p class="mb-4">
          Cookies do not usually contain personally identifying information, but personal information we store 
          about you may be linked to information stored in and obtained from cookies.
        </p>
      </div>

      <!-- Types of Cookies Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-bold">Strictly Necessary Cookies</h3>
            <p>Required for the operation of the Website, including secure login and essential functionality.</p>
          </div>
          
          <div>
            <h3 class="font-bold">Analytical/Performance Cookies</h3>
            <p>Help us improve our Website by collecting and reporting information on how you use it.</p>
          </div>
          
          <div>
            <h3 class="font-bold">Functionality Cookies</h3>
            <p>Remember your preferences and enable personalized features.</p>
          </div>
          
          <div>
            <h3 class="font-bold">Targeting Cookies</h3>
            <p>Record your visit, pages viewed, and links followed to make our content more relevant to you.</p>
          </div>
        </div>
      </div>

      <!-- Cookie Control Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">How to Control Your Cookies</h2>
        <p class="mb-4">
          You can enable or disable cookies in your internet browser. Most browsers accept cookies by default, 
          but you can modify your settings to decline them if you prefer.
        </p>
        <p class="mb-4">
          For more information on cookies, including how to disable them, please visit 
          <a href="https://aboutcookies.org" class="text-primary-dark hover:underline">aboutcookies.org</a>.
        </p>
      </div>

      <!-- Contact Information -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Contact Details</h2>
        <p class="mb-4">
          The Website is owned by XIOTS Ltd t/a Stamp Duty Refund, incorporated in England and Wales with 
          registered number 13719085.
        </p>
        <div class="ml-4">
          <p class="font-bold">Registered Office:</p>
          <p>Suite 1M Lions Drive</p>
          <p>Shadsworth Business Park</p>
          <p>Blackburn</p>
          <p>BB1 2QS</p>
          <p class="mt-2">Website: <a href="https://stampduty-refund.co.uk" class="text-primary-dark hover:underline">stampduty-refund.co.uk</a></p>
        </div>
      </div>

      <!-- Last Updated -->
      <div class="mt-8 text-sm text-gray-600">
        <p>This Cookie Policy was last updated on {{ currentDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $seo } = useNuxtApp()
$seo({
  title: 'Cookie Policy',
  description: 'Information about the cookies used on the Stamp Duty Refund website.'
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
