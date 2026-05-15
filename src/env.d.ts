/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
  readonly PUBLIC_NOINDEX?: string;
  readonly PUBLIC_ALLOW_VERCEL_INDEXING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
