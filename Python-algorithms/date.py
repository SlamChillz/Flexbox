# A function to output date differnce in days. Date format must be 'YYYY-MM-DD'

from datetime import *

def dayDifference():
    while True:
        try:
            dayOne = input("Enter first date 'YYYY-MM-DD': ")
            dayOne = date.fromisoformat(str(dayOne))
            break
        except ValueError:
            print("Date format must be 'YYYY-MM-DD'")
    while True:
        try:
            dayTwo = input("Enter second date 'YYYY-MM-DD': ")
            dayTwo = date.fromisoformat(str(dayTwo))
            break
        except ValueError:
            print("Date format must be 'YYYY-MM-DD'")
    diff =abs((dayOne-dayTwo).days)
    print("The difference between {} and {} in day(s) is: {}".format(dayOne, dayTwo, diff))
    
dayDifference()