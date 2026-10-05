# Coding Assistants

## What are we trying to accomplish?

In this lesson, students move from querying an LLM directly to using one wrapped inside an autonomous agent — a system that can read files, run commands, and iterate on its own until a task is complete. The first lecture explains the architecture that makes this possible: the agent loop, the Model Context Protocol, and why a coding agent is a fundamentally different tool than the LLM it contains. The second lecture turns that understanding into practice: installing Claude Code, understanding how tokens drive cost, and developing a deliberate decision-making process for model selection — Fable, Opus, Sonnet, Haiku, or a free local `qwen3-coder` model — based on task complexity and budget, along with the effort level and output style that suit the work. By the end of this lesson, students will have Claude Code running, understand what it is doing under the hood at every step, and be able to make intentional cost-quality trade-offs rather than defaulting to the most powerful model for every task.

## Lectures and Assignments

### Lectures

- [Lecture - Intro to Coding Assistants](./1-intro-to-coding-assistants.md)
- [Lecture - Installing Claude Code](./2-installing-claude.md)

### [Assignments](./assignments.md)

## TLO's (Terminal Learning Objectives)

- Configure and operate Claude Code as a cost-aware coding agent, selecting the appropriate model and effort level for a given development task.

## ELO's (Enabling Learning Objectives)

- Explain the four components of a coding agent: the orchestration loop, MCP servers, tools, and the LLM reasoning core.
- Distinguish between a coding agent and the LLM inside it, and explain why swapping the LLM does not change the agent's orchestration logic.
- Trace the agent loop algorithm from task receipt through sequential tool calls to a final response.
- Explain what the Model Context Protocol (MCP) standardizes and why it matters for tool ecosystem growth.
- Compare GitHub Copilot, Cursor, and Claude Code across use case, transparency, and MCP ecosystem depth.
- Install Claude Code and complete authentication with an Anthropic account or API key.
- Switch models with `/model` using aliases such as `fable`, `opus`, `sonnet`, `haiku`, and `opusplan`.
- Explain what a token is and how input and output tokens are billed in a multi-turn session, including why long conversations cost more and how prompt caching reduces that cost.
- Select the correct model — Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 4.5, or the free local `qwen3-coder` — given a task's complexity, budget, and context size.
- Configure effort level and output style in Claude Code to balance token cost against reasoning depth and explanation verbosity.
