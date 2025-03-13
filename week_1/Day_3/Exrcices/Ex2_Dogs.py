# Ex 2 : Dogs

#1 #2
class Dog():
    def __init__(self, name, height):
        self.name = name
        self.height = height
#3
    def bark(self):
      print(f"{self.name} goes woof!")
#4
    def jump(self):
      print(f"{self.name} jumps {self.height*2} cm high!”.")
        
Dog("poppy",15).bark()
Dog("poppy",15).jump()

#5
davids_dog = Dog("Rex", 50)

#6
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

#7
sarahs_dog = Dog("Teacup", 20)

#8
print(f"David's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

#9
if sarahs_dog.height > davids_dog.height:
    print(sarahs_dog.name)
else:
    print(davids_dog.name)