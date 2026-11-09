# Tasks to give the AI

Small enough to review in one sitting, with enough edge cases that a first draft is rarely perfect.

1. **truncate(text, max)**: cut text to `max` characters, add `…`, never cut mid-word. Edge cases: `max` shorter than the first word, empty string, text already short enough.
2. **parseDuration(str)**: turn `"1h 30m"`, `"90s"`, `"2d"` into seconds. Edge cases: bad input, repeated units, whitespace.
3. **groupBy(items, keyFn)**: group an array into an object. Edge cases: empty array, keyFn returning non-strings.
4. **debounce(fn, ms)**: edge cases: call order, `this`, cancel.
5. **formatBytes(n)**: `1536` becomes `"1.5 KB"`. Edge cases: 0, negative, huge numbers.

Add a new file in `src/` and a test file in `test/` for each.
