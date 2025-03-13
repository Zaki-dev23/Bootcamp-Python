# l1 = [1, 2, 3, 4, 5, 6]
# l1.append(3)
# l1.append([7, 8, 9])
# l1.extend([6, 7, 8])
# print(l1) #[1, 2, 3, 4, 5, 6, 3, [7, 8, 9], 6, 7, 8]

# l1=[1, 2, 3, 4, 5, 6]
# l1.insert(2, 6)
# print(l1) #[1, 2, 6, 3, 4, 5, 6]

# l2 = [1, 2, 3, 4, 5, "a", "a", "b", 1, 2, 4]
# s = l2.count(1)
# print(s)

# a = ["b", "g", "a", "d", "f", "c", "h", "e"]
# x = sorted(a)
# print("a after sorted function")
# print(a)
# print(x)
# b = [1, 2, 5, 8, 3]
# b.sort()
# print(b)

# # slicing
# lst = [1, 2, 3, 4, 5, 6, 7]
# print(lst[0:4])
# print(lst[::])
# print(lst[::-1])


#############Tuple#############
# t = (1, 2, 3, 4, 5, "a", "b", "c")
# t1 = 1, 2, 3, 4, "g", "l"
# print(t)
# print(t1)
# print(len(t))

############Decionry##########
# cubes = {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}
# print(cubes.pop(4))
# print(cubes)
# print(cubes.popitem())
# print(cubes)
# cubes.clear()
# print(cubes)

# d = {1:'10', 2:'20', 3:'30', 4:'40', 5:'50'}
# l1 =list(d.keys())
# print("the key values are:")
# print(l1)
# l2 = list(d.values())
# print("The values are of dictionary is")
# print(l2)
# l3 = list(d.items())
# print("the list items are")
# print(l3)

#####################Sets{}############

# set1 = {1, 2, 3, 4, "hi", "world", "python"}
# print("python" in set1)
# set1.remove(4)
# print(set1)

# a = {1, 2, 3, 4, 5}
# b = {2, 3, 6, 7, 5}
# c = a^b 
# print(c)
# d = a - b
# print(d)
# e = b - a 
# print(e)


##################Function#####################

# square = lambda n : n*n
# num = square(5)
# print(num)

# lists = [1,2,3,4,5,6,7,8,9]

# myList2 = map(lambda n : n*2, lists)
# print(list(myList2))

# myList = [10, 25, 17, 9, 30, -5]
# # Filters the elements which are not multiples of 5
# myList2 = filter(lambda n : n%5 == 0, myList)
# print(list(myList2))

# a_dict = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}
# print(a_dict.items())

# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# c = sample_dict["class"]["student"]["marks"]["history"] = 90
# del sample_dict["class"]["student"]["marks"]["history"]
# print(sample_dict)

# shirts = [
#     {"size": "S", "color": "Red"},
#     {"size": "M", "color": "Blue"},
#     {"size": "L", "color": "Green"},
#     {"size": "", "color": "Green"}
# ]

# sizes = [shirt["size"] for shirt in shirts]
# print(sizes)  # Output: ['S', 'M', 'L']

# rick_dict = {
#     'first_name':'Rick',
#     'last_name':'Sanchez'
# }
# print(rick_dict.items())

# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"

# }
# keys_to_remove = ["name", "salary"]
# for key in keys_to_remove:
#   del sample_dict[key]
# print(sample_dict)

##################################################
# for letter in 'Leonardo':
#     if letter == 'r':
#         break
#     print(letter, end='')
# end = input('write the quit or anything')
# Final_dic = {}
# while end != "quit":
#   key = input("please write the key :")
#   value = input("please write the value :")
#   Final_dic[key] = value
# print(Final_dic)
  
# def calculation(a,b):
#   add= a + b
#   sub = a - b
#   return (add,sub)

# res = calculation(10,5)
# print(res)

# def check(a, *numbers, **person):
#     print('Greetings : ', a)

#     #iterate through all the items in tuple
#     for num in numbers:
#         print('num - ', num)

#     #iterate through all the items in dictionary    
#     for key, value in person.items():
#         print(key + ': ' + value)
# print(check("hello", 1,2,3,name="John",surname="Doe"))
##########################################################################

###########"1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# dec = {}

# for key,value in zip(keys, values):
#    dec[key] = value
# print(dec)


############2
# name = input("Write your name : ")
# age = input("Write your age : ")
# add = input("if you add someone write 'add' if you finished write 'quit' : ")
# totle = 0
# con = True

# Family = {}


# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8, 'fridrick': 2}

# def familyTotleCost(*arges):
#   return sum(arges)
# while con :
#  if add=="quit":
#   for key,value in family.items():
#    if value > 12:
#     print(f"{key} have to pay 15$")
#     totle += familyTotleCost(15)
#     continue
#    elif value < 10 and value > 3:
#     print(f"{key} have to pay 10$")
#     totle += familyTotleCost(10)
#     continue
#   else:
#     print(f"{key} still a child the ticket is free")
#     continue
#  elif add=="add":
#   name = input("Write a name : ")
#   age = input("Write an age : ")
  


# print(totle)
    
##############3

#4

###################################"oop"

# class Dog():
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog

# shelter_dog = Dog('Rex')
# other_shelter_dog = Dog("Jimmy")

# class Person():
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

# first_person = Person("John", 36)

# print(first_person.name)
# print(first_person.age)

# class Point():
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y

# ## create an instance of the class
# p = Point(3,4)

# ## access the attributes
# print("p.x is:", p.x)
# print("p.y is:", p.y)

# class Dog():
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog

#     def bark(self):
#         print(f"{self.name} barks ! WAF")

#     def walk(self, number_of_meters):
#         print(f"{self.name} walked {number_of_meters} meters")
#     def rename(self, new_name):
#         self.name = new_name

# shelter_dog = Dog("Rex")
# shelter_dog.walk(10)
# shelter_dog.bark()
# shelter_dog.rename("Paul")
# shelter_dog.walk(10)
# shelter_dog.bark()

# class Person():
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

#   def show_details(self):
#     print("Hello my name is " + self.name)
#   def modifyName(self, newName):
#       self.name = newName
      

# first_person = Person("John", 36)
# first_person.show_details()
# first_person.modifyName("zakaria")
# first_person.show_details()

# class Computer():

#     def description(self, name):
#         """
#         This is a totally useless function
#         """
#         print("I am a computer, my name is", name)
#         #Analyse the line below
#         print("self : ",self)

# mac_computer = Computer()
# mac_computer.brand = "Apple"
# print(mac_computer.brand)

# dell_computer = Computer()

# Computer.description(dell_computer, "Mark")
# # IS THE SAME AS:
# dell_computer.description("Mark")

###########################################################











