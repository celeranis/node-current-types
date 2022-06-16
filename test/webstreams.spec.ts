async () => {
	const compress: CompressionStream = new CompressionStream('deflate')
	const decompress: CompressionStream = new DecompressionStream('deflate')
	
	const encoder: TextEncoderStream = new TextEncoderStream()
	const decoder: TextDecoderStream = new TextDecoderStream()
	
	const someReadable = (await fetch('https://example.com/')).body!

	// @ts-expect-error: should not be any
	someReadable.blarg()
	
	const compressed = someReadable.pipeThrough(compress)
	const decompressed = compressed.pipeThrough(decompress)
	
	const encoded = decompressed.pipeThrough(encoder)
	const decoded = encoded.pipeThrough(decoder)
	
	const reader = decoded.getReader()
	const { done, value } = await reader.read()
	if (done) { // @ts-expect-error: value is undefined
		value.replace('foo', 'bar')
	} else {
		value.replace('foo', 'bar')
	}
	
	for await (const chunk of decoded) {
		chunk.replace('foo', 'bar')
	}
}

export {}
