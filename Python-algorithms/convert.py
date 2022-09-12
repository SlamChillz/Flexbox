# A program to convert a Temperature of integer value in either 'C' or 'F' to 'F' or 'C'

# temperature = input("Enter the Temperature: ")
# if not(temperature.isnumeric()): print("Temperature must be an integer value"); quit()
# unit = input("Enter Temperature unit (C or F): "); unit = unit.upper()
# if not(unit.isnumeric()) and not(unit == 'C' or unit == 'F'): print("Unit must be 'C' or 'F'"); quit()
# else:
#     print(("Tempertaure in 'F': {}\u00b0F".format(int(9*(int(temperature))/5 + 32)))\
#         if unit == 'C' else ("Temperature in 'C': {}\u00b0C".format(int(5*(int(temperature)-32)/9))))

temperature = input("Enter the Temperature: ")
while not(temperature.isnumeric()): 
    print("Temperature must be an integer value")
    temperature = input("Re-enter the Temperature: ")
unit = input("Enter Temperature unit (C or F): "); unit = unit.upper()
while (unit.isnumeric() or not(unit == 'C' or unit == 'F')): 
    print("Unit must be 'C' or 'F'")
    unit = input("Re-enter Temperature unit (C or F): "); unit = unit.upper()
print(("Tempertaure in 'F': {}\u00b0F".format(int(9*(int(temperature))/5 + 32)))\
    if unit == 'C' else ("Temperature in 'C': {}\u00b0C".format(int(5*(int(temperature)-32)/9))))