import AudioSourceEndpoint from './segments/audio_source.js'
import AuthEndpoint from './segments/auth.js'
import AlbumEndpoint from "./segments/album.js"
import ArtistEndpoint from "./segments/artist.js"
import BrowseEndpoint from "./segments/browse.js"
import PlaylistEndpoint from './segments/playlist.js'
import SearchEndpoint from './segments/search.js'
import TrackEndpoint from './segments/track.js'
import UserEndpoint from './segments/user.js'
import CorePlugin from './segments/core.js'
import type { IPlugin } from "@spotube-app/plugin"

export default class TemplateMetadataProviderPlugin implements IPlugin {
  audioSource: AudioSourceEndpoint;
  auth: AuthEndpoint;
  album: AlbumEndpoint;
  artist: ArtistEndpoint;
  browse: BrowseEndpoint;
  playlist: PlaylistEndpoint;
  search: SearchEndpoint;
  track: TrackEndpoint;
  user: UserEndpoint;
  core: CorePlugin;
  
  constructor (){    
    this.auth = new AuthEndpoint()
    this.audioSource = new AudioSourceEndpoint()
    this.album = new AlbumEndpoint()
    this.artist = new ArtistEndpoint()
    this.browse = new BrowseEndpoint()
    this.core = new CorePlugin()
    this.playlist = new PlaylistEndpoint()
    this.search = new SearchEndpoint()
    this.track = new TrackEndpoint()
    this.user = new UserEndpoint()
  }
}