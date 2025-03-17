from game import Game

def get_user_menu_choice():
    """Affiche le menu et récupère le choix de l'utilisateur."""
    user_menu = None
    while user_menu not in ["g", "x"]:
        user_menu = input("""
Menu:
    (g) Play a new game
    (x) Show scores and exit
Your choice: """).lower()
    return user_menu

def print_results(results):
    """Affiche le résumé des parties jouées."""
    print(f"""\nGame Summary:
    Wins: {results.get('win', 0)}
    Losses: {results.get('loss', 0)}
    Draws: {results.get('draw', 0)}
    \nThank you for playing! 
    """)

def main():
    """Gère le déroulement du jeu et les scores."""
    results = {"win": 0, "loss": 0, "draw": 0}
    game = Game()

    while True:
        choice = get_user_menu_choice()

        if choice == "g":
            result = game.play()
            results[result] += 1  # Met à jour le score
        elif choice == "x":
            print_results(results)
            break

if __name__ == "__main__":
    main()
