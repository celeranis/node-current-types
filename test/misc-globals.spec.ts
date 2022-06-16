const exception: DOMException = new DOMException('foo', 'ExampleError')

exception.message.includes('foo')
exception.name.includes('ExampleError')
exception.stack?.includes('misc')

exception.code === DOMException.ABORT_ERR

// @ts-expect-error: should not be any
new DOMException().blarg()

// @ts-expect-error: not a real object
const BAD_CONST = DOMExceptionLegacyCode

export {}
