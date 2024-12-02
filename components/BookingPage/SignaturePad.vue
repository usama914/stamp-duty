
// using https://vue3-signature-pad.vercel.app/
<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { VueSignaturePad } from '@selemondev/vue3-signature-pad'
import type { CanvasSignatureRef } from '@selemondev/vue3-signature-pad'

const options = ref({
  penColor: 'rgb(0,0,0)',
  backgroundColor: 'rgb(255, 255, 255)',
  maxWidth: 1,
  minWidth: 1,
})

// const colors = [
//   {
//     color: 'rgb(51, 133, 255)',
//   },
//   {
//     color: 'rgb(85, 255, 51)',
//   },
//   {
//     color: 'rgb(255, 85, 51)',
//   },
// ]
const signature = ref<CanvasSignatureRef>()

// function handleUndo() {
//   return signature.value?.undo && signature.value?.undo()
// }

function handleClearCanvas() {
  return signature.value?.clearCanvas && signature.value?.clearCanvas()
}

function handleSaveSignature() {
  return signature.value?.saveSignature && alert(signature.value?.saveSignature())
}

</script>

<template>
  <div class='flex flex-col space-y-2'>
    <div class='p-4 bg-white rounded-md'>
      <div class='relative bg-gray-100 rounded-md'>
        <VueSignaturePad
          ref='signature'
          height='400px'
          width='800px'
          :max-width='options.maxWidth'
          :min-width='options.minWidth'
          :options='{
            penColor: options.penColor,
            backgroundColor: options.backgroundColor,
          }'
        />

        <div class='absolute flex flex-col space-y-2 top-3 right-4'>
          <button
            type='button'
            class='grid p-2 bg-white rounded-md shadow-md place-items-center'
   
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='#000'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991'
              />
            </svg>
          </button>
          <button
            type='button'
            class='grid p-2 bg-white rounded-md shadow-md place-items-center'
            @click='handleClearCanvas'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 14 14'
            >
              <path
                fill='none'
                stroke='#000'
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1.002 1.002 0 0 0 .77-.37a1.001 1.001 0 0 0 .21-.83zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1zm-3 8V11'
              />
            </svg>
          </button>
          <button
            type='button'
            class='grid p-2 bg-white rounded-md shadow-md place-items-center'
            @click='handleSaveSignature'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path
                fill='#000'
                d='M21 7v14H3V3h14zm-2 .85L16.15 5H5v14h14zM12 18q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6zM5 7.85V19V5z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- <div class='flex items-center justify-between w-full p-3 bg-white rounded-md'>
      <div>
        <h1 class='text-lg'>Choose pen color</h1>
      </div>
      <div class='flex items-center space-x-4'>
        <div v-for='color in colors' :key='color.color'>
          <button
            type='button'
            :style='{ background: color.color }'
            class='grid w-8 h-8 rounded-full place-items-center'
            @click='options.penColor = color.color'
          >
            <p v-if='options.penColor === color.color'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 48 48'
              >
                <path
                  fill='#ffffff'
                  fill-rule='evenodd'
                  stroke='#ffffff'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='4'
                  d='m4 24l5-5l10 10L39 9l5 5l-25 25z'
                  clip-rule='evenodd'
                />
              </svg>
            </p>
          </button>
        </div>
      </div>
    </div>
    <div class='flex items-center justify-between w-full p-3 bg-white rounded-md'>
      <div>
        <h1 class='text-lg'>Choose maximum pen line thickness</h1>
      </div>
      <div class='flex items-center space-x-4'>
        <input v-model='options.maxWidth' type='range' :min='0' :max='10' />
        <p>{{ options.maxWidth }}</p>
      </div>
    </div>
    <div class='flex items-center justify-between w-full p-3 bg-white rounded-md'>
      <div>
        <h1 class='text-lg'>Choose minimum pen line thickness</h1>
      </div>
      <div class='flex items-center space-x-4'>
        <input v-model='options.minWidth' type='range' :min='0' :max='10' />
        <p>{{ options.minWidth }}</p>
      </div>
    </div> -->
  </div>
</template>