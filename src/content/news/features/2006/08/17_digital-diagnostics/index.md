---
title: "Digital Diagnostics"
slug: digital-diagnostics
publishDate: 2006-08-17
author: ["stephanie-suber"]
featuredImage: null
groups:
    - 
projects:
    - 
people:
    - 
teams: 
    - 
collaborations:
    - 
tags:
    - 
---
In a way, innovative computer programmers and engineers are like good mechanics. They get under the hood, unafraid to grapple with the dirty details, in an effort to create finely tuned systems and applications that that better serve their users.

RENCI is home to a number of these digital-age service specialists, who spend their workdays finding more effective and efficient ways to monitor computing systems, pinpoint problems, and optimize applications.   The problems they face are made more complex by the amount of parallelism in, and the extreme length of running times, of many applications.

To help address the problem of addressing the analysis of long-running programs, RENCI researchers are using methods for extracting critical information about the changes in a program's behavior from the deluge of information often collected by conventional techniques.  Called "signatures", these highly-compressed statistical summaries of the performance data accurately represent the trends in a program's execution as a sequence of connected line segments. Because much less data needs to be kept and analyzed, performance monitoring in a production environment becomes much more economical.

"Essentially you are drawing a line that shows performance over time by connecting the data at instrumentation points, but you are dropping points that aren't needed to maintain the integrity of that line," explains Ying Zhang, a senior research software developer at RENCI who developed the new capability along with colleagues Mark Reed, Michael Newton, Gyesi Amanianpong and Todd Gamblin. "The bottom line is that it helps us find problems much more quickly and accurately, and with much less overhead."

The enhancement to performance monitoring tools also includes the ability to insert markers into application codes to indicate where the developers expect the computation to exhibit phase changes.  Using markers, signatures created with the same codes but on different computing systems can be compared. Simply match up the markers on the different signatures, and you can be sure you are comparing performance in the same location in the application code. This demarcation helps to reveal the performance differences across different systems, or the differences between one run and another of the program on the same system.

To complement the compression in time provided by signatures, RENCI's performance monitoring and evaluation experts have been investigating signature "clustering,"  to help reduce the amount of data needed across the many nodes of today's large parallel systems.  With clustering, a model signature is created for a particular parameter being measured. Then, as signatures are created for every node on the system, similar signatures can be grouped together based on how much and where they differ from the model signature. This is an effective way to identify the work distribution among the computer nodes and to spot potential performance problems among groups of compute nodes.

"Clustering is a way to lump together nodes that are acting similarly," says Howard Lander, a RENCI senior research software developer. "This is great for parallel applications running on hundreds or thousands of nodes because if you can see which nodes are slow or causing problems, you can reconfigure the system and rebalance the work load."
