import collections

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
            raise ValueError("Canal inválido")

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

# Exercicio 2 - classe Estatistica


class Estatistica:
    def __init__(self, lista: list[int]):
        self.lista = lista

    def media(self):
        return round(sum(self.lista) / len(self.lista), 2)

    def mediana(self):
        self.lista.sort()
        if len(self.lista) % 2 == 0:
            return round((
                self.lista[len(self.lista) // 2]
                + self.lista[len(self.lista) // 2 - 1]
                ) / 2, 2)
        else:
            return round(self.lista[len(self.lista) // 2], 2)

    def moda(self):
        return collections.Counter(self.lista).most_common(1)[0][0]

    def __str__(self):
        return f"{self.lista}"


numbers = Estatistica([1, 4, 2, 3, 4, 5, 6])
print("Media:", numbers.media())
print("Mediana:", numbers.mediana())
print("Moda:", numbers.moda())
print(numbers)


# Exercicio 3 - classe Figuras geometricas


class FiguraGeometrica:
    def __init__(self, area, perimetro):
        self.area = area
        self.perimetro = perimetro

    def __str__(self):
        return f"Area: {self.area} Perimetro: {self.perimetro}"


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        super().__init__(lado ** 2, lado * 4)


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
        super().__init__(base * altura, (base + altura) * 2)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio
        super().__init__(3.14 * (raio ** 2), 2 * 3.14 * raio)


quadrado = Quadrado(2)
print("Quadrado:", quadrado)
retangulo = Retangulo(2, 4)
print("Retangulo:", retangulo)
circulo = Circulo(6)
print("Circulo:", circulo)
