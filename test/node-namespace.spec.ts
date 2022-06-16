process.setSourceMapsEnabled(true)
const resourceInfo: string[] = process.getActiveResourcesInfo()

// @ts-expect-error: should not be any
process.getActiveResourcesInfo().blarg()

export {}
