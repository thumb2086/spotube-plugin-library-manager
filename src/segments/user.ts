import type {
  IUserEndpoint,
  SpotubeFullAlbumObject,
  SpotubeFullArtistObject,
  SpotubeFullPlaylistObject,
  SpotubePaginationResponseObject,
  SpotubeTrackObject,
  SpotubeUserObject,
} from "@spotube-app/plugin";

export default class UserEndpoint implements IUserEndpoint {
  me(): Promise<SpotubeUserObject> {
    throw new Error("Method not implemented.");
  }
  savedTracks(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeTrackObject>> {
    throw new Error("Method not implemented.");
  }
  savedAlbums(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullAlbumObject>> {
    throw new Error("Method not implemented.");
  }
  savedArtists(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullArtistObject>> {
    throw new Error("Method not implemented.");
  }
  savedPlaylists(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullPlaylistObject>> {
    throw new Error("Method not implemented.");
  }
}
