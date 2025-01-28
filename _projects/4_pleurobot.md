---
layout: page
title: Firmware Development for a Sensorized Pleurobot
description: Enhancing the Pleurobot's capabilities with real-time control, ROS2 integration, and advanced communication systems.
img: assets/img/pleurobot.png
importance: 1
category: university-and-research
related_publications: false
---

This project focuses on developing firmware and communication systems for the sensorized **Pleurobot**, a bio-inspired robot mimicking the locomotion of the salamander _Pleurodeles waltl_. The project was conducted at **BIOROB - EPFL**, under the supervision of Prof. *Auke Jan Ijspeert* and Dr. *Qiyuan Fu*.

## Objectives

1. **Sensor Modules**: Optimize sampling speed, robustness and communication of sensor modules to the onboard computer.
2. **Wireless Control**: Enable remote operation via a user-friendly interface.
3. **Integrate Visualization Tools**: Develop real-time monitoring using ROS2 and RViz.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pleuro/systemOverview.png" title="System Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    System overview of the sensorized Pleurobot.
</div>

### Sensor modules


- **Original System**: Relied on a centralized bus controller for communication, leading to latency and bottlenecks. The bus controller was connected to sensor modules (Raspberry Pi Pico) via RS485.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pleuro/masterSlave.png" title="Comparison of Original and Redesigned Systems" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Original master-slave communication protocol.
</div>

- **Redesigned Communication system and protocol**: Eliminated the bus controller by directly connecting the **Raspberry Pi 5** with sensor modules (Raspberry Pi Pico).
- **Custom Protocol**: Developed a custom communication protocol for real-time data transmission and synchronization. The custom protocol is based on a token-ring communication, where each sensor module sends data in a round-robin fashion.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pleuro/tokenRing.png" title="tokenRing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pleuro/circular.png" title="circular" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Token-ring communication protocol.
</div>

This approach allowed for faster communication and reduced latency, enabling real-time control and monitoring.

The latency was reduced from 26 ms to 3 ms, assuming 20 sensor modules on the same bus.
### ROS2 Integration

The software stack was integrated into the ROS2 ecosystem, enabling modularity, scalability, and real-time visualization.

- **Packages**: Custom ROS2 packages for managing robot control, sensor communication, and visualization.
- **Visualization**: Leveraged RViz for real-time monitoring of force data and sensor states.
- **Launch Files**: Simplified system startup and configuration.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pleuro/visualization.png" title="RViz Visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Real-time visualization of sensor data in RViz.
</div>

### Demonstrations

1. **Transparent Force Reproduction**
    - Data from the front-right leg’s force sensors was filtered and mapped to reproduce forces on the hind-right leg in real time.
    - Showcased proportional control and smooth feedback.

2. **Safe Movement with Force Threshold**
    - Implemented a safety mechanism that stops movement if excessive force is detected.
    - Used hysteresis to prevent frequent interruptions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pleuro/transparent-demo.gif" title="Force Reproduction Demonstration" class="img-fluid rounded z-depth-1" style="height: 100px;" %}
    </div>

</div>
<div class="caption">
    Transparent Force Reproduction Demo
</div>

## Results and Future Work

- **Results**:
    - Achieved very low-latency and high sampling rate communication over RS485 bus.
    - Successfully integrated the Pleurobot into the ROS2 ecosystem.
    - Organization of development environment and codebase using Git and Docker.

- **Future Improvements**:
    - Develop a custom PCB for the Raspberry Pi 5 for cleaner hardware integration.
    - Enhance visualization integrating the complete URDF kinematic model.
    - Explore advanced microcontroller options (e.g., RP2350, ESP32) for improved performance.
    - Integrate the sensor modules (3-layer PCB) into a single board for compactness and reliability.

### Acknowledgments

Special thanks to Prof. Auke Jan Ijspeert, Dr. Qiyuan Fu, and the BIOROB Lab team at EPFL for their guidance and support throughout this project.
