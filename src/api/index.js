import playlists from '@/data/playlistData.json';

export function fetchPlaylists() {
    return new Promise ((resolve) => resolve(playlists))
}