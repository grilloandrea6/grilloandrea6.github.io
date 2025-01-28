---
layout: page
title: Distributed MPC for Miniature Hovercraft
img: assets/img/publication_preview/hovercraft.png 
description: Semester project on distributed formation control using Model Predictive Control (DMPC), culminating in a paper for ICRA 2025.
importance: 1
category: university-and-research
related_publications: false
---

This semester project at EPFL has been devoted to the deployment of Distributed Model Predictive Control (DMPC) algorithms for achieving formation control of miniature hovercraft. 

The project has been conducted within the [Predictive Control Lab](https://www.epfl.ch/labs/la3/) under the supervision of Prof. *Colin Jones*, Roland Schwan and Gösta Stomberg. 

This work culminated in a paper submitted to the **International Conference on Robotics and Automation** (ICRA) 2025. (see [publications](/publications) for more details).

The project aims to develop a decentralized control framework for multiple hovercraft agents operating on an air-hockey table.

You can find the pdf version of the report for this EPFL semester project [here](/assets/pdf/Andrea Grillo - Distributed MPC for miniature hovercraft.pdf).

## Objectives

1. **Adapting the Software Framework**: Extending a single-hovercraft control framework to support multiple agents.
2. **Deploying DMPC Algorithms**: Implementing distributed optimization techniques to enable cooperative control.
3. **Automating Experimental Setup**: Streamlining deployment processes, configuration, and data collection.
4. **Enabling Onboard Execution**: Transitioning control algorithms from offboard workstations to onboard computation.


## Infrastructure

The hovercraft are equipped with six brushless motors, a Radxa Zero 3W onboard computer, and motion tracking via OptiTrack. The system operates on a near-frictionless air hockey table, providing a controlled environment for testing DMPC algorithms.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hovercraft/Overview.jpg" title="Hovercraft Experimental Setup" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Hovercraft operating on an air hockey table with OptiTrack motion tracking. Offboard and onboard control configurations.
</div>

## ROS2 Framework
The first step of the project was to adapt the existing ROS2 framework to support multiple hovercraft agents. The framework provides a modular architecture for developing and deploying control algorithms.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hovercraft/rosStructure.png" title="ROS2 Framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ROS2 framework for multiple hovercraft agents.
</div>


### Onboard Computation

The Radxa Zero 3W was introduced as a lightweight single-board computer capable of running the full ROS2 stack. Onboard computation removes dependency on external workstations, reducing latency and enabling real-time control.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hovercraft/boxplots.jpg" title="Onboard Computation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison of OCP solving times for onboard and offboard computation.
</div>


## Experimental Scenarios

1. **Point-to-Point Transitions**: Testing trajectory tracking for abrupt changes in setpoints.
2. **Line Crossing**: Avoidance of static and dynamic obstacles during formation control.
3. **Trajectory Following**: Tracking complex paths such as a cloverleaf while avoiding obstacles.
   
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hovercraft/rectangle_line_waterfall_onboard.jpg" title="Onboard Computation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Three different experimental scenarios: point-to-point transitions, line crossing, and trajectory following.
</div>

## Future Work
A few areas have been identified for future research and development, that are now bottlenecking the system's performance:
1. **Enhanced Communication**: The communication between the hovercraft is currently centralized (WiFi network). This limits both the performances and the scalability of the system. Decentralized networks have will be explored to reduce latency and increase scalability.
2. **Dynamic Obstacle Modeling**: Improve prediction of obstacle trajectories for better collision avoidance.
3. **Graph Topologies**: The current focus has been on line-type graph topologies. Future work will explore various graph topologies to enhance communication and control strategies.
4. **Onboard sensing and pose estimation**: Implementing onboard sensors and pose estimation algorithms to reduce dependency on external motion tracking systems.