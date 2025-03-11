#Challenge 1

numbre = int(input("Write the numbre : "))
legth = int(input("Write the legth of the list : "))

multiples = []    
for i in range(1,legth + 1):
  multiples.append(i * numbre)
  
print(multiples)
