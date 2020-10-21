import { JsonObject, JsonProperty } from "json2typescript";

export const manifesturl: string = "https://launchermeta.mojang.com/mc/game/version_manifest.json";

/** the latest versions (release and snapshot) as shown in the version manifest response */
@JsonObject("latestversions") class LatestVersions {
   @JsonProperty("release", String) public release: string = "";
   @JsonProperty("snapshot", String) public snapshot: string = "";
}

/** data for a version of Minecraft as shown in the version manifest response */
@JsonObject("versiondata") export class VersionData {
   @JsonProperty("id", String) public id: string = "";
   @JsonProperty("type", String) public type: string = "";
   @JsonProperty("url", String) public url: string = "";
   @JsonProperty("time", String) public time: string = "";
   @JsonProperty("releaseTime", String) public releasetime: string = "";
}

/** the top level object of the mojang response manifest api */
@JsonObject("versionmanifest") export class VersionsManifest {
   @JsonProperty("latest", LatestVersions) public latest: LatestVersions = new LatestVersions();
   @JsonProperty("versions", [VersionData]) public versions: Array<VersionData> = [];
}


/** a property of the downloads in one version's manifest */
@JsonObject("versiondownloadsproperty") export class VersionDownloadsProperty {
   @JsonProperty("sha1", String) public sha1: string = "";
   @JsonProperty("size", Number) public size: number = -1;
   @JsonProperty("url", String) public url: string = "";
}

/** downloads offered for any given version */
@JsonObject("versiondownload") export class VersionDownloads {
   @JsonProperty("client", VersionDownloadsProperty) public client: VersionDownloadsProperty = new VersionDownloadsProperty();
   @JsonProperty("client_mappings", VersionDownloadsProperty, true) public clientmappings: VersionDownloadsProperty = new VersionDownloadsProperty();
   @JsonProperty("server", VersionDownloadsProperty, true) public server: VersionDownloadsProperty = new VersionDownloadsProperty();
   @JsonProperty("server_mappings", VersionDownloadsProperty, true) public servermappings: VersionDownloadsProperty = new VersionDownloadsProperty();
   @JsonProperty("windows_server", VersionDownloadsProperty, true) public windowsserver: VersionDownloadsProperty = new VersionDownloadsProperty();
}

/** a (incomplete) manifest object showing all the downloads/info/stuff about a particular minecraft version */
@JsonObject("versionmanifest") export class VersionManifest {
   @JsonProperty("downloads", VersionDownloads) public downloads: VersionDownloads = new VersionDownloads();
}
