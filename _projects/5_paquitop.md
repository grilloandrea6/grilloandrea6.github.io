---
layout: page
title: Sensor Integration on Robotic Platform Paquitop
description: Designing and implementing a sensor integration system for enhanced obstacle detection on the Paquitop robotic platform.
img: assets/img/paquitop.png
importance: 1
category: university-and-research
related_publications: true
---

This project focuses on the development of a robust sensor integration system for the robotic platform **Paquitop**, as part of a curricular internship at Politecnico di Torino. The main objectives were to enhance obstacle detection capabilities and improve the safety and adaptability of the platform.

Key contributions include the design and implementation of a distributed data acquisition system, PCB design for sensor boards, and integration of real-time communication using CAN bus.

## Objectives

- Provide **redundancy** to the existing LIDAR system by adding ultrasonic and laser sensors for low-level obstacle detection.
- Enable **detection of obstacles not visible to the LIDAR**, such as descending steps or objects outside its 2D scanning plane.
- Design and deploy an **autonomous data acquisition board** using STM32 microcontrollers, ensuring real-time processing and minimal latency.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paquitop_platform.jpg" title="Paquitop Robotic Platform" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sensor_groups.jpg" title="Sensor Groups Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: The Paquitop robotic platform. Right: Sensor group arrangement on the platform.
</div>

## System Design

The proposed system incorporates **8 sensor groups**, each consisting of:
- **Ultrasonic sensors** for planar distance measurement.
- **Laser sensors** to detect descending steps.

Each sensor group communicates with the central controller via a CAN bus, enabling distributed data processing and system scalability. The microcontroller-based data acquisition boards convert analog signals to digital, ensuring precision while minimizing interference.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/can_bus_topology.jpg" title="CAN Bus Topology" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    CAN bus topology connecting sensor groups in a daisy-chain configuration.
</div>

### Limitations of Initial System Design

The initial system design relied heavily on analog components, leading to the following challenges:
- **Latency issues** due to I2C interrogation of multiple sensors.
- **Low signal stability** caused by RC filter inaccuracies.
- **Complex wiring** with numerous connections for each sensor group.
- **Limited adaptability** to new sensors or configurations.

### Proposed Solution

The revised system uses **STM32 microcontrollers** for each sensor group, leveraging their integrated ADC and CAN bus interfaces. Advantages include:
- Real-time configurability of alarm thresholds.
- Simplified wiring with a daisy-chain CAN bus topology.
- Flexibility to adapt to different sensors via software updates.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sensor_board.jpg" title="Sensor Data Acquisition Board" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pcb_layout.jpg" title="PCB Layout" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: The custom-designed sensor data acquisition board. Right: PCB layout for the board.
</div>

## Development Process

The project was developed through the following phases:
1. Functional design and component selection.
2. Schematic creation and PCB layout using **KiCAD**.
3. Firmware development for both sensor boards and the central Teensy controller using **STM32CubeIDE** and **Arduino IDE**.
4. Testing and debugging of the communication protocols and ADC performance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/firmware_flowchart.jpg" title="Firmware Flowchart" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Firmware flowchart showcasing the logic implemented on the STM32 microcontrollers.
</div>

## Technical Contributions

- **Custom PCBs**: Designed compact 27x27mm boards housing an STM32G0B1KBT6 microcontroller, CAN transceivers, and power management circuits.
- **Firmware development**: Implemented CAN-based communication protocols and threshold management for efficient obstacle detection.
- **Simulation tools**: Created Excel-based simulations to analyze system response under various conditions and tune parameters for optimal performance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/simulation_results.jpg" title="Simulation Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Simulation results showing system responses to various scenarios.
</div>

## Key Features

- **Dynamic threshold adjustment**: Alarm thresholds can be updated in real-time via CAN messages.
- **Scalable architecture**: Additional sensor groups can be added without modifying the central system.
- **Distributed processing**: Offloading computation to sensor boards reduces the central controller's workload.

## Future Improvements

The modular design allows for future enhancements, such as:
- Integration of additional sensors for environmental mapping.
- Deployment of advanced algorithms for distributed decision-making.

## Conclusion

This project demonstrates a comprehensive approach to improving the safety and functionality of the Paquitop robotic platform through sensor integration and system redesign. The flexible architecture and scalable design provide a solid foundation for future development in robotics and embedded systems.
