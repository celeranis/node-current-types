import * as WorkerThreads from 'node:worker_threads';

declare module "worker_threads" {
	interface MessagePortEventMap {
		"message": MessageEvent;
		"messageerror": MessageEvent;
		"close": never;
	}

	/** This Channel Messaging API interface represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other. */
	interface MessagePort extends EventTarget {
		onmessage: ((this: MessagePort, ev: MessageEvent) => any) | null;
		onmessageerror: ((this: MessagePort, ev: MessageEvent) => any) | null;
		/** Disconnects the port, so that it is no longer active. */
		close(): void;
		/** Begins dispatching messages received on the port. */
		start(): void;
		addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
		addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
		removeEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
		removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
	}
	
	interface BroadcastChannel extends EventTarget {}
}

declare global {
	// #region Event
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
	interface EventConstructor extends Readonly<typeof EventPhase> {
		new(type: string, options?: EventInit): Event
		prototype: Event
	}
	var Event: EventConstructor

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
	// #endregion Event

	// #region EventTarget
	interface EventListener {
		(evt: Event): void;
	}
	interface EventListenerObject {
		handleEvent(object: Event): void;
	}
	type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
	
	/** EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them. */
	interface EventTarget {
		/**
		 * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
		 *
		 * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
		 *
		 * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
		 *
		 * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
		 *
		 * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
		 *
		 * If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.
		 *
		 * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
		 */
		addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
		/** Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise. */
		dispatchEvent(event: Event): boolean;
		/** Removes the event listener in target's event listener list with the same type, callback, and options. */
		removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
	}
	interface EventTargetConstructor {
		new(): EventTarget
		prototype: EventTarget
	}
	var EventTarget: EventTargetConstructor

	interface EventListenerOptions {
		capture?: boolean
	}
	interface AddEventListenerOptions extends EventListenerOptions {
		once?: boolean;
		passive?: boolean;
		signal?: AbortSignal;
	}
	// #endregion EventTarget

	interface MessagePort extends WorkerThreads.MessagePort {}
	var MessagePort: typeof WorkerThreads.MessagePort
	
	interface MessageChannel extends WorkerThreads.MessageChannel {}
	var MessageChannel: typeof WorkerThreads.MessageChannel

	interface BroadcastChannel extends WorkerThreads.BroadcastChannel {}
	var BroadcastChannel: typeof WorkerThreads.BroadcastChannel
	
	// #region MessageEvent
	/** A message received by a target object. */
	interface MessageEvent<T = any> extends Event {
		/** Returns the data of the message. */
		readonly data: T;
		/** Returns the last event ID string, for server-sent events. */
		readonly lastEventId: string;
		/** Returns the origin of the message, for server-sent events and cross-document messaging. */
		readonly origin: string;
		/** Returns the MessagePort array sent with the message, for cross-document messaging and channel messaging. */
		readonly ports: ReadonlyArray<MessagePort>;
		/** Returns the MessagePort being attached. */
		readonly source: MessagePort | null;
	}
	interface MessageEventConstructor extends EventConstructor {
		new <T>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>;
		prototype: MessageEvent;
	}
	var MessageEvent: MessageEventConstructor
	
	interface MessageEventInit<T = any> extends EventInit {
		data?: T;
		lastEventId?: string;
		origin?: string;
		ports?: readonly MessagePort[];
		source?: MessagePort | null;
	}
	// #endregion MessageEvent
}