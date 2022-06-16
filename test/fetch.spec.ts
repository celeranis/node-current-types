async () => {
	const response: Response = await fetch('https://example.com', {
		headers: {
			'Content-Type': 'application/json',
			'X-Awesome-Custom-Header': 'test',
		},
		method: 'POST',
		body: JSON.stringify({
			foo: 'bar'
		})
	})
	
	// @ts-expect-error: should not be any
	response.blarg()
	
	if (
		response.status === 200
		&& response.body instanceof ReadableStream
		&& response.bodyUsed === false
		&& response.headers as Headers
		&& response.redirected === false
		&& response.statusText === 'OK'
		&& response.url === 'https://example.com'
		&& response.type === 'default'
		&& response.ok === true
	) {
		const textPromise: Promise<string> = response.text()
		const jsonPromise: Promise<unknown> = response.json()
		
		// @ts-expect-error: should not be any
		;(await response.text()).blarg()
		
		// const blob: Blob = await response.blob()
		// FIXME: see fetch.d.ts:9
		// const blobStream: ReadableStream = blob.stream()
		
		// @ts-expect-error: should not be any
		;(await response.blob()).blarg()
		
		{
			const headers: Headers = response.headers
			const ContentType: string | null = headers.get('Content-Type')
			headers.set('foo', 'bar')
			headers.append('foo', 'bar')
			headers.delete('foo')
			const headersEntries: IterableIterator<[string, string]> = headers.entries()
			headers.forEach((value: string, key: string, all: Headers) => {
				if (key.startsWith('X-')) {
					all.get(key.toLowerCase()) === value
				}
			})
			const headerNames: IterableIterator<string> = headers.values()
			const headerValues: IterableIterator<string> = headers.keys()
			headers.has('baz') === true

			// @ts-expect-error: should not be any
			response.headers.blarg()
		
			// @ts-expect-error: should not be any
			headers.get('foo').blarg()
		}
		
		{
			const body: ReadableStream<Uint8Array> = response.body
			const reader: ReadableStreamDefaultReader<Uint8Array> = body.getReader()
			const chunk = await reader.read()
			if (chunk.done) {
				// @ts-expect-error: should be undefined
				chunk.value as Uint8Array
			} else {
				// @ts-expect-error: should be Uint8Array
				chunk.value as undefined
			}
			// @ts-expect-error: should not be any
			response.body.blarg()
			// @ts-expect-error: should not be any
			response.body.getReader().blarg()
			// @ts-expect-error: should not be any
			chunk.blarg()
		}
		
		{
			const formData: FormData = await response.formData()
			const entry: (FormDataEntryValue | null) = formData.get('test')
			if (entry) {
				if (typeof entry === 'string') {
					entry.toLowerCase()
				} else {
					(await entry.arrayBuffer()).byteLength === 0
				}
				// @ts-expect-error: should not be any
				entry.blarg()
			}
			// @ts-expect-error: should not be any
			formData.blarg()
		}

		
	}
}

// @ts-expect-error: should not be any
fetch.foo.bar.blah

// @ts-expect-error: should validate parameters
fetch('https://example.com/', 'foo')

// @ts-expect-error: should validate parameters
fetch()

export {};

