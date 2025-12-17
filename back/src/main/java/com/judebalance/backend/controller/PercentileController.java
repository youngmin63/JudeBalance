package com.judebalance.backend.controller;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.judebalance.backend.repository.BalanceRecordRepository;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/api/percentile")
@RequiredArgsConstructor
public class PercentileController {

    private final BalanceRecordRepository balanceRecordRepository;

    @GetMapping
    public ResponseEntity<?> getPercentile(
            @RequestParam("age") int age,
            @RequestParam("score") double score  // ✅ 변경
    ) {
        // 1. 같은 연령대 유저들의 점수 조회
        List<Integer> scores = balanceRecordRepository.findScoresByAge(age);

        if (scores.isEmpty()) {
            return ResponseEntity.ok(Map.of("percentile", 50)); // fallback
        }

 // 2. 퍼센타일 계산
long lowerCount = scores.stream()
.filter(Objects::nonNull)        // null 제거
.filter(s -> s < score)          // 점수 비교
.count();

long totalCount = scores.stream()
.filter(Objects::nonNull)        // null 제거
.count();

int percentile = totalCount > 0
? (int) Math.floor((double) lowerCount / totalCount * 100)
: 0; // 점수가 없을 경우 0으로 처리

        return ResponseEntity.ok(Map.of("percentile", percentile));
    }
}

