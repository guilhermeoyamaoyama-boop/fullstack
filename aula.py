 



primos = []

for num in range (0, 101):
    if num > 1:
        eh_primo = True

        for i in range(2, num):
            if num % i==0:
                eh_primo = False
                break
        if eh_primo:
            primos.append(num)

soma = sum(primos)

print("Numeros primos:", primos)
print("Soma dos primos:", soma)