from menu_manger import MenuManager 
from menu_item import MenuItem
# from tabulate import tabulate 


def show_user_menu():
    while True:
        viewItem = input('''
                View an Item (V)
                Add an Item (A)
                Delete an Item (D)
                Update an Item (U)
                Show the Menu (S)           
                Quit menu (Q) 
        ''')
        if viewItem.upper() == 'V':
            print(view_item())
        elif viewItem.upper() == 'A':
            print(add_item_to_menu())
        elif viewItem.upper() == 'D':
            print(remove_item_from_menu())
        elif viewItem.upper() == 'U':
            print(update_item_from_menu())
        elif viewItem.upper() == 'S':
            print(show_restaurant_menu())
        elif viewItem.upper() == 'Q':
            print('Bay see you soon ;)')
            break
        else:
            print("Invalid Saise!")
            show_user_menu()
        
        
        
def view_item():
    user_choise = input('Saise the name of an item :')
    item = MenuManager.get_by_name(user_choise)
    return item

def add_item_to_menu():
    user_Add_item = input('Add an item name :')
    user_Add_price = int(input('Add a price :'))
    item = MenuItem(user_Add_item,user_Add_price)
    print("item was added successfully.")
    return item.save()
    
def remove_item_from_menu():
    user_delete_item = input('delete an item :')
    deleteItem = MenuItem.delete(user_delete_item)
    return deleteItem
    
def update_item_from_menu():
    user_item_change = input('Which item you want to change :')
    user_update_item = input('Add a new item :')
    user_update_price = int(input('Add a new price :'))
    item = MenuItem.update(user_item_change,user_update_item,user_update_price)
    return item

def show_restaurant_menu():
    return MenuManager.all_items()




# Show_by_name = view_item()
# print(Show_by_name)
Show_by_name = show_user_menu()
print(Show_by_name)


