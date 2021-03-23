---
title: "Data Fellows project aims to make storm surge predictions faster and more accurate"
slug: data-fellows-project-aims-to-make-storm-surge-predictions-faster-and-more-accurate
publishDate: 2017-08-31
author: 
featuredImage: null
groups:
    - 
projects:
    - adcirc
people:
    - 
teams: 
    - 
collaborations:
    - ncds
tags:
    - hpc
---
<strong>By Nelson Tull</strong>

<strong><em>Note:</em></strong><em> Nelson Tull is a graduate student in the </em><a href="https://www.ccee.ncsu.edu/" target="_blank" rel="noopener"><em>Department of Civil, Construction, and Environmental Engineering</em></a><em> at North Carolina State University. His faculty advisor, </em><a href="https://ccht.ccee.ncsu.edu/" target="_blank" rel="noopener"><em>Casey Dietrich</em></a><em>, is an NCDS Data Fellow conducting research to improve hurricane and storm surge guidance to emergency managers in North Carolina's coastal counties. Dietrich's Data Fellows research builds on previous work supported by the </em><a href="https://ncseagrant.ncsu.edu/" target="_blank" rel="noopener"><em>North Carolina Sea Grant</em></a><em> program. Other collaborators are Rick Luettich, head of the </em><a href="http://ims.unc.edu/" target="_blank" rel="noopener"><em>Institute of Marine Sciences</em></a><em> at UNC-Chapel Hill, Brian Blanton, a senior research scientist and oceanographer at </em><a href="https://www.renci.org/" target="_blank" rel="noopener"><em>RENCI</em></a><em>, and Jason Fleming of </em><a href="https://www.seahorsecoastal.com/"><em>Seahorse Coastal Consulting</em></a><em>. To learn more about this research, tune into the September 2017 NCDS </em><a href="http://datascienceconsortium.org/databytes-webinars/" target="_blank" rel="noopener"><em>DataBytes webinar</em></a><em>.</em>

<strong><em>When lives are on the line, minutes count but so does accuracy
</em></strong>Storm surge model forecasts are a critical tool used by coastal emergency managers to plan and make decisions. These models must be both accurate and fast to give reliable information in a timely manner as a storm moves toward the coast. The forecast guidance must also be visualized in a way that is meaningful to those who need this vital information.

Our research team uses ADCIRC, a powerful computer model that predicts coastal flooding caused by storm surge on regional and even continental scales. When the National Hurricane Center issues a storm advisory, ADCIRC runs every six hours, such as during Hurricane Matthew Advisory 27, which was issued on Oct. 4, 2016, four days before the center of the storm moved past Wilmington, NC. Model forecasts are visualized using <a href="https://ccht.ccee.ncsu.edu/kalpana/" target="_blank" rel="noopener">Kalpana</a>, a computer program developed with support from North Carolina Sea Grant that converts the model results into visual formats that are easily understood and useable. The image below is an example of one such format (ArcGIS).

[caption id="attachment_3381" align="aligncenter" width="432"]<a href="http://datascienceconsortium.org/wp-content/uploads/2017/08/BlogPost_Image1.png"><img class="wp-image-3381 size-full" src="http://datascienceconsortium.org/wp-content/uploads/2017/08/BlogPost_Image1.png" alt="" width="432" height="596" /></a> (Figure 1) Map of maximum water levels for Hurricane Matthew Advisory 27 in North Carolina. The black box represents the zoomed region shown in the following image.[/caption]

When a storm threatens the coast, the North Carolina Emergency Management (NCEM) division needs forecasts of the <em>maximum</em> flooding that is expected along the coast to make evacuation decisions and develop damage estimates. Although our model provides water level predictions from the deep ocean all the way to the coastal floodplains, the system is limited by the model's resolution. Topographic features at scales smaller than 500 feet, such as roadways or narrow stream channels, are often not included in the models because of the computer time needed to produce such high-resolution outputs. That means the extent of flooding can be under predicted by the model.

Continuing our North Carolina Sea Grant <a href="https://ncseagrant.ncsu.edu/currents/2014/10/picture-this-developing-storm-surge-visualization/" target="_blank" rel="noopener">project</a> and with new support from the <a href="http://data2discovery.org/" target="_blank" rel="noopener">National Consortium of Data Science</a>, we are developing a method to improve prediction of the true flooding extent by combining the results of our model with more accurate elevation datasets.

To perform this prediction of the flooding extent, we use a Geographic Information System (GIS) called <a href="https://grass.osgeo.org/" target="_blank" rel="noopener">GRASS GIS</a> that specializes in processing very large amounts of data. The project has two major objectives. The first is to process the modeled water levels and the elevation data set together, producing a map showing the extent of predicted flooding. When the modeled water levels are greater than the land elevation, flooding extends outward into neighboring, unflooded areas in the data set. By mapping the model results to the higher resolution data sets on elevation, we can create more accurate surge forecasts of overland flooding. The result is illustrated in the image below.

[caption id="attachment_3382" align="aligncenter" width="563"]<a href="http://datascienceconsortium.org/wp-content/uploads/2017/08/BlogPost_Image2.png"><img class=" wp-image-3382" src="http://datascienceconsortium.org/wp-content/uploads/2017/08/BlogPost_Image2.png" alt="" width="563" height="408" /></a> (Figure 2) Zoomed image of flooding along the Newport River, just northwest of Morehead City in Carteret County. The dark blue represents model-computed flooding for Matthew Advisory 27, while the light blue represents the flooding boundary produced by the enhanced resolution.[/caption]

The second major objective of our work is speed. Because the model is used for real-time forecasting during storm events, it is critical for the process to be fast. Emergency managers need to know how high the water will be and where flooding will occur, and they need this information as quickly as possible.

To speed up the process of producing models, our enhanced-resolution program uses methods that work efficiently with large amounts of data. After exploring several methods and trying different ways of structuring the program, we developed a process that can produce visual models in 15 to 20 minutes, depending on the complexity of the storm. This new technology is slower than the existing visualization methods because the higher resolution requires more computing time. However, the new visualizations are more accurate than what is currently available, and they can still be provided to NC emergency managers in time to help them make better decisions.

This new process will become part of the workflow at Seahorse Coastal Consulting and RENCI, which includes running the ADCIRC storm surge model for every forecast advisory during an approaching storm. Our goal is to produce the model forecast in 60 to 90 minutes, immediately followed by the 15- to 20-minute, enhanced-resolution program. This new and improved guidance is being shared with NCEM during the 2017 hurricane season.

While this project has given emergency managers in North Carolina new capabilities, additional work will be required to apply this method to different coastal regions, such as Louisiana or Texas. In addition, we continue to work on improving the speed of the program, because for those who live on the coast and for those in charge of protecting them, every minute counts when a storm is approaching.

<em>A version of this article appears on the </em><a href="https://ncseagrant.ncsu.edu/currents/2017/08/fast-accurate-forecasts-of-coastal-flooding/" target="_blank" rel="noopener"><em>NC Sea Grant website</em></a><em>. </em>
