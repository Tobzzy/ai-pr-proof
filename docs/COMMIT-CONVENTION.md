# Commit convention

| Prefix | Use |
|---|---|
| `ai:` | AI output committed **untouched** (the first draft). Do not edit before committing. |
| `fix:` | You corrected something the AI got wrong. One fix per commit, message says what and why. |
| `test:` | You added or tightened tests. |
| `refactor:` | You simplified without changing behaviour. |

Example history for one PR:

```
ai: first draft of truncate
fix: truncate cut mid-word when max fell inside a word
fix: handle empty string instead of throwing
test: cover max shorter than first word
```
