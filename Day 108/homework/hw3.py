# 4) შექმენით სამივე ფუნქციის ორ-ორი მაგალითი.

# pure function

def square(x):
    return x * x

def capital (word):
    return word.capitalize()


# impure 

name = "Gvanca"
def greet(name):
    return f"Hello {name}"

print(greet(name))


nums = [2, 4, 6, 7, 9, 10, 10]

def sumerise (nums):
    return sum(nums)
print(sumerise(nums))


# high-order function

def saying_greet(name):
    return f"hello {name}"

def saying_goodbye(name):
    return f"goodbye {name}"

def process_user(func, name):
    return func(name)

print(process_user(saying_greet,'gvanca'))
print(process_user(saying_goodbye,'gvanca'))


def book_title(title):
    return "Book title: " + title

def info(title, func):
    return func(title)

print(info("Harry potter", book_title))