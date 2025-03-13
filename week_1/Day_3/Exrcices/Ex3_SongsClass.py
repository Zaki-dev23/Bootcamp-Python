# Exercise 3 : Who’s the song producer?

class Song():
    def __init__(self, lyrics):
        self.lyrics = lyrics
    def sing_me_a_song(self):
        for index, lyric in enumerate(self.lyrics):
            print(f"element {index} : {lyric}")

my_song = Song([
    "We will, we will rock you!",
    "We will, we will rock you!",
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])
print(my_song.sing_me_a_song())