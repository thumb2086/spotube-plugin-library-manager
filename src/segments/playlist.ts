import type { IPlaylistEndpoint, SpotubeFullPlaylistObject, SpotubePaginationResponseObject, SpotubeTrackObject } from "@spotube-app/plugin";

export default class PlaylistEndpoint implements IPlaylistEndpoint {
  getPlaylist(id: string): Promise<SpotubeFullPlaylistObject> {
    throw new Error("Method not implemented.");
  }
  tracks(id: string, offset?: number, limit?: number): Promise<SpotubePaginationResponseObject<SpotubeTrackObject>> {
    throw new Error("Method not implemented.");
  }
  createPlaylist(userId: string, name: string, description?: string, public_?: boolean, collaborative?: boolean): Promise<SpotubeFullPlaylistObject | null> {
    throw new Error("Method not implemented.");
  }
  updatePlaylist(playlistId: string, name?: string, description?: string, public_?: boolean, collaborative?: boolean): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deletePlaylist(playlistId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  addTracks(playlistId: string, trackIds: string[], position?: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  removeTracks(playlistId: string, trackIds: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  save(playlistId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  unsave(playlistId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  

}