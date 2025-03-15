
# 🌟 Exercise 1 : Pets

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
#1
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
#2
all_cats = [Bengal("lila",2),Chartreux("jacky",1),Siamese("Leo",3)]
#3
sara_pets = Pets(all_cats)
#4
sara_pets.walk()