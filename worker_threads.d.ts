import * as WorkerThreads from 'node:worker_threads';

declare module "worker_threads" {
	interface BroadcastChannel extends EventTarget {}
}

declare global {
	var MessageChannel: typeof WorkerThreads.MessageChannel
	interface MessageChannel extends WorkerThreads.MessageChannel {}
	
	const enum EventPhase {
		NONE = 0,
		CAPTURING_PHASE = 1,
		AT_TARGET = 2,
		BUBBLING_PHASE = 3
	}
	
	interface EventInit {
		bubbles?: boolean
		cancelable?: boolean
		composed?: boolean
	}
	
	interface Event {
		readonly bubbles: boolean
		readonly cancelable: boolean
		readonly composed: boolean
		readonly currentTarget: EventTarget
		readonly defaultPrevented: boolean
		readonly eventPhase: EventPhase
		readonly isTrusted: boolean
		readonly target: EventTarget
		readonly timeStamp: number
		readonly type: string
		
		/** @deprecated Use `stopPropagation()` instead. */
		cancelBubble: boolean
		/** @deprecated Use `defaultPrevented` instead, which is simply the inverse of this value. */
		returnValue: boolean
		/** @deprecated Use `currentTarget` instead. */
		readonly srcElement: EventTarget
		
		composedPath(): EventTarget[]
		preventDefault(): void
		stopImmediatePropagation(): void
		stopPropagation(): void
	}
	var Event: Readonly<typeof EventPhase> & {
		new(type: string, options?: EventInit): Event
		prototype: Event
	}
	
	interface EventListenerOptions {
		capture?: boolean
		once?: boolean
		passive?: boolean
		signal?: AbortSignal
	}
	
	interface EventTarget {
		addEventListener(type: string, listener: (event: Event) => void, options?: EventListenerOptions): undefined
		addEventListener(type: string, listener: (event: Event) => void, useCapture?: boolean): undefined
		addEventListener(type: string, listener: (event: Event) => void, options?: EventListenerOptions | boolean): undefined

		removeEventListener(type: string, listener: (event: Event) => void, options?: Pick<EventListenerOptions, 'capture'>): undefined
		removeEventListener(type: string, listener: (event: Event) => void, useCapture?: boolean): undefined
		removeEventListener(type: string, listener: (event: Event) => void, options?: Pick<EventListenerOptions, 'capture'> | boolean): undefined
		
		dispatchEvent(event: Event): boolean
	}
	var EventTarget: {
		new(): EventTarget
		prototype: EventTarget
	}
	
	interface BroadcastChannel extends WorkerThreads.BroadcastChannel {}
	var BroadcastChannel: typeof WorkerThreads.BroadcastChannel
}

export {};
