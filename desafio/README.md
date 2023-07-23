Em uma fábrica, uma impressora imprime etiquetas para cada caixa de um determinado produto. Para isso, a impressora usa nomes de cores simplificados, nomeados como ‘a’ até ‘m’. As cores usadas pela impressora são registradas em um string.

Por exemplo: Uma “boa” string de controle seria ‘aaabbbbhijjjm’ o que significa que a impressora usou três vezes a cor a, quatro vezes a cor b, uma vez a cor i, etc, sempre em ordem alfabética.


As vezes ocorrem problemas:*** faltam cores, problemas técnicos etc, e uma **“má”** string de controle é produzida

***Por exemplo:*** `‘aaaxbbbbyyhwawiwjjjwwm'`

Crie um código **`printer_error`** que verifique se uma string é ***"boa"*** ou ***"má"***

Você tem que escrever uma função denominada `printer_error` que recebe uma *string* e irá produzir a ***taxa de erro*** da impressora como uma string representando um racional cujo **numerador é o número de erros e o denominador o comprimento da cadeia de controle.**

Não reduza essa fração a uma expressão mais simples.
**A string tem um tamanho maior ou igual a um e contém somente letras de `‘a’` à `‘z’`.**

> ***Exemplo:
s=*** `**"aaabbbbhijjjm"**`
`**error_printer(s) =>` "0/13“**   //significa que houve 0 erros e a string tem 13 caracteres
***s=*** `**"aaaxbbbbyyhwawiwjjjwwm"**`
`**error_printer(s) =>**` **"8/22"**   *//significa que houveram 8 erros numa string que contêm 22 caracteres*
> 
