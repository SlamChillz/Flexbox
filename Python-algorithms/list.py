# A function to accept a list argument of only integers and return even numbers only

# def even(array):
#     if not(isinstance(array, list)): return("Error! Parameter must be a list")
#     if not(bool(array)): return("Error! List can not be empty")
#     for x in array:
#         if not(isinstance(x, int)): return("Error! List must contain integers only")
#     newList = []
#     for x in array:
#         if x%2 == 0:
#             newList.append(x)
#     return("Note! There is no even number in the given list" if not(bool(newList)) else newList)

def even():
    array = input('Enter elements of a list separated by space ')
    listarray = array.split()
    newarray = [x for x in listarray if x.isnumeric() or x == 0]
    while (len(newarray) < len(listarray)) or (bool(listarray) == False):
        print("List can not be empty and must contain integers only!")
        array = input('Enter elements of a list separated by space ')
    else:
        newList = []
        for x in newarray:
            if (int(x)) % 2 == 0:
                newList.append(x)
    print("Note! There is no even number in the given list" if not(bool(newList)) else newList)

even()