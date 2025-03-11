#challenge 2

# user_word = input("write any string : ")
# split_string = list(user_word)
# unique_chars = []
# same = True
# while same :
#  for item in split_string:
word = input("Enter a word: ")
result = ""
for char in word:
    if not result or char != result[-1]:
        result += char
print(result)
    
    
        # if item not in unique_chars:
        #     unique_chars.append(item)
            
# print(''.join(unique_chars))