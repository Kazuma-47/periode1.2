 # zo maak je een class
class Mario :
    _lives=3
    _speed= 30.0
    _attack=0
    def Test(self,damage):
        print("hallo")
        print("speed is: ",self._speed)
        self._attack= damage
        
# constructor gebruiken
instanceMario= Mario()
instanceMario.Test(100)
print("de damage/constructor is: ",instanceMario._attack)
# constructor einde

nogEenMario=Mario()

print("instance mario lives: ",instanceMario._lives)

 # zo verander je het
instanceMario._speed = 50.5

print("instanceMario snelheid: ", instanceMario._speed)
print("nogEenMario sneleid: ", nogEenMario._speed)
