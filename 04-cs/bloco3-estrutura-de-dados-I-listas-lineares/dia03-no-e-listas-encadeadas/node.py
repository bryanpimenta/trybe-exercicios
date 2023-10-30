class Node:

    def __init__(self, data):
        self.data = data
        self.next = None

    def __str__(self):
        return f"Node(value={self.data}, next={self.next})"


no1 = Node(5)
no2 = Node(6)

no1.data  # 5
no2.data  # 6
no1.next  # None
no1.next = no2

print(no1.next)  # 6
