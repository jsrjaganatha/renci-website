---
title: "Research made easier"
subtitle: The CyVerse discovery environment handles the technology of collaborative research so researchers can focus on the science
slug: research-made-easier
publishDate: 2016-06-15
author: 
featuredImage: null
groups:
    - 
projects:
    - irods
people:
    - brian-blanton
teams: 
    - 
collaborations:
    - irods-consortium
tags:
    - data-management
    - open-source
---

![Nirav Merchant, the principal investigator for the CyVerse project at the University of Arizona, talks about the CyVerse Discovery Environment at the iRODS User Group meeting, held June 8 and 9 in Chapel Hill, NC.](https://renci.org/wp-content/uploads/2016/06/Nirav1.jpeg)  
_Nirav Merchant, the principal investigator for the CyVerse project at the University of Arizona, talks about the CyVerse Discovery Environment at the iRODS User Group meeting, held June 8 and 9 in Chapel Hill, NC._

When experts involved in large collaborative research projects combine their expertise, their tools and technologies, and their knowledge about scientific research communities, the results can benefit all of science.

A case in point: The [DataNet Federation Consortium](http://datafed.org/) (DFC), a National Science Foundation-funded effort to develop data management infrastructure to support collaborative multidisciplinary research, brought together nine scientific and technological research teams across the U.S. to prototype cyberinfrastructure that serves data-driven collaborative science.  

Different partners brought different tools, technologies, and ideas into the DFC. RENCI and the DICE Center in the School of Information and Library Science (SILS) at UNC-Chapel Hill contributed [iRODS](http://www.irods.org), the open source data management platform that virtualizes data storage resources, allowing users to control their data regardless of where or on what device it is stored.

Another partner, the University of Arizona, brought the iPlant Collaborative into the DFC community. Launched as a cyberinfrastructure project to serve the plant sciences, iPlant has since evolved into [CyVerse](http://www.cyverse.org/), a robust cyberinfrastructure for data-driven research. Where the iPlant Collaborative served plant biologists and other life scientists, CyVerse provides cyberinfrastructure for a wide range of scientific disciplines. The CyVerse project uses iRODS to manage the large, often geographically distributed data sets created by scientists.

CyVerse powered by iRODS allows researchers to form collections whose properties can be managed independently of the choice of storage device. Descriptive metadata aids in data discovery and policies control processes such as backup, data migration, data conversion, and metadata extraction. Plugins control interactions with local technologies, enabling iRODS to interact with different technologies and storage systems at each institution. CyVerse uses [HTCondor](https://research.cs.wisc.edu/htcondor/index.html), a workflow management system for compute-intensive jobs, to manage workflows, which are integrated with data collections managed by iRODS and analysis applications managed by a containerization technology called [Docker](https://www.docker.com/).

"The result is a discovery environment that is oriented to actual researchers doing actual science," said Mike Conway, a data scientist and software developer with the DICE center. "What's also important is that the discovery environment was developed over several years with scientists in the loop from the start, so it has developed in a way that gives scientists what they need."

## A mechanism for getting stuff done

Using the CyVerse Discovery Environment, scientists can access data at different locations, select applications to manipulate and analyze their data, connect to computing resources at remote locations, run analyses, and manage their results. An iRODS data grid—essentially connected data resources running iRODS—manages all the data, keeps it secure, tracks provenance, and provides metadata tagging to make the data easier to find for future researchers.

Using Docker, researchers can run applications virtually through the discovery environment. Docker places everything needed to run a piece of software—the code, system tools, system libraries, etc.—into a "container," where it can be accessed by any user and run in any environment.

For example, RENCI Senior Scientist and Oceanographer Brian Blanton uploaded a version of [ADCIRC](http://adcirc.org/), a code used to model coastal storm surge, to a Docker container that can now be deployed in the CyVerse Discovery Environment.

"You can bring your own computations to the discovery environment," said Conway. "You can put your algorithm into a Docker container and save it so it is available any time you need it, plus other people can use it too. The collection of tools just keeps growing."

The CyVerse Discovery Environment, said Blanton, excites scientists with an interest in cyberinfrastructure and technology, but more importantly, it lends a hand to scientists who don't have the time or inclination to care about cyberinfrastructure.

"It connects researchers to the resources they need and, by using iRODS, it manages their data, all without the end user having to understand the underlying technology," said Blanton. "If you take away the CyVerse Discovery Environment, you need to work directly with the underlying technology and not that many scientists want to do that, nor do they have the time. In the simplest terms, this is a mechanism for getting stuff done."

[![View "Doscovery Environment" video](http://img.youtube.com/vi/r7m9nDAcYu0/0.jpg)](http://www.youtube.com/watch?v=r7m9nDAcYu0 "View video: Discovery Environment")

RENCI, which hosts and administers the hub that connects the research data grids of DFC partners, now uses the CyVerse Discovery Environment to manage data and support data-driven science for DFC members. The Odum Institute for Social Science Research, a UNC-Chapel Hill institute and a DFC partner, installed the CyVerse system as part of its [Virtual Institute for Social Research](https://renci.org/wp-content/uploads/2015/05/VISRWhite-Paper-No3_2015_highres.pdf) (VISR), a secure cyberinfrastructure for conducting social science research and managing its data.

Software developers with the DFC, DICE, the Odum Institute, and CyVerse are now working to make the discovery environment a stand-alone system that anyone can run. Their work will help to build an open source user and developer community to support the platform, much as the iRODS Consortium supports the continued development of iRODS.

"There is a major focus today on technology that is invisible to the user," said Reagan Moore, the principal investigator for the DFC, a data scientist at RENCI, and a professor in SILS. "We want to get to the point where a scientist can run an application from anywhere on any kind of system, access data from different locations and in different formats, run analyses, and get results without having to think about how it is happening."
