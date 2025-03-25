import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'ZakiPostegre'
DATABASE = 'Restaurant'

# 1
connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password= PASSWORD, dbname = DATABASE)

class MenuManager():
    @staticmethod
    def get_by_name(name):
        if not name :
            print("write name")
        try:
            connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password= PASSWORD, dbname = DATABASE)
            cursor = connection.cursor()
            query = f'''SELECT * FROM Menu_Items
            WHERE item_name = '{name}'
            '''
            cursor.execute(query)
            result = cursor.fetchone()
            connection.close()
            return result
        except Exception as err:
            print("Error : ", err)
    @staticmethod
    def all_items():
        connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password= PASSWORD, dbname = DATABASE)
        cursor = connection.cursor()
        query = f''' SELECT * FROM Menu_Items
        '''
        cursor.execute(query)
        result = cursor.fetchall()
        connection.close()
        return result

if __name__ == '__main__': 
    item = MenuManager()
    c = item.get_by_name('Pizza')
    b = item.all_items()
    print(c)
