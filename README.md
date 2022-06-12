# Interval Timer
A minimalist Pomodoro-inspired timer app for maintaining healthy work-break-rest
cycles. In the app, the user schedules the tasks they want to complete and how
many 'blocks' they think it will take. Each block is a 25 minute work period with
a 5 minute break. Every task is separated by a 40 minute rest
period. The key feature that makes this MVP useful for me is the 'end' feature
which finishes the current block/rest period. 

## Motivation
I find it helpful to hard-code in a plan for the day with approximately how much
time I want to spend on each task. However, the solutions I've tried in the past
are too inflexible or not purposely built for pomodoros. 

## Features
Currently Interval Timer is a minimum-viable-product where the features are just
enough for me to make use out of them. In Interval Timer, users can create and
delete tasks and set how many blocks they will take. The timer may sometimes
count down more than 1 second per tick because I track the progress of time via
the system time rather than using a 'wait' time because I found the latter to be
very inaccurate. For UX, I added in a light-dark theme changer. 

## Stack
Interval Timer is a React + Next.js app, with the Chakra UI CSS framework. 