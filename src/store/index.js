import Vue from 'vue';
import Vuex from 'vuex';
import { fetchPlaylists } from '@/api';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    strict: debug,
    state: { playlists: [] },
    mutations: {
        SET_PLAYLISTS(state, payload) {
            state.playlists = payload;
        }
    },
    actions: {
        fetchPlaylists({ commit }) {
            fetchPlaylists().then(playlists => {
                commit('SET_PLAYLISTS', playlists)
            })
        }
    },
    getters: {
        getPlaylistById: (state) => (id) => {
            return state.playlists.find(playlist => playlist.id = id);
        }
    }
})