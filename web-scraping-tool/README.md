# Judge-matching tool
A tool that scrapes Devpost project submission, outputs them as a Google Sheet file, matches the information with appropriate judge 

## Background 💡
HackNC is among the largest collegiate hackathons in North Carolina. The competition organizers received over 35 projects and had to manually match them to appropriate project at the end of every competition. An initiative started in this year's development team is to expedite the judge matching process by creating a judge matching application. This judge matching application will consist of two main components, a web scraping tool that extracts and exports information from participants' Devpost submission to Google Sheets and an algorithm that matches the project's area of focus with the appropriate judge. This repository contains the attempts my teammates and I made to create the tool.

## Current progress  🏃
- [x] Extract project title
- [x] Extract project link
- [x] Import extraction to Google Sheets
- [x] Extract project description
- [x] Extract members of the project
- [x] Extract project's tech stack
- [x] Extract project's track
- [x] Identify project's field of interest
- [x] Create mock judge information sheet
- [x] Create algorithm to match judge
- [ ] Optimize our code

## Results 🥇
We were able to scrape the information of 35 projects onto Google Sheets, however since the track and category information lies on the backend of Devpost, we resorted to using data (from the Devpost and Devpost-generated CSV file) of MHacks 6. Our algorithm can now scrape the title, link, project information, members, tech stack, track, and category of projects at O(3(N + N^2 + N^2)). It also includes a matching algorithm that can match each project to each judge accordingly to the project track at O(N^2). We are optimizing the algorithm so that we can bring the complexity down to O(logN) or O(N).

## What's next  🧩
Our algorithm is currently using two data sources to populate the project information sheet. To cut down on data dependency and complexity, we intend on replacing our web scraping code with CSV manipulation functions. 

## Technologies used so far  🛠️
- Google Colab
- Pandas
- Google Drive API
- urllib
- BeautifulSoup


