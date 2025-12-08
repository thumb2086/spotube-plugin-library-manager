import type {
  ISearchEndpoint,
  SpotubeFullAlbumObject,
  SpotubeFullArtistObject,
  SpotubeFullPlaylistObject,
  SpotubePaginationResponseObject,
  SpotubeSearchResponseObject,
  SpotubeTrackObject,
} from "@spotube-app/plugin";

export default class SearchEndpoint implements ISearchEndpoint {
  chips(): string[] {
    throw new Error("Method not implemented.");
  }
  all(query: string): Promise<SpotubeSearchResponseObject> {
    throw new Error("Method not implemented.");
  }
  tracks(
    query: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeTrackObject>> {
    throw new Error("Method not implemented.");
  }
  albums(
    query: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullAlbumObject>> {
    throw new Error("Method not implemented.");
  }
  artists(
    query: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullArtistObject>> {
    throw new Error("Method not implemented.");
  }
  playlists(
    query: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullPlaylistObject>> {
    throw new Error("Method not implemented.");
  }
}
