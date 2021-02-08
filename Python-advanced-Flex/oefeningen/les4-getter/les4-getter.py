class MyClass:

    __points = 0

    # dit is een getter dit zorgt ervoor dat je een prive variabel kan op halen
    # je ben verplicht de functie de zelfde naam te geven als je prive var
    @property
    def points(self):
        print("dit is de getter")
        return self.__points
        
    #setter zorgd ervoor dat je prive variables kan editen
    @points.setter
    def points(self, value):
        print("dit is de setter en de value is: ",value)
        self.__points= value
        
        if value > 100:
            print("de nieuwe waarde is groter dan 100! De nieuwe waarde word veranderd naar 100 voordat de points worden gezet")
            print("Huidige punten zijn: ", self.__points)
            value=100
        self.__points= value

    name = "Mario"


instance= MyClass()
print(instance.name)

# hij kan points niet oproepen omdat hij prive is door __ het kan wel als een getter is geplaatst
print( instance.points)

# Hij roept hier zowel de getter als de setter aan. Waarom?
# Omdat de regel "instance.points += 20" eigenlijk omgezet wordt naar "instance.points = instance.points + 20"
instance.points+=20
print("\nAdded points: 20 \npoints are now: " ,instance.points)

# Hier voert hij direct de setter uit.
instance.points=144
print("second time. points are now: ", instance.points)