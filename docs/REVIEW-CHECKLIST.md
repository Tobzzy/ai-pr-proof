# Review checklist for AI code

- [ ] Does it do what I asked, or something nearby?
- [ ] Edge cases: empty, null/undefined, very large, unicode, negative.
- [ ] Did it invent an API, option or import that does not exist?
- [ ] Hidden state, mutation of inputs, or side effects?
- [ ] Error handling: does it fail loudly, or swallow errors?
- [ ] Tests: do they test behaviour, or just repeat the implementation?
- [ ] Would I be able to explain every line in an interview?
- [ ] Anything unnecessary I can delete (extra helpers, dead options, comments that restate the code)?
