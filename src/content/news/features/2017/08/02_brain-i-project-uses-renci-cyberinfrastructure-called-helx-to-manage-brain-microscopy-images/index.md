---
title: "BRAIN-I project uses RENCI cyberinfrastructure called HeLx to manage brain microscopy images"
subtitle: Sharing massive image files just became easier
slug: brain-i-project-uses-renci-cyberinfrastructure-called-helx-to-manage-brain-microscopy-images
publishDate: 2017-08-02
author: ["stephanie-suber"]
featuredImage: null
groups:
    - software-architecture
projects:
    - brain-i
    - helx
    - irods
people:
    - erik-scott
    - ashok-krishnamurthy
teams: 
    - 
collaborations:
    - 
tags:
    - high-performance-computing
    - data-analysis
    - visualization
    - cyberinfrastructure
---
**_Updated: May 10, 2019_**

Today's advanced microscopes have revolutionized biology by giving scientists the ability to view 3D biological structures at the cellular and molecular level. However, that ability has created another problem: How to share and manage massive image files that can each be as large as 1 terabyte (TB), with possibly more than 50 TBs of data for the entire research project. (A terabyte equals 1 trillion bytes of data, or about 150 hours of HD quality recording).

![Photo: Jason Stein](https://renci.org/wp-content/uploads/2017/08/Jason-Stein-pic-300x300.jpeg "Jason Stein")

Jason Stein, an assistant professor in the department of genetics at UNC-Chapel Hill and a researcher at [UNC's Neuroscience Center](https://www.med.unc.edu/neuroscience), knows about the challenges of sharing 3D microscopy images. The [Stein Lab](http://www.steinlab.org/) studies how variations in the genome affect the structure and development of the brain, and in doing so, create risk for neuropsychiatric illnesses. One of the lab's research projects involves using high-powered optical microscopes to create extremely detailed images of mouse brains.

The microscope resolves super thin 3D slices of mice brains that allow the scientists to see the cellular structure of the brain tissue. The analysis of the images involves studying the relationship between the structural changes in the tissue and genetic variants associated with autism.

"The images we are analyzing are 1 micron thick, and a cell is about 10 microns, so we have many images with very detailed resolution," said Stein. "All that data has to go somewhere, but it can't fit onto individual hard drives. If you want to share an image with a colleague the process can take days or weeks."

Enter RENCI and its toolkit for working with scientific data called [HeLx](//renci.org/helx)—shorthand that stands for cross-disciplinary data science cyberinfrastructure. [HeLx](http://xdci.renci.org) provides scientists with a technology framework that enables their research communities to easily ingest, move, share, analyze and archive scientific data in all its varieties, including the 3D images of mouse brains created by Stein and his team. Through a collaboration called BRAIN-I (pronounced brain-ee), the Stein Lab uses RENCI's [HeLx](//renci.org/helx) framework to make high resolution microscopy images more manageable, and thereby more usable for research.

"We started by looking at variations in genes and their relevance to autism, now we are looking at how those genetic variations change the brain at the cellular level," said Stein. "As many other scientists are doing similar projects, it's important to be able to share and replicate your results and analyses."

**Let scientists concentrate on science**

By working with RENCI and using the HeLx framework, Stein can now quickly assemble many brain scans into massive image files, share and analyze those images, track and understand the origins of the data, and make the images and related analysis data discoverable to future researchers.

"BRAIN-I is a computational infrastructure for handling these huge images combined with a discovery environment where scientists can run applications and do their analysis," explained Mike Conway, a senior data science researcher at RENCI. "BRAIN-I deals with big data and computation in a user-friendly way so scientists can concentrate on their science."

The BRAIN-I system takes the 3D microscopy images and replicates that data onto a server at RENCI that runs the integrated Rule Oriented Data System ([iRODS](https://irods.org/)). Once ingested into an iRODS data grid, the data is validated, metadata tags are assigned to it and relevant inputs and processes are documented to provide an historical record of the data and its origins. Using iRODS, each image can be linked to its biological sample, tracked from its creation in the lab through final analysis, and made discoverable and reproducible for future research.

Analysis and visualization tools can be used in the BRAIN-I system thanks to a collaboration with [CyVerse](http://www.cyverse.org/), a cyberinfrastructure initiative based at the University of Arizona that offers an easy to use, web-based interface for handling computing and data analysis. Using the [CyVerse Discovery Environment](http://www.cyverse.org/discovery-environment) (DE), BRAIN-I users can launch analysis codes that are packaged as Docker images. Docker is a platform that packages software into a lightweight container that includes everything needed to run the software and is guaranteed to work the same regardless of who runs it, their location or the type of computer they are using.

The DE handles the execution of applications, manages the data that results from analyses, and captures information about data provenance and parameter metadata. This means that researchers can add any tools needed for their research and can share tools and data with other collaborators without leaving the DE environment.

Currently, the computational analysis takes place on a RENCI high performance computing system equipped with three Nvidia Tesla graphical processing units (GPUs), which greatly speeds up the time of data processing.

"When you put a GPU in a server it's about 20 times faster than a typical computing cluster without GPU nodes for certain types of computations," said Erik Scott, a RENCI senior research software developer. "That is why so many clusters today include GPU nodes."

Using BRAIN-I, Stein and his team have a way to share extremely large files with each other and collaborators, and manage and track that data from the microscope to scientific publication. The intuitive environment is also platform agnostic and allows for computational analysis. The use of iRODS also enables the user to apply data management policies specific to the lab and the research project while keeping the data secure.

Take a look at this [BRAIN-I visual](https://renci.org/wp-content/uploads/2017/08/TinyTake17-04-2017-10-21-02.mp4).  
_About the video: Preliminary image of half of a mouse brain where each dot represents a specific type of neuron, called an inhibitory neuron. The brain has been loaded into a virtual reality environment so that the researchers can explore the anatomy in three dimensions and walk through and around the mouse brain. At the beginning of the video, the front of the brain is to the right and the back is to the left. The cortex, or covering of the brain, is at the top where there is a lower density of inhibitory neurons._

BRAIN-I serves as a scientific test case for [HeLx](//renci.org/helx), which RENCI has designed to be usable by scientists in any field. The [HeLx](//renci.org/helx) framework can be reconfigured to accommodate different data management policies, metadata conventions and the use of different computational tools.

"RENCI, through the iRODS Consortium, and numerous research projects has made inroads in providing a data science cyberinfrastructure, and now we are making that infrastructure more comprehensive, generalized and scalable," said Ashok Krishnamurthy, deputy director at RENCI and a co-investigator on the BRAIN-I project. "Not every researcher has physical access to the best tools for doing their science and managing their data, but through [HeLx](//renci.org/helx) they can access a portal to get what they need from their desktop."

