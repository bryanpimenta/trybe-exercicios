#  Exercício 1:
#  Crie uma função que receba dois números e retorne o maior deles.


def higherNumber(num1: int, num2: int) -> int:
    if num1 > num2:
        return num1
    elif num2 == num1:
        return print(f"Os números são iguais. Números: {num1} e {num2}")
    else:
        return num2


print(higherNumber(10, 20))
print(higherNumber(20, 10))
print(higherNumber(10, 10))

# Exercício 2:
# Calcule a média aritmética dos valores contidos em uma lista.


def arithmeticAVG(list: int) -> int:
    sum = 0
    for num in list:
        sum += num
    return sum / len(list)


print(arithmeticAVG([1, 2, 3, 4, 5]))
print(arithmeticAVG([10, 20, 30, 40, 50]))
print(arithmeticAVG([10, 10, 10, 10, 10]))

# Exercício 3:
# Faça um programa que, dado um valor n qualquer,
# tal que n > 1, imprima na tela um quadrado feito
# de asteriscos de lado de tamanho n. Por exemplo:

"""
*****
*****
*****
*****
*****
"""


def squareDrawing(n: int) -> any:
    for i in range(n):
        print(n * "*")


print(squareDrawing(5))
print(squareDrawing(7))


def biggestName(list: list) -> str:
    bigName = ""
    for name in list:
        if len(name) > len(bigName):
            bigName = name
    return bigName


nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print(biggestName(nomes))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que
# custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas e o preço total
# a partir do tamanho de uma parede (em m²).

# 1 Litro para cada 3 metros quadrados
# 1 Lata possui 18 litros || Custa R$ 80,00 || Cobre 54 metros quadrados


# Parede de 8 metros

def paintBudget(wallArea: int) -> str:
    price = 80
    liters = wallArea / 3
    cans = liters // 18

    if liters % 18:
        cans += 1
    return cans, cans * price


print(paintBudget(54))
print(paintBudget(55))
print(paintBudget(56))


# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.

def sideTriangleType(s1: int, s2: int, s3: int) -> str:
    if type(s1) is not int or type(s2) is not int or type(s3) is not int:
        return "Não é um triângulo"

    if s1 == s2 == s3:
        print("Triângulo Equilátero: três lados iguais")
    elif s1 == s2 or s1 == s3 or s2 == s3:
        print("Triângulo Isósceles: quaisquer dois lados iguais")
    else:
        print("Triângulo Escaleno: três lados diferentes")


print(sideTriangleType(1, 2, 3))
print(sideTriangleType(3, 3, 3))
print(sideTriangleType(2, 3, 2))
print(sideTriangleType(2, 3, 'a'))
