# Devpost scraping tool
A tool that scrapes Devpost project submission and outputs them as a Google Sheet file with potential capability to reduce judge matching time

## Background
HackNC is among the largest collegiate hackathons in North Carolina. The competition organizers received over 35 projects and had to manually match them to appropriate project at the end of every competition. An initiative started in this year's development team is to expedite the judge matching process by creating a judge matching application. This judge matching application will consist of two main components, a web scraping tool that extracts and exports information from participants' Devpost submission to Google Sheets and an algorithm that matches the project's area of focus with the appropriate judge. This repository contains my attempt to create the former tool.

## Current progress
- [x] Extract project title
- [x] Extract project link
- [x] Import extraction to Google Sheets
- [x] Extract project description
- [x] Extract members of the project
- [x] Extract project's tech stack
- [ ] Extract project's track
- [ ] Identify project's field of interest
- [ ] Debug

## Technologies used
- Google Colab
- Google Drive API
- urllib
- BeautifulSoup


