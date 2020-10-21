import { getInput, setFailed, setOutput } from "@actions/core";
import { get } from "https";
import { manifesturl, VersionsManifest, VersionData, VersionManifest } from "./otherbits";
import { JsonConvert } from "json2typescript";
import { createWriteStream, WriteStream } from "fs";

async function run(): Promise<void> {
   let inputmcversion: string = getInput("mcversion");
   let filename: string = getInput("filename");
   // eslint-disable-next-line @typescript-eslint/init-declarations
   let mcversions: VersionsManifest | Array<VersionsManifest>;
   const jsonconvert: JsonConvert = new JsonConvert();

   try {
      mcversions = jsonconvert.deserialize(await new Promise(resolve => {
         get(manifesturl, res => {
            res.setEncoding("utf-8");

            let body: string = "";
            res.on("data", data => body += data);
            res.on("end", () => resolve(JSON.parse(body)));
         });
      }), VersionsManifest);
   } catch {
      return setFailed("couldn't parse initial manifest response from Mojang");
   }

   if (!(mcversions instanceof VersionsManifest)) mcversions = mcversions[0];
   switch (inputmcversion.toLowerCase()) {
      case "latest": case "release":
         inputmcversion = mcversions.latest.release;
         break;
      case "latest-snapshot": case "latest snapshot": case "snapshot":
         inputmcversion = mcversions.latest.snapshot;
   }

   const version: VersionData | undefined = mcversions.versions.find(ver => ver.id === inputmcversion);
   if (!version) return setFailed("couldn't find specified minecraft version");

   // eslint-disable-next-line @typescript-eslint/init-declarations
   let mcversiondata: VersionManifest | Array<VersionManifest>;
   try {
      mcversiondata = jsonconvert.deserialize(await new Promise(resolve => {
         get(version.url, res => {
            res.setEncoding("utf-8");

            let body: string = "";
            res.on("data", data => body += data);
            res.on("end", () => resolve(JSON.parse(body)));
         });
      }), VersionManifest);
   } catch {
      return setFailed("couldn't parse second version-specific response from Mojang");
   }

   if (filename.toLowerCase() === "defaultnamelol") filename = `minecraft-${inputmcversion}.jar`;
   else if (filename.split(".").length === 1) filename = filename + ".jar";

   try {
      await new Promise(resolve => {
         if (!(mcversiondata instanceof VersionManifest)) mcversiondata = mcversiondata[0];
         get(mcversiondata.downloads.client.url, res => {
            res.setEncoding("binary");
            const file: WriteStream = createWriteStream(filename, { encoding: "binary" });
            res.pipe(file);
            file.on("error", () => { throw new Error(); });
            file.on("finish", resolve);
         });
      });
   } catch {
      return setFailed("couldn't download file");
   }

   setOutput("jarfilename", filename);
   setOutput("mcversion", inputmcversion);
}

void run();
