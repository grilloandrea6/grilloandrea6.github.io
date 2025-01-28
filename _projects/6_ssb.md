---
layout: page
title: Onboard Computer Programming for Swiss Solar Boat
description: Developing a flexible, modular framework for onboard electronics and software in a sustainable hydrogen-powered boat.
img: assets/img/ssb/ssb.png
importance: 1
category: university-and-research
related_publications: false
---

This project focuses on designing a robust and future-proof framework for the onboard computer of the future boat prototype developed by the Swiss Solar Boat EPFL association. 

Conducted during a semester project at EPFL, the work forms a crucial part of the team's effort to develop a hydrogen-powered boat by 2026. 

The framework integrates control systems, safety mechanisms, and data logging while ensuring modularity and scalability.

You can find the pdf version of the report for this project [here](/assets/pdf/2023_Fall_Grillo_Andrea_Onboard_Computer_Programming.pdf).

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ssb/ssb.png" title="SSB logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Swiss Solar Boat logo.
</div>

## Objectives

- **Framework Development**: Create a software and electronics architecture to integrate control systems like FCU, ECU, and SCU with a Ground Station.
- **Modularity**: Design a flexible system adaptable to evolving requirements.
- **Real-Time Communication**: Enable reliable communication between subsystems using CAN and ROS2 technologies.
- **Testing Infrastructure**: Develop Docker-based environments for efficient testing and deployment.
- **Communication with ground station**: Implement a secure communication channel for telemetry and remote control.

## System Overview

The REF is the new Swiss Solar Boat prototype, a hydrogen-powered vessel targeting the following specifications:
- 3 passengers.
- 150 km range.
- 30 knots top speed.

<div class="row">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ssb/DahuFoil-1400.webp" title="The Dahu, Swiss Solar Boat's current test platform" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ssb/REF.webp" title="The REF, the future prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left:The Dahu, Swiss Solar Boat's current test platform. Right: The REF, the future prototype.
</div>

The onboard computer (OBC) acts as the central hub for:
- **Flight Control Unit (FCU)**: Stabilization and navigation.
- **Energy Control Unit (ECU)**: Hydrogen and battery management.
- **Safety Control Unit (SCU)**: Monitoring and alarms.
- Communication with a ground station for telemetry and remote commands.

### Challenges Addressed

- **Hardware Integration**: Define robust interfaces between components like the CAN bus, IMU, and LCD monitors.
- **Software Modularity**: Develop an abstraction layer to enable easy integration of subsystems.
- **Platform Compatibility**: Test hardware (e.g., Khadas VIM4, Raspberry Pi 4/5) for compatibility with MCP2515 CAN transceivers.
- **Development Environment**: Set up a Docker-based environment for testing without requiring physical hardware.

### Work Flowchart
The flow chart below illustrates the development process:
<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ssb/flowchart.png" title="Development workflow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Development workflow.
</div>


### ROS2 Integration
The framework leverages ROS2 for:
- Modular node-based architecture.
- Hardware abstraction for seamless subsystem integration.
- High-level communication using topics, services, and actions.

The ROS2 graph below illustrates the system architecture:
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ssb/rosgraph.png" title="ROS2 graph for system architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ROS2 graph.
</div>

### CAN-to-ROS Interface
Developed a proof-of-concept **CAN_to_ROS** node:
- Translates CAN bus messages into ROS topics for higher-level processing.
- Uses Python and the Python-CAN library for prototyping.
- Future versions will incorporate DBC files for enhanced modularity.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ssb/comoncan.png" title="CAN message database" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    CAN messages definition.
</div>

### Development Environment
A Docker-based environment was created to:
- Simulate the OBC's environment on any machine.
- Streamline the development and testing processes.
- Include essential tools like ROS build systems and debugging utilities.

### Hardware Testing
Compared three potential onboard computers:
- **Khadas VIM4**: High performance but poor community support.
- **Raspberry Pi 4**: Reliable and well-documented.
- **Raspberry Pi 5**: Promising but untested during this phase.

## Testing & Validation
Tests were conducted using:
- **Arduino**: Generating simulated sensor data over CAN.
- **Raspberry Pi 4**: Hosted ROS2 and CAN_to_ROS modules.
- **Wireguard VPN**: Facilitated ground station communication.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ssb/test.jpg" title="Proof of Concept" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Proof of Concept experiment.
</div>

The Proof of Concept confirmed the feasibility of the design and provided a foundation for future improvements.


## Future Work

- **Enhanced CAN-to-ROS Module**: Use DBC-based parsing for better maintainability.
- **Subsystem Integration**: Develop specific nodes for FCU, ECU, and SCU.
- **Final OBC Selection**: Evaluate Raspberry Pi 5 for performance and compatibility.
- **Optimization Tools**: Incorporate tools like rosbag, RViz, and Gazebo for system development.
