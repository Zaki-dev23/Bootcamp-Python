import requests
import random
import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'ZakiPostegre'
DATABASE = 'gets Countries'

# 1
# connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password= PASSWORD, dbname = DATABASE)


def get_contries():
    
    url = 'https://restcountries.com/v3.1/all'
    data_of_contries = requests.get(url)
    data_json = data_of_contries.json()
    data = random.sample(data_json,10)
    return data
    # for country in data:
    #     data = country["name"]["common"]
    #     print(data)
        
def prepe_countries(data):
    
    countries_data = []
    
    for country in data:
        name_of_country = country.get('name', {}).get('common',"Unknown")
        capital = country.get('capital',["Unknown"])[0]
        flag = country.get('flags',{}).get("png","No flag avariable")
        subregion = country.get("subregion", "Unknown")
        population = country.get("population", 0)
        
        countries_data.append((name_of_country, capital, flag, subregion, population))
    
    return countries_data

        
def inser_countries_to_db(data):
    try:
        HOSTNAME = 'localhost'
        USERNAME = 'postgres'
        PASSWORD = 'ZakiPostegre'
        DATABASE = 'tester'
        PORT = '5432'

        # 1
        connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password= PASSWORD, dbname = DATABASE ,port = PORT )
        cursor = connection.cursor()
        query = '''
        INSERT INTO countries (name, capital, flag, subregion, population)  
        VALUES (%s, %s, %s, %s, %s);
        '''
        
    # VALUES ('France', 'Paris', '🇫🇷', 'Western Europe', 67390000);
        cursor.executemany(query, data)
        connection.commit()
        cursor.close()
        connection.close()
        
        print("Successfully inserted 10 random countries into the database!")
    except Exception as e:
        print(f"Error inserting data: {e}")
        
random_countries = get_contries()

if random_countries:
    data = prepe_countries(random_countries)
    inser_countries_to_db(data)
        
        

    
    




