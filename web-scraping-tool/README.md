# Devpost scraping tool
A tool that scrapes Devpost project submission, outputs them as a Google Sheet file, matches the information with appropriate judge 

## Background
HackNC is among the largest collegiate hackathons in North Carolina. The competition organizers received over 35 projects and had to manually match them to appropriate project at the end of every competition. An initiative started in this year's development team is to expedite the judge matching process by creating a judge matching application. This judge matching application will consist of two main components, a web scraping tool that extracts and exports information from participants' Devpost submission to Google Sheets and an algorithm that matches the project's area of focus with the appropriate judge. This repository contains the attempts my teammates and I made to create the tool.

## Current progress
- [x] Extract project title
- [x] Extract project link
- [x] Import extraction to Google Sheets
- [x] Extract project description
- [x] Extract members of the project
- [x] Extract project's tech stack
- [ ] Extract project's track
- [ ] Identify project's field of interest
- [ ] Create mock judge information sheet
- [ ] Create algorithm to match judge

## Technologies used so far
- Google Colab
- Google Drive API
- urllib
- BeautifulSoup


