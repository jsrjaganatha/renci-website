---
title: "Making genomes make sense"
slug: making-genomes-make-sense
publishDate: 2012-07-27
author: ["stephanie-suber"]
featuredImage: null
groups:
    - 
projects:
    - 
people:
    - chris-bizon
    - phil-owen
    - jason-reilly
    - erik-scott
teams: 
    - 
collaborations:
    - 
tags:
    -
---

CHAPEL HILL, NC - Sometimes, technology progresses faster than our ability to take advantage of it. The Internet was the domain of the U.S. Department of Defense and a handful of scientists before enterprising college students and technology geeks figured out how to make money off it and launched the "dot.com" era. Similarly, in only a decade, technology has transformed the sequencing of a whole human genome from a scientific milestone costing about $3 billion to a relatively routine affair costing several thousand dollars. But using this wealth of genomic data to improve healthcare and human health has proven to be a tougher nut to crack. 

[![Play video of Jim Evans interview](https://img.youtube.com/vi/l4B2gF1h6mo/0.jpg)](https://www.youtube.com/watch?v=l4B2gF1h6mo "Jim Evans Interview")

Whole genome sequencing—examining in detail all of an individual's DNA—has the potential to help researchers and clinicians diagnose genetically caused diseases, pinpoint people at high risk for diseases before they show symptoms, and guide new disease treatments, according to Jim Evans, MD, PhD, and Bryson Professor of Genetics and Medicine at the University of North Carolina School of Medicine.

"The problem today isn't the sequencing itself," said Evans. "The real challenge is taking this massive amount of data and making sense of it."

Evans, who also holds an appointment at UNC's Lineberger Comprehensive Cancer Center, heads a project called NCGENES, an acronym for North Carolina Clinical Genomic Evaluation by NextGen Exome Sequencing. NCGENES aims to develop processes and a supporting cyberinfrastructure that will allow researchers, clinicians, and patients to take full advantage of whole genome and whole exome sequencing (the exome is the term used to describe the full set of exons, or protein-coding parts, of the genome).  The researchers hope that by studying the variants in peoples' genes they will better understand observable characteristics and conditions.

The project involves researchers in the UNC Department of Genetics, the Department of Social Medicine, and the UNC Molecular Genetics Laboratory, the resources of UNC's Information Technology Services Research Computing, and RENCI's expertise in building secure, robust cyberinfrastructure and analytics systems.

As Evans explained, traditional genetic testing as a tool in diagnosing and treating diseases usually involves gene-by-gene analysis, a process that is too costly and time consuming to be practical for analysis of an entire genome.  NCGENES streamlines that process by focusing the analysis on genes known to be involved in specific diseases.

"We don't yet understand a lot of what makes up a person's whole genome," said Evans. "Instead of sifting through a person's entire genome, we are focusing on the genes that we do understand—those that, if mutated, will result in the onset of specific diseases."

Over four years, about 750 patients from UNC hospitals and clinics will have their genomes sequenced and analyzed through NCGENES.  The study will enroll undiagnosed patients within three broad disease categories with likely genetic causes: neurodevelopmental disorders in children, hereditary cancer susceptibility, and genetic cardiac disorders. The analysis will first look for diagnostic information—mutations in genes known to cause specific disorders. The researchers also will look for medically relevant incidental findings by examining other genes known to influence or cause disease.

## To know or not to know

By focusing on well-known and understood genetic markers, the researchers hope to implement a simpler, scalable method for finding useful health related information in the huge volume of data that comprise a human genome. In turn, that information can be used to make evidence-based diagnoses and treatment decisions.

But even a focused analysis of human genes poses major analytic challenges, so the research team has developed a system for organizing their findings by categories.  This analytic framework, implemented by RENCI bioinformatics experts, allows an entire genome to be quickly screened for incidental findings that are likely to be clinically relevant.

"Properly sorting and interpreting incidental findings is very important in medicine generally," said Evans. "If you have a chest x-ray done due to a suspicion of pneumonia and the x-ray shows a tumor in your lung, your doctor doesn't ignore it because that wasn't what she was looking for. Sometimes we will find incidental information and the condition will be treatable. However, other times what we find could be quite upsetting because there is no treatment."

Because NCGENES could reveal genetic information that has lifelong impacts on the study subjects, all patients participating in NCGENES will receive education about the implications of their genome analysis.

By classifying findings into categories, the researchers hope to give patients and their physicians a tool for making informed choices about what they would want to know about disorders.  The system classifies mutations associated with treatable or preventable diseases as "medically actionable," and these results, along with the results of diagnostic analysis, will be returned to the patients and their physicians.  Other mutations associated with untreatable conditions are deemed "non-medically actionable" and will not be routinely reported to participants.

One arm of the NCGENES study will examine how patients respond to potentially troubling genetic findings by asking some study participants to choose whether they want to receive incidental findings about untreatable conditions, said Evans. That research will gather data on what people want (and don't want) to know about their genetics, what factors influence their decisions, and how information about genetic diseases changes peoples' attitudes and behaviors.

## A step toward personalized medicine

Obtaining, sequencing and analyzing DNA samples from human subjects involves the work of multiple laboratories, careful tracking of sensitive personal information, and an analysis system that categorizes genetic material based on the parameters established by the researchers.

"With RENCI's help, we are building a framework for dealing with all of these data in a way that is practical and translatable to a clinical setting," said Jonathan Berg, MD, PhD, assistant professor in the UNC genetics department, a Lineberger Center researcher and a Co-PI on the project. "We want to create a system for genetic variant analysis that will hopefully be a step toward personalized medicine."

RENCI Senior Research Scientist Chris Bizon set up a database of human genome reference data including all known genetic variants, some of which are related to diseases. Bizon also leads the effort to develop the analysis system for the sequenced genomes, which involves facilitating the diagnostic assessment of genes related to participants' conditions as well as organizing genes into categories, or "bins," related to incidental findings.

The reference database will be updated continually as new public resources become available.  The lists of genes used for the diagnostic and incidental analysis also will be updated as scientists learn more about genes that cause disease, said Berg.  As the database grows, patient genomes will be reanalyzed so that previously unknown or untreatable genetic diseases can be diagnosed and treated.

In addition to the analysis engine, RENCI Research Software Architect Phil Owen developed a workflow management system that tracks every NCGENES patient from their initial interview to follow up visits and genetic counseling, and every DNA sample from the first blood draw to biospecimen processing to sequencing at the UNC High Throughput Sequencing Facility.

The workflow management system alerts staff at labs on when to expect samples and allows researchers and lab technicians to track samples anywhere in the system. Research team members who analyze genetic variants from study participants will use a secure web-based interface to view detailed annotations about each variant from the variant database, and then make judgments about the likely implications of each variant.

The workflow management system even coordinates the process of confirming suspicious variants in the hospital's Clinical Molecular Diagnostic Lab and generates reports that summarize the analysis.

"From start to finish, it's a very complicated process," said Evans. "If we want to be able to analyze many samples in a way that is useful for diagnosis and treatment, we need to do it systematically and in an expeditious manner. That's what this project is trying to do: systemize genetic analysis so patients can benefit in real time."

* * *

This research is funded by a four-year, $8 million grant from the National Human Genome Research Institute.

- **Principal Investigator:** Jim Evans, Ph.D., M.D, UNC Department of Genetics

- **Co PIs:** Jonathan Berg, M.D., Ph.D., UNC Department of Genetics; Kirk Wilhelmsen, M.D., Ph.D., RENCI and UNC Department of Genetics; Karen Weck, M.D., UNC Molecular Genetics Laboratory; Gail Henderson, Ph.D., UNC Department of Social Medicine

- **RENCI Team:** Chris Bizon, Phil Owen, Keary Cavin, Nassib Nassar, Jason Reilly, Charles Schmitt, Erik Scott, Xiaoshu Wang</strong>

<!-- old tags

["Chris Bizon","Cyberinfrastructure","Jonathan Berg","National Human Genome Research Institute","North Carolina Clinical Genomic Evaluation (NCGENES)","UNC Department of Genetics"]

-->
