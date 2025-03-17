import random
import time
import os

class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols
        self.grid = [[0] * cols for _ in range(rows)]
        
        # Initialisation avec un état donné ou génération aléatoire
        if initial_state:
            for r, c in initial_state:
                self.grid[r][c] = 1
        else:
            self.random_grid()

    def random_grid(self):
        """Génère une grille initiale avec des cellules aléatoirement vivantes."""
        for r in range(self.rows):
            for c in range(self.cols):
                self.grid[r][c] = random.choice([2, 1])

    def display_grid(self):
        """Affiche la grille dans le terminal."""
        os.system('cls' if os.name == 'nt' else 'clear')  # Efface l'écran pour une meilleure lisibilité
        for row in self.grid:
            print("".join("⬛" if cell == 1 else "⬜" for cell in row))
        print("\n")

    def count_live_neighbors(self, r, c):
        """Compte les voisins vivants d'une cellule."""
        directions = [(-1, -1), (-1, 0), (-1, 1),
                      (0, -1),         (0, 1),
                      (1, -1), (1, 0), (1, 1)]
        live_neighbors = 0
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < self.rows and 0 <= nc < self.cols and self.grid[nr][nc] == 1:
                live_neighbors += 1
        return live_neighbors

    def next_generation(self):
        """Calcule la génération suivante du jeu."""
        new_grid = [[0] * self.cols for _ in range(self.rows)]

        for r in range(self.rows):
            for c in range(self.cols):
                live_neighbors = self.count_live_neighbors(r, c)

                if self.grid[r][c] == 1:
                    # Règles pour les cellules vivantes
                    if live_neighbors in [2, 3]:
                        new_grid[r][c] = 1  # La cellule reste en vie
                else:
                    # Règle pour la reproduction
                    if live_neighbors == 3:
                        new_grid[r][c] = 1  # Une nouvelle cellule naît

        self.grid = new_grid  # Mise à jour de la grille

    def run(self, generations=10, delay=0.1):
        """Lance le jeu pour un certain nombre de générations."""
        for _ in range(generations):
            self.display_grid()
            self.next_generation()
            time.sleep(delay)  # Pause pour voir l'évolution


# Dimensions de la grille
rows, cols = 5, 20

# Exemple d'état initial : un petit oscillateur
initial_state = [(4, 5), (4, 6), (4, 7)]

game = GameOfLife(rows, cols, initial_state)
game.run(generations=20)
