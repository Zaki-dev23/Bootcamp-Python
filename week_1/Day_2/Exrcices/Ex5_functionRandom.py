# Exrcice 5 : Random

import random

def accept_numbre(a):
    if 1 <= a <= 100:
        b = random.randint(1, 100)
        return a, b 
    else:
        print("the numbre must be between 1 and 100")
 
x, y = accept_numbre(10)
if x == y :
    print("seccess message")
else:
    print(f"fail message {x} # {y}")