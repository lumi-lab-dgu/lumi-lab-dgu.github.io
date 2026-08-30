---
title: 지시 위계는 어디서부터 무너지는가
summary: >-
  충돌하는 지시가 쌓이면 모델은 어느 쪽을 먼저 따라야 하는지를 더 이상 지키지 않습니다. 이
  붕괴가 모델 내부의 어디에서 일어나는지, post-training 단계 중 언제 나타나는지를 들여다봅니다.
---

충돌이 여러 개 겹쳤을 때의 instruction hierarchy 실패가 인식의 문제인지 행동의 문제인지를
묻습니다. 어느 지시를 우선해야 하는지에 대한 내부 표현 자체가 무너지는 것인지, 아니면 그 표현은
멀쩡한데 그대로 행동하지 못하는 것인지가 쟁점입니다. layer-wise probing과 minimal-pair activation
patching, 그리고 post-training 단계별 checkpoint를 활용해 실패 지점을 짚어 내고, 이 능력이 언제
생기고 언제 약해지는지를 추적합니다.

새로운 behavioral benchmark를 하나 더 만들기보다, 기존의 instruction hierarchy 평가를 메커니즘
분석용 측정 도구로 씁니다. 충돌의 양을 조절해 가면서 내부 표현과 인과적 개입, 서로 다른
post-training 단계를 함께 보면, 충돌이 쌓일 때 지시 우선순위가 왜 무너지는지를 설명할 수 있을
것으로 기대합니다.
