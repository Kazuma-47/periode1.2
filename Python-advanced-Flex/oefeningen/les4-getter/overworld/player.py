import config

class Player:

    x = 0
    y = 0

    def Talk(self):
        print("talk with the character in the overworld")
    def VoegAanLijstToe(self):
        # APPEND VOEG IETS TOE AAN DE LIJST
       config.lijstje.append("Overworld Player heeft iets gevoegd")