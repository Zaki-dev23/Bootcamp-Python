mot = input("write a word : ")
dict_of_letter = {}


for i, letter in enumerate(mot):
    if letter not in dict_of_letter:
        dict_of_letter[letter] = []
    dict_of_letter[letter].append(i)
        
print(dict_of_letter)