import test from 'node:test';

test('fake test', (ctx, done) => {
	ctx.diagnostic('Some diagnostics')
	ctx.runOnly(true)
	ctx.skip('nevermind')
	ctx.todo('pending')
	
	ctx.test('fake subtest', async ctx => {
		await fetch('https://example.com/')
		throw new Error('oops')
	})
	
	done() // success
	done(new Error('test failed'))
})

test({ todo: 'do this' }, () => {})
test('bad test', { skip: 'skip this one' }, () => {})
test(function namedFunctionTest(_ctx, done) {
	done('wow')
})

export {};
