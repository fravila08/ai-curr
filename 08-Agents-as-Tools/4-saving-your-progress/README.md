# Saving Your Progress

## What you will Learn

In this lesson, students learn how to give both Claude Code and their projects a memory. The first lecture compares how humans and machines remember, using the PlayStation memory card as an analogy for why saving over a file is not enough for software development. Students then learn how to resume, rename, and rewind Claude Code sessions with `/resume`, `/rename`, `claude -c`, and `/rewind`, and how checkpoints store both context and code. They also set up Obsidian as a visual workspace connected to Claude Code, and use it to commit context through documentation and visualize a Number Guessing Game project with Obsidian Canvas. The second lecture turns to the project itself: students learn the difference between Git, a local tool that records save states called commits, and GitHub, the cloud service that stores and shares them. They connect Claude Code to GitHub through the GitHub MCP server and a personal access token, then create reusable `/save-project` and `/grab-project` Skills that push and pull the latest state of a project. By the end of this lesson, students will be able to preserve, recover, and move between the states of their work with confidence.

## Lectures

- [Lecture - Thinking about Memory](./1-thinking-about-memory.md)
- [Lecture - Git+GitHub w/Claude Code](./2-git-github-claude-code.md)


## [Assignments](./asssignments.md)

## TLO's (Terminal Learning Objectives)

- Connect to Obsidian with Claude Code to get a better visualization of your project.
- Attach the GitHub MCP to Claude Code to push and pull the latest state of your project.

## ELO's (Enabling Learning Objectives)

- Compare how humans and machines store memory, and explain why overwriting a saved file is not enough for software development.
- Resume, rename, and start named Claude Code sessions using `/resume`, `/rename`, `claude -c`, and `claude --name`.
- Explain how checkpoints work, what they store, and why `/rewind` only moves backwards and cannot be undone.
- Install Obsidian, create a vault, and connect it to Claude Code with community plugins and `/ide`.
- Commit context to a project by generating documentation with an agent and visualizing it with Obsidian Canvas.
- Distinguish Git from GitHub, and explain commits, repositories, push, and pull.
- Create a GitHub personal access token, keep it private, and attach the GitHub MCP to Claude Code.
- Create Skills in `.claude/skills/` that push (`/save-project`) and pull (`/grab-project`) a project.
