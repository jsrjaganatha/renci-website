---
title: "What to expect at the 2018 iRODS User Group Meeting"
slug: what-to-expect-at-the-2018-irods-user-group-meeting
publishDate: 2018-05-23
author: 
featuredImage: null
groups:
    - 
projects:
    - irods
people:
    - jason-coposky
teams: 
    - 
collaborations:
    - irods-consortium
tags:
    - data-management
    - open-source
---
_[![](https://renci.org/wp-content/uploads/2018/05/Screen-Shot-2018-05-23-at-11.10.41-AM-1024x410.png)

*Interested in iRODS? Register for the meeting at_ [_irods.org/ugm2018_](http://irods.org/ugm2018) 

DURHAM, NC - The worldwide iRODS user community will gather here June 5 – 7 for the iRODS User Group Meeting (UGM), three days of learning, sharing of use cases, and discussions of new capabilities that have been added to the integrated Rule Oriented Data System (iRODS) in the last year.

The meeting will take place at the Durham Convention Center and is sponsored by [Western Digital](http://www.hgst.com/life-sciences), [Quantum](https://www.quantum.com/customerstories), [DDN](https://www.ddn.com/), [RENCI](https://www.renci.org/), and the i[RODS Consortium](https://irods.org/about/), the membership-based foundation that leads development and support of iRODS. Meeting attendees will learn about new features such as storage tiering, automated ingest, and OpenID authentication, according to Jason Coposky, executive director of the iRODS Consortium.

The first version of the iRODS storage tiering framework was released in February and allows iRODS to automatically move data between identified tiers of storage within a configured tiering group based on performance, availability, and data recovery requirements. Using this new framework, users can label selected storage resources with metadata tags to define their place in a storage tiering group as well as how long the data should reside in that tier before migrating to the next tier.

The iRODS automated ingest framework provides an enterprise solution that solves two major data management challenges: putting existing data under management; and ingesting new incoming data from disparate sources. Based on the Python iRODS client and [Redis Queue](http://python-rq.org/), a Python library for queueing and processing jobs, the framework can scale up to meet the demands of data coming off instruments, satellites, or parallel filesystems.

The OpenID authentication plugin allows users to login to iRODS using their existing OpenID credentials. The OpenID system is a method for using a single username and password to sign in to multiple accounts. With the new plugin, iRODS now supports OpenID, GSI, Kerberos, PAM, and native password authentication on a per user basis.

"A lot of our efforts in the last year have focused on improving, streamlining and simplifying the user experience for particular enterprise use cases," said Coposky.  "We are now using iRODS as the framework to create and ship flexible, off the shelf solutions."

As always with the annual UGM, users will offer presentations about their organizations' deployments of iRODS. This year's meeting will feature 21 talks from users in the U.S. and Europe. Among the use cases and deployments to be featured are:

*   **Implementing a Storage Abstraction Service with iRODS,** _Bibliothèque nationale de France (BnF, National Library of France)._ As part of its efforts to preserve, enrich, and make available the national heritage of France, BnF developed a system called SPAR (Système de Préservation et d'Archivage Réparti) to support and structure its digital preservation efforts. SPAR is now responsible for well over 8 million digital packages, which could be books, musical albums, videos, etc. SPAR uses a Storage Abstraction Service, or SAS, implemented with iRODS. SPAR with iRODS allows easy and transparent duplication of data among remote sites, so that if data is lost, entire documents can be recovered.
*   **National Institute for Environmental Health Sciences (NIEHS) Data Commons**, _NIEHS, U.S. National Institutes of Health._ The NIEHS Data Commons is a system for accessing, sharing, and integrating research data and metadata. An iRODS data grid provides the Commons with policy-based data management to support ingest, indexing, provenance tracking, and analysis of NIEHS data sets. To develop the Commons, NIEHS collaborates with the iRODS Consortium on issues such as the [MetaLnx](https://metalnx.github.io/) web interface, message queue-based indexing, metadata templates, and virtual collections.
*   **The Brain Image Library**, _Pittsburgh Supercomputer Center, Carnegie Mellon University._ The Brain Image Library (BIL) is a national public resource in the U.S. enabling researchers to deposit, analyze, mine, share, and interact with large data sets of brain images. It is part of a comprehensive brain cyberinfrastructure initiative by the U.S. National Institutes of Health. The BIL uses iRODS for data registration and metadata management for brain image data sets uploaded to the library. A team at the Pittsburgh Supercomputer Center, which is home to the library, has deployed a prototype iRODS filesystem scanner to rapidly register large multi-terabyte trees of microscopy data into the BIL iRODS database.
*   **iRODS for Clinical and Instrument Data Lifecycle Management and Archiving**, _Genentech Roche Molecular Systems_. Genetech, the biotechnology company owned by the Swiss multinational healthcare corporation Roche, will present on their uses of iRODS automated ingest, the storage tiering framework, and data virtualization capabilities. Their use cases for these features include: integration with a large data transfer platform to support data replication; clinical data management to enable easy access to data and to streamline data management; and management of the instrument data lifecycle.

**About the iRODS Consortium**

The iRODS Consortium is a membership organization that supports the development of the Integrated Rule-Oriented Data System (iRODS), free open source software for data discovery, workflow automation, secure collaboration, and data virtualization. The iRODS Consortium provides a production-ready iRODS distribution and iRODS training, professional integration services, and support. The world's top researchers in life sciences, geosciences, and information management use iRODS to control their data. Learn more at [irods.org](http://irods.org/). The iRODS Consortium is administered by founding member RENCI, a research institute for applications of cyberinfrastructure at the University of North Carolina at Chapel Hill. For more information about RENCI, please visit [www.renci.org](https://www.renci.org/).
