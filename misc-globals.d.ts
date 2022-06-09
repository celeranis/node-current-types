import type { Performance } from 'node:perf_hooks';

declare global {
	var performance: Performance
	
	const enum DOMExceptionLegacyCode {
		INDEX_SIZE_ERR = 1,
		DOMSTRING_SIZE_ERR = 2,
		HIERARCHY_REQUEST_ERR = 3,
		WRONG_DOCUMENT_ERR = 4,
		INVALID_CHARACTER_ERR = 5,
		NO_DATA_ALLOWED_ERR = 6,
		NO_MODIFICATION_ALLOWED_ERR = 7,
		NOT_FOUND_ERR = 8,
		NOT_SUPPORTED_ERR = 9,
		INUSE_ATTRIBUTE_ERR = 10,
		INVALID_STATE_ERR = 11,
		SYNTAX_ERR = 12,
		INVALID_MODIFICATION_ERR = 13,
		NAMESPACE_ERR = 14,
		INVALID_ACCESS_ERR = 15,
		VALIDATION_ERR = 16,
		/** @deprecated Use `TypeError` instead */
		TYPE_MISMATCH_ERR = 17,
		SECURITY_ERR = 18,
		NETWORK_ERR = 19,
		ABORT_ERR = 20,
		URL_MISMATCH_ERR = 21,
		QUOTA_EXCEEDED_ERR = 22,
		TIMEOUT_ERR = 23,
		INVALID_NODE_TYPE_ERR = 24,
		DATA_CLONE_ERR = 25,
	}
	
	interface DOMException extends Error {
		readonly message: string
		readonly name: string
		
		/** @deprecated */
		readonly code: DOMExceptionLegacyCode | 0
	}
	var DOMException: Readonly<typeof DOMExceptionLegacyCode> & {
		new(message?: string, name?: string): DOMException,
		prototype: DOMException
	}
}