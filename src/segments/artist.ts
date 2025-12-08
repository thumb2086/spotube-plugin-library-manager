import type {
  IArtistEndpoint,
  SpotubeFullAlbumObject,
  SpotubeFullArtistObject,
  SpotubePaginationResponseObject,
  SpotubeTrackObject,
} from "@spotube-app/plugin";

export default class ArtistEndpoint implements IArtistEndpoint {
  getArtist(id: string): Promise<SpotubeFullArtistObject> {
    throw new Error("Method not implemented.");
  }
  topTracks(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeTrackObject>> {
    throw new Error("Method not implemented.");
  }
  albums(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullAlbumObject>> {
    throw new Error("Method not implemented.");
  }
  related(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullArtistObject>> {
    throw new Error("Method not implemented.");
  }
  save(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  unsave(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
