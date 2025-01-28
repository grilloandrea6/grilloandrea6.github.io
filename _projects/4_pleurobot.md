---
layout: page
title: Firmware Development for a Sensorized Pleurobot
description: Enhancing the Pleurobot's capabilities with real-time control, ROS2 integration, and advanced communication systems.
img: assets/img/pleurobot.png
importance: 1
category: university-and-research
related_publications: true
---

This project focuses on developing firmware and communication systems for the sensorized **Pleurobot**, a bio-inspired robot mimicking the locomotion of the salamander _Pleurodeles waltl_. The project was conducted at **BIOROB - EPFL**, under the supervision of Prof. Auke Jan Ijspeert and Dr. Qiyuan Fu.

## Objectives

1. **Improve Sensor Communication**: Increase sampling speed and robustness of microcontrollers collecting sensor data.
2. **Reduce Latency**: Optimize the communication between onboard computers and microcontrollers.
3. **Wireless Control**: Enable remote operation via a user-friendly interface.
4. **Integrate Visualization Tools**: Develop real-time monitoring using ROS2 and RViz.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pleurobot_system.jpg" title="System Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    System overview of the sensorized Pleurobot.
</div>

## Key Features

### Communication System

- **Original System**: Relied on a centralized bus controller for communication, leading to latency and bottlenecks.
- **Redesigned System**: Eliminated the bus controller by directly connecting the **Raspberry Pi 5** with sensor modules (Raspberry Pi Pico) via an optimized protocol.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/communication_comparison.jpg" title="Comparison of Original and Redesigned Systems" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison of latency between the original and redesigned communication systems.
</div>

### ROS2 Integration

The software stack was integrated into the ROS2 ecosystem, enabling modularity, scalability, and real-time visualization.

- **Packages**: Custom ROS2 packages for managing robot control, sensor communication, and visualization.
- **Visualization**: Leveraged RViz for real-time monitoring of force data and sensor states.
- **Launch Files**: Simplified system startup and configuration.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rviz_visualization.jpg" title="RViz Visualization" class="img-fluid rounded z-depth-1" %}
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
        {% include figure.liquid loading="eager" path="assets/img/force_demo.jpg" title="Force Reproduction Demonstration" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/safety_demo.jpg" title="Safety Mechanism Demonstration" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Force reproduction demonstration. Right: Safety mechanism demonstration.
</div>

## Results and Future Work

- **Results**:
    - Achieved 1 kHz sampling rate for 4 sensors with significantly reduced latency.
    - Demonstrated robustness in communication and real-time control.

- **Future Improvements**:
    - Develop a custom PCB for cleaner hardware integration.
    - Enhance visualization with kinematic models and monitoring tools.
    - Explore advanced microcontroller options (e.g., RP2350, ESP32) for improved performance.
    - Add more sensors with compact PCB designs.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pcb_design.jpg" title="Proposed PCB Design" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Proposed custom PCB design for improved hardware integration.
</div>

## Conclusion

This project successfully enhanced the Pleurobot’s capabilities through a robust firmware and communication framework. The integration of ROS2 and real-time visualization tools establishes a solid foundation for further research and development in bio-inspired robotics.

### Acknowledgments

Special thanks to Prof. Auke Jan Ijspeert, Dr. Qiyuan Fu, and the BIOROB Lab team at EPFL for their guidance and support throughout this project.
