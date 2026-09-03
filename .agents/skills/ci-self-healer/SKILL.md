---
name: ci-self-healer
description: Autonomous Rote CI/CD Self-Healing Healer Play that diagnoses build/lint/test failures across Node.js, Python, Go, and Rust projects, synthesizes line-edit repairs, verifies test suites, and pushes fixes.
---

# Autonomous Rote CI/CD Self-Healing Healer Skill

Use this skill whenever a build, lint, or unit test failure occurs in the workspace.

## Triggering the Autonomous Healer

Execute the published Rote play on the workspace directory:

```bash
rote play run https://play.modiqo.ai/swapankumar/ci-self-healer \
  target_dir="${GITHUB_WORKSPACE:-.}" \
  provider=gemini \
  model=gemini-3.5-flash \
  push_strategy="${PUSH_STRATEGY:-none}" \
  --yes
```
