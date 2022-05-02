import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import ValidationForms from '@/views/forms/ValidationForms'


Vue.use(CoreuiVue)

describe('ValidationForms.vue', () => {
  it('has a name', () => {
    expect(ValidationForms.name).toMatch('ValidationForms')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(ValidationForms)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(ValidationForms)
    expect(wrapper.element).toMatchSnapshot()
  })
})
