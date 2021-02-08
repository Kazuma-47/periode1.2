# import ...
#from ...  import ...
#... as ...

#dit bestand is het hoodprogramma. Alles wat wij gaan importeren moet je benaderen alsof het in map van modules staat
#als je player.py wilt importeren moet je vanuit de hoofd map benaderen

import overworld.player as refA
import battle.player as refB
import config
overworldPlayer= refA.Player()
overworldPlayer.Talk()
overworldPlayer.VoegAanLijstToe()

battlePlayer=refB.Player()
battlePlayer.Attack()
battlePlayer.VoegAanLijstToe()

config.lijstje.append("iets")


print("dit is de hele lijst: ")
# een loop die elke item uit te lijst print
for item in config.lijstje:
    print(item)