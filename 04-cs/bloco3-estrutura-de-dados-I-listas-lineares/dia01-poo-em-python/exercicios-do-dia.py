# Exercicio 1 - diagrama da TV

class TV:
    def __init__(self, tamanho):
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.ligada = False

    def aumentar_volume(self):
        if self.volume < 100:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1

    def modificar_canal(self, canal):
        if canal > 0 and canal < 100:
            self.canal = canal
        else:
            ValueError("Canal inválido")

    def ligar_desligar(self):
        self.ligada = not self.ligada

    def __str__(self):
        return f"{self.tamanho} {self.volume} {self.canal} {self.ligada}"


tv = TV(42)
tv.ligar_desligar()
tv.aumentar_volume()
tv.aumentar_volume()
tv.aumentar_volume()
print(tv)
