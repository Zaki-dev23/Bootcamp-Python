# 🌟 Exercise 3 : Dogs Domesticated
from Ex2_Dogs import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight,trained=False):
        super().__init__(name, age, weight)
        self.trained = trained
    def train(self):
        print(self.brak())
        self.trained =True
    def play(self, *args):
        names = ", ".join(args)
        print(f"{names} all play together")    
    def do_a_trick(self):
        sentence = ["does a barrel roll","stands on his back legs","shakes your hand","plays dead"]
        random_sentence = random.choice(sentence)
        if self.trained :
            return print(self.name,random_sentence)
        
train = PetDog("Pop", 4, 25 )
train.train()
train.play("Poppy","Mark","Tomy")
train.do_a_trick()