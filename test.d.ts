declare module "node:test" {
	// some of these parameters are more strict than the actual implementation
	// this is intentional, see: https://github.com/microsoft/TypeScript/issues/11842#issuecomment-256210678 

	export interface TestOptions {
		/**
		 * The number of tests that can be run at the same time.
		 */
		concurrency?: number
		/**
		 * If `true`, this test will *not* be skipped 
		 * when the test runner is configured with `runOnly(true)`
		 */
		only?: boolean
		/**
		 * If truthy, this test will be skipped,
		 * using the provided value for the message.
		 */
		skip?: boolean | string
		/**
		 * If truthy, this test will be marked with `TODO` in the output,
		 * using the providef value as for the message.
		 */
		todo?: boolean | string
	}

	/**
	 * Optional callback to signify that the test has completed.
	 * 
	 * If the provided parameter is truthy, the test will be considered failing.
	 * 
	 * **Cannot be used with tests that also return a promise,
	 * including async functions!**
	 */
	interface DoneFn {
		(err?: Error | string | boolean): void
	}
	interface TestFn {
		(ctx: TestContext, done: DoneFn): any
	}
	
	interface TestFunc {
		(name: string, fn?: TestFn): Promise<undefined>;
		(name: string, options: TestOptions, fn?: TestFn): Promise<undefined>;
		(fn: TestFn): Promise<undefined>;
		(options: TestOptions, fn?: TestFn): Promise<undefined>;
		
		test: TestFunc
	}

	export const test: TestFunc
	
	export interface TestContext {
		/**
		 * Writes a diagnostic message to the TAP output.
		 * @param message - The message to write
		 */
		diagnostic(message: string): void
		/**
		 * Switches to a whitelist for running tests,
		 * skipping anything without a truthy `only` option.
		 */
		runOnly(shouldRunOnlyTests: boolean): void
		/**
		 * Marks this test as skipped with the optional parameter for the message.
		 * 
		 * Does not *stop* execution - make sure to use `return` to prevent unexpected results
		 */
		skip(message?: string): void
		/**
		 * Marks this test as `TODO` with the given message.
		 */
		todo(message?: string): void

		test(name: string, fn?: TestFn): Promise<undefined>
		test(name: string, options: TestOptions, fn?: TestFn): Promise<undefined>
		test(fn: TestFn): Promise<undefined>
		test(options: TestOptions, fn?: TestFn): Promise<undefined>
	}

	export default test;
}
