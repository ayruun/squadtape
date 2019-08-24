import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader.vue', () => {
  describe('Props', () => {
    it('has two prop', () => {
      const wrapper = shallowMount(TheHeader, {
        propsData: {
          value: "test value"
        }
      });
      expect(Object.keys(wrapper.vm.$options.props).length).toBe(2);
    })
    test('loggedIn', () => {
      const loggedIn = shallowMount(TheHeader, {
        propsData: {
          value: "test value"
        }
      }).vm.$options.props.loggedIn;
      expect(loggedIn.type).toBe(Boolean);
      expect(loggedIn.default).toBe(false);
    })
    test('value', () => {
      const value = shallowMount(TheHeader, {
        propsData: {
          value: "test value"
        }
      }).vm.$options.props.value;
      expect(value.type).toBe(String);
      expect(value.required).toBe(true);
    })
  })
})
