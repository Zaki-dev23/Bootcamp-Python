# Exercise 4 : Family

#1
class Family():
    def __init__(self,last_name, members):
        self.members = members
        self.last_name = last_name
#2  
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congatulations! A new baby named {kwargs}")
    def is_18(self,name_of_family):
        for momber in self.members:
            if momber["name"] == name_of_family:
                return momber["age"] >= 18
        return False
    def family_presentation(self):
         print(f"the family’s last name {self.last_name} and all the members’ details :")
         for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")
        
        
family = Family("benani", [{'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False ,'power': 'fly','incredible_name':'MikeFly'},
                           {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds','incredible_name':'SuperWoman'}
])


# family.born(name='Morad', age=2, gender='Male',  is_child=True)
# print(family.members[0])
# print(f"is child :{family.is_18('Sarah')}")
# family.family_presentation()
# print(family.members)
