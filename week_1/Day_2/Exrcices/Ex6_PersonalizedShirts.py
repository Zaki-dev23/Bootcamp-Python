# Exrcice 6 : Let's Create Some Personalized Shirts !

#1
def make_shirt(size, text):
    print(f"Size of the shirt : {size}")
    print(f"Text : {text}")

#2
def make_shirt1(size, text):
    print(f"The size of the shirt is {size} and the text is {text}")

#3
def make_shirt2(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")
    
#4
print(make_shirt2())
    
#5
print(make_shirt2("medium"))

#6
print(make_shirt2("small","Hello world"))