

class MijnClass :
    varopenbaar= "dit is openbaar toegangkelijk"
    # er zijn 2_  __ maakt de var prive
    __varprive= "dit is prive"

    def Voorbeeld(self) :
        print(self.__varprive)

instClass= MijnClass()
print(instClass.varopenbaar)
instClass.Voorbeeld()