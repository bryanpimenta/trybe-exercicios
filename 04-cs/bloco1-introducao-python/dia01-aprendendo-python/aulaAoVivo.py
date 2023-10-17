""" my_age = input("Digite sua idade: ")

if int(my_age) >= 18:
    print("Você é maior de idade")
else:
    print("Não autorizado.")

print("Operação finalizada.")

names = ["Sage", "Killjoy", "Brinstone"]

print(len(names)) """


dicio = {"Nome": "Killjoy", "Func": "Sentinel"}
dicio["Amiga"] = "Sage"
dicio["Namorada"] = "Raze"

print(dicio)

entries = dicio.items()
print(entries)

for key, value in entries:
    print(f"A chave é {key} e o valor é {value}.")
