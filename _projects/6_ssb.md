---
layout: page
title: Onboard Computer Programming for Swiss Solar Boat
description: Developing a flexible, modular framework for onboard electronics and software in a sustainable hydrogen-powered boat.
img: assets/img/ssb.png
importance: 1
category: university-and-research
related_publications: false
---

This project focuses on designing a robust and future-proof framework for the onboard computer of the Swiss Solar Boat. Conducted during a semester project at EPFL, the work forms a crucial part of the team's effort to develop a hydrogen-powered boat by 2026. The framework integrates control systems, safety mechanisms, and data logging while ensuring modularity and scalability.

You can find the pdf version of the report for this project [here](/assets/pdf/2023_Fall_Grillo_Andrea_Onboard_Computer_Programming.pdf).
## Objectives

- **Framework Development**: Create a software and electronics architecture to integrate control systems like FCU, ECU, and SCU with a Ground Station.
- **Modularity**: Design a flexible system adaptable to evolving requirements.
- **Real-Time Communication**: Enable reliable communication between subsystems using CAN and ROS2 technologies.
- **Testing Infrastructure**: Develop Docker-based environments for efficient testing and deployment.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dahu_boat.jpg" title="The Dahu, Swiss Solar Boat's current test platform" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## System Overview

The Swiss Solar Boat is a hydrogen-powered vessel targeting the following specifications:
- 3 passengers.
- 150 km range.
- 30 knots top speed.

The onboard computer (OBC) acts as the central hub for:
- **Flight Control Unit (FCU)**: Stabilization and navigation.
- **Energy Control Unit (ECU)**: Hydrogen and battery management.
- **Safety Control Unit (SCU)**: Monitoring and alarms.
- Communication with a ground station for telemetry and remote commands.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hardware_architecture.jpg" title="Hardware architecture overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Challenges Addressed

- **Hardware Integration**: Define robust interfaces between components like the CAN bus, IMU, and LCD.
- **Software Modularity**: Develop an abstraction layer to enable easy integration of subsystems.
- **Platform Compatibility**: Test hardware (e.g., Khadas VIM4, Raspberry Pi 4/5) for compatibility with MCP2515 CAN transceivers.
- **Development Environment**: Set up a Docker-based environment for testing without requiring physical hardware.

## Key Contributions

### ROS2 Integration
The framework leverages ROS2 for:
- Modular node-based architecture.
- Hardware abstraction for seamless subsystem integration.
- High-level communication using topics, services, and actions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ros_graph.jpg" title="ROS2 graph for system architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### CAN-to-ROS Interface
Developed a proof-of-concept **CAN_to_ROS** node:
- Translates CAN bus messages into ROS topics for higher-level processing.
- Uses Python and the Python-CAN library for prototyping.
- Future versions will incorporate DBC files for enhanced modularity.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/can_ros_interface.jpg" title="CAN to ROS Interface overview" class="img-fluid rounded z-depth-1" %}
    </div>
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

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/obc_comparison.jpg" title="Onboard computer options: Khadas VIM4, Raspberry Pi 4, and Raspberry Pi 5" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Testing & Validation

Tests were conducted using:
- **Arduino**: Simulated sensor data over CAN.
- **Raspberry Pi 4**: Hosted ROS2 and CAN_to_ROS modules.
- **Wireguard VPN**: Facilitated ground station communication.

The Proof of Concept confirmed the feasibility of the design and provided a foundation for future improvements.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/test_setup.jpg" title="Test setup for validating system architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Future Work

- **Enhanced CAN-to-ROS Module**: Use DBC-based parsing for better maintainability.
- **Subsystem Integration**: Develop specific nodes for FCU, ECU, and SCU.
- **Final OBC Selection**: Evaluate Raspberry Pi 5 for performance and compatibility.
- **Optimization Tools**: Incorporate tools like rosbag, RViz, and Gazebo for system development.

## Conclusion

This project establishes a robust foundation for the Swiss Solar Boat's onboard computer framework. With modularity, scalability, and future-proofing as its core principles, the work paves the way for integrating advanced control systems in sustainable boating.

