<template>
    <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">OTP Generator</h2>
        <p class="mt-2 text-center text-sm">
            <i class="p-2 bg-gray-600 text-white mr-2">otp-gen-next</i> is yet another <i>npm package</i> to Generate OTP codes, and random passwords with custom options.
        </p>
    </div>
    <div class="flex flex-col justify-center items-center p-10">
        <div class="flex flex-col">
            <div class="mt-4">
                <div class="rounded-md shadow-sm mb-2">
                    <label for="length" class="block text-sm font-medium text-gray-700 mb-2">OTP Length</label>
                    <input v-model.number="otpLength" type="number" min="4" max="12"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label class="flex">
                        <input v-model="numeric" type="checkbox"
                            class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                        <span class="ml-2 text-sm text-gray-700">Include Numeric</span>
                    </label>
                </div>
                <div>
                    <label class="flex">
                        <input v-model="alphabetic" type="checkbox"
                            class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                        <span class="ml-2 text-sm text-gray-700">Include Alphabets</span>
                    </label>
                </div>
                <div>
                    <label class="flex">
                        <input v-model="upperCaseAlphabets" type="checkbox"
                            class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                        <span class="ml-2 text-sm text-gray-700">Include Uppercase Alphabets</span>
                    </label>
                </div>
                <div>
                    <label class="flex">
                        <input v-model="specialChars" type="checkbox"
                            class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                        <span class="ml-2 text-sm text-gray-700">Include Special Characters</span>
                    </label>
                </div>
                <div>
                    <label class="flex">
                        <input v-model="excludeSimilarCharacters" type="checkbox"
                            class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                        <span class="ml-2 text-sm text-gray-700">Exclude Similar Characters</span>
                    </label>
                </div>
                <div>
                    <label class="flex">
                        <input v-model="excludeAmbiguousCharacters" type="checkbox"
                            class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                        <span class="ml-2 text-sm text-gray-700">Exclude Ambiguous Characters</span>
                    </label>
                </div>
                <div class="mt-4">
                    <label for="customChars" class="block text-sm font-medium text-gray-700">Custom Characters</label>
                    <input v-model="customChars" type="text" placeholder="eg:local language letters(å你好)"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
            </div>
            <div class="mt-6 flex">
                <button @click="generate"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Generate OTP
                </button>
            </div>
            <div v-if="otp" class="mt-4 text-center">
                <p class="text-lg font-semibold">Your OTP:</p>
                <p class="text-2xl font-bold text-indigo-600">{{ otp }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { generateOTP } from 'otp-gen-next';

const otpLength = ref<number>(6);
const otp = ref<string>('');
const numeric = ref<boolean>(true);
const alphabetic = ref<boolean>(true);
const upperCaseAlphabets = ref<boolean>(true);
const specialChars = ref<boolean>(false);
const excludeSimilarCharacters = ref<boolean>(true);
const excludeAmbiguousCharacters = ref<boolean>(true);
const customChars = ref<string>('');

const isDefault = computed(()=>{
    return (!numeric.value && !alphabetic.value && !upperCaseAlphabets.value && !specialChars.value && !excludeSimilarCharacters.value && !excludeAmbiguousCharacters.value && !customChars.value)
})
const generate = () => {
    if (isDefault.value) {
        otp.value = generateOTP(otpLength.value);
        return;
    }
    otp.value = generateOTP(otpLength.value, {
        numeric: numeric.value,
        alphabetic: alphabetic.value,
        upperCaseAlphabets: upperCaseAlphabets.value,
        specialChars: specialChars.value,
        excludeSimilarCharacters: excludeSimilarCharacters.value,
        excludeAmbiguousCharacters: excludeAmbiguousCharacters.value,
        customChars: customChars.value,
    });
};
</script>