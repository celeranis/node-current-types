declare namespace NodeJS {
	interface Process {
		getActiveResourcesInfo(): string[]
		setSourceMapsEnabled(val: boolean): void
	}
}