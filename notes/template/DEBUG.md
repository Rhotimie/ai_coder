# Debugging Strategy

How to work a bug. Follow the steps in order. Do not skip to the fix.

## Ground Rules

- Always commit before adding new features, so there is a known-good state to diff against.
- Paste the full trace or error output. Do not summarize it.
- Work one hypothesis at a time. Change one thing per experiment.
- Record the investigation in this file as you go, under Investigation Log.
- Never claim a fix without proof.

## Steps

1. **Reproduce consistently**
   Find the shortest reliable set of steps that triggers the bug. If it is intermittent, establish the failure rate before changing anything. No consistent repro means no reliable proof of a fix.

2. **Investigate**
   Form a hypothesis. Sanity check it against the evidence: logs, traces, state, recent diffs. Record what was ruled in and what was ruled out. A hypothesis that cannot be tested is not yet a hypothesis.

3. **Demonstrate root cause**
   Show the mechanism, not the symptom. Prove it with evidence: a failing test, a log line, an isolated snippet. "This change makes it go away" is a correlation, not a cause.

4. **Fix and prove**
   Fix the root cause. Prove it with a test that fails before the change and passes after. Re-run the original repro from step 1.

5. **Capture lessons**
   Add anything durable to `CLAUDE.md`: the wrong assumption, the missing guardrail, the pattern to avoid next time.

## Investigation Log

Copy this block per bug.

### Bug: <one-line summary>

- **Date:** <YYYY-MM-DD>
- **Symptom:** what is observed
- **Repro:** exact steps or command
- **Trace:**
  ```
  <paste full error output>
  ```

**Hypotheses**

| # | Hypothesis | Test | Result |
|---|-----------|------|--------|
| 1 | | | ruled out / confirmed |

**Root cause:** the mechanism, with evidence

**Fix:** what changed, and where

**Proof:** the test or output that demonstrates it

**Lesson:** what moves to `CLAUDE.md`
