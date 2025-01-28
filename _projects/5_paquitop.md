---
layout: page
title: Sensor Integration on Robotic Platform Paquitop
description: Designing and implementing a sensor integration system for enhanced obstacle detection on the Paquitop robotic platform.
img: assets/img/paquito/paquitop.png
importance: 1
category: university-and-research
related_publications: false
---

This project focuses on the development of a robust sensor integration system for the robotic platform **Paquitop**, as part of a curricular internship at the Interdepartmental Centre for Service Robotics (PIC4SeR) of Politecnico di Torino. The main objectives were to enhance obstacle detection capabilities and improve the safety and adaptability of the platform.

Key contributions include the design and implementation of a distributed data acquisition system, PCB design for sensor boards, and integration of real-time communication using CAN bus.

## Objectives

- Provide **redundancy** to the existing LIDAR system by adding ultrasonic and laser sensors for low-level obstacle detection.
- Enable **detection of obstacles not visible to the LIDAR**, such as descending steps or objects outside its 2D scanning plane.
- Design and deploy an **autonomous data acquisition board** using STM32 microcontrollers, ensuring real-time processing and minimal latency.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paquito/paquitop.png" title="Paquitop Robotic Platform" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Paquitop robotic platform.
</div>

## System Design

The proposed system incorporates **8 sensor groups**, each consisting of:
- **Ultrasonic sensors** for planar distance measurement.
- **Laser sensors** to detect descending steps.


### Limitations of Initial System Design
The initial system consisted on simple analog logic using comparators, enabling only for threshold detection. The new system design aimed to improve the detection capabilities and the adaptability of the system.

The initial system design relied heavily on analog components, leading to the following challenges:
- **Latency issues** due to I2C interrogation of multiple sensors to the I/O expander.
- **Low signal stability** caused by RC filter inaccuracies.
- **No configurability** of alarm thresholds.
- **Complex wiring** with numerous connections for each sensor group.
- **Limited adaptability** to new sensors or configurations.

### Proposed Solution

Each sensor group has a microcontroller that communicates with the central controller via a CAN bus, enabling distributed data processing and system scalability. The microcontroller-based data acquisition boards convert analog signals to digital, ensuring precision while minimizing interference.

The revised system uses **STM32 microcontrollers** for each sensor group, leveraging their integrated ADC and CAN bus interfaces. Advantages include:
- Real-time configurability of alarm thresholds.
- Simplified wiring with a daisy-chain CAN bus topology.
- Flexibility to adapt to different sensors via software updates.

<div class="row justify-content-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paquito/pcb.png" title="Sensor Data Acquisition Board" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The custom-designed sensor data acquisition board.
</div>


The project was developed through the following phases:
1. Functional design and component selection.
2. Schematic creation and PCB layout using **KiCAD**.
3. Firmware development for both sensor boards and the central Teensy controller using **STM32CubeIDE** and **Arduino IDE**.
4. Testing and debugging of the communication protocols and ADC performance.

## PCB
For the sensor modules a compact 27x27mm board has been designed housing an STM32G0B1KBT6 microcontroller, CAN transceivers, and power management circuits.
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paquito/pcb1.png" title="PCB top" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/paquito/pcb2.png" title="circular" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    PCB layout for the sensor data acquisition board.
</div>

## CAN Communication Protocol
The communication protocol has been designed as follows, enabling for remote configuration of the CAN_ID and the threshold values for each sensor group. It also allows for requesting distance measurements and sending alarms to the central controller.


<!-- | Name            | ID   | DLC | Data                                        |
|----------------|------|-----|---------------------------------------------|
| SET_ID_CAN     | 0x12 | 2   | 0: CMD \| 1: CAN_ID                        |
| SET_THRESHOLD  | 0x13 | 7   | 0: CMD \| 1,2: Y_TH \| 3,4: R_TH \| 5,6: L_TH |
| DIST_REQUEST   | 0x14 | 1   | 0: CMD                                     |
| ALARM_YELLOW   | 0x15 | 4   | 0: CMD \| 1: CAN_ID \| 2,3: DIST_SONAR     |
| ALARM_RED      | 0x16 | 4   | 0: CMD \| 1: CAN_ID \| 2,3: DIST_SONAR     |
| ALARM_LASER    | 0x17 | 2   | 0: CMD \| 1: CAN_ID                        |
| DIST_ANS       | 0x18 | 6   | 0: CMD \| 1: CAN_ID \| 2,3: LASER \| 4,5: SONAR | -->

<div align="center">
<table>
    <tr>
        <th>Name</th>
        <th>ID</th>
        <th>DLC</th>
        <th>Data</th>
    </tr>
    <tr>
        <td>SET_ID_CAN</td>
        <td>0x12</td>
        <td>2</td>
        <td>0: CMD | 1: CAN_ID</td>
    </tr>
    <tr>
        <td>SET_THRESHOLD</td>
        <td>0x13</td>
        <td>7</td>
        <td>0: CMD | 1,2: Y_TH | 3,4: R_TH | 5,6: L_TH</td>
    </tr>
    <tr>
        <td>DIST_REQUEST</td>
        <td>0x14</td>
        <td>1</td>
        <td>0: CMD</td>
    </tr>
    <tr>
        <td>ALARM_YELLOW</td>
        <td>0x15</td>
        <td>4</td>
        <td>0: CMD | 1: CAN_ID | 2,3: DIST_SONAR</td>
    </tr>
    <tr>
        <td>ALARM_RED</td>
        <td>0x16</td>
        <td>4</td>
        <td>0: CMD | 1: CAN_ID | 2,3: DIST_SONAR</td>
    </tr>
    <tr>
        <td>ALARM_LASER</td>
        <td>0x17</td>
        <td>2</td>
        <td>0: CMD | 1: CAN_ID</td>
    </tr>
    <tr>
        <td>DIST_ANS</td>
        <td>0x18</td>
        <td>6</td>
        <td>0: CMD | 1: CAN_ID | 2,3: LASER | 4,5: SONAR</td>
    </tr>
</table>
</div>