# from Ex1_RestaurantMenuManger import connection
import psycopg2


HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'ZakiPostegre'
DATABASE = 'Restaurant'

# 1
connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password= PASSWORD, dbname = DATABASE)
class MenuItem():
    def __init__(self,name,price):
        self.name = name
        self.price = price
    def save(self):
        try:
            connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password= PASSWORD, dbname = DATABASE)
            cursor = connection.cursor()
            query = f'''INSERT INTO Menu_Items(item_name, item_price) 
            VALUES
            ('{self.name}','{self.price}')
            '''
            cursor.execute(query)
            connection.commit()
            connection.close()
        except  Exception as e:
            print('Error :',e)
        finally:
            connection.close()
    @staticmethod
    def delete( name):
        connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password= PASSWORD, dbname = DATABASE)
        cursor = connection.cursor()
        query = f'''DELETE FROM Menu_Items 
        where item_name = '{name}'
        '''
        cursor.execute(query)
        connection.commit()
        connection.close()
    @staticmethod
    def update(name , new_name, new_price):
        try:
            connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password= PASSWORD, dbname = DATABASE)
            cursor = connection.cursor()
            query = f'''UPDATE Menu_Items
            SET item_name = '{new_name}' , item_price = '{new_price}'
            WHERE item_name = '{name}'
            '''
            cursor.execute(query)
            connection.commit()
            connection.close()
        except Exception as err:
            print("Error : " ,err)
            
item = MenuItem('tacos', 60)
item.save()
item.update('passicho','sandwish',  15)
# item.delete('Burger')

