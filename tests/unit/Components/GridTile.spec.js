import { shallowMount } from '@vue/test-utils'
import GridTile from '@/components/GridTile.vue'

describe('GridTile.vue', () => {
  describe('Props', () => {
    it('has one prop', () => {
      const wrapper = shallowMount(GridTile);
      expect(Object.keys(wrapper.vm.$options.props).length).toBe(1);
    })
    test('clickable', () => {
      const clickable = shallowMount(GridTile).vm.$options.props.clickable;
      expect(clickable.type).toBe(Boolean);
      expect(clickable.default).toBe(true);
    })
  })
})
