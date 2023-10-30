from node import Node

# sequencial = []
# sequencial.append(1)


class LinkedList:
    def __init__(self):
        self.head = None
        self.__size = 0

    def append(self, elem):
        if self.head:
            # inserção quando a lista já possui elementos
            pointer = self.head
            while pointer.next:
                pointer = pointer.next
            pointer.next = Node(elem)
        else:
            # primeira inserção
            self.head = Node(elem)
        self.__size += 1

    def __str__(self):
        # representação em string da lista
        return f"LinkedList(len={self.__size}, value={self.head})"

    def __len__(self):
        # retorna o tamanho da lista
        return self.__size

    def get(self, index):
        pass

    def set(self, index, elem):
        pass

    def __getitem__(self, index):
        # a = lista[6]
        # a = lista.__getitem__(6)
        pointer = self.head
        for i in range(index):
            if pointer:
                pointer = pointer.next
            else:
                raise IndexError("list index out of range")

        if pointer:
            return pointer.data

        raise IndexError("list index out of range")

    def __setitem__(self, index, elem):
        # lista[5] = 9
        # lista.__setitem__(5, 9)
        pointer = self.head
        for i in range(index):
            if pointer:
                pointer = pointer.next
            else:
                raise IndexError("list index out of range")

        if pointer:
            pointer.data = elem
        else:
            raise IndexError("list index out of range")


lista = LinkedList()
print(lista)  # LinkedList(len=0, value=None)
lista.append(7)
print(lista)  # LinkedList(len=1, value=Node(value=7, next=None))
lista.append(8)
print(lista)
'''
LinkedList(len=2, value=Node(value=7, next=Node(value=8, next=None)))
'''
print(lista[1])  # 8
