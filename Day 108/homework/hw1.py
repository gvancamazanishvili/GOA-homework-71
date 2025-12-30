# 2) process user-ს გადაეცით func პარამეტრი. გატესტეთ ორივე შემთხვევა: არგუმენტად მას ჯერ hello, შემდეგ კი goodbye. დააკვირდით Output-ს.

def hello(name):
    return f'Hello, {name}'

def goodbye(name):
    return f'Goodbye, {name}'

def process_user(func, name):
    return func(name)

print(process_user(hello,'Gvanca')) # hello Gvanca
print(process_user(goodbye, "Gvanca")) # goodbye Gvanca


