/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
