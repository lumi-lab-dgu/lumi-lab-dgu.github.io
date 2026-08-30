---
title: Diagnosing and Correcting Image Edits
summary: >-
  Can a model recognize why an image edit missed its goal, generate precise
  corrective feedback, and execute the correction without introducing new
  errors? We are building benchmarks that evaluate the full
  feedback-and-revision loop.
status: ongoing
tags:
  - Multimodal Evaluation
  - Image Editing
  - Feedback
order: 1
featured: true
visible: true
anchor: image-feedback
---

Most image-editing benchmarks focus on whether a model follows a newly supplied
instruction. We study a harder setting in which an attempted edit has already
fallen short of the user's original goal. The project separates two
capabilities—generating actionable feedback and carrying out that
feedback—and investigates how to evaluate both on naturally occurring model
failures and carefully controlled error cases.

A central challenge is benchmark construction. Naturally occurring errors offer
ecological validity but produce imbalanced and difficult-to-label failure
distributions, while controlled perturbations provide cleaner ground truth but
may not resemble real editing failures. We study evaluation designs that
preserve realistic failure modes while enabling reliable diagnosis of
feedback-generation and feedback-execution capabilities.
