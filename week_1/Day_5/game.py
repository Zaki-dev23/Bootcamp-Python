import random

class Game:
    def get_user_item(self):
        """Demande à l'utilisateur de choisir entre rock, paper ou scissors."""
        choices = ["r", "p", "s"]
        user_choice = None
        while user_choice not in choices:
            user_choice = input("Play: rock (r), paper (p), or scissors (s): ").lower()
            if user_choice not in choices:
                print("Invalid choice. Please choose again.")
        return user_choice

    def get_computer_item(self):
        """Génère un choix aléatoire pour l'ordinateur."""
        choices = ["r", "p", "s"]
        return random.choice(choices)

    def get_game_result(self, user_item, computer_item):
        """Détermine le résultat du jeu."""
        print(f"\nYou chose: {user_item}.\nThe computer chose: {computer_item}.")
        
        if user_item == computer_item:
            return "draw"
        elif (user_item == "r" and computer_item == "s") or \
             (user_item == "p" and computer_item == "r") or \
             (user_item == "s" and computer_item == "p"):
            return "win"
        else:
            return "loss"

    def play(self):
        """Lance une partie et retourne le résultat."""
        user_choice = self.get_user_item()
        computer_choice = self.get_computer_item()
        result = self.get_game_result(user_choice, computer_choice)

        if result == "win":
            print("You win!")
        elif result == "loss":
            print("You lose!")
        else:
            print("It's a draw!")

        return result
