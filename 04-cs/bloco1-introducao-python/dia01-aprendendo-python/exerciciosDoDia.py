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

# Logica:
# 1 Litro para cada 3 metros quadrados
# 1 Lata possui 18 litros || Custa R$ 80,00 || Cobre 54 metros quadrados


def paintBudget(wallArea: int) -> str:
    price = 80
    liters = wallArea / 3
    cans = liters // 18

    if liters % 18:
        cans += 1
    print(cans, cans * price)


paintBudget(54)
paintBudget(55)
paintBudget(56)


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


sideTriangleType(1, 2, 3)
sideTriangleType(3, 3, 3)
sideTriangleType(2, 3, 2)
sideTriangleType(2, 3, 'a')

# EXERCICIOS BONUS

# Exercício 7: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def minNumberOfList(list: list) -> int:
    print(min(list))


minNumberOfList(numbers)


# Exercício 8:
# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base.
# Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:


def drawTriangle(n: int) -> str:
    asterisk = "*"
    for i in range(n):
        print(asterisk)
        asterisk += "*"


drawTriangle(5)
drawTriangle(7)

# Exercício 9:
# Crie uma função que receba um número inteiro N e retorne o somatório
# de todos os números de 1 até N. Por exemplo, para N = 5,
# o valor esperado será 15.


def sumRange(N: int) -> int:
    sum = 0
    for i in range(N + 1):
        sum += i

    print(sum)


# range cria lista a partir do 0: [0, 1, 2, ..., N]
# somei + 1 para criar lista a partir do 1: [1, 2, ..., N]
sumRange(5)
sumRange(10)


# Exercício 4:
# Um posto está vendendo combustíveis com a seguinte tabela de descontos:

"""
  Álcool:
    - Até 20 litros, desconto de 3% por litro;
    - Acima de 20 litros, desconto de 5% por litro.
  Gasolina:
    - Até 20 litros, desconto de 4% por litro;
    - Acima de 20 litros, desconto de 6% por litro.
"""

# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente, sabendo-se que o preço
# do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.

# litros vendidos
# tipo de combustivel: (A ou G)
# A -> 2.5 Litro | G -> 1.9 Litro


def gasolineSupply(type: str, liters: int) -> str:
    discount = 0
    partial_price = 0

    if type == "G":
        partial_price = 2.5 * liters
        discount = 0.04
        if liters > 20:
            discount = 0.06
    else:
        partial_price = 1.9 * liters
        discount = 0.03
        if liters > 20:
            discount = 0.05

    total_price = partial_price * (1 - discount)
    print(f"R$ {round(total_price, 2)}")


gasolineSupply("G", 20)
gasolineSupply("G", 21)
gasolineSupply("A", 20)
