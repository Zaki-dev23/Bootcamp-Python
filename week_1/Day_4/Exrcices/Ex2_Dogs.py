
# 🌟 Exercise 2 : Dogs

#1
class Dog():
    def __init__(self, name, age, weight):
        self.name =name
        self.age =age
        self.weight =weight
#2
    def brak(self):
        return print(f"{self.name} is barking")
    def run_speed(self):
        return (self.weight/self.age)*10
    def fight(self, other_dog):
        dog1 = self.run_speed() * self.weight
        dog2 = other_dog.run_speed() * other_dog.weight
        if dog1 > dog2:
            return f"{self.name} wins the fight!"
        else :
            return f'{other_dog.name} wins the fight!' 
#3
dog_1 = Dog("Rex", 5, 20)
dog_2 = Dog("Pop", 2, 15)
dog_3 = Dog("Jack", 3, 25)

# dog_1.brak()
# dog_2.brak()
# dog_3.brak()

# print(f"speed of {dog_1.name} is {dog_1.run_speed()}")
# print(f"speed of {dog_2.name} is {dog_2.run_speed()}")
# print(f"speed of {dog_3.name} is {dog_3.run_speed()}")

# print(dog_1.fight(dog_3))