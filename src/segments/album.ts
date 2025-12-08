import type {
  IAlbumEndpoint,
  SpotubeFullAlbumObject,
  SpotubePaginationResponseObject,
  SpotubeTrackObject,
} from "@spotube-app/plugin";

export default class AlbumEndpoint implements IAlbumEndpoint {
  getAlbum(id: string): Promise<SpotubeFullAlbumObject> {
    throw new Error("Method not implemented.");
  }
  tracks(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeTrackObject>> {
    throw new Error("Method not implemented.");
  }
  releases(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullAlbumObject>> {
    throw new Error("Method not implemented.");
  }
  save(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  unsave(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
