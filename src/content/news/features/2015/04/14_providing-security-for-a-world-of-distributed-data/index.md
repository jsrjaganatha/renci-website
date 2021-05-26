---
title: "Providing security for a world of distributed data"
slug: providing-security-for-a-world-of-distributed-data
publishDate: 2015-04-14
author: 
featuredImage: null
groups:
    - software-architecture
projects:
    - secure-research-space
    - irods
    - nc-tracs
people:
    - michael-shoffner
    - cschmitt
teams: 
    - 
collaborations:
    - 
tags:
    - data-management
---
CHAPEL HILL, NC - Every spring, the UNC-Chapel Hill community showcases its most promising and innovative early-stage startups at an event called the [UNC Innovation Showcase](http://innovate.unc.edu/event/unc-innovation-showcase-2/#.VSgj-RPF_LG). The event illustrates how university research can lead to innovative products that benefit consumers, healthcare professionals, and many business sectors.

Over the years, a number of new companies nurtured by RENCI have been featured at the showcase, and this year RENCI again had a presence, not through a startup but with a presentation of a new technology called Secure Research Space (SRS).

Developed at RENCI initially to help medical researchers who use sensitive data in their work, a patent for SRS is now pending. That patent will belong to RENCI and its collaborators who helped develop and test the technology: UNC's [School of Information and Library Science](http://sils.unc.edu/), the [NC TraCS Institute](http://tracs.unc.edu/), [Duke University](http://www.duke.edu/), and [UNC Health Care](https://www.unchealthcare.org/site). 

## Fighting back against health care hacks

SRS launched in 2009 as a project to enable the Carolina Data Warehouse for Health (CDW-H), a database of clinical health records for all UNC Hospitals patients, to provide medical researchers and healthcare professionals secure access to patient records. At that time, UNC Health Care—through the new North Carolina Translational and Clinical Science (NC TraCS) Institute—wanted to develop a system that would give researchers access to CDW-H data but minimize the riskof data leakage that could compromise personal privacy and result in noncompliance with federal regulations. 

![Michael Shoffner speaks about Secure Research Space](https://renci.org/wp-content/uploads/2015/04/Shoffner2-300x200.jpg "Michael Shoffner speaks about SRS")
>*RENCI's Michael Shoffner explains the Secure Research Space technology to attendees of the UNC Innovation Showcase, held on the UNC-Chapel Hill campus April 9. The showcase highlights startups and new technologies launched as the result of UNC research projects.*

With funding from NC TraCS, a research team led by RENCI Senior Research Software Architect Michael Shoffner created what was then called the Secure Medical Research Workspace. That prototype evolved into today's SRS.

The need was obvious and has become even more critical over the past six years: Since 2009, the data of more than 120 million people has been compromised in more than 1,100 breaches at organizations that handle protected health data, according to reports from the U.S. Health and Human Services Office for Civil Rights.

"Worrying about data breaches keeps CIOs up at night," said Shoffner. "A data breach puts jobs on the line and can cost billions in regulatory penalties and lawsuits, not to mention the pain caused to those whose sensitive data is released. And with data becoming more distributed, the risk, and the potential pain becomes greater."

## Technology to address the pain

Although it was launched in the medical research community, the SRS solution can be applied to any research or business domain that uses sensitive data. First, a virtual environment that mimics the look and feel of a desktop computer is set up as a virtual machine on a server. That virtual workspace contains software tools commonly used in data-intensive research, including Microsoft Office and SAS analytics applications. Unlike a typical desktop, the virtual workspace is a secure, controlled environment designed to prevent data leakage. Shoffner refers to the system as a "roach motel for sensitive data: the data can check in but it can't check out."

For example, if a researcher tries to take data out of the secure virtual space, the system triggers an alert and an administrator steps in to track the problem. SRS traps the sensitive data within the virtual workspace and an audit trail that tracks the issue from start to finish is preserved. Once a researcher finishes a research project, SRS erases the virtual workspace, thereby erasing the sensitive data.

SRS goes well beyond simply containing data to enable secure data sharing across organizations. Each organization participating in a research project that involves shared data using SRS maintains total control over its portion of the data. This feature of SRS is based on the policy-based data management capabilities of [iRODS](http://www.irods.org), the data management system supported by RENCI and the [iRODS Consortium](http://irods.org/consortium/). 

So far, SRS has been prototyped with data sets within the UNC Health Care systems, with Cancer Survivorship Cohort Studies data in collaboration with [SAS](http://www.sas.com/en_us/home.html), and for UNC research studies that require maximum security. The U.S. Department of Homeland Security has also tested a research prototype of the system.

"The wealth of medical and other personal data available today means tremendous opportunities to advance personalized medicine, medical research, businesses relations with their customers, and more," said Charles Schmitt, RENCI's director of informatics and software development. "But there are also risks when using sensitive data. If SRS enables knowledge discovery by minimizing the risk of data leakage, then we've made an important impact."

At this time the research team is looking for partners to help them test, improve, and enhance the SRS. For more information, see the [SRS spec sheet](https://renci.org/wp-content/uploads/2015/04/12-0096-Marketing-Doc-022514-1.pdf) or contact the UNC-Chapel Hill [Office of Technology Development](http://research.unc.edu/otd/) at 919-966-3929.
