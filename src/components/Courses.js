import React, { useState } from 'react';

const courseData = [
  { CAT: 'SIL', BUCKET: 'C00', CODE: '22UC0022', TITLE: 'SOCIAL IMMERSIVE LEARNING', MODE: 'R', L: 0, T: 0, P: 0, S: 4, CR: 1, CH: 4 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDCS11R', TITLE: 'LINUX ADMINISTRATION & AUTOMATION', MODE: 'R', L: 0, T: 0, P: 2, S: 4, CR: 2, CH: 6 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDCS11A', TITLE: 'LINUX ADMINISTRATION & AUTOMATION', MODE: 'A', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDCS11E', TITLE: 'LINUX ADMINISTRATION & AUTOMATION', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDAD01R', TITLE: 'DATA ANALYTICS AND VISUALIZATION', MODE: 'R', L: 0, T: 0, P: 2, S: 4, CR: 2, CH: 6 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDAD01A', TITLE: 'DATA ANALYTICS AND VISUALIZATION', MODE: 'A', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDAD01E', TITLE: 'DATA ANALYTICS AND VISUALIZATION', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDEC01R', TITLE: 'ELECTRONIC SYSTEM DESIGN', MODE: 'R', L: 0, T: 0, P: 2, S: 4, CR: 2, CH: 6 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDEC01A', TITLE: 'ELECTRONIC SYSTEM DESIGN', MODE: 'A', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDEC01E', TITLE: 'ELECTRONIC SYSTEM DESIGN', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDEE01R', TITLE: 'VISUALIZATION AND MODELING OF CIRCUITS', MODE: 'R', L: 0, T: 0, P: 2, S: 4, CR: 2, CH: 6 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDEE01A', TITLE: 'VISUALIZATION AND MODELING OF CIRCUITS', MODE: 'A', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDEE01E', TITLE: 'VISUALIZATION AND MODELING OF CIRCUITS', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDIN01R', TITLE: 'IOT HARDWARE PROGRAMMING', MODE: 'R', L: 0, T: 0, P: 2, S: 4, CR: 2, CH: 6 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDIN01A', TITLE: 'IOT HARDWARE PROGRAMMING', MODE: 'A', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDIN01E', TITLE: 'IOT HARDWARE PROGRAMMING', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDME01R', TITLE: 'VISUALIZATION AND MODELLING FOR ENGINEERING DESIGN', MODE: 'R', L: 0, T: 0, P: 2, S: 4, CR: 2, CH: 6 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDME01A', TITLE: 'VISUALIZATION AND MODELLING FOR ENGINEERING DESIGN', MODE: 'A', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDME01E', TITLE: 'VISUALIZATION AND MODELLING FOR ENGINEERING DESIGN', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDCE01R', TITLE: 'VISUALIZATION AND MODELLING FOR STRUCTURAL DESIGN', MODE: 'R', L: 0, T: 0, P: 2, S: 4, CR: 2, CH: 6 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDCE01A', TITLE: 'VISUALIZATION AND MODELLING FOR STRUCTURAL DESIGN', MODE: 'A', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDCE01E', TITLE: 'VISUALIZATION AND MODELLING FOR STRUCTURAL DESIGN', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDBT01R', TITLE: 'MEDICAL LAB TECHNOLOGY', MODE: 'R', L: 0, T: 0, P: 2, S: 4, CR: 2, CH: 6 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDBT01A', TITLE: 'MEDICAL LAB TECHNOLOGY', MODE: 'A', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'SDC', BUCKET: 'C01', CODE: '23SDBT01E', TITLE: 'MEDICAL LAB TECHNOLOGY', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'BSC', BUCKET: 'C02', CODE: '23MT2014', TITLE: 'THEORY OF COMPUTATION', MODE: 'R', L: 2, T: 2, P: 0, S: 0, CR: 4, CH: 4 },
  { CAT: 'BSC', BUCKET: 'C02', CODE: '23MT2005', TITLE: 'PROBABILITY, STATISTICS & QUEUEING THEORY', MODE: 'R', L: 2, T: 2, P: 0, S: 0, CR: 4, CH: 4 },
  { CAT: 'BSC', BUCKET: 'C02', CODE: '23MT2004', TITLE: 'MATHEMATICAL PROGRAMMING', MODE: 'R', L: 2, T: 2, P: 0, S: 0, CR: 4, CH: 4 },
  { CAT: 'BSC', BUCKET: 'C02', CODE: '23MT2013', TITLE: 'RELATIONAL ALGEBRA AND INFORMATION THEORY', MODE: 'R', L: 2, T: 2, P: 0, S: 0, CR: 4, CH: 4 },
  { CAT: 'BSC', BUCKET: 'C02', CODE: '23MT2007', TITLE: 'RANDOM VARIABLES AND STOCHASTIC PROCESS', MODE: 'R', L: 2, T: 2, P: 0, S: 0, CR: 4, CH: 4 },
  { CAT: 'BSC', BUCKET: 'C02', CODE: '23MT2008', TITLE: 'COMPLEX ANALYSIS AND TRANSFORM TECHNIQUES', MODE: 'R', L: 2, T: 2, P: 0, S: 0, CR: 4, CH: 4 },
  { CAT: 'BSC', BUCKET: 'C02', CODE: '23MT2003', TITLE: 'MATHEMATICAL MODELLING & NUMERICAL METHODS', MODE: 'R', L: 2, T: 2, P: 0, S: 0, CR: 4, CH: 4 },
  { CAT: 'PCC', BUCKET: 'C02', CODE: '23ME2107', TITLE: 'THERMODYNAMICS', MODE: 'R', L: 3, T: 0, P: 0, S: 0, CR: 3, CH: 3 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23CS2104R', TITLE: 'OPERATING SYSTEMS', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23CS2104A', TITLE: 'OPERATING SYSTEMS', MODE: 'A', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23CS2104E', TITLE: 'OPERATING SYSTEMS', MODE: 'E', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23AD2102R', TITLE: 'DATABASE MANAGEMENT SYSTEMS', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23AD2102A', TITLE: 'DATABASE MANAGEMENT SYSTEMS', MODE: 'A', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23AD2102E', TITLE: 'DATABASE MANAGEMENT SYSTEMS', MODE: 'E', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'BSC', BUCKET: 'C03', CODE: '23SC3201', TITLE: 'DATA SCIENCE AND STATISTICS', MODE: 'R', L: 2, T: 2, P: 0, S: 0, CR: 4, CH: 4 },
  { CAT: 'ESC', BUCKET: 'C03', CODE: '23EE2101', TITLE: 'ELECTRICAL CIRCUITS', MODE: 'R', L: 2, T: 0, P: 2, S: 0, CR: 3, CH: 4 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23BT2103R', TITLE: 'BIOCHEMISTRY', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23BT2103A', TITLE: 'BIOCHEMISTRY', MODE: 'A', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23BT2103E', TITLE: 'BIOCHEMISTRY', MODE: 'E', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23EC2105R', TITLE: 'SIGNALS AND COMMUNICATION SYSTEMS', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23EC2105A', TITLE: 'SIGNALS AND COMMUNICATION SYSTEMS', MODE: 'A', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23EC2105E', TITLE: 'SIGNALS AND COMMUNICATION SYSTEMS', MODE: 'E', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23IN2101R', TITLE: 'IOT SYSTEM DESIGN', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23IN2101A', TITLE: 'IOT SYSTEM DESIGN', MODE: 'A', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23IN2101E', TITLE: 'IOT SYSTEM DESIGN', MODE: 'E', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C03', CODE: '23ME2116', TITLE: 'FLUID MECHANICS & HYDRAULIC MACHINES', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'ESC', BUCKET: 'C03', CODE: '23CE2102', TITLE: 'FLUID MECHANICS & HYDRAULICS', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'ESC', BUCKET: 'C04', CODE: '23AD2001O', TITLE: 'ARTIFICIAL INTELLIGENCE & MACHINE LEARNING', MODE: 'O', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C04', CODE: '23EC2210R', TITLE: 'NETWORK PROTOCOLS & SECURITY', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C04', CODE: '23EC2210A', TITLE: 'NETWORK PROTOCOLS & SECURITY', MODE: 'A', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C04', CODE: '23EC2210E', TITLE: 'NETWORK PROTOCOLS & SECURITY', MODE: 'E', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C04', CODE: '23AD2001R', TITLE: 'ARTIFICIAL INTELLIGENCE & MACHINE LEARNING', MODE: 'R', L: 3, T: 0, P: 2, S: 4, CR: 5, CH: 9 },
  { CAT: 'PCC', BUCKET: 'C04', CODE: '23AD2001A', TITLE: 'ARTIFICIAL INTELLIGENCE & MACHINE LEARNING', MODE: 'A', L: 4, T: 0, P: 4, S: 4, CR: 7, CH: 12 },
  { CAT: 'PCC', BUCKET: 'C04', CODE: '23AD2001E', TITLE: 'ARTIFICIAL INTELLIGENCE & MACHINE LEARNING', MODE: 'E', L: 4, T: 0, P: 4, S: 4, CR: 7, CH: 12 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23CS2103R', TITLE: 'ADVANCED OBJECT ORIENTED PROGRAMMING', MODE: 'R', L: 3, T: 0, P: 2, S: 4, CR: 5, CH: 9 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23CS2103A', TITLE: 'ADVANCED OBJECT ORIENTED PROGRAMMING', MODE: 'A', L: 4, T: 0, P: 4, S: 4, CR: 7, CH: 12 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23CS2103E', TITLE: 'ADVANCED OBJECT ORIENTED PROGRAMMING', MODE: 'E', L: 4, T: 0, P: 4, S: 4, CR: 7, CH: 12 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23CS2205R', TITLE: 'DESIGN AND ANALYSIS OF ALGORITHMS', MODE: 'R', L: 3, T: 0, P: 2, S: 4, CR: 5, CH: 9 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23CS2205A', TITLE: 'DESIGN AND ANALYSIS OF ALGORITHMS', MODE: 'A', L: 4, T: 0, P: 4, S: 4, CR: 7, CH: 12 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23CS2205E', TITLE: 'DESIGN AND ANALYSIS OF ALGORITHMS', MODE: 'E', L: 4, T: 0, P: 4, S: 4, CR: 7, CH: 12 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23EC2104R', TITLE: 'ANALOG ELECTRONIC CIRCUIT DESIGN', MODE: 'R', L: 3, T: 0, P: 2, S: 2, CR: 4.5, CH: 7 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23EC2104A', TITLE: 'ANALOG ELECTRONIC CIRCUIT DESIGN', MODE: 'A', L: 4, T: 0, P: 4, S: 2, CR: 6.5, CH: 10 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23EC2104E', TITLE: 'ANALOG ELECTRONIC CIRCUIT DESIGN', MODE: 'E', L: 4, T: 0, P: 4, S: 2, CR: 6.5, CH: 10 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23IN2102', TITLE: 'ELECTRONIC DEVICES AND INTEGRATED CIRCUITS', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'ESC', BUCKET: 'C05', CODE: '23SC1203O', TITLE: 'COMPUTATIONAL THINKING FOR OBJECT ORIENTED DESIGN', MODE: 'O', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'ESC', BUCKET: 'C05', CODE: '23BT2215', TITLE: 'PROCESS ENGINEERING PRINCIPLES', MODE: 'R', L: 2, T: 0, P: 2, S: 0, CR: 3, CH: 4 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23ME2208', TITLE: 'MANUFACTURING PROCESSES', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23CE2103R', TITLE: 'SURVEYING', MODE: 'R', L: 3, T: 0, P: 2, S: 4, CR: 5, CH: 9 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23CE2103A', TITLE: 'SURVEYING', MODE: 'A', L: 4, T: 0, P: 4, S: 4, CR: 7, CH: 12 },
  { CAT: 'PCC', BUCKET: 'C05', CODE: '23CE2103E', TITLE: 'SURVEYING', MODE: 'E', L: 4, T: 0, P: 4, S: 4, CR: 7, CH: 12 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23BT2104', TITLE: 'MICROBIOLOGY', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC&HFC', BUCKET: 'C06', CODE: '23EC2106R', TITLE: 'PROCESSORS & CONTROLLERS', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23EC2106A', TITLE: 'PROCESSORS & CONTROLLERS', MODE: 'A', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23EC2106E', TITLE: 'PROCESSORS & CONTROLLERS', MODE: 'E', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23ME2106R', TITLE: 'MECHANICS OF SOLIDS', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23ME2106A', TITLE: 'MECHANICS OF SOLIDS', MODE: 'A', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23ME2106E', TITLE: 'MECHANICS OF SOLIDS', MODE: 'E', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23CE2105R', TITLE: 'SOLID MECHANICS', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23CE2105A', TITLE: 'SOLID MECHANICS', MODE: 'A', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23CE2105E', TITLE: 'SOLID MECHANICS', MODE: 'E', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23AD2103R', TITLE: 'SYSTEM DESIGN & INTRODUCTION TO CLOUD', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23AD2103A', TITLE: 'SYSTEM DESIGN & INTRODUCTION TO CLOUD', MODE: 'A', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23AD2103E', TITLE: 'SYSTEM DESIGN & INTRODUCTION TO CLOUD', MODE: 'E', L: 4, T: 0, P: 4, S: 0, CR: 6, CH: 8 },
  { CAT: 'PCC', BUCKET: 'C06', CODE: '23EE2103', TITLE: 'ELECTROMAGNETIC FIELDS & ENGINEERING MATERIALS', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'HFC', BUCKET: 'C06', CODE: '23CS02HF', TITLE: 'EMBEDDED SYSTEMS DESIGN', MODE: 'R', L: 3, T: 0, P: 2, S: 0, CR: 4, CH: 5 },
  { CAT: 'HEC', BUCKET: 'C06', CODE: '23CS05EF', TITLE: 'PYTHON FULL STACK DEVELOPMENT WITH DJANGO', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'HEC', BUCKET: 'C06', CODE: '23CS06EF', TITLE: 'MERN STACK WEB DEVELOPMENT', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'HRC', BUCKET: 'C06', CODE: '23IE02RF', TITLE: 'RESEARCH METHODOLOGY, ETHICS & SCIENTIFIC WRITING', MODE: 'R', L: 2, T: 0, P: 2, S: 0, CR: 3, CH: 4 },
  { CAT: 'HIC', BUCKET: 'C06', CODE: '23DT01IF', TITLE: 'ENTREPRENEURIAL TECHNOLOGY DEVELOPMENT AND PROTOTYPING', MODE: 'E', L: 0, T: 0, P: 6, S: 4, CR: 4, CH: 10 },
  { CAT: 'HAS-MNG', BUCKET: 'C07', CODE: '23MB4068', TITLE: 'INNOVATION MANAGEMENT', MODE: 'R', L: 4, T: 0, P: 0, S: 0, CR: 4, CH: 4 },
  { CAT: 'HAS-FL', BUCKET: 'C07', CODE: '23FL3054', TITLE: 'FRENCH LANGUAGE', MODE: 'R', L: 3, T: 0, P: 0, S: 0, CR: 3, CH: 3 },
  { CAT: 'HAS-FL', BUCKET: 'C07', CODE: '23FL3055', TITLE: 'GERMAN LANGUAGE', MODE: 'R', L: 3, T: 0, P: 0, S: 0, CR: 3, CH: 3 },
  { CAT: 'HAS-FL', BUCKET: 'C07', CODE: '23FL3058', TITLE: 'JAPANESE LANGUAGE', MODE: 'R', L: 3, T: 0, P: 0, S: 0, CR: 3, CH: 3 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2101', TITLE: 'ATHLETICS', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2102', TITLE: 'BASKETBALL', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2103', TITLE: 'BADMINTON', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2104', TITLE: 'CRICKET', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2105', TITLE: 'CHESS', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2108', TITLE: 'KABADDI', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2109', TITLE: 'KHO-KHO', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2110', TITLE: 'TENNIS', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2111', TITLE: 'TABLE TENNIS', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2113', TITLE: 'THROW BALL', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2114', TITLE: 'VOLLEYBALL', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 },
  { CAT: 'VAC', BUCKET: 'C08', CODE: '23SP2116', TITLE: 'YOGA', MODE: 'R', L: 0, T: 0, P: 0, S: 2, CR: 0, CH: 2 }
];

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const thTdStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  textAlign: 'left',
};

const thStyle = {
  ...thTdStyle,
  backgroundColor: '#f4f4f4', // Light gray background for headers
};

const trStyle = {
  backgroundColor: '#ffffff', // Uniform background color for rows
};

const trHoverStyle = {
  backgroundColor: '#ddd', // Highlight row on hover
};

const CoursesTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <div>
      <h1>Courses List</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Bucket</th>
            <th style={thStyle}>Code</th>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Mode</th>
            <th style={thStyle}>L</th>
            <th style={thStyle}>T</th>
            <th style={thStyle}>P</th>
            <th style={thStyle}>S</th>
            <th style={thStyle}>CR</th>
            <th style={thStyle}>CH</th>
          </tr>
        </thead>
        <tbody>
          {courseData.map((course, index) => (
            <tr
              key={index}
              style={{
                ...trStyle,
                ...(hoveredRow === index ? trHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td style={thTdStyle}>{course.CAT}</td>
              <td style={thTdStyle}>{course.BUCKET}</td>
              <td style={thTdStyle}>{course.CODE}</td>
              <td style={thTdStyle}>{course.TITLE}</td>
              <td style={thTdStyle}>{course.MODE}</td>
              <td style={thTdStyle}>{course.L}</td>
              <td style={thTdStyle}>{course.T}</td>
              <td style={thTdStyle}>{course.P}</td>
              <td style={thTdStyle}>{course.S}</td>
              <td style={thTdStyle}>{course.CR}</td>
              <td style={thTdStyle}>{course.CH}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;