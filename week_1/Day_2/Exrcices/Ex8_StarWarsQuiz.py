data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

# Function to ask questions and check answers
def ask_questions():
    correct = 0
    wrong_answers = []  # List to store wrong answers

    # Loop through each question in the data
    for q in data:
        print(q["question"])  # Print the question
        user_answer = input("Your answer: ")  # Ask for user input

        # Check if the answer is correct
        if user_answer.strip().lower() == q["answer"].lower():
            correct += 1  # Count correct answers
        else:
            wrong_answers.append(q)  # Add wrong answers to the list
    
    return correct, wrong_answers  # Return the result

# Example usage
correct, wrong_answers = ask_questions()
print(f"You got {correct} correct answers.")
if wrong_answers:
    print("Here are the questions you got wrong:")
    for q in wrong_answers:
        print(f"Question: {q['question']}")
        print(f"Your answer was wrong. Correct answer: {q['answer']}")
