import { generateOTP } from '../functions';
import { OTPOptions } from '../types';

describe('generateOTP', () => {
    test('should generate a default OTP of length 4', () => {
        const otp = generateOTP();
        expect(otp).toHaveLength(4);
        expect(otp).toMatch(/^[0-9a-zA-Z]+$/); // Default includes numbers and alphabets
    });

    test('should generate OTP with specified length', () => {
        const otp = generateOTP(6);
        expect(otp).toHaveLength(6);
    });

    test('should generate OTP with only numeric characters', () => {
        const options: Partial<OTPOptions> = { 
            numeric: true, 
            alphabetic: false, 
            upperCaseAlphabets: false,
            excludeSimilarCharacters: true
        };
        const otp = generateOTP(5, options);
        expect(otp).toHaveLength(5);
        expect(otp).toMatch(/^\d+$/);
    });

    test('should generate OTP with special characters', () => {
        const options: OTPOptions = { specialChars: true, numeric: true, alphabetic: false, upperCaseAlphabets: false, customChars: "",  excludeAmbiguousCharacters: false, excludeSimilarCharacters: false };
        const otp = generateOTP(5, options);
        expect(otp).toHaveLength(5);
        expect(otp).toMatch(/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/);
    });

    test('should exclude similar characters when option is set', () => {
        const options: OTPOptions = { excludeSimilarCharacters: true, numeric: true, alphabetic: false, upperCaseAlphabets: false, customChars: "",  excludeAmbiguousCharacters: false, specialChars: false };
        const otp = generateOTP(10, options);
        expect(otp).not.toMatch(/[0Ol1]/);
    });

    test('should exclude ambiguous characters when option is set', () => {
        const options: OTPOptions = { excludeAmbiguousCharacters: true, specialChars: true, numeric: true, alphabetic: false, upperCaseAlphabets: false, customChars: "", excludeSimilarCharacters: false };
        const otp = generateOTP(10, options);
        expect(otp).not.toMatch(/[\[\]{}()<>]/);
    });

    test('should generate OTP with custom characters', () => {
        const options: OTPOptions = { customChars: '@#$', numeric: true, alphabetic: false, upperCaseAlphabets: false,  excludeAmbiguousCharacters: false, specialChars: false, excludeSimilarCharacters: false };
        const otp = generateOTP(5, options);
        expect(otp).toHaveLength(5);
        expect(otp).toMatch(/[@#$]/);
    });
});
