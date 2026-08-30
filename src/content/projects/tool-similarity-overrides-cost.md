---
title: Cost-Aware Tool Use in LLM Agents
summary: >-
  Agents that call external tools have to weigh what a task needs against what
  each option costs. We study how dependable that trade-off is, and what pulls
  it off course.
status: ongoing
tags:
  - LLM Agents
  - Tool Use
  - Cost-Aware Reasoning
order: 2
featured: true
visible: true
anchor: tool-cost
---

As agents take on more work through external tools and APIs, choosing a tool
stops being a purely functional decision. Several tools may accomplish the same
thing at very different cost, and an agent running unattended makes that call
many times over. Deployed systems are assumed to weigh capability against cost
sensibly, and there is little systematic evidence that they do.

We study how reliably agents make that trade-off, and which properties of how a
tool is presented pull the decision away from the sensible option. This is a
failure mode that rarely shows up as a wrong answer — it shows up as a system
that is quietly more expensive and less predictable than it should be, which is
exactly the kind of problem that survives into production.
