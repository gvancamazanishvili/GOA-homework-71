# 3) languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"] თითოეულ ელემენტს წინ დაუმატეთ "I study"


languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]

study = list(map(lambda text: " i study " + text  , languages))
print(study)