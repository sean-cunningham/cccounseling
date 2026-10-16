/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_CONTAINER_ID?: string;
  readonly PUBLIC_NOINDEX?: string;
  readonly PUBLIC_ALLOW_VERCEL_INDEXING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
