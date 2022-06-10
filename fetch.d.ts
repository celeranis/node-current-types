import { Blob as _Blob } from 'node:buffer';

declare module "buffer" {
	interface Blob {
		/**
		 * Returns a new `ReadableStream` that allows the content of the `Blob` to be read.
		 * @since v16.7.0
		 */
		stream(): ReadableStream // FIXME: this is broken due to conflicts with undici and @types/node
		stream(): never
	}
}

import * as undici from 'undici';

declare global {
	var fetch: typeof undici.fetch
	
	var Request: typeof undici.Request
	interface Request extends undici.Request {}

	var Response: typeof undici.Response
	interface Response extends undici.Response {}

	var Headers: typeof undici.Headers
	interface Headers extends undici.Headers {}

	var FormData: typeof undici.FormData
	interface FormData extends undici.FormData {}
	
	type FormDataEntryValue = undici.FormDataEntryValue

	type BodyInit = undici.BodyInit
	interface RequestInit extends undici.RequestInit {}
	type HeadersInit = undici.HeadersInit
	type RequestInfo = undici.RequestInfo
	interface BodyMixin extends undici.BodyMixin {}
	interface ResponseInit extends undici.ResponseInit {}

	interface Blob extends _Blob {}
}

export {};
