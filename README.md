# OTP Generator

Generate secure one-time passwords (OTP) for your applications with ease using this versatile OTP generator package. Whether you need numeric, alphabetic, or special character OTPs, this package has you covered. It offers various customization options to tailor the OTP generation process according to your specific requirements.

## Installation

Install the package via npm:

```bash
npm install otp-gen-next
```

## Features
Generate numeric, alphabetic, or alphanumeric OTPs
Include uppercase alphabetic characters and special characters if needed
Exclude similar characters like '1' and 'l', '0' and 'O' for enhanced security
Exclude ambiguous characters like '{}' or '[]' that can be confused
Add custom characters to the OTP generation process
Flexible and easy-to-use API

## Usage

### commonJS
```js
const { generateOTP } = require('otp-generator-next')

generateOTP(6, { upperCaseAlphabets: false, specialChars: false });

```
### TypeScript
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