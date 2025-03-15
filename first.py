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


# class Shape:
#   sides = 4 #first property
#   name = "Square" #second property
#   def description(a): #method defined
#     return ("A square with 4 sides")

# s1 = Shape() #creating an object of Shape
# print("Name of shape is:",(s1.name))
# print("Number of sides are:",(s1.sides))
# print(s1.description())

# class Animal():
#     def __init__(self, type, number_legs, sound):
#         self.type = type
#         self.number_legs = number_legs
#         self.sound = sound
#     def make_sound(self):
#         print(f"I am an animal, and I love saying {self.sound}")

# class Dog(Animal):
#     pass
# rex = Dog("dog", 4, "wouaf")
# print("this animal is a :", rex.type)

# class Circle:
#     color = "red"

# class NewCircle(Circle):
#     color = "blue"

# nc = NewCircle
# print(nc.color)

# class Circle:
#     def __init__(self, diameter):
#       self.diameter = diameter

#     def grow(self, factor=2):
#         """grows the circle's diameter by factor"""
#         self.diameter = self.diameter * factor

# class NewCircle(Circle):
#     def grow(self, factor=2):
#         """grows the area by factor..."""
#         self.diameter = (self.diameter * factor * 2)

# nc = NewCircle(1)
# print(nc.diameter)

# nc.grow()

# print(nc.diameter)
# # >> What will be the output


# class Computer():

#     def __init__(self):
#         self.name = "Apple Computer" # public
#         self.__max_price = 900 # private

#     def sell(self):            # public method
#         print(f"Selling Price: {self.__max_price}")

#     def __sell(self):          # private method
#       print('This is private method')

#     def set_max_price(self, price):
#         self.__max_price = price

# c = Computer()
# # c.__sell()

# c.__max_price = 1000
# c.sell()

# c.set_max_price(1000)
# c.sell()

# class MyClass(object):
#     def func(self):
#         print("I'm being called from the Parent class")


# class ChildClass(MyClass):
#     def func(self):
#         print("I'm actually being called from the Child class")
#         print("But...")
#         # Calling the `func()` method from the Parent class.
#         super(ChildClass, self).func()

# my_instance_2 = ChildClass()
# my_instance_2.func()

# class Door():
#     def __init__(self, is_opened=False):
#         self.is_opened = is_opened
#     def open_door(self):
#         self.is_opened = True
#         print('this door is open')
#     def close_door(self):
#         self.is_opened = False
#         print('this door is colse')
        
# class BlockedDoor(Door):
#     def open_door(self):
#         raise Exception("Error: A blocked door cannot be opened.")

#     def close_door(self):
#         raise Exception("Error: A blocked door cannot be closed.")
    
# door = Door()
# door.open_door()  # The door is now open.
# door.close_door()  # The door is now closed.

# blocked_door = BlockedDoor()

# try:
#     blocked_door.open_door()
# except Exception as e:
#     print(e)  # Error: A blocked door cannot be opened.

# try:
#     blocked_door.close_door()
# except Exception as e:
#     print(e)  # Error: A blocked door cannot be closed.

# class Book():
#     def __init__(self, title, author, publication_date, price):
#         self.title = title
#         self.author = author
#         self.publication = publication_date
#         self.price = price

#     def present(self):
#         print(f'Title: {self.title}')

# class Fiction(Book):
#     def __init__(self, title, author, publication_date, price, is_awesome):
#         super().__init__(title, author, publication_date, price)
#         self.genre = 'Fiction'
#         self.is_awesome = is_awesome
#         if self.is_awesome:
#             self.bored = False
#             print('Woow this is an awesome book')
#         else:
#             self.bored = True
#             print('I am very bored')

# if __name__ == '__main__':
#     foundation = Fiction('Asimov', 'Foundation', '1966', '5£', True)
#     foundation.present()
#     print(foundation.price)
#     print(foundation.bored)
#     boring_book = Fiction('bo
# ring_guy', 'boring_title', 'boring_date', '9000£', False)
    # print(boring_book.bored)
    
