---
layout: page
title: Distributed MPC for Miniature Hovercraft
img: assets/img/hovercraft_demo.jpg
description: A semester project on distributed formation control using Model Predictive Control (DMPC).
importance: 1
category: university-and-research
related_publications: true
---

This semester project explores Distributed Model Predictive Control (DMPC) for achieving formation control of miniature hovercraft. The work builds upon and enhances previous research by integrating advanced algorithms, improving system design, and enabling onboard computation.

## Key Objectives

1. **Adapting the Software Framework**: Extending a single-hovercraft control framework to support multiple agents.
2. **Deploying DMPC Algorithms**: Implementing distributed optimization techniques to enable cooperative control.
3. **Automating Experimental Setup**: Streamlining deployment processes, configuration, and data collection.
4. **Enabling Onboard Execution**: Transitioning control algorithms from offboard workstations to onboard computation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hovercraft_setup.jpg" title="Hovercraft Experimental Setup" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Hovercraft operating on an air hockey table with OptiTrack motion tracking.
</div>

## Framework Overview

### Infrastructure

The hovercraft are equipped with six brushless motors, an ESP32 or Radxa Zero 3W controller, and motion tracking via OptiTrack. The system operates on a near-frictionless air hockey table, providing a controlled environment for testing DMPC algorithms.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/system_architecture.jpg" title="System Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Modular architecture for multi-agent distributed control.
</div>

### Distributed MPC Algorithms

The DMPC framework decentralizes control by splitting the optimization problem into smaller subproblems solved cooperatively by each agent. Two algorithms were implemented:

1. **ADMM-based DMPC**: Designed for convex optimization.
2. **Distributed Sequential Quadratic Programming (dSQP)**: Suitable for non-convex constraints such as minimum-distance requirements.

### Onboard Computation

The Radxa Zero 3W was introduced as a lightweight single-board computer capable of running the full ROS2 stack. Onboard computation removes dependency on external workstations, reducing latency and enabling real-time control.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/onboard_computation.jpg" title="Onboard Computation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Radxa Zero 3W-based onboard computation architecture.
</div>

## Experiments and Results

### Experimental Scenarios

1. **Point-to-Point Transitions**: Testing trajectory tracking for abrupt changes in setpoints.
2. **Line Crossing**: Avoidance of static and dynamic obstacles during formation control.
3. **Trajectory Following**: Tracking complex paths such as a cloverleaf while avoiding obstacles.

### Key Findings

- **Onboard vs. Offboard Control**: Onboard controllers achieved acceptable performance but exhibited higher trajectory oscillations due to reduced computational resources.
- **Scalability**: DMPC algorithms demonstrated robust performance, with scalability dependent on communication infrastructure.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/trajectory_comparison.jpg" title="Trajectory Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Trajectory comparison: onboard vs. offboard DMPC.
</div>

## Future Work

1. **Enhanced Communication**: Explore decentralized networks to reduce latency and increase scalability.
2. **Dynamic Obstacle Modeling**: Improve prediction of obstacle trajectories for better collision avoidance.
3. **Real-Time Constraints**: Transition to real-time operating systems to ensure deterministic behavior.

## Conclusion

This project successfully demonstrated the application of DMPC for hovercraft formation control. The integration of onboard computation and distributed algorithms marks significant progress in decentralized control systems. The findings open avenues for further research in swarm robotics and cooperative multi-agent systems.
