import type {
  IAudioSourceEndpoint,
  SpotubeAudioSourceContainerPreset,
  SpotubeAudioSourceMatchObject,
  SpotubeAudioSourceStreamObject,
  SpotubeTrackObject,
} from "@spotube-app/plugin";

export default class AudioSourceEndpoint implements IAudioSourceEndpoint {
  supportedPresets(): SpotubeAudioSourceContainerPreset[] {
    throw new Error("Method not implemented.");
  }
  matches(track: SpotubeTrackObject): Promise<SpotubeAudioSourceMatchObject[]> {
    throw new Error("Method not implemented.");
  }
  streams(
    matched: SpotubeAudioSourceMatchObject
  ): Promise<SpotubeAudioSourceStreamObject[]> {
    throw new Error("Method not implemented.");
  }
}
