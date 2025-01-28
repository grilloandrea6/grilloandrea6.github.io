---
layout: page
title: MPC Controller for a Rocket Prototype
description: Advanced control systems for a rocket prototype using Model Predictive Control.
img: assets/img/rocket_intro.jpg
importance: 1
category: work
related_publications: true
---

This project explores the development and application of various Model Predictive Control (MPC) strategies for a rocket prototype. The project was undertaken as part of the ME-425 course on Model Predictive Control at EPFL.

The study involved detailed system analysis, linearization, subsystem decomposition, and the design of controllers tailored to manage complex dynamic behaviors effectively.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rocket_dynamics.jpg" title="Rocket Dynamics" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/linearization.jpg" title="Linearization Process" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/subsystem_separation.jpg" title="Subsystem Separation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Visualization of rocket dynamics. Middle: Linearization process. Right: Subsystem decomposition.
</div>

## Key Contributions

### Linearization and Subsystem Separation
The rocket’s nonlinear dynamics, comprising 12 states and 4 inputs, were linearized around a steady-state trim point. Subsystems were separated into four decoupled controllers:

- **Subsystem X**: Controlling the x-axis movement.
- **Subsystem Y**: Controlling the y-axis movement.
- **Subsystem Z**: Managing vertical motion.
- **Subsystem Roll**: Regulating roll dynamics.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/linear_mpc.jpg" title="Linear MPC" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Linear MPC applied to the subsystems, ensuring feasibility and constraint satisfaction.
</div>

### MPC Controllers
Four independent MPC regulators were designed for each subsystem to stabilize the system and track reference trajectories. Techniques included:

- Recursive feasibility through invariant sets.
- Constraint softening to handle mismatches.

Simulations demonstrated the controllers’ success in tracking reference points and maintaining stability.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/offset_tracking.jpg" title="Offset-Free Tracking" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Offset-free tracking performance under varying mass conditions.
</div>

### Nonlinear MPC
To manage the rocket’s full nonlinear dynamics, a Nonlinear Model Predictive Controller (NMPC) was implemented using the CASADI framework. Key features:

- Full state-space control without subsystem decomposition.
- Mitigation of Euler angle singularities.

Comparative analyses revealed the NMPC’s superior handling of nonlinear dynamics, particularly under high roll angle constraints.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nmpc_performance.jpg" title="NMPC Performance" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Performance comparison: Linear MPC vs. Nonlinear MPC at high roll angles.
</div>

### Delay Compensation
The NMPC controller’s performance was evaluated under time delays, with compensation strategies effectively mitigating instability for delays of up to 0.2 seconds.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/delay_compensation.jpg" title="Delay Compensation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Results of delay compensation in the NMPC framework.
</div>

## Conclusion
This project highlights the power and versatility of MPC strategies in managing complex, nonlinear dynamic systems. The insights gained from this study can inform the design of advanced control systems for aerospace applications and beyond.
