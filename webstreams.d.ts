import * as WebStreams from 'node:stream/web';

declare module "stream/web" {
	interface CompressionStream extends ReadableWritablePair<string | BufferSource, Uint8Array> {}
	var CompressionStream: {
		new(format: 'deflate' | 'gzip'): CompressionStream
		prototype: CompressionStream
	}
	
	interface DecompressionStream extends ReadableWritablePair<string | BufferSource, Uint8Array> {}
	var DecompressionStream: {
		new(format: 'deflate' | 'gzip'): DecompressionStream
		prototype: DecompressionStream
	}
	
	interface ReadableStreamBYOBReader extends ReadableStreamGenericReader {
		read(view: Buffer | NodeJS.TypedArray | DataView): Promise<WebStreams.ReadableStreamDefaultReadResult<ArrayBuffer>>
		releaseLock(): void
	}
	
	interface ReadableStreamBYOBRequest {
		respond(bytesWritten: number): void
		respondWithNewView(view: Buffer | NodeJS.TypedArray | DataView): void
		view: Buffer | NodeJS.TypedArray | DataView
	}
	
	// interface ReadableByteStreamController {
	// 	readonly byobRequest: ReadableStreamBYOBReader | undefined
	// }
}

declare global {
	var ReadableStream: typeof WebStreams.ReadableStream
	interface ReadableStream<R = any> extends WebStreams.ReadableStream<R> {}

	var ReadableStreamDefaultController: typeof WebStreams.ReadableStreamDefaultController
	interface ReadableStreamDefaultController extends WebStreams.ReadableStreamDefaultController {}
	
	var ReadableStreamDefaultReader: typeof WebStreams.ReadableStreamDefaultReader
	interface ReadableStreamDefaultReader<R extends any> extends WebStreams.ReadableStreamDefaultReader<R> {}

	var WritableStream: typeof WebStreams.WritableStream
	interface WritableStream<W extends any> extends WebStreams.WritableStream<W> {}
	
	var WritableStreamDefaultController: typeof WebStreams.WritableStreamDefaultController
	interface WritableStreamDefaultController extends WebStreams.WritableStreamDefaultController {}
	
	var WritableStreamDefaultWriter: typeof WebStreams.WritableStreamDefaultWriter
	interface WritableStreamDefaultWriter extends WebStreams.WritableStreamDefaultWriter {}

	var TransformStream: typeof WebStreams.TransformStream
	interface TransformStream<I extends any, O extends any> extends WebStreams.TransformStream<I, O> {}
	
	var TransformStreamDefaultController: typeof WebStreams.TransformStreamDefaultController
	interface TransformStreamDefaultController extends WebStreams.TransformStreamDefaultController {}

	var TextEncoderStream: typeof WebStreams.TextEncoderStream
	interface TextEncoderStream extends WebStreams.TextEncoderStream {}

	var TextDecoderStream: typeof WebStreams.TextDecoderStream
	interface TextDecoderStream extends WebStreams.TextDecoderStream {}
	
	var CompressionStream: typeof WebStreams.CompressionStream
	interface CompressionStream extends WebStreams.CompressionStream {}

	var DecompressionStream: typeof WebStreams.DecompressionStream
	interface DecompressionStream extends WebStreams.DecompressionStream {}
	
	var ByteLengthQueuingStrategy: typeof WebStreams.ByteLengthQueuingStrategy
	interface ByteLengthQueuingStrategy extends WebStreams.ByteLengthQueuingStrategy {}
	
	var ReadableStreamBYOBReader: {
		new(stream: ReadableStream): ReadableStreamBYOBReader
		prototype: ReadableStreamBYOBReader
	}
	interface ReadableStreamBYOBReader extends WebStreams.ReadableStreamBYOBReader {}
	
	interface ReadableStreamBYOBRequest extends WebStreams.ReadableStreamBYOBRequest {}
	var ReadableStreamBYOBRequest: {
		new(): never
		prototype: ReadableStreamBYOBRequest
	}
}

export {};
