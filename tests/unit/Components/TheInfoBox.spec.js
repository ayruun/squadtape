import { shallowMount } from '@vue/test-utils'
import TheInfoBox from '@/components/TheInfoBox.vue'

describe('TheInfoBox.vue', () => {
  const factory = options => {
    return shallowMount(TheInfoBox, {
      propsData: {
        id: "id string"
      },
      ...options
    });
  };

  describe('Props', () => {
    it('has five props', () => {
      const wrapper = factory();
      expect(Object.keys(wrapper.vm.$options.props).length).toBe(5);
    })
    test('name', () => {
      const name = factory().vm.$options.props.name;
      expect(name.type).toBe(String);
      expect(name.default).toMatch("");
    })
    test('description', () => {
      const description = factory().vm.$options.props.description;
      expect(description.type).toBe(String);
      expect(description.default).toMatch("");
    })
    test('duration', () => {
      const duration = factory().vm.$options.props.duration;
      expect(duration.type).toBe(String);
      expect(duration.default).toMatch("");
    })
    test('id', () => {
      const id = factory().vm.$options.props.id;
      expect(id.type).toBe(String);
      expect(id.required).toBe(true);
    })
    test('total', () => {
      const total = factory().vm.$options.props.total;
      expect(total.type).toBe(Number);
      expect(total.default).toBe(0);
    })
  })
})
