---
title: "No Exit"
slug: no-exit
publishDate: 2011-06-03
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

[vimeo 24627418]

<em>RENCI team tackles the challenge of securing sensitive medical research data </em>

For medical researchers, clinical data means opportunities and risks: Opportunities for experiments and analyses that will lead to new knowledge about human diseases; and risks because the burden of keeping personal medical data secure usually falls on the shoulders of the researchers.

Medical researchers and the clinicians who collect medical data in hospitals and clinics want to work together to advance medical research, says Michael Shoffner, a RENCI senior research software engineer and adjunct faculty member in the School of Information and Library Science (SILS) at UNC Chapel Hill.

"The challenge is to get that medical data to the researchers while minimizing the risk that it either accidentally gets out or in some other way escapes from the containment it needs to be in to protect personal privacy and comply with regulations," says Shoffner, the RENCI project lead and architect for a multidisciplinary effort at UNC Chapel Hill to create a secure, controlled environment where researchers can use sensitive medical data.

Typically when researchers use test results, medical images, doctors' notes and other clinical data in their research, they obtain that data on a disk or another physical storage device, take it back to their lab and use it in experiments. The clinical data is not in a secured, controlled setting and could be lost, damaged, inadvertently picked up by another researcher or accidentally thrown away.

[caption id="attachment_7688" align="alignright" width="269"]<a title="The secure medical research workspace environment involves four roles, all centered around sensitive medical research data: 1) The researcher, who requests sensitive data for experiments and analysis; 2) A business analyst, who has access to that data, and provisions it to the workspace; 3) A system administrator, who receives a request from the analyst to create a virtual workspace; 4) A security auditor, who monitors virtual workspace usage for data policy violations." href="https://www.renci.org/wp-content/uploads/2011/06/SMW-Small-diagram.jpg"><img class="size-medium wp-image-7688 " title="SMW Small diagram" src="https://www.renci.org/wp-content/uploads/2011/06/SMW-Small-diagram-269x300.jpg" alt="" width="269" height="300" /></a> The secure medical research workspace environment involves four roles, all centered around sensitive medical research data: 1) The researcher, who requests sensitive data for experiments and analysis; 2) A business analyst, who has access to that data, and provisions it to the workspace; 3) A system administrator, who receives a request from the analyst to create a virtual workspace; 4) A security auditor, who monitors virtual workspace usage for data policy violations.[/caption]

Shoffner, Phil Owen, a RENCI information technology developer, and Xiaoshu Wang, a RENCI senior biomedical researcher, comprise the technical team for what is known as the Secure Medical Research Workspace project. The project is funded by the North Carolina Translational and Clinical Science (NC TraCS) Institute, the Clinical Translational Science Award (CTSA) at UNC Chapel Hill, and led by Javed Mostafa, director of the NC TraCS Biomedical Informatics Core and a professor of information science at UNC Chapel Hill.  UNC Research Computing, part of Information Technology Services, also plays a key role in the project.

The CTSA program is led by the National Center for Research Resources, part of the National Institutes of Health. Fifty-five medical research institutions across the country participate in the CTSA consortium and share a vision to reduce the time it takes for laboratory research discoveries to become new treatments.

The RENCI team consults with other project partners to develop the technical requirements for a secure medical workspace environment and produces and deploys prototypes as well as the final production-ready virtual workspace environment.

The researcher's secure "workspaces" exist as virtual machines on a server, explains Owen, and contain all the software tools that researchers would use to analyze their data, including the Microsoft Office suite and SAS analytics applications.  If a researcher needs another tool not included in the standard workspace, he or she can request that it be added to their virtual environment.

"It's a virtual environment that mimics what a desktop computer would do," says Owen. "The idea is to isolate the sensitive data into a workspace so that it can't exit that workspace either accidentally or maliciously."

The goal is data leakage prevention, or DLP as data security professionals call it. Creating secure, controlled virtual environments for research is one way to plug data leaks. The RENCI team deploys and enhances commercial DLP software that inspects content entering and leaving a virtual workspace and uses rules, often tied to HIPPA privacy rules and other government regulations, to determine whether that content is sensitive and should be protected.

"For example if (a researcher) is downloading or uploading data out of the secure research environment and that data contains something like credit card numbers or patient social security numbers, that would trigger a rule and implement actions," says Wang. "That data would not be able to get out."

It's a process the RENCI team jokingly compares to a roach motel—data can check in, but it won't check out. Jokes aside, they understand the importance of their work.

"The security of data is of paramount importance for the protection of patients, the protection of researchers and compliance with regulatory requirements," says Shoffner. "The driver behind this solution is to provide an environment that will do that and also help the researchers get their work done."

<strong>Project Team Members</strong>
Javed Mostafa, Brent Lamm, NC TraCS
Ray Dorio, Pallavi Pratapa, NC TraCS and UNC Research Computing
Casey Averill, Patrick Dreher, Phil Owen, Charles Schmitt, Eric Scott, Michael Shoffner, Xiaoshu Wang, RENCI
Ken Langley, UNC School of Medicine

<strong>More information:</strong>

<a href="http://tracs.unc.edu/">NC TraCS Institute</a>

<a href="http://sils.unc.edu/">UNC SILS</a>

<a href="http://www.med.unc.edu/">UNC School of Medicine</a>

RENCI Brown Bag Presentation: <a href="../news/videos/secure-medical-workspace">Developing a Secure Medical Research Workspace</a>

<!-- old tags

["informatics","NC TraCS","secure medical research workspace","SILS","virtual environments"]

-->
