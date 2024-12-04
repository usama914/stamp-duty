<template>
  <div class="flex flex-col lg:max-w-screen-xl px-6 lg:px-8 py-8 lg:py-16 mx-auto">
    <h1 class="text-3xl font-bold text-primary-dark mb-6 text-center">Privacy Policy</h1>
    
    <div class="prose prose-lg max-w-none">
      <!-- Introduction -->
      <p class="mb-4">
        This Privacy Policy applies between you, the User of this Website, and XIOTS Ltd t/a Stamp Duty Refund, 
        the owner and provider of this Website. We take the privacy of your information very seriously. 
        This Privacy Policy applies to our use of any and all Data collected by us or provided by you in relation 
        to your use of the Website.
      </p>

      <p class="mb-6">
        This Privacy Policy should be read alongside, and in addition to, our Terms and Conditions, which can be 
        found at: <a href="https://stampduty-refund.co.uk/terms" class="text-primary-dark hover:underline">
        https://stampduty-refund.co.uk/terms</a>.
      </p>

      <!-- Definitions Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Definitions and Interpretation</h2>
        <p class="mb-4">In this Privacy Policy, the following definitions are used:</p>
        
        <div class="ml-4 space-y-3">
          <p><span class="font-bold">Data:</span> collectively all information that you submit to XIOTS Ltd via the Website.</p>
          
          <p><span class="font-bold">Cookies:</span> small text files placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the Website.</p>
          
          <p><span class="font-bold">Data Protection Laws:</span> any applicable law relating to the processing of personal Data, including but not limited to the GDPR.</p>
          
          <p><span class="font-bold">GDPR:</span> the UK General Data Protection Regulation.</p>
          
          <p><span class="font-bold">XIOTS Ltd, we or us:</span> XIOTS Ltd t/a Stamp Duty Refund, registered in England and Wales under company number: 13719085.</p>
          
          <p><span class="font-bold">Website:</span> the website that you are currently using, stampduty-refund.co.uk, and any sub-domains of this site.</p>
        </div>
      </div>

      <!-- Data Collection Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Data We Collect</h2>
        <p class="mb-4">We may collect the following Data, which includes personal Data, from you:</p>
        <ul class="list-disc ml-6 mb-4">
          <li>Name</li>
          <li>Contact information including email address and telephone numbers</li>
          <li>Demographic information such as postcode</li>
          <li>Financial information such as property details and transaction information</li>
          <li>IP address (automatically collected)</li>
          <li>Web browser type and version (automatically collected)</li>
          <li>Operating system (automatically collected)</li>
        </ul>
      </div>

      <!-- Data Usage Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">How We Use Your Data</h2>
        <p class="mb-4">We use your Data for the following purposes:</p>
        <ul class="list-disc ml-6 mb-4">
          <li>Processing your stamp duty refund claim</li>
          <li>Internal record keeping</li>
          <li>Improvement of our services</li>
          <li>Sending you information about our services</li>
          <li>Contact for market research purposes</li>
        </ul>
      </div>

      <!-- Data Security Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Keeping Your Data Secure</h2>
        <p class="mb-4">
          We are committed to ensuring that your information is secure. To prevent unauthorised access or disclosure,
          we have put in place suitable physical, electronic and managerial procedures to safeguard and secure
          the information we collect online.
        </p>
      </div>

      <!-- Your Rights Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Your Rights</h2>
        <p class="mb-4">You have the following rights in relation to your Data:</p>
        <ul class="list-disc ml-6 mb-4">
          <li>Right to access your Data</li>
          <li>Right to correct any incorrect Data</li>
          <li>Right to request deletion of your Data</li>
          <li>Right to restrict our use of your Data</li>
          <li>Right to data portability</li>
          <li>Right to object to our use of your Data</li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
        <p class="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <div class="ml-4">
          <p class="font-bold">XIOTS Ltd t/a Stamp Duty Refund</p>
          <p>Suite 1M Lions Drive</p>
          <p>Shadsworth Business Park</p>
          <p>Blackburn</p>
          <p>BB1 2QS</p>
          <p class="mt-2">Website: <a href="https://stampduty-refund.co.uk" class="text-primary-dark hover:underline">stampduty-refund.co.uk</a></p>
        </div>
      </div>

      <!-- Last Updated -->
      <div class="mt-8 text-sm text-gray-600">
        <p>This Privacy Policy was last updated on {{ currentDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
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
