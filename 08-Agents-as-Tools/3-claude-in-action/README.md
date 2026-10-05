# Claude in Action

## What you will Learn

In this lesson, students apply Claude Code to a real project — a **Dragon Ball Z themed Tic-Tac-Toe game** — and develop the workflows and configuration practices that separate precise, efficient agent use from expensive, inaccurate guessing. The first lecture introduces the Prompt Life Cycle (Define, Explore, Plan, Code, Review, Document, Commit) and the context management tools that support it: `CLAUDE.md` for persistent project memory, subagents that do focused work without filling the main session's context window, and the `/compact`, `/clear`, and `/cost` commands for keeping long sessions accurate and affordable. The second lecture revisits the life cycle on a growing project: reading your own documentation to find what a feature will touch, using planning mode and `@`-references to give Claude exactly the context it needs, and using the Playwright MCP server with a QA subagent to open the project in a real browser and review it. By the end of this lesson, students will be able to direct a coding agent through a repeatable process that keeps them responsible for the outcome — not just one that responds to prompts.

## Lectures

- [Lecture - Prompt Life Cycle](./1-prompt-life-cycle.md)
- [Lecture - Review Process](./2-review-process.md)


## [Assignments](./assignments.md)

## TLO's (Terminal Learning Objectives)

- Develop Subagents to assign repetitive tasks while maintaining your context window.
- Attach the Playwright MCP to Claude Code for Quality Assurance purposes.

## ELO's (Enabling Learning Objectives)

- Understand the Prompt Life Cycle and how to apply it to your projects.
- Create a `CLAUDE.md` with `/init`, and explain the three scopes it can live in (global, project, local).
- Explain when a task deserves its own subagent, and create one with a name, description, tools list, model, and system prompt.
- Use planning mode, `@`-references, and `/btw` to give Claude focused context without diluting your main session.
- Manage a long session with `/compact`, `/clear`, `/cost`, and `/context`.
- Understand the MCP Interaction Process with Claude Code, including what tools, resources, and prompts are.
- Install the Playwright MCP server and use a QA subagent to review a project in a real browser.
