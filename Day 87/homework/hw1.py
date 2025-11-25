# შეასრულეთ ნებისმიერი 5 kata. ივარჯიშეთ codewars-ებსა და ფუნქციებზე.

# https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/python

def generate_shape(n):
    row = '+' * n
    square_rows = [row] * n
    return "\n".join(square_rows)