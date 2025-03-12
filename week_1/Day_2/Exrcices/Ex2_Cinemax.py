#Exercise 2 : Cinemax #2

name = input("Write your name : ")
age = input("Write your age : ")
totle = 0
con = True
Family = {}


#family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8, 'fridrick': 2}

def familyTotleCost(*arges):
  return sum(arges)
while con :
 Family[name] = int(age)
 add = input("if you add someone write 'add' if you finished write 'quit' : ")
 if add=="quit":
  con = False
  for key,value in Family.items():
   if value > 12:
    print(f"{key} have to pay 15$")
    totle += familyTotleCost(15)
   elif value < 12 and value > 3:
    print(f"{key} have to pay 10$")
    totle += familyTotleCost(10)
  else:
    print(f"{key} still a child the ticket is free")
 elif add=="add":
  name = input("Write a name : ")
  age = input("Write an age : ")
  

print(Family)
print(totle)