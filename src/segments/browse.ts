import type {
  IBrowseEndpoint,
  SpotubeBrowseSectionObject,
  SpotubePaginationResponseObject,
} from "@spotube-app/plugin";

export default class BrowseEndpoint implements IBrowseEndpoint {
  sections(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeBrowseSectionObject>> {
    throw new Error("Method not implemented.");
  }
  sectionItems<T extends { typeName: string }>(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<T>> {
    throw new Error("Method not implemented.");
  }
}
