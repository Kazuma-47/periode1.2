#class maken
class Character :
    speed= 10
    points=0
    sprite=None
    
    def __init__(self):
        print("De constructor van character")
    def walk(self):
        print("character loopt met een snelheid van", self.speed)
        print("class Mario heeft ", Mario.points, " points" )
        print("\n")
#class andere dingen laten inheriten
# dit is de versie waar  de stats worden geinherit
# class Mario(Character):
#     lives= 3
#     item=None
    
#     def __init__(self):
#         # super zorgt ervoor dat je de functie van character kan overnemen
#         #je kan ook dingen bijvoegen.
#         super().__init__() 
#         #veranderd snelheid van mario
#         self.speed = 30
#         self.points= 10
        
#     def walk(self):
#         print("Mario loopt anders dan de andere sprites. Maar wel met snelheid ", self.speed)
#         print("class Mario heeft ", Mario.points, " points" )

#     def Jump(self):
#         print("Mario kan springen")
# <_____________________________________________________________________________________________________>
# bij deze versie worden de stats vervangen bij init omdat je letterlijk de content overschrijft en hem opnieuw defineert 
class Mario(Character):
    lives= 3
    item=None
 
    def __init__(self):
        self.speed = 30
        self.points= 10
        
    def walk(self):
        print("Mario loopt anders dan de andere sprites. Maar wel met snelheid ", self.speed)
        print("class Mario heeft ", Mario.points, " points" )

    def Jump(self):
        print("Mario kan springen")
    # <_________________________________________________________________________________>
print("CHARACTER WALK: ")
#instanties maken:
characterA= Character()
marioX=Mario()

characterA.walk()
print("MARIO X WALK:")
marioX.walk()

print("\nextra stats")
print(characterA.speed)
print(marioX.speed)
print(marioX.lives)

#het resultaat in de console heeft een geheuge addres. dit verwijst
#  naar de locatie van het volledige object
print(marioX)