# class Dog():
#     dogs_king = "Bernie IV"

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

# my_dog = Dog("Rex")
# my_dog.rename("Paul")
# print(my_dog.name)

# class Circle:
#     color = "red"

#     def __init__(self, diameter):
#         self.diameter = diameter

#     def grow(self, factor=2):
#         self.diameter = self.diameter * factor

#     def get_color(self):
#        return Circle.color

# circle1 = Circle(2)
# print(circle1.color)
# print(Circle.color)
# print(circle1.get_color())
# circle1.grow(3)
# print(circle1.diameter)

# class Man():
#     sex = "Male"

#     @classmethod
#     def get_nicknames(cls):
#         return ["Bro", "Dude", "Buddy"]
    
# print(Man.sex)
# print(Man.__mro__)
# print(Man.get_nicknames()[0])

# class MyClass:
#   __counter = 0

#   @classmethod
#   def add(cls,a): 
#     return cls.__counter + a

# my_class_add = MyClass.add(3)
# print(my_class_add)

# new_class = MyClass()
# new_class.__counter = 1

# print(new_class.add(3))

# class MyClass:
#   def __init__(self, first_name, last_name):
#     self.__first_name = first_name
#     self.__last_name = last_name

#   @property
#   def email(self): 
#     return f"{self.__first_name}.{self.__last_name}@gmail.com"

#   @email.setter
#   def email(self, name): 
#     self.__first_name = name

# newClass = MyClass("John", "Doe")
# newClass.email = "Sarah"
# print(newClass.email)
# # >> Sarah.Doe@gmail.com

# class MyClass(object):
#     count = 0

#     def __init__(self, val):
#         self.val = val
#         MyClass.count += 1

#     def set_val(self, newval):
#         self.val = newval

#     def get_val(self):
#         return self.val

#     @classmethod
#     def get_count(cls):
#         return cls.count

# object_1 = MyClass(10)
# print("\nValue of object : %s" % object_1.get_val())
# print(MyClass.get_count())

# object_2 = MyClass(20)
# print("\nValue of object : %s" % object_2.get_val())
# print(MyClass.get_count())

# class MyClass(object):
#     count = 0

#     def __init__(self, val):
#         self.val = self.filterint(val)
#         MyClass.count += 1

#     @staticmethod
#     def filterint(value):
#         if not isinstance(value, int):
#             print("Entered value is not an INT, value set to 0")
#             return 0
#         else:
#             return value


# a = MyClass(5)
# b = MyClass(10)
# c = MyClass(15)

# print(a.val)
# print(b.val)
# print(c.val)
# print(a.filterint(100))
# print(MyClass.count)

# import second as m

# m.make_pizza(10,"pepperoni")



# from faker import Faker
# fake = Faker()

# def create_file(num):
#     f = open("datefile" + num + ".txt", "w")
#     for _ in range(100):
#         f.write(f"{fake.date()}\n")
#     f.close()
# print(fake.date())


# create_file('1')
# create_file('2')

# valid_flag = False
# while not valid_flag:
#     userage = input("How old are you?")
#     try:    # TRY THIS
#         userage    = int(userage)
#     except: # IF YOU GOT AN ERROR
#         print("Wrong age!")
#     else:   # ELSE
#         print("thnks :)")
#         valid_flag = True

# print("Next year, your age will be",userage+1)

# valid_flag = False
# while not valid_flag:
#     userage = input("How old are you?")
#     try:    # TRY THIS
#         userage    = int(userage)
#     except: # IF YOU GOT AN ERROR
#         print("Wrong age!")
#     else:   # ELSE
#         valid_flag = True
#     finally:
#         print('There may or may not have been an exception.')

# print("Next year, your age will be",userage+1)


# x = 10
# if x > 5:
#     raise Exception(f"x should not exceed 5. The value of x was {x}")


# z = 1
# try:
#     assert 1 == z
# except AssertionError:
#     print("Error: Those are not equals")

##########################################################################




# 🌟 Exercise 3 : Dogs Domesticated

        