# 5) შექმენით ფუნქცია student_grade, რომელიც იღებს მოსწავლის ქულას (0-დან 100-მდე) და ტერმინალში დაბეჭდავს შემდეგ ქულებს:
#     • 90-100: - A

#     • 70-89: - B

#     • 50-69: - C

#     • 0-49: - F

def student_grade (score):
    if score >= 90 and score <= 100:
        return "A"
    elif score >= 70 and score <=89:
        return "B"
    elif score >= 50 and score <= 69:
        return "C"
    else:
        return "F"
    
print(student_grade(87))

