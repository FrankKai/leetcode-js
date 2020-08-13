select customers.name "Customers"
from customers
where customers.id not in (
    select orders.customerId from orders
)