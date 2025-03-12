#Exrcice 7 : Temperature Advice
import random

#1
def get_random_temp():
    return random.randint(-10,40)
print(get_random_temp())

#2 #3
def main():
    random_temp = get_random_temp()
    if random_temp < 0:
        message = "Brrr! It's freezing outside. Stay warm and cozy!"
    elif 0 < random_temp < 16:
        message = "It's a bit chilly outside. Consider wearing a jacket!"
    elif 16 < random_temp < 23:
        message = "Perfect weather! Enjoy your day!"
    elif 23 < random_temp < 32:
        message = "It's getting hot! Don't forget to stay hydrated!"
    else:
        message = "Wow, it's scorching hot! Stay cool and take breaks in the shade!"
    return (f"The temperature right now {random_temp} degrees celsuis, {message}")

print(main())

#4
def get_random_temp1(season):
    return random.choice(["spring","summer","autumn","winter"])
print(get_random_temp1())

#5
month = int(input("Enter the number of the month (1-12): "))
    
if month in [12, 1, 2]:
    season = "winter"
elif month in [3, 4, 5]:
    season = "spring"
elif month in [6, 7, 8]:
    season = "summer"
elif month in [9, 10, 11]:
    season = "autumn"
else:
    print("Invalid month! Please enter a number between 1 and 12.")
    
#6
if season == "winter":
        temp = round(random.uniform(-10, 16), 1)
elif season == "spring":
        temp = round(random.uniform(10, 25), 1)
elif season == "summer":
        temp = round(random.uniform(20, 40), 1)
elif season == "autumn":
        temp = round(random.uniform(5, 20), 1)

print(f"The temperature right now is {temp} degrees Celsius.")