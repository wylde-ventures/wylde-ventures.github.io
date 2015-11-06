var moons = [[20, 48, 2015, '3DB7E2'], [49, 78, 2015, '3CC0C5'], [79, 107, 2015, '4FBD91'], [108, 136, 2015, '88C874'], [137, 166, 2015, 'C2DA66'], [167, 195, 2015, 'F6DC58'], [196, 225, 2015, 'F9A765'], [226, 255, 2015, 'F37764'], [256, 284, 2015, 'F3798B'], [285, 314, 2015, 'D17BB0'], [315, 344, 2015, '957FBB'], [345, 374, 2016, '5091CD'], [375, 403, 2016, '37AEE4'], [404, 433, 2016, '30C1D9'], [434, 462, 2016, '4BBE9F'], [463, 491, 2016, '70C27A'], [492, 521, 2016, 'C2DA66'], [522, 550, 2016, 'FFF27A'], [551, 580, 2016, 'FDBC6A'], [581, 609, 2016, 'F37658'], [610, 639, 2016, 'F3787C'], [640, 669, 2016, 'F079AD'], [670, 698, 2016, 'A87DB8'], [699, 728, 2016, '548CCA']];

var moondata = [{'illum': 0.89, 'day': 0, 'month': 0}, {'illum': 0.94, 'day': 1, 'month': 0}, {'illum': 0.98, 'day': 2, 'month': 0}, {'illum': 1.0, 'day': 3, 'month': 0}, {'illum': 0.99, 'day': 4, 'month': 0}, {'illum': 0.97, 'day': 5, 'month': 0}, {'illum': 0.93, 'day': 6, 'month': 0}, {'illum': 0.88, 'day': 7, 'month': 0}, {'illum': 0.81, 'day': 8, 'month': 0}, {'illum': 0.74, 'day': 9, 'month': 0}, {'illum': 0.65, 'day': 10, 'month': 0}, {'illum': 0.56, 'day': 11, 'month': 0}, {'illum': 0.46, 'day': 12, 'month': 0}, {'illum': 0.36, 'day': 13, 'month': 0}, {'illum': 0.27, 'day': 14, 'month': 0}, {'illum': 0.18, 'day': 15, 'month': 0}, {'illum': 0.1, 'day': 16, 'month': 0}, {'illum': 0.04, 'day': 17, 'month': 0}, {'illum': 0.01, 'day': 18, 'month': 0}, {'illum': 0.0, 'day': 19, 'month': 0}, {'illum': 0.03, 'day': 20, 'month': 0}, {'illum': 0.08, 'day': 21, 'month': 0}, {'illum': 0.15, 'day': 22, 'month': 0}, {'illum': 0.25, 'day': 23, 'month': 0}, {'illum': 0.35, 'day': 24, 'month': 0}, {'illum': 0.46, 'day': 25, 'month': 0}, {'illum': 0.57, 'day': 26, 'month': 0}, {'illum': 0.67, 'day': 27, 'month': 0}, {'illum': 0.76, 'day': 28, 'month': 0}, {'illum': 0.84, 'day': 29, 'month': 0}, {'illum': 0.91, 'day': 30, 'month': 0}, {'illum': 0.96, 'day': 0, 'month': 1}, {'illum': 0.99, 'day': 1, 'month': 1}, {'illum': 1.0, 'day': 2, 'month': 1}, {'illum': 0.99, 'day': 3, 'month': 1}, {'illum': 0.97, 'day': 4, 'month': 1}, {'illum': 0.93, 'day': 5, 'month': 1}, {'illum': 0.87, 'day': 6, 'month': 1}, {'illum': 0.8, 'day': 7, 'month': 1}, {'illum': 0.72, 'day': 8, 'month': 1}, {'illum': 0.63, 'day': 9, 'month': 1}, {'illum': 0.53, 'day': 10, 'month': 1}, {'illum': 0.43, 'day': 11, 'month': 1}, {'illum': 0.33, 'day': 12, 'month': 1}, {'illum': 0.23, 'day': 13, 'month': 1}, {'illum': 0.14, 'day': 14, 'month': 1}, {'illum': 0.07, 'day': 15, 'month': 1}, {'illum': 0.02, 'day': 16, 'month': 1}, {'illum': 0.0, 'day': 17, 'month': 1}, {'illum': 0.01, 'day': 18, 'month': 1}, {'illum': 0.05, 'day': 19, 'month': 1}, {'illum': 0.12, 'day': 20, 'month': 1}, {'illum': 0.2, 'day': 21, 'month': 1}, {'illum': 0.3, 'day': 22, 'month': 1}, {'illum': 0.41, 'day': 23, 'month': 1}, {'illum': 0.51, 'day': 24, 'month': 1}, {'illum': 0.62, 'day': 25, 'month': 1}, {'illum': 0.71, 'day': 26, 'month': 1}, {'illum': 0.79, 'day': 27, 'month': 1}, {'illum': 0.87, 'day': 0, 'month': 2}, {'illum': 0.92, 'day': 1, 'month': 2}, {'illum': 0.97, 'day': 2, 'month': 2}, {'illum': 0.99, 'day': 3, 'month': 2}, {'illum': 1.0, 'day': 4, 'month': 2}, {'illum': 0.99, 'day': 5, 'month': 2}, {'illum': 0.96, 'day': 6, 'month': 2}, {'illum': 0.92, 'day': 7, 'month': 2}, {'illum': 0.86, 'day': 8, 'month': 2}, {'illum': 0.78, 'day': 9, 'month': 2}, {'illum': 0.69, 'day': 10, 'month': 2}, {'illum': 0.6, 'day': 11, 'month': 2}, {'illum': 0.49, 'day': 12, 'month': 2}, {'illum': 0.38, 'day': 13, 'month': 2}, {'illum': 0.28, 'day': 14, 'month': 2}, {'illum': 0.18, 'day': 15, 'month': 2}, {'illum': 0.1, 'day': 16, 'month': 2}, {'illum': 0.04, 'day': 17, 'month': 2}, {'illum': 0.01, 'day': 18, 'month': 2}, {'illum': 0.0, 'day': 19, 'month': 2}, {'illum': 0.03, 'day': 20, 'month': 2}, {'illum': 0.09, 'day': 21, 'month': 2}, {'illum': 0.16, 'day': 22, 'month': 2}, {'illum': 0.25, 'day': 23, 'month': 2}, {'illum': 0.35, 'day': 24, 'month': 2}, {'illum': 0.45, 'day': 25, 'month': 2}, {'illum': 0.55, 'day': 26, 'month': 2}, {'illum': 0.65, 'day': 27, 'month': 2}, {'illum': 0.74, 'day': 28, 'month': 2}, {'illum': 0.82, 'day': 29, 'month': 2}, {'illum': 0.88, 'day': 30, 'month': 2}, {'illum': 0.94, 'day': 0, 'month': 3}, {'illum': 0.97, 'day': 1, 'month': 3}, {'illum': 1.0, 'day': 2, 'month': 3}, {'illum': 1.0, 'day': 3, 'month': 3}, {'illum': 0.98, 'day': 4, 'month': 3}, {'illum': 0.95, 'day': 5, 'month': 3}, {'illum': 0.9, 'day': 6, 'month': 3}, {'illum': 0.83, 'day': 7, 'month': 3}, {'illum': 0.74, 'day': 8, 'month': 3}, {'illum': 0.64, 'day': 9, 'month': 3}, {'illum': 0.54, 'day': 10, 'month': 3}, {'illum': 0.43, 'day': 11, 'month': 3}, {'illum': 0.32, 'day': 12, 'month': 3}, {'illum': 0.21, 'day': 13, 'month': 3}, {'illum': 0.12, 'day': 14, 'month': 3}, {'illum': 0.06, 'day': 15, 'month': 3}, {'illum': 0.01, 'day': 16, 'month': 3}, {'illum': 0.0, 'day': 17, 'month': 3}, {'illum': 0.02, 'day': 18, 'month': 3}, {'illum': 0.06, 'day': 19, 'month': 3}, {'illum': 0.12, 'day': 20, 'month': 3}, {'illum': 0.2, 'day': 21, 'month': 3}, {'illum': 0.29, 'day': 22, 'month': 3}, {'illum': 0.39, 'day': 23, 'month': 3}, {'illum': 0.49, 'day': 24, 'month': 3}, {'illum': 0.58, 'day': 25, 'month': 3}, {'illum': 0.67, 'day': 26, 'month': 3}, {'illum': 0.76, 'day': 27, 'month': 3}, {'illum': 0.83, 'day': 28, 'month': 3}, {'illum': 0.9, 'day': 29, 'month': 3}, {'illum': 0.95, 'day': 0, 'month': 4}, {'illum': 0.98, 'day': 1, 'month': 4}, {'illum': 1.0, 'day': 2, 'month': 4}, {'illum': 0.99, 'day': 3, 'month': 4}, {'illum': 0.97, 'day': 4, 'month': 4}, {'illum': 0.92, 'day': 5, 'month': 4}, {'illum': 0.86, 'day': 6, 'month': 4}, {'illum': 0.78, 'day': 7, 'month': 4}, {'illum': 0.68, 'day': 8, 'month': 4}, {'illum': 0.57, 'day': 9, 'month': 4}, {'illum': 0.46, 'day': 10, 'month': 4}, {'illum': 0.34, 'day': 11, 'month': 4}, {'illum': 0.24, 'day': 12, 'month': 4}, {'illum': 0.15, 'day': 13, 'month': 4}, {'illum': 0.07, 'day': 14, 'month': 4}, {'illum': 0.02, 'day': 15, 'month': 4}, {'illum': 0.0, 'day': 16, 'month': 4}, {'illum': 0.01, 'day': 17, 'month': 4}, {'illum': 0.04, 'day': 18, 'month': 4}, {'illum': 0.09, 'day': 19, 'month': 4}, {'illum': 0.15, 'day': 20, 'month': 4}, {'illum': 0.23, 'day': 21, 'month': 4}, {'illum': 0.32, 'day': 22, 'month': 4}, {'illum': 0.42, 'day': 23, 'month': 4}, {'illum': 0.51, 'day': 24, 'month': 4}, {'illum': 0.61, 'day': 25, 'month': 4}, {'illum': 0.7, 'day': 26, 'month': 4}, {'illum': 0.78, 'day': 27, 'month': 4}, {'illum': 0.85, 'day': 28, 'month': 4}, {'illum': 0.92, 'day': 29, 'month': 4}, {'illum': 0.96, 'day': 30, 'month': 4}, {'illum': 0.99, 'day': 0, 'month': 5}, {'illum': 1.0, 'day': 1, 'month': 5}, {'illum': 0.98, 'day': 2, 'month': 5}, {'illum': 0.94, 'day': 3, 'month': 5}, {'illum': 0.88, 'day': 4, 'month': 5}, {'illum': 0.8, 'day': 5, 'month': 5}, {'illum': 0.7, 'day': 6, 'month': 5}, {'illum': 0.59, 'day': 7, 'month': 5}, {'illum': 0.48, 'day': 8, 'month': 5}, {'illum': 0.37, 'day': 9, 'month': 5}, {'illum': 0.26, 'day': 10, 'month': 5}, {'illum': 0.17, 'day': 11, 'month': 5}, {'illum': 0.09, 'day': 12, 'month': 5}, {'illum': 0.04, 'day': 13, 'month': 5}, {'illum': 0.01, 'day': 14, 'month': 5}, {'illum': 0.0, 'day': 15, 'month': 5}, {'illum': 0.02, 'day': 16, 'month': 5}, {'illum': 0.06, 'day': 17, 'month': 5}, {'illum': 0.11, 'day': 18, 'month': 5}, {'illum': 0.18, 'day': 19, 'month': 5}, {'illum': 0.26, 'day': 20, 'month': 5}, {'illum': 0.35, 'day': 21, 'month': 5}, {'illum': 0.44, 'day': 22, 'month': 5}, {'illum': 0.54, 'day': 23, 'month': 5}, {'illum': 0.63, 'day': 24, 'month': 5}, {'illum': 0.72, 'day': 25, 'month': 5}, {'illum': 0.8, 'day': 26, 'month': 5}, {'illum': 0.88, 'day': 27, 'month': 5}, {'illum': 0.94, 'day': 28, 'month': 5}, {'illum': 0.98, 'day': 29, 'month': 5}, {'illum': 1.0, 'day': 0, 'month': 6}, {'illum': 0.99, 'day': 1, 'month': 6}, {'illum': 0.96, 'day': 2, 'month': 6}, {'illum': 0.9, 'day': 3, 'month': 6}, {'illum': 0.82, 'day': 4, 'month': 6}, {'illum': 0.73, 'day': 5, 'month': 6}, {'illum': 0.62, 'day': 6, 'month': 6}, {'illum': 0.5, 'day': 7, 'month': 6}, {'illum': 0.39, 'day': 8, 'month': 6}, {'illum': 0.28, 'day': 9, 'month': 6}, {'illum': 0.19, 'day': 10, 'month': 6}, {'illum': 0.11, 'day': 11, 'month': 6}, {'illum': 0.06, 'day': 12, 'month': 6}, {'illum': 0.02, 'day': 13, 'month': 6}, {'illum': 0.0, 'day': 14, 'month': 6}, {'illum': 0.01, 'day': 15, 'month': 6}, {'illum': 0.03, 'day': 16, 'month': 6}, {'illum': 0.08, 'day': 17, 'month': 6}, {'illum': 0.13, 'day': 18, 'month': 6}, {'illum': 0.2, 'day': 19, 'month': 6}, {'illum': 0.29, 'day': 20, 'month': 6}, {'illum': 0.37, 'day': 21, 'month': 6}, {'illum': 0.47, 'day': 22, 'month': 6}, {'illum': 0.57, 'day': 23, 'month': 6}, {'illum': 0.66, 'day': 24, 'month': 6}, {'illum': 0.75, 'day': 25, 'month': 6}, {'illum': 0.84, 'day': 26, 'month': 6}, {'illum': 0.91, 'day': 27, 'month': 6}, {'illum': 0.96, 'day': 28, 'month': 6}, {'illum': 0.99, 'day': 29, 'month': 6}, {'illum': 1.0, 'day': 30, 'month': 6}, {'illum': 0.97, 'day': 0, 'month': 7}, {'illum': 0.92, 'day': 1, 'month': 7}, {'illum': 0.84, 'day': 2, 'month': 7}, {'illum': 0.75, 'day': 3, 'month': 7}, {'illum': 0.64, 'day': 4, 'month': 7}, {'illum': 0.53, 'day': 5, 'month': 7}, {'illum': 0.42, 'day': 6, 'month': 7}, {'illum': 0.31, 'day': 7, 'month': 7}, {'illum': 0.22, 'day': 8, 'month': 7}, {'illum': 0.14, 'day': 9, 'month': 7}, {'illum': 0.08, 'day': 10, 'month': 7}, {'illum': 0.03, 'day': 11, 'month': 7}, {'illum': 0.01, 'day': 12, 'month': 7}, {'illum': 0.0, 'day': 13, 'month': 7}, {'illum': 0.01, 'day': 14, 'month': 7}, {'illum': 0.04, 'day': 15, 'month': 7}, {'illum': 0.09, 'day': 16, 'month': 7}, {'illum': 0.15, 'day': 17, 'month': 7}, {'illum': 0.23, 'day': 18, 'month': 7}, {'illum': 0.31, 'day': 19, 'month': 7}, {'illum': 0.41, 'day': 20, 'month': 7}, {'illum': 0.5, 'day': 21, 'month': 7}, {'illum': 0.6, 'day': 22, 'month': 7}, {'illum': 0.7, 'day': 23, 'month': 7}, {'illum': 0.8, 'day': 24, 'month': 7}, {'illum': 0.88, 'day': 25, 'month': 7}, {'illum': 0.94, 'day': 26, 'month': 7}, {'illum': 0.99, 'day': 27, 'month': 7}, {'illum': 1.0, 'day': 28, 'month': 7}, {'illum': 0.98, 'day': 29, 'month': 7}, {'illum': 0.94, 'day': 30, 'month': 7}, {'illum': 0.87, 'day': 0, 'month': 8}, {'illum': 0.78, 'day': 1, 'month': 8}, {'illum': 0.67, 'day': 2, 'month': 8}, {'illum': 0.56, 'day': 3, 'month': 8}, {'illum': 0.46, 'day': 4, 'month': 8}, {'illum': 0.35, 'day': 5, 'month': 8}, {'illum': 0.26, 'day': 6, 'month': 8}, {'illum': 0.18, 'day': 7, 'month': 8}, {'illum': 0.11, 'day': 8, 'month': 8}, {'illum': 0.05, 'day': 9, 'month': 8}, {'illum': 0.02, 'day': 10, 'month': 8}, {'illum': 0.0, 'day': 11, 'month': 8}, {'illum': 0.0, 'day': 12, 'month': 8}, {'illum': 0.02, 'day': 13, 'month': 8}, {'illum': 0.06, 'day': 14, 'month': 8}, {'illum': 0.11, 'day': 15, 'month': 8}, {'illum': 0.18, 'day': 16, 'month': 8}, {'illum': 0.26, 'day': 17, 'month': 8}, {'illum': 0.35, 'day': 18, 'month': 8}, {'illum': 0.45, 'day': 19, 'month': 8}, {'illum': 0.55, 'day': 20, 'month': 8}, {'illum': 0.65, 'day': 21, 'month': 8}, {'illum': 0.76, 'day': 22, 'month': 8}, {'illum': 0.85, 'day': 23, 'month': 8}, {'illum': 0.92, 'day': 24, 'month': 8}, {'illum': 0.97, 'day': 25, 'month': 8}, {'illum': 1.0, 'day': 26, 'month': 8}, {'illum': 0.99, 'day': 27, 'month': 8}, {'illum': 0.96, 'day': 28, 'month': 8}, {'illum': 0.89, 'day': 29, 'month': 8}, {'illum': 0.81, 'day': 0, 'month': 9}, {'illum': 0.71, 'day': 1, 'month': 9}, {'illum': 0.61, 'day': 2, 'month': 9}, {'illum': 0.51, 'day': 3, 'month': 9}, {'illum': 0.4, 'day': 4, 'month': 9}, {'illum': 0.31, 'day': 5, 'month': 9}, {'illum': 0.22, 'day': 6, 'month': 9}, {'illum': 0.15, 'day': 7, 'month': 9}, {'illum': 0.09, 'day': 8, 'month': 9}, {'illum': 0.04, 'day': 9, 'month': 9}, {'illum': 0.01, 'day': 10, 'month': 9}, {'illum': 0.0, 'day': 11, 'month': 9}, {'illum': 0.01, 'day': 12, 'month': 9}, {'illum': 0.03, 'day': 13, 'month': 9}, {'illum': 0.07, 'day': 14, 'month': 9}, {'illum': 0.13, 'day': 15, 'month': 9}, {'illum': 0.21, 'day': 16, 'month': 9}, {'illum': 0.29, 'day': 17, 'month': 9}, {'illum': 0.39, 'day': 18, 'month': 9}, {'illum': 0.5, 'day': 19, 'month': 9}, {'illum': 0.61, 'day': 20, 'month': 9}, {'illum': 0.71, 'day': 21, 'month': 9}, {'illum': 0.81, 'day': 22, 'month': 9}, {'illum': 0.9, 'day': 23, 'month': 9}, {'illum': 0.96, 'day': 24, 'month': 9}, {'illum': 0.99, 'day': 25, 'month': 9}, {'illum': 1.0, 'day': 26, 'month': 9}, {'illum': 0.97, 'day': 27, 'month': 9}, {'illum': 0.92, 'day': 28, 'month': 9}, {'illum': 0.85, 'day': 29, 'month': 9}, {'illum': 0.76, 'day': 30, 'month': 9}, {'illum': 0.67, 'day': 0, 'month': 10}, {'illum': 0.57, 'day': 1, 'month': 10}, {'illum': 0.47, 'day': 2, 'month': 10}, {'illum': 0.37, 'day': 3, 'month': 10}, {'illum': 0.28, 'day': 4, 'month': 10}, {'illum': 0.2, 'day': 5, 'month': 10}, {'illum': 0.13, 'day': 6, 'month': 10}, {'illum': 0.08, 'day': 7, 'month': 10}, {'illum': 0.03, 'day': 8, 'month': 10}, {'illum': 0.01, 'day': 9, 'month': 10}, {'illum': 0.0, 'day': 10, 'month': 10}, {'illum': 0.01, 'day': 11, 'month': 10}, {'illum': 0.04, 'day': 12, 'month': 10}, {'illum': 0.1, 'day': 13, 'month': 10}, {'illum': 0.16, 'day': 14, 'month': 10}, {'illum': 0.25, 'day': 15, 'month': 10}, {'illum': 0.35, 'day': 16, 'month': 10}, {'illum': 0.45, 'day': 17, 'month': 10}, {'illum': 0.56, 'day': 18, 'month': 10}, {'illum': 0.68, 'day': 19, 'month': 10}, {'illum': 0.78, 'day': 20, 'month': 10}, {'illum': 0.87, 'day': 21, 'month': 10}, {'illum': 0.94, 'day': 22, 'month': 10}, {'illum': 0.98, 'day': 23, 'month': 10}, {'illum': 1.0, 'day': 24, 'month': 10}, {'illum': 0.99, 'day': 25, 'month': 10}, {'illum': 0.95, 'day': 26, 'month': 10}, {'illum': 0.89, 'day': 27, 'month': 10}, {'illum': 0.82, 'day': 28, 'month': 10}, {'illum': 0.74, 'day': 29, 'month': 10}, {'illum': 0.64, 'day': 0, 'month': 11}, {'illum': 0.55, 'day': 1, 'month': 11}, {'illum': 0.45, 'day': 2, 'month': 11}, {'illum': 0.36, 'day': 3, 'month': 11}, {'illum': 0.27, 'day': 4, 'month': 11}, {'illum': 0.19, 'day': 5, 'month': 11}, {'illum': 0.12, 'day': 6, 'month': 11}, {'illum': 0.07, 'day': 7, 'month': 11}, {'illum': 0.03, 'day': 8, 'month': 11}, {'illum': 0.01, 'day': 9, 'month': 11}, {'illum': 0.0, 'day': 10, 'month': 11}, {'illum': 0.02, 'day': 11, 'month': 11}, {'illum': 0.06, 'day': 12, 'month': 11}, {'illum': 0.13, 'day': 13, 'month': 11}, {'illum': 0.21, 'day': 14, 'month': 11}, {'illum': 0.3, 'day': 15, 'month': 11}, {'illum': 0.41, 'day': 16, 'month': 11}, {'illum': 0.52, 'day': 17, 'month': 11}, {'illum': 0.64, 'day': 18, 'month': 11}, {'illum': 0.74, 'day': 19, 'month': 11}, {'illum': 0.84, 'day': 20, 'month': 11}, {'illum': 0.91, 'day': 21, 'month': 11}, {'illum': 0.96, 'day': 22, 'month': 11}, {'illum': 0.99, 'day': 23, 'month': 11}, {'illum': 1.0, 'day': 24, 'month': 11}, {'illum': 0.98, 'day': 25, 'month': 11}, {'illum': 0.93, 'day': 26, 'month': 11}, {'illum': 0.88, 'day': 27, 'month': 11}, {'illum': 0.8, 'day': 28, 'month': 11}, {'illum': 0.72, 'day': 29, 'month': 11}, {'illum': 0.63, 'day': 30, 'month': 11}, {'illum': 0.59, 'day': 0, 'month': 0}, {'illum': 0.49, 'day': 1, 'month': 0}, {'illum': 0.4, 'day': 2, 'month': 0}, {'illum': 0.31, 'day': 3, 'month': 0}, {'illum': 0.22, 'day': 4, 'month': 0}, {'illum': 0.15, 'day': 5, 'month': 0}, {'illum': 0.08, 'day': 6, 'month': 0}, {'illum': 0.04, 'day': 7, 'month': 0}, {'illum': 0.01, 'day': 8, 'month': 0}, {'illum': 0.0, 'day': 9, 'month': 0}, {'illum': 0.02, 'day': 10, 'month': 0}, {'illum': 0.06, 'day': 11, 'month': 0}, {'illum': 0.13, 'day': 12, 'month': 0}, {'illum': 0.22, 'day': 13, 'month': 0}, {'illum': 0.32, 'day': 14, 'month': 0}, {'illum': 0.43, 'day': 15, 'month': 0}, {'illum': 0.54, 'day': 16, 'month': 0}, {'illum': 0.65, 'day': 17, 'month': 0}, {'illum': 0.75, 'day': 18, 'month': 0}, {'illum': 0.84, 'day': 19, 'month': 0}, {'illum': 0.91, 'day': 20, 'month': 0}, {'illum': 0.96, 'day': 21, 'month': 0}, {'illum': 0.99, 'day': 22, 'month': 0}, {'illum': 1.0, 'day': 23, 'month': 0}, {'illum': 0.98, 'day': 24, 'month': 0}, {'illum': 0.95, 'day': 25, 'month': 0}, {'illum': 0.9, 'day': 26, 'month': 0}, {'illum': 0.83, 'day': 27, 'month': 0}, {'illum': 0.75, 'day': 28, 'month': 0}, {'illum': 0.67, 'day': 29, 'month': 0}, {'illum': 0.58, 'day': 30, 'month': 0}, {'illum': 0.48, 'day': 0, 'month': 1}, {'illum': 0.39, 'day': 1, 'month': 1}, {'illum': 0.3, 'day': 2, 'month': 1}, {'illum': 0.21, 'day': 3, 'month': 1}, {'illum': 0.13, 'day': 4, 'month': 1}, {'illum': 0.07, 'day': 5, 'month': 1}, {'illum': 0.02, 'day': 6, 'month': 1}, {'illum': 0.0, 'day': 7, 'month': 1}, {'illum': 0.01, 'day': 8, 'month': 1}, {'illum': 0.04, 'day': 9, 'month': 1}, {'illum': 0.1, 'day': 10, 'month': 1}, {'illum': 0.18, 'day': 11, 'month': 1}, {'illum': 0.28, 'day': 12, 'month': 1}, {'illum': 0.39, 'day': 13, 'month': 1}, {'illum': 0.5, 'day': 14, 'month': 1}, {'illum': 0.61, 'day': 15, 'month': 1}, {'illum': 0.72, 'day': 16, 'month': 1}, {'illum': 0.81, 'day': 17, 'month': 1}, {'illum': 0.88, 'day': 18, 'month': 1}, {'illum': 0.94, 'day': 19, 'month': 1}, {'illum': 0.98, 'day': 20, 'month': 1}, {'illum': 1.0, 'day': 21, 'month': 1}, {'illum': 1.0, 'day': 22, 'month': 1}, {'illum': 0.98, 'day': 23, 'month': 1}, {'illum': 0.94, 'day': 24, 'month': 1}, {'illum': 0.89, 'day': 25, 'month': 1}, {'illum': 0.82, 'day': 26, 'month': 1}, {'illum': 0.74, 'day': 27, 'month': 1}, {'illum': 0.66, 'day': 28, 'month': 1}, {'illum': 0.56, 'day': 0, 'month': 2}, {'illum': 0.47, 'day': 1, 'month': 2}, {'illum': 0.37, 'day': 2, 'month': 2}, {'illum': 0.27, 'day': 3, 'month': 2}, {'illum': 0.18, 'day': 4, 'month': 2}, {'illum': 0.1, 'day': 5, 'month': 2}, {'illum': 0.04, 'day': 6, 'month': 2}, {'illum': 0.01, 'day': 7, 'month': 2}, {'illum': 0.0, 'day': 8, 'month': 2}, {'illum': 0.02, 'day': 9, 'month': 2}, {'illum': 0.07, 'day': 10, 'month': 2}, {'illum': 0.15, 'day': 11, 'month': 2}, {'illum': 0.24, 'day': 12, 'month': 2}, {'illum': 0.35, 'day': 13, 'month': 2}, {'illum': 0.46, 'day': 14, 'month': 2}, {'illum': 0.57, 'day': 15, 'month': 2}, {'illum': 0.67, 'day': 16, 'month': 2}, {'illum': 0.76, 'day': 17, 'month': 2}, {'illum': 0.84, 'day': 18, 'month': 2}, {'illum': 0.91, 'day': 19, 'month': 2}, {'illum': 0.96, 'day': 20, 'month': 2}, {'illum': 0.99, 'day': 21, 'month': 2}, {'illum': 1.0, 'day': 22, 'month': 2}, {'illum': 0.99, 'day': 23, 'month': 2}, {'illum': 0.97, 'day': 24, 'month': 2}, {'illum': 0.93, 'day': 25, 'month': 2}, {'illum': 0.87, 'day': 26, 'month': 2}, {'illum': 0.8, 'day': 27, 'month': 2}, {'illum': 0.72, 'day': 28, 'month': 2}, {'illum': 0.63, 'day': 29, 'month': 2}, {'illum': 0.53, 'day': 30, 'month': 2}, {'illum': 0.43, 'day': 0, 'month': 3}, {'illum': 0.33, 'day': 1, 'month': 3}, {'illum': 0.23, 'day': 2, 'month': 3}, {'illum': 0.14, 'day': 3, 'month': 3}, {'illum': 0.07, 'day': 4, 'month': 3}, {'illum': 0.02, 'day': 5, 'month': 3}, {'illum': 0.0, 'day': 6, 'month': 3}, {'illum': 0.01, 'day': 7, 'month': 3}, {'illum': 0.05, 'day': 8, 'month': 3}, {'illum': 0.12, 'day': 9, 'month': 3}, {'illum': 0.21, 'day': 10, 'month': 3}, {'illum': 0.31, 'day': 11, 'month': 3}, {'illum': 0.41, 'day': 12, 'month': 3}, {'illum': 0.52, 'day': 13, 'month': 3}, {'illum': 0.62, 'day': 14, 'month': 3}, {'illum': 0.72, 'day': 15, 'month': 3}, {'illum': 0.8, 'day': 16, 'month': 3}, {'illum': 0.87, 'day': 17, 'month': 3}, {'illum': 0.93, 'day': 18, 'month': 3}, {'illum': 0.97, 'day': 19, 'month': 3}, {'illum': 0.99, 'day': 20, 'month': 3}, {'illum': 1.0, 'day': 21, 'month': 3}, {'illum': 0.99, 'day': 22, 'month': 3}, {'illum': 0.96, 'day': 23, 'month': 3}, {'illum': 0.91, 'day': 24, 'month': 3}, {'illum': 0.85, 'day': 25, 'month': 3}, {'illum': 0.77, 'day': 26, 'month': 3}, {'illum': 0.69, 'day': 27, 'month': 3}, {'illum': 0.59, 'day': 28, 'month': 3}, {'illum': 0.48, 'day': 29, 'month': 3}, {'illum': 0.37, 'day': 0, 'month': 4}, {'illum': 0.27, 'day': 1, 'month': 4}, {'illum': 0.17, 'day': 2, 'month': 4}, {'illum': 0.09, 'day': 3, 'month': 4}, {'illum': 0.03, 'day': 4, 'month': 4}, {'illum': 0.0, 'day': 5, 'month': 4}, {'illum': 0.01, 'day': 6, 'month': 4}, {'illum': 0.04, 'day': 7, 'month': 4}, {'illum': 0.09, 'day': 8, 'month': 4}, {'illum': 0.17, 'day': 9, 'month': 4}, {'illum': 0.26, 'day': 10, 'month': 4}, {'illum': 0.36, 'day': 11, 'month': 4}, {'illum': 0.46, 'day': 12, 'month': 4}, {'illum': 0.56, 'day': 13, 'month': 4}, {'illum': 0.66, 'day': 14, 'month': 4}, {'illum': 0.75, 'day': 15, 'month': 4}, {'illum': 0.82, 'day': 16, 'month': 4}, {'illum': 0.89, 'day': 17, 'month': 4}, {'illum': 0.94, 'day': 18, 'month': 4}, {'illum': 0.98, 'day': 19, 'month': 4}, {'illum': 1.0, 'day': 20, 'month': 4}, {'illum': 1.0, 'day': 21, 'month': 4}, {'illum': 0.98, 'day': 22, 'month': 4}, {'illum': 0.94, 'day': 23, 'month': 4}, {'illum': 0.89, 'day': 24, 'month': 4}, {'illum': 0.81, 'day': 25, 'month': 4}, {'illum': 0.73, 'day': 26, 'month': 4}, {'illum': 0.63, 'day': 27, 'month': 4}, {'illum': 0.52, 'day': 28, 'month': 4}, {'illum': 0.41, 'day': 29, 'month': 4}, {'illum': 0.3, 'day': 30, 'month': 4}, {'illum': 0.2, 'day': 0, 'month': 5}, {'illum': 0.11, 'day': 1, 'month': 5}, {'illum': 0.05, 'day': 2, 'month': 5}, {'illum': 0.01, 'day': 3, 'month': 5}, {'illum': 0.0, 'day': 4, 'month': 5}, {'illum': 0.02, 'day': 5, 'month': 5}, {'illum': 0.07, 'day': 6, 'month': 5}, {'illum': 0.13, 'day': 7, 'month': 5}, {'illum': 0.22, 'day': 8, 'month': 5}, {'illum': 0.31, 'day': 9, 'month': 5}, {'illum': 0.4, 'day': 10, 'month': 5}, {'illum': 0.5, 'day': 11, 'month': 5}, {'illum': 0.6, 'day': 12, 'month': 5}, {'illum': 0.69, 'day': 13, 'month': 5}, {'illum': 0.77, 'day': 14, 'month': 5}, {'illum': 0.84, 'day': 15, 'month': 5}, {'illum': 0.91, 'day': 16, 'month': 5}, {'illum': 0.95, 'day': 17, 'month': 5}, {'illum': 0.99, 'day': 18, 'month': 5}, {'illum': 1.0, 'day': 19, 'month': 5}, {'illum': 0.99, 'day': 20, 'month': 5}, {'illum': 0.96, 'day': 21, 'month': 5}, {'illum': 0.91, 'day': 22, 'month': 5}, {'illum': 0.84, 'day': 23, 'month': 5}, {'illum': 0.76, 'day': 24, 'month': 5}, {'illum': 0.66, 'day': 25, 'month': 5}, {'illum': 0.55, 'day': 26, 'month': 5}, {'illum': 0.44, 'day': 27, 'month': 5}, {'illum': 0.32, 'day': 28, 'month': 5}, {'illum': 0.22, 'day': 29, 'month': 5}, {'illum': 0.13, 'day': 0, 'month': 6}, {'illum': 0.06, 'day': 1, 'month': 6}, {'illum': 0.02, 'day': 2, 'month': 6}, {'illum': 0.0, 'day': 3, 'month': 6}, {'illum': 0.01, 'day': 4, 'month': 6}, {'illum': 0.04, 'day': 5, 'month': 6}, {'illum': 0.1, 'day': 6, 'month': 6}, {'illum': 0.17, 'day': 7, 'month': 6}, {'illum': 0.25, 'day': 8, 'month': 6}, {'illum': 0.34, 'day': 9, 'month': 6}, {'illum': 0.43, 'day': 10, 'month': 6}, {'illum': 0.53, 'day': 11, 'month': 6}, {'illum': 0.62, 'day': 12, 'month': 6}, {'illum': 0.71, 'day': 13, 'month': 6}, {'illum': 0.79, 'day': 14, 'month': 6}, {'illum': 0.87, 'day': 15, 'month': 6}, {'illum': 0.93, 'day': 16, 'month': 6}, {'illum': 0.97, 'day': 17, 'month': 6}, {'illum': 0.99, 'day': 18, 'month': 6}, {'illum': 1.0, 'day': 19, 'month': 6}, {'illum': 0.98, 'day': 20, 'month': 6}, {'illum': 0.93, 'day': 21, 'month': 6}, {'illum': 0.87, 'day': 22, 'month': 6}, {'illum': 0.78, 'day': 23, 'month': 6}, {'illum': 0.68, 'day': 24, 'month': 6}, {'illum': 0.57, 'day': 25, 'month': 6}, {'illum': 0.46, 'day': 26, 'month': 6}, {'illum': 0.35, 'day': 27, 'month': 6}, {'illum': 0.24, 'day': 28, 'month': 6}, {'illum': 0.15, 'day': 29, 'month': 6}, {'illum': 0.08, 'day': 30, 'month': 6}, {'illum': 0.03, 'day': 0, 'month': 7}, {'illum': 0.0, 'day': 1, 'month': 7}, {'illum': 0.0, 'day': 2, 'month': 7}, {'illum': 0.02, 'day': 3, 'month': 7}, {'illum': 0.07, 'day': 4, 'month': 7}, {'illum': 0.12, 'day': 5, 'month': 7}, {'illum': 0.2, 'day': 6, 'month': 7}, {'illum': 0.28, 'day': 7, 'month': 7}, {'illum': 0.37, 'day': 8, 'month': 7}, {'illum': 0.46, 'day': 9, 'month': 7}, {'illum': 0.56, 'day': 10, 'month': 7}, {'illum': 0.65, 'day': 11, 'month': 7}, {'illum': 0.74, 'day': 12, 'month': 7}, {'illum': 0.82, 'day': 13, 'month': 7}, {'illum': 0.89, 'day': 14, 'month': 7}, {'illum': 0.95, 'day': 15, 'month': 7}, {'illum': 0.99, 'day': 16, 'month': 7}, {'illum': 1.0, 'day': 17, 'month': 7}, {'illum': 0.99, 'day': 18, 'month': 7}, {'illum': 0.95, 'day': 19, 'month': 7}, {'illum': 0.89, 'day': 20, 'month': 7}, {'illum': 0.81, 'day': 21, 'month': 7}, {'illum': 0.71, 'day': 22, 'month': 7}, {'illum': 0.6, 'day': 23, 'month': 7}, {'illum': 0.48, 'day': 24, 'month': 7}, {'illum': 0.37, 'day': 25, 'month': 7}, {'illum': 0.26, 'day': 26, 'month': 7}, {'illum': 0.17, 'day': 27, 'month': 7}, {'illum': 0.1, 'day': 28, 'month': 7}, {'illum': 0.04, 'day': 29, 'month': 7}, {'illum': 0.01, 'day': 30, 'month': 7}, {'illum': 0.0, 'day': 0, 'month': 8}, {'illum': 0.01, 'day': 1, 'month': 8}, {'illum': 0.04, 'day': 2, 'month': 8}, {'illum': 0.08, 'day': 3, 'month': 8}, {'illum': 0.14, 'day': 4, 'month': 8}, {'illum': 0.22, 'day': 5, 'month': 8}, {'illum': 0.3, 'day': 6, 'month': 8}, {'illum': 0.39, 'day': 7, 'month': 8}, {'illum': 0.49, 'day': 8, 'month': 8}, {'illum': 0.58, 'day': 9, 'month': 8}, {'illum': 0.68, 'day': 10, 'month': 8}, {'illum': 0.77, 'day': 11, 'month': 8}, {'illum': 0.85, 'day': 12, 'month': 8}, {'illum': 0.92, 'day': 13, 'month': 8}, {'illum': 0.97, 'day': 14, 'month': 8}, {'illum': 1.0, 'day': 15, 'month': 8}, {'illum': 1.0, 'day': 16, 'month': 8}, {'illum': 0.97, 'day': 17, 'month': 8}, {'illum': 0.91, 'day': 18, 'month': 8}, {'illum': 0.83, 'day': 19, 'month': 8}, {'illum': 0.73, 'day': 20, 'month': 8}, {'illum': 0.62, 'day': 21, 'month': 8}, {'illum': 0.51, 'day': 22, 'month': 8}, {'illum': 0.4, 'day': 23, 'month': 8}, {'illum': 0.3, 'day': 24, 'month': 8}, {'illum': 0.21, 'day': 25, 'month': 8}, {'illum': 0.13, 'day': 26, 'month': 8}, {'illum': 0.07, 'day': 27, 'month': 8}, {'illum': 0.03, 'day': 28, 'month': 8}, {'illum': 0.0, 'day': 29, 'month': 8}, {'illum': 0.0, 'day': 0, 'month': 9}, {'illum': 0.02, 'day': 1, 'month': 9}, {'illum': 0.05, 'day': 2, 'month': 9}, {'illum': 0.1, 'day': 3, 'month': 9}, {'illum': 0.16, 'day': 4, 'month': 9}, {'illum': 0.24, 'day': 5, 'month': 9}, {'illum': 0.32, 'day': 6, 'month': 9}, {'illum': 0.42, 'day': 7, 'month': 9}, {'illum': 0.52, 'day': 8, 'month': 9}, {'illum': 0.62, 'day': 9, 'month': 9}, {'illum': 0.72, 'day': 10, 'month': 9}, {'illum': 0.81, 'day': 11, 'month': 9}, {'illum': 0.89, 'day': 12, 'month': 9}, {'illum': 0.95, 'day': 13, 'month': 9}, {'illum': 0.99, 'day': 14, 'month': 9}, {'illum': 1.0, 'day': 15, 'month': 9}, {'illum': 0.98, 'day': 16, 'month': 9}, {'illum': 0.93, 'day': 17, 'month': 9}, {'illum': 0.86, 'day': 18, 'month': 9}, {'illum': 0.76, 'day': 19, 'month': 9}, {'illum': 0.66, 'day': 20, 'month': 9}, {'illum': 0.55, 'day': 21, 'month': 9}, {'illum': 0.44, 'day': 22, 'month': 9}, {'illum': 0.34, 'day': 23, 'month': 9}, {'illum': 0.25, 'day': 24, 'month': 9}, {'illum': 0.17, 'day': 25, 'month': 9}, {'illum': 0.1, 'day': 26, 'month': 9}, {'illum': 0.05, 'day': 27, 'month': 9}, {'illum': 0.02, 'day': 28, 'month': 9}, {'illum': 0.0, 'day': 29, 'month': 9}, {'illum': 0.0, 'day': 30, 'month': 9}, {'illum': 0.02, 'day': 0, 'month': 10}, {'illum': 0.06, 'day': 1, 'month': 10}, {'illum': 0.11, 'day': 2, 'month': 10}, {'illum': 0.18, 'day': 3, 'month': 10}, {'illum': 0.26, 'day': 4, 'month': 10}, {'illum': 0.35, 'day': 5, 'month': 10}, {'illum': 0.45, 'day': 6, 'month': 10}, {'illum': 0.55, 'day': 7, 'month': 10}, {'illum': 0.66, 'day': 8, 'month': 10}, {'illum': 0.76, 'day': 9, 'month': 10}, {'illum': 0.85, 'day': 10, 'month': 10}, {'illum': 0.92, 'day': 11, 'month': 10}, {'illum': 0.97, 'day': 12, 'month': 10}, {'illum': 1.0, 'day': 13, 'month': 10}, {'illum': 0.99, 'day': 14, 'month': 10}, {'illum': 0.95, 'day': 15, 'month': 10}, {'illum': 0.89, 'day': 16, 'month': 10}, {'illum': 0.81, 'day': 17, 'month': 10}, {'illum': 0.71, 'day': 18, 'month': 10}, {'illum': 0.61, 'day': 19, 'month': 10}, {'illum': 0.5, 'day': 20, 'month': 10}, {'illum': 0.4, 'day': 21, 'month': 10}, {'illum': 0.31, 'day': 22, 'month': 10}, {'illum': 0.22, 'day': 23, 'month': 10}, {'illum': 0.15, 'day': 24, 'month': 10}, {'illum': 0.09, 'day': 25, 'month': 10}, {'illum': 0.04, 'day': 26, 'month': 10}, {'illum': 0.01, 'day': 27, 'month': 10}, {'illum': 0.0, 'day': 28, 'month': 10}, {'illum': 0.01, 'day': 29, 'month': 10}, {'illum': 0.03, 'day': 0, 'month': 11}, {'illum': 0.07, 'day': 1, 'month': 11}, {'illum': 0.13, 'day': 2, 'month': 11}, {'illum': 0.21, 'day': 3, 'month': 11}, {'illum': 0.29, 'day': 4, 'month': 11}, {'illum': 0.39, 'day': 5, 'month': 11}, {'illum': 0.5, 'day': 6, 'month': 11}, {'illum': 0.61, 'day': 7, 'month': 11}, {'illum': 0.71, 'day': 8, 'month': 11}, {'illum': 0.81, 'day': 9, 'month': 11}, {'illum': 0.89, 'day': 10, 'month': 11}, {'illum': 0.96, 'day': 11, 'month': 11}, {'illum': 0.99, 'day': 12, 'month': 11}, {'illum': 1.0, 'day': 13, 'month': 11}, {'illum': 0.97, 'day': 14, 'month': 11}, {'illum': 0.92, 'day': 15, 'month': 11}, {'illum': 0.85, 'day': 16, 'month': 11}, {'illum': 0.77, 'day': 17, 'month': 11}, {'illum': 0.67, 'day': 18, 'month': 11}, {'illum': 0.58, 'day': 19, 'month': 11}, {'illum': 0.48, 'day': 20, 'month': 11}, {'illum': 0.38, 'day': 21, 'month': 11}, {'illum': 0.29, 'day': 22, 'month': 11}, {'illum': 0.21, 'day': 23, 'month': 11}, {'illum': 0.14, 'day': 24, 'month': 11}, {'illum': 0.08, 'day': 25, 'month': 11}, {'illum': 0.04, 'day': 26, 'month': 11}, {'illum': 0.01, 'day': 27, 'month': 11}, {'illum': 0.0, 'day': 28, 'month': 11}, {'illum': 0.01, 'day': 29, 'month': 11}, {'illum': 0.04, 'day': 30, 'month': 11}];