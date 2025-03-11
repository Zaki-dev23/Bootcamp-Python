#Exercise 8 : Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
   #1. While loop for remove yhe pastrami 
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    #2. 
print(sandwich_orders)
    #3. 
finished_sandwiches = []
    #4.
while sandwich_orders:
    current_sandwits = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwits)
    #5
for item in finished_sandwiches:
  print(f"I made your {item}\n")
