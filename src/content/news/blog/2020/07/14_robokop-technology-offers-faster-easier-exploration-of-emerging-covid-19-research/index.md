---
title: "ROBOKOP technology offers faster, easier exploration of emerging COVID-19 research"
slug: robokop-technology-offers-faster-easier-exploration-of-emerging-covid-19-research
spotlight: false
publishDate: 2020-07-14T14:33:42
author: ["jayasree-jaganatha"]
featuredImage: null
groups:
    - data-science-and-analytics
projects:
    - data-translator-robokop
people:
    - chris-bizon
teams: 
    - 
collaborations:
    - 
tags:
    - covid-19
    - data-analysis
---

![ROBOKOP Technology offers fast, easier, exploration of emerging COVID-19 research](https://renci.org/wp-content/uploads/2020/07/ROBOKOP-Blog-01-1024x512.png)

As scientists around the world urgently work to understand the best ways to diagnose and treat COVID-19, quick and easy access to the latest research findings and rapid exploration of emerging data have become critical. RENCI scientists have developed new tools and approaches that can help researchers make important discoveries and answer key questions about COVID-19 in record time.

"These new approaches allow scientists to blend together novel observations and information from recent papers with previously known information that can be used to inform, contextualize, and test new COVID-19 information," said Chris Bizon, director of analytics and data science at RENCI.

### Finding associations in the literature

Literature co-occurrence databases help automate knowledge gathering by reveling meaningful insights based on patterns and strengths of links between keywords in research papers. RENCI researchers used the Semantic Scholar Open Research Dataset ([CORD 19](https://www.semanticscholar.org/cord19))—a set of research papers covering COVID-19 and earlier coronaviruses—to create literature co-occurrence databases for COVID-19.

"Because the literature on COVID-19 is so new, the structured data we would prefer to use does not yet exist," said Bizon. "We, therefore, used text mining to extract less precise associations that can be integrated into previously well-known data."

Bizon and colleagues began by applying Scigraph natural language processing to reveal biomedical entities such as symptoms and drugs in the CORD 19 literature and then determined which entities were frequently mentioned together. For example, if the COVID-19 spike protein often appeared in the same sentence as a certain chemical, the database would indicate a possible relationship between the two. They also performed this analysis using biomedical entities found by SciBite, a company offering semantic analytics software.   The resulting co-occurrence information forms a graph of entities that can be used directly or integrated into other tools that aid in rapid data exploration, such as RENCI's Reasoning Over Biomedical Objects linked in Knowledge Oriented Pathways ([ROBOKOP](https://robokop.renci.org/)) question-answering system.

### Bringing information together

ROBOKOP is a biomedical question-answering system based on a knowledge graph, meaning that it expresses data as a collection of nodes—such as genes and diseases—and edges that represent the relationships between the nodes. ROBOKOP uses multiple open biomedical databases to explore links between various biomedical data types. For example, it can be used to examine connections between a disease and a drug and then explore which genes might be involved in that relationship.

"Because of their structure, knowledge graphs are excellent at bringing together heterogeneous information into a single system so that it can be more easily explored," said Bizon.  "Two previously unconnected pieces of information will sometimes produce an 'aha' moment or unexpected discovery that wouldn't be obvious otherwise."

RENCI scientists have created a special COVID instance of ROBOKOP called COVID-KOP by integrating the system's original knowledge graph with the CORD-19 literature co-occurrence graphs they developed, viral protein functions, and hand-curated symptom information. This combination gives scientists access to a vast amount of information about human genes, chemicals, and respiratory diseases and allows them to ask important questions about how that information relates to COVID-19\. For example, researchers can use COVID-KOP to identify drugs that might be repurposed as a COVID-19 treatment or to uncover biochemical pathways that might be targeted with newly developed drugs.  

"This work is based on our participation in the [NIH NCATS Data Translator project](https://ncats.nih.gov/translator/about)," said Bizon. "The tools we developed as part of that consortium provided us with the capability to rapidly integrate data and produce a valuable data resource."

The Scigraph and SciBite co-occurrence graphs are available at [automat.renci.org](https://automat.renci.org/).

The new COVID-19 version of ROBOKOP is available at [covidkop.renci.org](http://covidkop.renci.org/).

_By Nancy Lamontagne, Senior Science Writer, Creative Science Writing_
