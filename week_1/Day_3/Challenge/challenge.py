#1 Daily challenge: Old MacDonald’s Farm
class Farm():
    def __init__(self, animal):
        self.animal = animal
        self.animals = {}
    def add_animal(self, newAnimal, count = 1) : 
        if newAnimal in self.animals:
         self.animals[newAnimal] += count
        else:
         self.animals[newAnimal] = count
    def getAnimals(self):
        for animal,nombre in self.animals.items():
            print(f"{animal} : {nombre}") 
        print("\n    E-I-E-I-0!")
    def get_animal_types(self):
        get_type = []
        for type,value in self.animals.items():
            get_type.append(type)
        get_type.sort()
        return get_type
    def get_short_info(self):
        array_of_animals = []
        more_then_1 = []
        equal_1 = []
        for key, value in self.animals.items():
            if value > 1:
                more_then_1.append(key)
            else:
                equal_1.append(key)
        plural = []
        for i,v in enumerate(more_then_1):
            plural.append(more_then_1[i]+"s")
        array_of_animals.extend(plural)
        array_of_animals.extend(equal_1)
        # print(more_then_1)
        # print(equal_1)
        # print(array_of_animals)
        print(f"{self.animal}’s farm has {array_of_animals[0]}, {array_of_animals[1]} and {array_of_animals[2]}.")
            
        
macdonald = Farm("McDonald")
print(f"{macdonald.animal}'s farm")
macdonald.add_animal('cow',10)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('sheep',10)
macdonald.add_animal('goat', 10)
animals = macdonald.getAnimals()
arry_of_animals = macdonald.get_animal_types()
print(macdonald.get_animal_types())
sentence = macdonald.get_short_info()
sentence