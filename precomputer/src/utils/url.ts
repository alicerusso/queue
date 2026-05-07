export const CLUSTERS_INDEX_PATH = '/clusters/'

export const clusterPathBuilder = (cluster: number) => `${CLUSTERS_INDEX_PATH}${cluster}/` as const

export const FINAL_REVIEW_INDEX_PATH = '/final-review/'

export const finalReviewClusterPathBuilder = (cluster: number) => `${FINAL_REVIEW_INDEX_PATH}C${cluster}/` as const

export const finalReviewDraftPathBuilder = (draft: string) => `${FINAL_REVIEW_INDEX_PATH}${draft}/` as const

export const finalReviewRfcPathBuilder = (rfcNumber: number) => `${FINAL_REVIEW_INDEX_PATH}rfc${rfcNumber}/` as const

// There can be multiple sitemap files but this is the entry point hence '_0' suffix.
export const SITEMAP_XML_0 = '/sitemap.xml' as const