# OTP Generator

Generate secure one-time passwords (OTP) for your applications with ease using this versatile OTP generator package. Whether you need numeric, alphabetic, or special character OTPs, this package has you covered. It offers various customization options to tailor the OTP generation process according to your specific requirements.

## Features

- Generate numeric, alphabetic, or alphanumeric OTPs
- Include uppercase alphabetic characters and special characters if needed
- Exclude similar characters like '1' and 'l', '0' and 'O' for enhanced security
- Exclude ambiguous characters like '{}' or '[]' that can be confused
- Add custom characters to the OTP generation process
- Flexible and easy-to-use API

## Installation

Install the package via npm:

```bash
npm install otp-gen-next

# OTP Generator

Generate secure one-time passwords (OTP) for your applications with ease using this versatile OTP generator package. Whether you need numeric, alphabetic, or special character OTPs, this package has you covered. It offers various customization options to tailor the OTP generation process according to your specific requirements.

## Features

- Generate numeric, alphabetic, or alphanumeric OTPs
- Include uppercase alphabetic characters and special characters if needed
- Exclude similar characters like '1' and 'l', '0' and 'O' for enhanced security
- Exclude ambiguous characters like '{}' or '[]' that can be confused
- Add custom characters to the OTP generation process
- Flexible and easy-to-use API

## Installation

Install the package via npm:

```bash
npm install otp-gen-next

```

## Options

The OTP generator function `generateOTP` accepts the following options to customize the OTP generation process:

- `numeric`: When set to `true`, includes numeric characters (0-9) in the OTP. Default: `true`.
- `alphabetic`: When set to `true`, includes lowercase alphabetic characters (a-z) in the OTP. Default: `true`.
- `upperCaseAlphabets`: When set to `true`, includes uppercase alphabetic characters (A-Z) in the OTP. Default: `true`.
- `specialChars`: When set to `true`, includes special characters in the OTP (e.g., !@#$%^&*()_+-=[]{}|;:,.<>?). Default: `false`.
- `excludeSimilarCharacters`: When set to `true`, excludes similar characters like '1' and 'l', '0' and 'O' from the generated OTP to improve readability and reduce confusion. Default: `false`.
- `excludeAmbiguousCharacters`: When set to `true`, excludes ambiguous characters like '{}' or '[]' that can be confused from the generated OTP. Default: `false`.
- `customChars`: Allows you to specify additional custom characters to include in the OTP. For example, you can include language-specific characters or additional symbols. Default: `''` (empty string).

Here's an example of how to use these options:


```typescript
import { generateOTP } from 'otp-gen-next';

// Generate a 6-character OTP with custom options
const otp = generateOTP(6, { 
    numeric: true, 
    alphabetic: true, 
    upperCaseAlphabets: true, 
    specialChars: false, 
    excludeSimilarCharacters: true,
    excludeAmbiguousCharacters: true,
    customChars: ''
});

console.log('Generated OTP:', otp);

```
OR 

```javasscript

const {generateOTP} = require('otp-gen-next');

generateOTP(10, {alphabetic: false, numeric: true});

```
