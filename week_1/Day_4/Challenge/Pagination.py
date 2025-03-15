class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items if items is not None else []
        self.pageSize = int(pageSize)
        self.totalPages = max(1, -(-len(self.items) // self.pageSize))  
        self.currentPage = 1  

    def getVisibleItems(self):
        """Returns the items visible on the current page."""
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]

    def prevPage(self):
        """Goes to the previous page (if possible)."""
        self.currentPage = max(1, self.currentPage - 1)
        return self  

    def nextPage(self):
        """Goes to the next page (if possible)."""
        self.currentPage = min(self.totalPages, self.currentPage + 1)
        return self  

    def firstPage(self):
        """Goes to the first page."""
        self.currentPage = 1
        return self 

    def lastPage(self):
        """Goes to the last page."""
        self.currentPage = self.totalPages
        return self 

    def goToPage(self, pageNum):
        """Goes to a specific page, handling out-of-bounds cases."""
        self.currentPage = max(1, min(self.totalPages, int(pageNum)))
        return self 


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  

p.nextPage()
print(p.getVisibleItems())  

p.lastPage()
print(p.getVisibleItems())  

p.firstPage().nextPage().nextPage()
print(p.getVisibleItems())  

p.goToPage(10)  
print(p.getVisibleItems())

p.goToPage(4)  
print(p.getVisibleItems())



# # Daily Challenge : Pagination

# class Pagination():
#     def __init__(self, items=None, pageSize=10):
#         self.items = items
#         self.pageSize = int(pageSize)
#         self.start =   0
#         self.end =  pageSize 
#     def getVisibleItems(self):
#         if self.start < self.end:
#             return print(self.items[self.start:self.end])
#         else:
#             return print(self.items[self.end:self.start])
#     def nextPage(self):
#         if not bool(self.items[self.start:self.end]):
#             return self.start,self.end
#         # print(bool(self.items[self.start:self.end]))
#         self.start += self.pageSize
#         self.end =  self.start + self.pageSize
#     def prevPage(self):
#         self.end -=  self.pageSize
#         self.start = self.start - self.pageSize
#     def lastPage(self):
#         self.start = len(self.items) - self.pageSize
#         self.end = len(self.items) 
#     def firstPage(self):
#         self.start = 0
#         self.end = self.pageSize 
#     def goToPage(self,pageNum):
#         self.start = 0
#         self.end = self.pageSize 
            
    
    
# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
# # print(alphabetList)
# p = Pagination(alphabetList, 4)

# p.getVisibleItems()
# p.nextPage()
# p.getVisibleItems()
# p.nextPage()
# p.getVisibleItems()
# p.nextPage()
# p.getVisibleItems()
# p.nextPage()
# p.getVisibleItems()
# p.lastPage()
# p.getVisibleItems()
# p.firstPage()
# p.getVisibleItems()
