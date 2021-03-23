---
title: "RENCI to demonstrate on-demand resources and provisioning at SC11"
slug: sc11-orca-demo
publishDate: 2011-11-01
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

<!-- tags: 
["BEN","Duke University","ESnet","GENI","NERSC","NLR","ORCA","SC11"]
-->

SEATTLE, Nov. 1, 2011--Scientists studying data or compute-intensive problems require high bandwidth and computational resources, often from heterogeneous systems at different sites.

But they don't need these resources all the time.

Ideally, a scientist studying the properties of new materials for producing solar energy, for example, would be able to grab a "slice" of a high-bandwidth pipeline, set their workflow in motion, grab compute resources in the cloud and then release those resources, so they could be used by other researchers in different configurations.

At the RENCI/North Carolina research exhibit at SC11, three demonstrations by the RENCI networking research group and Duke University will use ORCA, the Open Resource Control Architecture, to bring together cyber resources from multiple providers as needed to accommodate a scientific workflow.

ORCA was developed by Duke computer science professor Jeff Chase and his students with funding from the National Science Foundation. It is one of the experimental control frameworks for the NSF's Global Environments for Network Innovation (GENI) project. GENI is a virtual laboratory for networking experiments that will help researchers develop the tools and protocols that will define future internets. With funding from the Department of Energy Advanced Scientific Computing Research program and the NSF Software Development for Cyberinfrastructure program, researchers are adapting ORCA as an Infrastructure as a Service (IaaS) platform for serving the diverse needs of computational scientists.

The first demonstration will execute a scientific workflow by using ORCA to allocate a slice of computational resources from multiple cloud providers and bandwidth-provisioned network connections between provider sites. The workflow, managed by the Pegasus workflow management system, will use six serial applications, which will run on Condor clusters dynamically provisioned from clouds owned by RENCI in Chapel Hill, NC, and by Duke University in Durham, NC. The two clouds are connected by the Breakable Experimental Network (BEN), an experimental network that connects RENCI and its partner institutions at Duke, UNC-Chapel Hill and North Carolina State University.

A final large MPI application will run on several thousand processors on Hopper, a Cray Xe6 system at the National Energy Research Scientific Computing Center (NERSC) in Berkeley, CA.

ORCA will provision several network resources to move data across the continent, starting with BEN in North Carolina. From the southeastern U.S., the workflow will make its way to NERSC, first via the National Lambda Rail, then to the StarLight interconnect in Chicago, and finally via ESnet, the Energy Science Network, to NERSC.

"We will set up a collection of disparate resources in multiple clouds that never existed before and won't exist once the job is completed," said Ilia Baldine, director of the RENCI networking research group. "We plan to show that ORCA is an Infrastructure as a Service platform suitable for both GENI experimenters and computational scientists and that it is capable of provisioning resources as they are needed and then allowing them to return to their owners to be accessed by other users."

<strong>The science: new materials for solar energy</strong>

The scientific job will be a simplified version of a workflow used to apply effective forward design strategies to the discovery of new materials for solar energy. In inverse design, scientists start with a set of desired electronic properties for a material and then search for the best structure. A major step in the process is the calculation of a particular property that occurs as part of the forward chain. The workflow will examine the electronic structure of moieties of Ruthenium (Ru) molecules and attempt to determine their total energy. Ruthenium can absorb light in the visible spectrum, which makes it a good candidate for a material used in cost-effective solar energy cells. The work is supported under U.S-DOE SciDAC-e award DE-FC02-06ER25764, "Enhancing Productivity of Materials Discovery Computations for Solar Fuels and Next Generation Photovoltaics."

A related demonstration will use the ORCA framework to execute a Hadoop workflow on multiple clouds connected through bandwidth-provisioned network pipelines.  Hadoop is a software framework for data-intensive distributed applications. A third demonstration will take a closer look at a part of the first demonstration: the on-demand provisioning of computational infrastructure to stand up a Condor cluster in a networked cloud environment.

The demonstrations will take place in the RENCI booth (2942).  Demonstration times are:
<ul>
	<li>Monday, Nov. 14: 7 p.m. – 9 p.m.</li>
	<li>Tuesday, Nov. 15: 10:30 a.m. (demo 1), 11:30 a.m. (demo 2) and 1 p.m. (demo 3)</li>
	<li>Wednesday, Nov. 16: 10:30 a.m. (demo 1), 2 p.m. (demo 2) and 2:30 p.m. (demo 3)</li>
	<li>Thursday, Nov. 17: 10:30 a.m. – 12:30 p.m. (demos 1, 2 and 3)</li>
</ul>
ORCA was developed at the Duke University New Internet Computing Lab by computer science professor Jeff Chase and his students. RENCI and Duke are partners in a GENI project to evaluate ORCA as a future Internet control plane framework.

<strong>For more information:</strong>

<a href="https://ben.renci.org/index.php?Itemid=84">ORCA/BEN website</a>

<a href="http://www.networkedclouds.net">Networked Clouds website</a>

<a href="http://www.geni.net/">GENI Project website</a>

<a href="https://www.renci.org">RENCI website</a>
