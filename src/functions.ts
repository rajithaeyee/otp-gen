import { OTPOptions } from './types';

export function generateOTP(length: number = 4, options?: Partial<OTPOptions>): string {
    const defaults: OTPOptions = {
        numeric: true,
        alphabetic: true,
        upperCaseAlphabets: true,
        specialChars: false,
        excludeSimilarCharacters: false,
        excludeAmbiguousCharacters: false,
        customChars: ''
    };

    const mergedOptions: OTPOptions = { ...defaults, ...options };

    let chars = '';
    if (mergedOptions.numeric) chars += '0123456789';
    if (mergedOptions.alphabetic) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (mergedOptions.upperCaseAlphabets) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (mergedOptions.specialChars) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (mergedOptions.customChars) chars += mergedOptions.customChars;

    // Exclude similar characters like '1' and 'l', '0' and 'O'
    if (mergedOptions.excludeSimilarCharacters) {
        chars = chars.replace(/[0Ol1]/g, '');
    }

    // Exclude ambiguous characters like '{}' or '[]' that can be confused
    if (mergedOptions.excludeAmbiguousCharacters) {
        chars = chars.replace(/[\[\]{}()<>]/g, '');
    }

    let otp = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        otp += chars[randomIndex];
    }

    return otp;
}