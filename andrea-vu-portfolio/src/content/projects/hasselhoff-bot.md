---
title: "Hasselhoff Bot"
description: "Mechanical and electrical design of a remote control for a small, teleoperated underwater robot inspired by David Hasselhoff's cameo in The SpongeBob SquarePants Movie."
date: "August 2024 -- December 2024"
location: "Carnegie Mellon University"
skills: ["Embedded Systems", "Mechanical Design", "CAD modelling", "Electrical Design"]
image: "/images/projects/hasselhoff-bot/cover.jpg"
featured: true
order: 3
---

Designed the mechanical and electrical systems for the remote control of Hasselhoff Bot, a teleoperated underwater robot developed for Carnegie Mellon University's Advanced Mechatronic Design course. Inspired by David Hasselhoff's cameo in *The SpongeBob SquarePants Movie*, this project demonstrates integrated embedded systems design and underwater robotics.

---

## System Overview

**Robot Capabilities:**
- Four waterproof motors for underwater navigation
- IR beam receiver for autonomous landing
- Tethered remote control for real-time operation

**Remote Control Features:**
- 5 LED state indicators for submarine status monitoring
- Dual joystick interface for navigation control
- Elapsed time display since mission start
- Current depth readout
- Potentiometer for desired depth setting

---

## Key Accomplishments

- Designed and developed the electrical schematic for the remote control to include 5 LEDs, 2 joysticks, an LED display, and a potentiometer.

- Tested the electrical schematic on a breadboard before soldering the components to protoboards for the final prototype

- Developed C code on a Nucleo STM32 to communicate with the submarine, configure timers, ADCs, DMAs and GPIO pins to implement a state machine
