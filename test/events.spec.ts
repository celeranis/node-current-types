const event = new Event('hello', {
	cancelable: false,
	bubbles: false,
	composed: false
})
new Event('hello')

// @ts-expect-error: should not be any
event.blarg()

const target = new EventTarget()
target.dispatchEvent(event)
target.addEventListener('hello', (event: Event) => {
	event.preventDefault()
	event.stopPropagation()
	event.target.removeEventListener('hello', () => {}, {
		capture: false
	})
	event.target.removeEventListener('hello', () => {})
	event.eventPhase === Event.AT_TARGET
}, { 
	capture: true, 
	once: true, 
	passive: true, 
	signal: new AbortSignal
})

// @ts-expect-error: should not be any
target.blarg()

target.addEventListener('bar', (event) => {
	// @ts-expect-error: should not be any
	event.blarg()
})

// @ts-expect-error: not a real value
const BAD_CONST = EventPhase

export {}
