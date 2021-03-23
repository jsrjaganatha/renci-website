---
title: "Workflows enhance NC bioportal and assist biology researchers"
slug: workflows-enhance-nc-bioportal-and-assist-biology-researchers
publishDate: 2007-03-03
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
    ["bioinformatics"]
---
The end results of research in genetics, proteomics and other fields that use bioinformatics are often dramatic: discoveries that reveal the causes of cancer or that lead to new drugs and treatments. But the research process can be redundant, time consuming and tedious.

Enter workflows, technology that automates many redundant processes used in analyzing biological problems, such as launching a group of applications and moving data among applications. Workflows aim to take the "busy work" out of science. Instead of reentering data in countless different formats to accomplish different steps in problem solving, the scientist simply loads the data into the front end of the workflow and lets the underlying infrastructure handle the busy work.  

Workflows are one of the newest features of the North Carolina/TeraGrid Bioportal, a shared, extensible web portal environment developed by RENCI that brings together more than 140 computational tools and applications and many standard biological data sets. Responding to the needs of Bioportal users for broader, more sophisticated biological research capabilities, RENCI research programmers began integrating workflows into the Bioportal last year.

When using a workflow, the Bioportal user sees a single meta application wrapped in the familiar Bioportal interface. Under the hood, however, ther's a whole lot of analysis going on. The Bioprtal's first workflow, called Gene2Life, captures a sequence of bioinformatics analysis steps into a single meta step, saving the user time and, quite possibly, frustration. Below is a simplified breakdown of Gene2Life operations. Over the next few months, RENCI researchers will add additional workflows to the Bioportal and finetune the Bioportal infrastructure to allow users tocreate and deploy their own customized workflows.

<strong>Gene2Life overview:</strong> Gene2Life uses as input a DNA or protein sequence and compares that sequence to current databases of known sequences to determine its closest relatives, generating a "tree" to depict relationships.
<ul>
	<li>User logs on to the Bioportal and specifies a DNA or protein sequence of interest</li>
	<li>Sequence is supplied to BLAST (Basic Local Sequence Alignment Tool), a tool for rapid searching of nucleotide and protein databases</li>
	<li>Sets of results are analyzed for their degree of matching to the starting sequence—the good matches are retained,</li>
	<li>Workflow divides the BLAST from the input data and fetches BLAST-identified sequence identities from the Internet.</li>
	<li>Fetched and input sequence are globally aligned using a clustalW process on the grid.</li>
	<li>Globally aligned results are sent to a parsimony program (dnapars or protpars) and then to a drawing program (drawgram) to display the phylogenetic tree.</li>
</ul>
