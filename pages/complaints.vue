<template>
  <div class="flex flex-col lg:max-w-screen-xl px-6 lg:px-8 py-8 lg:py-16 mx-auto">
    <h1 class="text-3xl font-bold text-primary-dark mb-6 text-center">Complaints Policy</h1>
    
    <div class="prose prose-lg max-w-none">
      <!-- Introduction -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Our Aim</h2>
        <p class="mb-4">
          XIOTS Ltd t/a Stamp Duty Refund is committed to providing a quality service and working in an open and 
          accountable way that builds trust and respect. One of the ways in which we can continue to improve our 
          service is by listening and responding to the views of our clients and stakeholders, and in particular 
          by responding positively to complaints, and by putting mistakes right.
        </p>

        <p class="mb-4">Therefore we aim to ensure that:</p>
        <ul class="list-disc ml-6 mb-4">
          <li>Making a compliment or complaint is as easy as possible</li>
          <li>We welcome compliments, feedback and suggestions</li>
          <li>We treat a complaint as a clear expression of dissatisfaction with our service which calls for an immediate response</li>
          <li>We deal with it promptly, politely and, when appropriate, confidentially</li>
          <li>We respond appropriately - with an explanation, apology, or information on action taken</li>
          <li>We learn from complaints and use them to improve our service</li>
        </ul>
      </div>

      <!-- Definitions -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Definitions</h2>
        <p class="mb-4">
          A <span class="font-bold">compliment</span> is an expression of satisfaction about the standard of service we provide.
        </p>
        <p class="mb-4">
          A <span class="font-bold">complaint</span> is defined as any expression of dissatisfaction, however expressed. 
          This includes complaints made face to face, via phone, in writing, via email or any other method.
        </p>
      </div>

      <!-- Complaints Procedure -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Complaints Procedure</h2>
        
        <h3 class="text-xl font-bold mb-3">Stage 1 - Informal Resolution</h3>
        <p class="mb-4">
          In the first instance, we will try to resolve concerns informally. If this isn't possible, 
          the formal complaints procedure will be followed.
        </p>

        <h3 class="text-xl font-bold mb-3">Stage 2 - Formal Complaint</h3>
        <p class="mb-4">
          Formal complaints can be submitted:
        </p>
        <ul class="list-disc ml-6 mb-4">
          <li>By email to: <a href="mailto:complaints@stampduty-refund.co.uk" class="text-primary-dark hover:underline">complaints@stampduty-refund.co.uk</a></li>
          <li>By post to: Suite 1M Lions Drive, Shadsworth Business Park, Blackburn, BB1 2QS</li>
        </ul>
        <p class="mb-4">
          We will acknowledge your complaint within one week and aim to provide a full response 
          within four weeks.
        </p>

        <h3 class="text-xl font-bold mb-3">Stage 3 - Appeal</h3>
        <p class="mb-4">
          If you're not satisfied with our response, the complaint will be escalated to our board of 
          directors for final review and response within four weeks.
        </p>
      </div>

      <!-- Confidentiality -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Confidentiality</h2>
        <p class="mb-4">
          We will maintain confidentiality wherever possible. If this isn't possible due to the nature 
          of the complaint, we will explain this to you.
        </p>
      </div>

      <!-- Contact Information -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
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
        <p>This Complaints Policy was last updated on {{ currentDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $seo } = useNuxtApp()
$seo({
  title: 'Complaints Policy',
  description: 'How to make a complaint about the Stamp Duty Refund website.'
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
