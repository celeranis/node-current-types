import type { Blob as _Blob } from 'buffer';
import type * as undici from 'undici';

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

	type BodyInit = undici.BodyInit
	interface RequestInit extends undici.RequestInit {}
	type HeadersInit = undici.HeadersInit
	type RequestInfo = undici.RequestInfo
	interface BodyMixin extends undici.BodyMixin {}
	interface ResponseInit extends undici.ResponseInit {}

	interface Blob extends _Blob {}
}