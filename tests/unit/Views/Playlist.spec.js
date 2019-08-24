import { shallowMount } from '@vue/test-utils'
import Playlist from '@/views/Playlist.vue'

describe('Playlist.vue', () => {
  let playlistId = "6id5t7Oao2KXLXYf1TG4MZ";

  const factory = options => {
    return shallowMount(Playlist, {
      propsData: {
        playlistId
      },
      ...options
    });
  };

  describe('Props', () => {
    it('has one prop', () => {
      const wrapper = factory();
      expect(Object.keys(wrapper.vm.$options.props).length).toBe(1);
    })
    test('playlistId', () => {
      const playlistId = factory().vm.$options.props.playlistId;
      expect(playlistId.type).toBe(String);
      expect(playlistId.required).toBe(true);
    })
  })

  describe('methods', () => {
    test('msToTime', () => {
      const msToTime = factory().vm.msToTime;
      expect(msToTime(3000)).toMatch("00:03 min");
      expect(msToTime(300000)).toMatch("05:00 min");
      expect(msToTime(7200000)).toMatch("120:00 min");
    })
    test('togglePlay', () => {
      const wrapper = factory();
      const togglePlay = wrapper.vm.togglePlay;

      togglePlay("previewURL")
      expect(wrapper.vm.activeTrack).toMatch("previewURL");
      wrapper.vm.$nextTick(() => { expect(wrapper.vm.$refs.audio.play).toHaveBeenCalled(); });
      
      togglePlay("previewURL")
      expect(wrapper.vm.activeTrack).toBe(null);
      expect(wrapper.vm.$refs.audio.pause).toHaveBeenCalled();
    })
  })

  describe('computed', () => {
    test('totalLength', () => {
      const wrapper = factory();
      expect(wrapper.vm.totalLength).toBe("37:53 min");
      wrapper.setData({ playlist: null });
      expect(wrapper.vm.totalLength).toBe(null);
    })
  })

  describe('created', () => {
    it('pulls right playlist', () => {
      const wrapper = factory();
      expect(wrapper.vm.playlist.id).toMatch(playlistId);
    })
  })

  describe('snapshots', () => {
    it('renders', () => {
      expect(factory()).toMatchSnapshot();
    })
  })
})
