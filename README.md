# Node.js 18.x Type Definitions
For the impatient people using newer versions of Node.js
currently unsupported by DefinitelyTyped (me)

## Features
This library extends and depends on existing definitions from `@types/node`. 

#### Added globals
- WHATWG fetch standard (via undici)
	- Functions:
		[`fetch`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#fetch)
	- Classes: 
		[`Request`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#request),
		[`Response`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#response),
		[`Headers`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-headers),
		[`FormData`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-formdata),
		[`Blob`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-blob)[^1]
	- Types: 
		`RequestInit`, `BodyInit`, `HeadersInit`,
		`RequestInfo`, `BodyMixin`, `ResponseInit`
- WHATWG [`DOMException`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#domexception)
- WHATWG Events
	- Classes: 
		[`Event`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#event),
		[`EventTarget`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#eventtarget)
	- Interfaces:
		`EventInit`, `EventListenerOptions`,
		`AddEventListenerOptions`, `EventListener`, 
		`EventListenerObject`, `EventListenerOrEventListenerObject`
- WHATWG Messaging (via worker_threads)
	- Classes: 
		[`MessageEvent`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#messageevent),
		[`MessagePort`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#messageport),
		[`MessageChannel`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#messagechannel),
		[`BroadcastChannel`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#broadcastchannel)
	- Interfaces:
		`MessageEventInit`
- WHATWG Streams standard (via stream/web)
	- Classes:
		- [`ReadableStream`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-readablestream), 
			[`ReadableStreamDefaultController`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-readablestreamdefaultcontroller),
			[`ReadableStreamDefaultReader`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-readablestreamdefaultreader),
			[`ReadableByteStreamController`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-readablebytestreamcontroller),
			[`ReadableStreamBYOBReader`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-readablestreambyobreader),
			[`ReadableStreamBYOBRequest`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-readablestreambyobrequest)
		- [`WritableStream`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-writablestream),
			[`WritableStreamDefaultController`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-writablestreamdefaultcontroller),
			[`WritableStreamDefaultWriter`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-writablestreamdefaultwriter)
		- [`TransformStream`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-transformstream),
			[`TransformStreamDefaultController`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-transformstreamdefaultcontroller)
		- [`CompressionStream`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-compressionstream),
			[`DecompressionStream`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-decompressionstream)
		- [`ByteLengthQueuingStrategy`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-bytelengthqueuingstrategy)
	- Interfaces:
		`ReadableStreamDefaultReadDoneResult`,
		`ReadableStreamDefaultReadValueResult`,
		`ReadableStreamDefaultReadResult`
- WHATWG Encoding standard (via util)
	- Classes:
		[`TextEncoder`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#textencoder),
		[`TextEncoderStream`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-textencoderstream),
		[`TextDecoder`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#textdecoder),
		[`TextDecoderStream`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#class-textdecoderstream)
- [`performance`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#performance) (via perf_hooks)
- Added `Array.findLast()` and `Array.findLastIndex()`,
	which are currently missing from TypeScript's `lib.esnext.d.ts`

#### Module extensions
- Added: [`node:test`](https://nodejs.org/dist/latest-v18.x/docs/api/test.html)
- Modified: `worker_threads`
	- Updated `MessagePort` and `BroadcastChannel` to correctly extend `EventTarget`
- Modified: `process`
	- Added [`process.getActiveResourcesInfo()`](https://nodejs.org/dist/latest-v18.x/docs/api/process.html#processgetactiveresourcesinfo)
	- Added [`process.setSourceMapsEnabled()`](https://nodejs.org/dist/latest-v18.x/docs/api/process.html#processsetsourcemapsenabledval)
- Modified: `buffer`
	- Added `ReadableStream` return type for the `Blob.stream()` method[^1]

## Installation
```sh
# with npm
npm install --save-dev @celeranis/node-current-types

# with yarn
yarn add --dev @celeranis/node-current-types

# with pnpm
pnpm add --save-dev @celeranis/node-current-types
```

## Usage
After installation, add this to your project's `tsconfig.json` and/or `jsconfig.json`'s `compilerOptions`:
```json
"types": ["@celeranis/node-current-types"]
```

[^1]: The `Blob.stream()` method has broken, conflicting type declarations. See #1.