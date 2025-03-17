import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if diameter:
            self.radius = diameter / 2
        elif radius:
            self.radius = radius
        else:
            self.radius = 1  

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle with radius {self.radius}, diameter {self.diameter}, and area {self.area:.2f}"

    def __add__(self, other):
        if isinstance(other, Circle):
            new_radius = self.radius + other.radius
            return Circle(radius=new_radius)
        return NotImplemented

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented


circle1 = Circle(radius=5)
circle2 = Circle(diameter=8)

print(circle1)
print(circle2) 

circle3 = circle1 + circle2
print(f"New circle after addition: {circle3}")

print(f"Is circle1 larger than circle2? {circle1 > circle2}")
print(f"Is circle1 equal to circle2? {circle1 == circle2}")

circles = [circle1, circle2, circle3]
circles.sort()
print("Sorted circles by radius:")
for c in circles:
    print(c)

