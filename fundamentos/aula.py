print('aula')
num = int(input("Digite um número inteiro positivo: "))

# Passo 2: Verificar a regra básica (números <= 1 não são primos)
if num > 1:
    e_primo = True  # Começamos acreditando que ele é primo
    
    # Passo 3: Tentar dividir o número por todos de 2 até (num - 1)
    for i in range(2, num):
        if num % i == 0:
            e_primo = False  # Se a divisão deu resto 0, ele não é primo
            break  # Interrompe o loop para economizar processamento
            
    # Passo 4: Exibir o resultado final
    if e_primo:
        print(f"O número {num} é PRIMO!")
    else:
        print(f"O número {num} NÃO é primo.")
else:
    print(f"O número {num} não é primo (números menores ou iguais a 1 não contam).")