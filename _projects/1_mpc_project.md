---
layout: page
title: MPC Controller for a Rocket Prototype
description: Advanced control systems for a rocket prototype using Model Predictive Control.
img: assets/img/mpc_project/mpc_project.png
importance: 1
category: course-projects
related_publications: false
---


This project explores the development and application of various Model Predictive Control (MPC) strategies for a rocket prototype using thrust vector control. The project was undertaken as part of the ME-425 course on Model Predictive Control at EPFL.

You can find the PDF version of the report for this project [here](/assets/pdf/mpc-project-report.pdf).

The study involved system analysis, and the design of controllers tailored to both the linearized system, as well as the full nonlinear dynamics using a non linear optimizer. The controllers were evaluated for performance, robustness, and feasibility under varying conditions, including time delays.

This is a group project, see the PDF report for more details about the group members.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mpc_project/drone.png" title="Rocket Prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Rocket prototype used for the study.
</div>

### Linearization and Subsystem Separation
The rocket’s nonlinear dynamics, comprising 12 states and 4 inputs, were linearized around a steady-state trim point. Subsystems were separated into four decoupled controllers:

- **Subsystem X**: Controlling the x-axis movement.
- **Subsystem Y**: Controlling the y-axis movement.
- **Subsystem Z**: Managing vertical motion.
- **Subsystem Roll**: Regulating roll dynamics.

### MPC Controllers
Four independent MPC regulators were designed for each subsystem to stabilize the system and track reference trajectories. Techniques included:
- Recursive feasibility through invariant sets.
- Constraint softening to handle mismatches.

Simulations demonstrated the controllers’ success in tracking reference points and maintaining stability.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mpc_project/linear.png" title="Linear MPC" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Linear MPC under limiting roll constraints.
</div>

### Nonlinear MPC
To manage the rocket’s full nonlinear dynamics, a Nonlinear Model Predictive Controller (NMPC) was implemented using the CASADI framework. This controller enabled to control the full state-space system without subsystem decomposition.

Comparative analyses revealed the NMPC’s superior handling of nonlinear dynamics, particularly under high roll angle constraints.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mpc_project/mpc_project.png" title="NMPC" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Nonlinear MPC performance.
</div>

## Conclusion
This project highlights the power and versatility of MPC strategies in managing complex, nonlinear dynamic systems. The insights gained from this study can inform the design of advanced control systems for aerospace applications and beyond.
