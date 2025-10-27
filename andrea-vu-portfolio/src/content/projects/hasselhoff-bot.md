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

I did the mechanical and electrical design of the remote control for the Hasselhoff Bot, a small, teleoperated underwater robot inspired by David Hasselhoff's cameo in *The SpongeBob SquarePants Movie.* This project was part of the Advanced Mechatronic Design class at CMU. The robot is equipped with four waterproof motors, an IR beam receiver, and a tethered remote control, allowing users to navigate underwater and land on an IR beam. The remote control has 5 LEDs indicating the state of the submarine, two joysticks to allow the user to steer the submarine, a read out of the time elapsed since start, a read out of the current depth of the submarine, and a knob to set the desired depth.

## Accomplishments

- Designed and developed the electrical schematic for the remote control to include 5 LEDs, 2 joysticks, an LED display, and a potentiometer.

- Tested the electrical schematic on a breadboard before soldering the components to protoboards for the final prototype

- Developed C code on a Nucleo STM32 to communicate with the submarine, configure timers, ADCs, DMAs and GPIO pins to implement a state machine
