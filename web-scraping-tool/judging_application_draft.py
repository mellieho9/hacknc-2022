# -*- coding: utf-8 -*-
"""Judging Application Draft.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1h-sBThUojg8fTGe8au2MX5Fr7Z10T72Q
"""

from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import re
page = 1
links = []
titles = []

while page != 3:
  req = Request(f"https://hacknc2021.devpost.com/project-gallery?page={page}")
  html_page = urlopen(req)
  soup = BeautifulSoup(html_page, "lxml")
  #Find all links to projects on page then add to list
  for link in soup.find_all('a', href=re.compile('https://devpost.com/software/')):
    links.append(link.get('href'))
  #Get Projects Names 
  for title in soup.find_all("h5"):
    if "Connect with the participants – support your favorite projects" in title.get_text().strip() or "Sponsor Prizes" in title.get_text().strip():
      continue
    else:    
      titles.append(title.get_text().strip())
  page = page + 1
print(links)
print(titles)

from google.colab import auth
auth.authenticate_user()

import gspread
from google.auth import default
creds, _ = default()


gc = gspread.authorize(creds)

sh = gc.create('A new spreadsheet')

# Open our new sheet and add some data.
worksheet = gc.open('A new spreadsheet').sheet1
 
i = 0
x = 0
cell_list = worksheet.range('A2:A36')
cell_list2 = worksheet.range('B2:B36')

import random
for cell in cell_list:
    cell.value = titles[i]
    i = i+1

for cell in cell_list2:
    cell.value = links[x]
    x = x+1

worksheet.update_cells(cell_list)
worksheet.update_cells(cell_list2)
# Go to https://sheets.google.com to see your new spreadsheet.