---
title: When Tool Similarity Overrides Cost
summary: >-
  LLM agents may favor a tool whose name or description resembles the task even
  when a functionally equivalent option is cheaper. We study when surface
  similarity weakens cost-aware tool selection.
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

We construct functionally identical "twin" tools while varying only their names,
descriptions, and prices. Using controlled database tasks, we measure how
lexical overlap, semantic similarity, relative cost gaps, and absolute price
scale affect an agent's choice. The goal is to understand and reduce
tool-selection shortcuts that can make deployed agents unnecessarily expensive
or unreliable.

This setting lets us isolate a simple but consequential question: when task
wording resembles one tool description more closely than another, does that
resemblance override an explicit economic signal? By controlling tool
functionality while varying representation and cost, we can separate genuine
task requirements from superficial selection biases.
