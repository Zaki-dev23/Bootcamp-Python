#1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("caty", 3)
cat2 = Cat("lola", 2)
cat3 = Cat("mimi", 4)

#2
def Older_cat(cats):
    max_age = 0
    oldest_cat = None
    for oldest in cats:
        if oldest.age > max_age:
            max_age = oldest.age
            oldest_cat = oldest
    return print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")


#3
cats = [cat1,cat2,cat3]
Older_cat(cats)