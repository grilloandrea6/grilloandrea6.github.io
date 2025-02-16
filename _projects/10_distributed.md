---
layout: page
title: Distributed Algorithms Project
img: assets/img/distributed.png 
description: Reliable communication and agreement abstractions for decentralized systems.
importance: 3
category: course-projects
related_publications: false
---

This project was completed as part of the **CS-451 Distributed Algorithms** course at EPFL. It involves implementing key communication and agreement abstractions for decentralized systems, ensuring reliable operation under failures and asynchronous execution.

The project was graded based on correctness and performance, achieving a perfect score of **6.0/6.0**.

## Project Repository

The source code and additional documentation for this project can be found on [GitHub](https://github.com/grilloandrea6/distributedAlgorithms).    

## Objectives

1. **Design Communication Primitives**: Implement and validate abstractions for reliable message exchange.
2. **Develop Agreement Algorithms**: Implement protocols for achieving consistency in distributed environments.
3. **Test Robustness**: Ensure resilience to failures, asynchronous execution, and challenging configurations.

The project consists of three milestones:

### Milestone 1: Perfect Links
The perfect links abstraction ensures reliable point-to-point message delivery between processes in an asynchronous environment.

**Properties:**
- **Reliable Delivery**: Messages sent by correct processes are eventually delivered.
- **No Duplication**: Messages are delivered exactly once.
- **No Creation**: Only messages sent by a process can be delivered.

This abstraction has been implemented by implementing a TCP-like protocol over UDP sockets. This involved the development of custom message handling, acknowledgments, and retransmissions.

Data structures and algorithms were designed to ensure efficient runs, both in terms of compute power and memory used, as most of the grade was based on the performance of the implementation.

### Milestone 2: FIFO Broadcast
FIFO broadcast ensures that all correct processes receive messages in the order they were broadcast by the sender.

**Properties:**
- **Validity**: Messages broadcast by correct processes are delivered by all correct processes.
- **FIFO Ordering**: If a process broadcasts message A before message B, no process delivers B before A.
- **Uniform Agreement**: If a message is delivered to one correct process, it is delivered to all correct processes.

This abstraction was implemented on top of the perfect links abstraction developed in Milestone 1. 
The algorithm was based on the Majority-Acknowledge algorithm, and a blocking step to ensure FIFO ordering.

### Milestone 3: Lattice Agreement
The lattice agreement abstraction enables processes to agree on ordered sets of values in a decentralized manner. This abstraction is critical for maintaining consistency in distributed systems.

**Properties:**
- **Validity**: Decided values include proposed values and no additional values.
- **Consistency**: Decisions made by processes are comparable.
- **Termination**: All correct processes eventually make a decision.

The algorithm for this milestone was given at a high level. The task was to implement the algorithm and ensure it met the required properties and be as efficient as possible.

## System Model

The system assumes the following properties:

- **Processes**: A static set of \(n = 2f + 1\) processes, where up to \(f\) processes may fail by crashing.
- **Asynchrony**: Processes and communication are asynchronous, with arbitrary delays.
- **Communication**: Reliable, authenticated point-to-point communication over UDP sockets.

## Implementation Details

The project was implemented in Java using the provided course templates. Key highlights include:

- **UDP Communication**: Custom message handling for unordered, delayed, and lost packets.
- **Multi-threading**: Efficient handling of concurrent message delivery and processing.
- **Logging and Validation**: Output files for verifying correctness and performance.