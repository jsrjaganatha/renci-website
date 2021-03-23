---
title: "Matchmakers"
slug: matchmakers
publishDate: 2011-08-11
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

<!-- tags: ["cancer research","Duke University","Vorakarn Chanyavanich"] -->

<p>[vimeo 27485178]</p>

<p>Prostate cancer, the most common form of cancer in U.S. men, is also one of the most treatable: 90 percent of patients who undergo intensity modulated radiation therapy (IMRT) in the early stages are disease free after five years, according to the journal <em>Seminars in Radiation Oncology.</em></p>

<p>IMRT uses three-dimensional images of the cancerous tumor and surrounding tissues to conform radiation beams to the size and shape of the tumor. Radiation doses are customized for each patient, with the goal of maximizing the dose to the tumor and minimizing the radiation received by surrounding healthy tissue—primarily the bladder, rectum and femoral heads.  In less than a decade, IMRT has become a common and successful prostate cancer treatment. But developing individual IMRT treatment plans is still a time consuming process derived through trial and error.</p>

<p>A team of researchers at Duke University Medical Center wants to automate and optimize the process of developing IMRT treatment plans. They've developed a tool that draws on prior clinically approved treatment plans to create new plans and are working with RENCI to improve the tool.</p>

<p>"It's a mathematically complex problem to solve," says Vorakarn Chanyavanich, a recent Duke Ph.D. recipient in medical physics who conducted his dissertation research on the project. "Each patient comes in with their own geometry and needs to have their treatment plan customized. The process is done manually and takes about four to six hours per patient. What we'd like to do is provide high tumor dose, improve the dose sparing of critical organs and also reduce the time of treatment planning."</p>

<p>The research team, which includes Chanyavanich, now a medical physics resident with Emory University; Shiva K. Das, a professor of radiation oncology at Duke School of Medicine; and Joseph Y. Lo, an associate professor of radiology with Duke's Carl E. Ravin Advanced Imaging Laboratories, developed a knowledge-based approach to streamline the treatment planning process. Their system could also help doctors develop higher quality IMRT treatment plans that spare healthy tissue from the effects of radiation.</p>

<p><br class="spacer_" /></p>

<p><br class="spacer_" /></p>

<p><br class="spacer_" /></p>

<p><br class="spacer_" /></p>

<p><br class="spacer_" /></p>

[caption id="attachment_8185" align="alignleft" width="300" caption="(click for larger image) This screenshot of the prostate cancer treatment planning tool developed by researchers at Duke University Medical Center and RENCI shows data from a query case, representing a new prostate cancer case (top images), and a match case taken for comparison from the researchers' IMRT database (bottom images).  At far left is a comparison of CT scans between the query and match cases.  A 3D rendering of key structures as "seen" by radiation beams from a particular angle (center) shows the Planning Treatment Volume (PTV), which includes the cancerous tumor (red), bladder (yellow), rectum (brown) and femoral heads (gray). At right, dose volume histograms show the radiation doses received by the PTV (red lines) and the surrounding healthy organs and tissue (yellow, brown and gray lines). The treatment objective is to maximize the radiation dose to the PTV, which moves the red line to the upper right in the graph, while minimizing radiation to the surrounding tissue, which moves those lines to the lower right."It's a mathematically complex problem to solve," says Vorakarn Chanyavanich, a recent Duke Ph.D. recipient in medical physics who conducted his dissertation research on the project. "Each patient comes in with their own geometry and needs to have their treatment plan customized. The process is done manually and takes about four to six hours per patient. What we'd like to do is maintain or improve the dose sparing of critical organs and also reduce the time of treatment planning."The research team, which includes Chanyavanich, now a resident medical physicist with Emory University; Shiva K. Das, a professor of radiation oncology at Duke School of Medicine; and Joseph Y. Lo, an associate professor of radiology with Duke's Carl E. Ravin Advanced Imaging Laboratories, developed a knowledge-based approach to streamline the treatment planning process. Their system could also help doctors develop higher quality IMRT treatment plans that spare healthy tissue from the effects of radiation."]<a title="This screenshot of the prostate cancer treatment planning tool developed by researchers at Duke University Medical Center and RENCI shows data from a query case, representing a new prostate cancer case (top images), and a match case taken for comparison from the researchers' IMRT database (bottom images).  At far left is a comparison of CT scans between the query and match cases.  A 3D rendering of key structures as "seen" by radiation beams from a particular angle (center) shows the Planning Treatment Volume (PTV), which includes the cancerous tumor (red), bladder (yellow), rectum (brown) and femoral heads (gray). At right, dose volume histograms show the radiation doses received by the PTV (red lines) and the surrounding healthy organs and tissue (yellow, brown and gray lines). The treatment objective is to maximize the radiation dose to the PTV, which moves the red line to the upper right in the graph, while minimizing radiation to the surrounding tissue, which moves those lines to the lower right." href="https://www.renci.org/wp-content/uploads/2011/08/prostate-research-graphic.jpg"><img class="size-medium wp-image-8185 " title="prostate-research-graphic" src="https://www.renci.org/wp-content/uploads/2011/08/prostate-research-graphic-300x177.jpg" alt="" width="300" height="177" /></a>[/caption]

