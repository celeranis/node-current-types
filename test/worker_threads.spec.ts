const event = new Event('hello', {
	cancelable: false,
	bubbles: false,
	composed: false
})
new Event('hello')

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

// @ts-expect-error: not a real value
const BAD_CONST = EventPhase

export {}
