# ai-pr-proof

A small repo built to show one thing: **you can review AI-written code.**

Nobody hires for "can prompt Claude Code". They hire people who ship fast and can explain what the AI did.
So the proof is one pull request where AI wrote the first draft and your commits show you fixing it.

## The flow

1. Pick a small task from [docs/TASKS.md](docs/TASKS.md).
2. Branch: `git switch -c ai/<task-name>`
3. Let the AI write the first draft. Commit it **untouched**: `git commit -m "ai: first draft of <task>"`
4. Review it with [docs/REVIEW-CHECKLIST.md](docs/REVIEW-CHECKLIST.md). Fix what is wrong, **one fix per commit**: `fix: <what was wrong and why>`
5. Add or tighten tests until you trust it.
6. Open the PR. The template asks what the AI got wrong, what you changed, and how you checked.

The PR history is the proof: first draft, then your fixes.

## Layout

```
.github/
  pull_request_template.md   what reviewers (and recruiters) read first
  workflows/ci.yml           runs the tests on every PR
docs/
  TASKS.md                   small tasks to give the AI
  REVIEW-CHECKLIST.md        what to look for when reviewing AI code
  COMMIT-CONVENTION.md       ai: / fix: / test: prefixes
prompts/                     the prompts you used, one file per task
src/                         the code
test/                        tests (node:test, no dependencies)
```

## Run

Needs Node 20+.

```
npm test
```
