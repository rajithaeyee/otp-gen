import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import OtpGenerator from '../OtpGenerator.vue';

describe('HelloWorld', () => {
  it('Title renders properly', () => {
    const wrapper = mount(OtpGenerator, { props: {} })
    expect(wrapper.text()).toContain('OTP Generator')
  })
})