<p><br class="spacer_" /></p>

<p><br class="spacer_" /></p>

<p><br class="spacer_" /></p>

<p><br class="spacer_" /></p>

<p><br class="spacer_" /></p>

<p>The team assembled a database of nearly 500 prostate IMRT cases from Duke University Medical Center and several community medical centers and developed a "case similarity algorithm" that compares the spatial locations of cancerous tumors and healthy organs in new prostate cancer cases with the IMRT cases in the database. The 3D structures needed to make the comparisons are derived from CT scans visualized from multiple angles. The algorithm finds the best match cases from the database for each new case and from there, clinicians can begin to develop their new IMRT treatment plan, shaving hours off the planning process if they had started from scratch.</p>

<p>Creating an automated system that saves doctors time is only one of the researchers' goals. According to Das and Lo, the quality of treatment plans varies depending on the time the doctor can devote to planning and on the doctor's experience developing IMRT plans. The medical profession has developed normative values for the amount of radiation deemed acceptable for healthy organs surrounding a cancerous tumor, but some patients experience negative side effects from even these accepted radiation doses.</p>

<p>"If you're trying to treat the prostate you're trying to avoid the rectum, the bladder and the femoral heads," says Das. "You're aiming for what we call dose constraints to those areas. The problem is each case is different so the best thing you can do is push the dose to the rectum, bladder and femoral heads as far down as possible."</p>

<p>Adds Lo, "Right now every site essentially makes up these treatment plans from scratch and how well a particular site or doctor pushes those dose constraints and how well they achieve them varies quite a bit.  The variability leads to inconsistent treatment plan quality. One of the key motivations for this research was to address these inconsistencies in plan quality and try to bring up the level of quality across the board."</p>

<p>The researchers' treatment matching system first uses the algorithm to find the best match cases in the database. From there, it must give clinicians flexibility in choosing the best match. The clinicians must be able to compare "dose-volume histograms" that graph the radiation doses to the tumor and surrounding organs. They need to see, in an easily understandable format, where radiation beams hit at different angles and how much of the beam overlaps into the surrounding organs.</p>

<p><strong>RENCI's role: making sense of data</strong></p>

<p>The research team began working with RENCI about a year ago through the RENCI@Duke Applied Scientific and Information Visualization Program, which provides funding to Duke research teams who can benefit from RENCI's expertise in information visualization. The team connected with RENCI at the time when they were beginning to work with large amounts of patient data and needed to visualize it in ways that would be easily understood by clinicians.</p>

<p><strong> </strong>"We want to give the doctors as many ways as possible to compare a match case (the prostate treatment case from the database) with the query case (the new prostate cancer case) as possible, using an interface that's intuitive and that displays results in an way that's easy to understand," says Steve Chall, a RENCI senior research software developer.</p>

<p>Chall's work allows doctors using the tool to compare 3D surface renderings of the tumor, rectum, bladder, and femoral heads in match and query cases to precisely see the orientation of the bladder, rectum and femoral heads at different angles. They can also compare the dose-volume histograms to assess the quality of each treatment plan and view 3D CT scans to determine if the match and query cases have similar anatomical appearances.</p>

<p>"My job is to create a tool that displays data extracted from CT scans in a way that helps the clinician choose a match that best fits the new case," says Chall. "Maybe the match chosen by the algorithm is the best one, but maybe the clinician chooses another criterion—say the amount of radiation to the bladder—that she believes is most important in this case. If so, she can choose another match. It's the treating clinician who determines what the most important similarities are."</p>

<p>Currently, the work is research focused; by using the algorithm to find suitable match treatment plans from which new treatment plans can be developed, the researchers can test how well their algorithm works and further refine it.</p>

<p><strong>Better treatments, lower healthcare costs</strong></p>

<p>When the tool is ready for use in clinical settings, it could impact not only how individual doctors develop prostate cancer IMRT plans, but healthcare delivery in a larger context.</p>

<p>As the database is expanded to include cases beyond Duke, the larger dataset should mean more accurate matches and, the researchers hope, even better treatment plans, developed much more quickly. That should lead to patients who suffer fewer side effects caused by radiation to healthy organs, healthier patients overall, and lower healthcare costs.</p>

<p>The system could also benefit community healthcare providers, who see relatively few prostate cancer cases and don't have as much experience creating IMRT treatment plans, and could help clinicians who develop treatment plans for less common cancers.</p>

<p>"We'd like to translate these knowledge-based tools to clinicians in other communities that may not have the expertise that Duke University has established," Chanyavanich says. "If we can do that, it would allow (clinicians) to share cases across institutions and result in more uniform and higher quality treatment plans."</p>
