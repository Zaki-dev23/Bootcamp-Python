# Exercise 4 : Afternoon at the Zoo

#1
class Zoo():
#2
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name 
        self.animals = []
#3
    def add_animal(self,new_animal):
        if new_animal not in self.animals:
         self.animals.append(new_animal)
         return(self.animals)
#4 
    def get_animals(self):
        return self.animals
#5
    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
         self.animals.remove(animal_sold)
        else:
            print("this animal doen't exist")
#6
    def sort_animals(self):
        self.animals.sort()
        letter = None
        array = {}
        for anml in self.animals:
            letter = anml[0]
            for f_letter in anml:
                # print(f_letter)
                if letter == f_letter:
                    if letter not in array:
                      array[letter] = [anml]
                    else:
                      array[letter].append(anml)
                      array[letter].sort()
        return array
#7
    def get_groups(self):
        group_animal = self.sort_animals()
        for letter, animals in group_animal.items():
            print(f"{letter} : {animals}")
#8  
new_york_zoo = Zoo("New York Zoo")        
        
animl = Zoo("dog")
animl.add_animal('cat')
animl.add_animal('caroot')
animl.add_animal('giraff')
# print(animl.get_animals())
# animl.sell_animal("dog")
print(animl.get_animals())
animl.sort_animals()
animl.get_groups()

# Get animals in the zoo
new_york_zoo.get_animals()

# Sell an animal
new_york_zoo.sell_animal("giraff")

# Get updated list of animals
new_york_zoo.get_animals()

# Print sorted animal groups
new_york_zoo.get_groups()
