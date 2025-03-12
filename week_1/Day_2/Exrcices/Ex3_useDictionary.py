# Exercise 3: Zara


#1
brand = {
  "name": "Zara" ,
  "creation_date": 1975, 
  "creator_name": {"Amancio", "Ortega", "Gaona"} ,
  "type_of_clothes": ["men", "women", "children", "home" ],
  "international_competitors": ["Gap", "H&M", "Benetton" ],
  "number_stores": 7000 ,
  "major_color": 
      {
        "France": "blue", 
       "Spain": "red", 
       "US": {"pink", "green"}
      }
}
#2
brand["number_stores"] = 2
# print(brand) 
#3
print(f"Zara's clients are people who wear{[item for item in brand["type_of_clothes"]]} clothing.")
#4
brand["country_creation"] = "spain"
#5
if "international_competitors" in brand:
    brand["international_competitors"].append('Desigual')
#6
del brand["creation_date"]
#7
print(brand["international_competitors"][-1])
#8
print(brand["major_color"]["US"])
#9
print(len(brand))
#10
print(brand.keys())
#11
more_on_zara = {
  "creation" : 1975,
  "numbre_stores" : 10000
}
#12
brand.update(more_on_zara)
#13
print(f"This is value of number stores :{brand['number_stores']}")


print(brand)
