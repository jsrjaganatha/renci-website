---
title: What to expect at the 2020 iRODS User Group Meeting
subtitle: iRODS users and consortium members will gather virtually June 9-12
slug: irods-ugm-2020-expectations
spotlight: true
publishDate: 2020-06-08
author: ["stephanie-suber"]
featuredImage: null
projects:
  - irods
people:
  - jason-coposky
groups:
  -
teams:
  - 
collaborations:
  - irods-consortium
tags:
  - data-management
---

The worldwide [iRODS](https://irods.org/) user community will connect online this week for the 12th Annual iRODS User Group Meeting – three days of learning, sharing of use cases, and discussions of new capabilities that have been added to iRODS in the last year.

The virtual event, sponsored by the University of Arizona, Cloudian, and RENCI, will be a collection of live talks with Q&A. An audience of nearly 300 participants representing dozens of academic, government, and commercial institutions is expected to join.

"The annual iRODS User Group Meeting has always opened our eyes to the impact of iRODS worldwide, and this year's meeting will be no different," says Jason Coposky, Executive Director at iRODS. "Although we are moving to a virtual platform, we intend to provide a similar experience to years past by ensuring there are plenty of opportunities for networking, discussion, and collaboration."

Meeting attendees will learn about new updates such as hard links, direct streaming, and policy composition, according to Coposky. On June 12, the last day of the meeting, the Consortium team will run an iRODS Troubleshooting session, where participants can receive one-on-one help with an existing or planned iRODS installation or integration.

Last month, iRODS Consortium and RENCI [announced the release of iRODS 4.2.8](https://irods.org/2020/05/irods-4-2-8-is-released/). A notable addition within the release was a new C++ rule engine plugin that provides an iRODS system the ability to convey hard links to its users. An iRODS system stores a hard link when replicas of two different iRODS data objects with different logical paths share a common physical path on the same host. When this occurs, metadata is added to both logical data objects for bookkeeping.

This year's update to the iRODS S3 plugin shares the design and engineering underway to provide direct streaming into and out of S3-compatible storage. This rewrite uses the new iRODS IOStreams library and in-memory buffering to make efficient multi-part transfers.

With the addition of a continuation code to the rule engine plugin framework, iRODS users are now able to configure multiple policies to be invoked for any given policy enforcement point. The policy developers now have the ability to separate the policy enforcement points from the policy itself. Given this new approach, multiple policies can be configured together, or composed, without the need to touch the code.

As always with the annual UGM, in addition to general software updates, users will offer presentations about their organizations' deployments of iRODS. This year's meeting will feature 23 talks from users around the world. Among the use cases and deployments to be featured are:

- **SmartFarm data management**, _Agriculture Victoria_. Data management challenges increase with large datasets generated with new sensing technologies. This requires the development of standardised, automated, on line, authenticated and verifiable standard processes for uploading data for storage and analytics on computing facilities. Agriculture Victoria undertakes research and development in animal and plant production, chemistry, spatial information, soil and water science. Working with iRODS, Agriculture Victoria are piloting new data management workflows of 'SmartFarm' data, and this talk will discuss lessons from small, medium, and high data Agriculture SmartFarm use cases using edge computing and collaborative data infrastructure and the flow on development of capability for AVR researchers.

- **Data management in autonomous driving projects**, _Aptiv_. Aptiv is a global technology company that develops safer, greener, and more connected solutions that enable the future of mobility. The company deployed iRODS in production around 1.5 year ago, together with the start of the development phase of a big project on autonomous driving. The researchers will share how iRODS has assisted in tracking and migrating data between partners and within engineering groups responsible for data collection, manual and automatical analysis.

- **Building a national Research Data Management (RDM) infrastructure with iRODS in the Netherlands**, _SURF_. In the Netherlands, many universities are looking at iRODS to support their researchers, as they recognize the powerful potential of the tool in two areas: support for secure cooperation, and support over the entire research data life cycle. SURF, a national organization providing IT support and infrastructure for universities, is now working closely together with six universities towards building a national RDM infrastructure based on iRODS. Researchers from SURF will share a case study for the use of iRODS, not for a specific research group, but for an entire nation to enhance the support of their researchers by working together on this iRODS based infrastructure.

- **Keeping pace with science: The CyVerse Data Store in 2020 and the Future**, _CyVerse / University of Arizona_. CyVerse, hosted at the University of Arizona, provides a national cyberinfrastructure for life science research as well as training scientists in using such high performance computing resources.This talk will describe the current features of the CyVerse Data Store and plans for its evolution. Since its inception in 2010, the Data Store has leveraged the power and versatility of iRODS by continually extending the functionality of CyVerse's cyberinfrastructure. These features include project-specific storage, offsite replication, third-party service and application integrations, several data access methods, event stream publishing for inderic-xing, and optimizations for accessing large sets of small files.

Registration for the Virtual iRODS UGM will remain open throughout the week. See the [registration page](https://irods.org/ugm2020/) for details.

### About the iRODS Consortium

The iRODS Consortium is a membership organization that supports the development of the integrated Rule-Oriented Data System (iRODS), free open source software for data virtualization, data discovery, workflow automation, and secure collaboration. The iRODS Consortium provides a production-ready iRODS distribution and iRODS training, professional integration services, and support. The world's top researchers in life sciences, geosciences, and information management use iRODS to control their data. Learn more at [irods.org](https://irods.org/).

The iRODS Consortium is administered by founding member RENCI, a research institute for applications of cyberinfrastructure at the University of North Carolina at Chapel Hill.
