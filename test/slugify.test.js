import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';

test('lowercases and joins words with dashes', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('strips leading and trailing separators', () => {
  assert.equal(slugify('  --Hello!  '), 'hello');
});
