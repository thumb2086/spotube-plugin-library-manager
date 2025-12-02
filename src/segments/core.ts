import type { ICoreEndpoint, PluginConfiguration, PluginUpdateAvailable, ScrobbleDetails } from "@spotube-app/plugin";

export default class CoreEndpoint implements ICoreEndpoint {
  checkUpdate(pluginConfig: PluginConfiguration): Promise<PluginUpdateAvailable | null> {
    throw new Error("Method not implemented.");
  }
  support(): string {
    throw new Error("Method not implemented.");
  }
  scrobble(details: ScrobbleDetails): Promise<void> {
    throw new Error("Method not implemented.");
  }

}