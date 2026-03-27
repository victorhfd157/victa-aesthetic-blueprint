# Performance Optimization Plan (Orchestrated)

## Problem Statement
The site experiences rendering lag during scroll and interaction after the "Pro Max" UI overhaul. The main bottlenecks are identified as expensive mouse-tracking effects and background-heavy canvas/SVGs.

## Orchestration Strategy
Minimum of 3 agents will be used for Phase 2:
1. `performance-optimizer`: Focus on FPS and rendering efficiency.
2. `frontend-specialist`: Refactor `Solutions.tsx` and `LiquidEther` components.
3. `test-engineer`: Run Lighthouse and manual performance verification.

## Proposed Changes

### 1. Interactivity Optimization (`performance-optimizer`)
- [ ] Implement `requestAnimationFrame` for `onMouseMove` in `Solutions.tsx`.
- [ ] Throttle input events to reduce CPU overhead.

### 2. Component Refactoring (`frontend-specialist`)
- [ ] Memoize the `Bento Grid` cards to prevent unnecessary re-renders.
- [ ] Add `will-change: transform` to animated elements to promote them to GPU layers.

### 3. Background Optimization (`performance-optimizer`)
- [ ] Reduce the complexity of `LiquidEther` (count of particles/points).
- [ ] Enable low-power mode (simpler background) if device performance is detected to be low.

### 4. Verification (`test-engineer`)
- [ ] Measure TBT (Total Blocking Time) before and after changes.
- [ ] Run `python .agent/scripts/checklist.py` for final audit.

## Approval Required
- [ ] Simplifying the `LiquidEther` effect slightly to gain significant FPS.
