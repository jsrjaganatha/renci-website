---
title: "RENCI collaborates with UNC medical researchers on system for using genomic data to improve health outcomes"
slug: renci-collaborates-with-unc-medical-researchers-on-system-for-using-genomic-data-to-improve-health-outcomes
publishDate: 2016-05-03
author: 
featuredImage: null
groups:
    - clinical-informatics
projects:
    - 
people:
    - 
teams: 
    - 
collaborations:
    - 
tags:
    - data-analysis
---
In genomics and other medical fields, researchers are now able to capture and store large amounts of data from electronic medical records (EMRs). But while capturing massive amounts of medical data is becoming common, figuring out how to analyze, interpret and use it in ways that benefit the health of patients remains challenging.

To meet the needs of researchers and clinicians eager to translate data into better health outcomes, researchers at RENCI and the University of North Carolina School of Medicine developed a prototype Genomic Clinical Decision Support System (CDSS). The framework so far has been used in genomic research projects, such as NCGENES, a project led by the UNC genetics department to evaluate the use of whole exome sequencing as a diagnostic tool in clinical settings. However, the developers of the CDSS have conceptualized it to be used in other data-intensive medical fields, such as medical imaging. It is designed to provide clinicians with a dynamic visual snapshot of the genomic data most relevant to an individual patient and to capture, store, and curate more comprehensive genomic data so it can be easily accessed and used in future research and clinical practices.

To capture patient-centric data, such as a list of genomic variants that could potentially guide a patient's care, the Genomic CDSS draws on evidence from published literature and databases and emphasizes genetic variants with known utility, pathogenicity, and actionable treatment options. The system also uses a patient's health status and demographics to guide the construction of a variant list. To archive data that could be of future value, the CDSS captures and stores whole genome and exome sequencing data, attaches extensive metadata (e.g., information on how the data was collected, quality metrics, and provenance), and makes it accessible for future clinical and research needs.

Implementing such a system involved numerous challenges. Technical challenges included the size of sequencing data sets, the need to provision and continuously update reference data, integration with legacy systems, network idiosyncrasies, distributed and uncoordinated compute resources, and diverse and evolving computational workflow needs. In addition, the development team needed to deal with internal resistance to automated workflows, the often distributed decision making process at research universities, and legal and administrative concerns about privacy and security when dealing with sensitive patient data.

The researchers document their efforts to create and deploy the Genomic CDSS in a paper just published in eGEMS (Generating Evidence and Methods to improve patient outcomes).
