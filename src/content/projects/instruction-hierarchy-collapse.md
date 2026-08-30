---
title: Instruction Hierarchy Under Accumulated Conflict
summary: >-
  A model is expected to respect which source of instructions outranks another.
  We study how well that ordering holds up once conflicting instructions start
  to pile up.
status: ongoing
tags:
  - AI Safety
  - Instruction Following
  - Model Behavior
order: 3
featured: true
visible: true
anchor: instruction-hierarchy
---

A deployed language model takes instructions from several places at once: a
system prompt, a developer, a user, retrieved documents, the output of tools it
called itself. Much of its safety rests on respecting the order of authority
between those sources. A single clean conflict is the easy case, and models
mostly handle it.

Real deployments are not the easy case. Instructions accumulate, contradict each
other, and arrive from sources of very different trust. We study how instruction
priority holds up under that pressure and why it gives way, because a system
that follows the right source only when the situation is simple is not one that
can be relied on where it matters.
