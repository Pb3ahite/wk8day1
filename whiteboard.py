def square_digits(num):
    num_str = str(num)
    squared_digits = [str(int(digit) ** 2) for digit in num_str]
    result = int(''.join(squared_digits))
    return result

input1 = 9119
output1 = square_digits(input1)
print(output1)  

input2 = 765
output2 = square_digits(input2)
print(output2)  



def between(a, b):
    return list(range(a, b+1))

# Test
a = 1
b = 4
result = between(a, b)
print(result)  # Output: [1, 2, 3, 4]
