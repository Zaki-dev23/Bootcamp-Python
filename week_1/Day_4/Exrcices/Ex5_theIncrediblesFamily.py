# Exercise 5 : TheIncredibles Family

from Ex4_Family import Family
#1
class TheIncredibles(Family):
#2
    def use_power(self, name):
        for momber in self.members:
            if momber["name"] == name:
                if momber["age"] >= 18 :
                    print(f"{name} her power : {momber['power']}")
                else:
                    raise Exception(f"{name} is not over 18 years old.")
#3
    def incredible_presentation(self):
        print("*Here is our powerful family**")
        super().family_presentation()
        for momber in self.members:
            print(f"Name of incredibles family : {momber["incredible_name"]} ,her power :{momber["power"]}")
            
#4
incredibles_family = TheIncredibles("Incredibles",[
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ])
#5
incredibles_family.incredible_presentation()
#6
incredibles_family.born(name='Jack', age=20, gender='Male',  is_child=True, power = "Unknown Power" ,incredible_name ="BabyJack")

incredibles_family.use_power("Jack")
incredibles_family.incredible_presentation()
