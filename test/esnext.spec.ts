const SOME_ARRAY = ['foo', 'bar']

SOME_ARRAY.findLast((val) => val === 'bar') as (string | undefined)
SOME_ARRAY.findLastIndex((val) => val === 'bar') as number

export {}
