# hiermee importeer ik de date vanaf het begin hoe het begin is gedefineerd
# je importteer data naar je name space toe. Je kan dan lijstje aanspreken alsof het binnen het bestand zou betaan

from config import *
class Player:
    lives=100
    items=[]
    def Attack(self):
        print("Val aan!")

    def Defend(self):
        print("Verdedig...")
    
    def VoegAanLijstToe(self):
        # APPEND VOEG IETS TOE AAN DE LIJST
       lijstje.append("battle Player heeft iets gevoegd")