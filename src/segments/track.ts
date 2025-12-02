import type { ITrackEndpoint, SpotubeTrackObject } from "@spotube-app/plugin";

export default class TrackEndpoint implements ITrackEndpoint {
  getTrack(id: string): Promise<SpotubeTrackObject> {
    throw new Error("Method not implemented.");
  }
  save(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  unsave(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  radio(id: string): Promise<SpotubeTrackObject[]> {
    throw new Error("Method not implemented.");
  }
}
