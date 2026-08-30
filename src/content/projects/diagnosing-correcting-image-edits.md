---
title: Feedback and Correction in Image Editing
summary: >-
  When an edit misses what the user actually wanted, can a model tell that
  something went wrong and put it right? We work on evaluating multimodal
  systems on recovery, not only on first attempts.
status: ongoing
tags:
  - Multimodal Evaluation
  - Image Editing
  - Feedback
order: 3
featured: true
visible: true
anchor: image-feedback
---

Most work on instruction-guided image editing measures whether a model carries
out a fresh instruction. Far less is known about what happens once an attempt
has already gone wrong — which is the situation people actually run into. Real
editing is iterative: a user asks for something, the result is close but not
right, and the exchange continues from there.

We work on evaluating how multimodal systems handle that case. The questions we
care about are whether a model can tell that a result missed the intent, and
whether it can correct the result without damaging everything else in the
image. Both matter for editing tools people can rely on, and neither is
captured by measuring success on a single pass.
