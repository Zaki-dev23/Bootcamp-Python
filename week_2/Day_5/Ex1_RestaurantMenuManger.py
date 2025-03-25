import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'ZakiPostegre'
DATABASE = 'tester'

# 1
connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password= PASSWORD, dbname = DATABASE)
cursor = connection.cursor()

# cursor.execute('CREATE DATABASE Restaurant')
# connection.commit()

query = '''CREATE TABLE IF NOT EXISTS Menu_Items(
    item_id  SERIAL PRIMARY KEY,
    item_name  VARCHAR(30) NOT NULL,
    item_price  SMALLINT DEFAULT 0)'''
cursor.execute(query)
connection.commit()

# results = cursor.fetchall()
connection.close()
# 2

if __name__ == '__main__':
    connection.close