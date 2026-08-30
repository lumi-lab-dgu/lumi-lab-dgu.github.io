---
title: Anatomy of Instruction-Hierarchy Collapse
summary: >-
  As conflicting instructions accumulate, models can stop respecting source
  priority. We probe where this collapse appears inside the model and when it
  emerges across post-training stages.
status: ongoing
tags:
  - AI Safety
  - Instruction Following
  - Mechanistic Analysis
order: 3
featured: true
visible: true
anchor: instruction-hierarchy
---

This project asks whether multi-conflict instruction-hierarchy failures are
perception failures or action failures: does the internal representation of
which source should win collapse, or does the model retain that representation
but fail to act on it? We use layer-wise probing, minimal-pair activation
patching, and checkpoints across post-training stages to localize the failure
and trace when the capability emerges or degrades.

Rather than introducing another behavioral benchmark, this project uses existing
instruction-hierarchy evaluations as a measurement instrument for mechanistic
analysis. By varying conflict load and examining internal representations,
causal activation interventions, and different post-training stages, we aim to
explain why instruction-priority behavior breaks under accumulated conflict.
