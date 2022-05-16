Trevor Watson – Design decisions – Mogo Shop

Template Framework – I have used Bootstrap for the template framework and have used a template from Bootstrap as the core design, this was used in the interest of saving time on the style code and more of the functionality of the code. 

Products - The products are displayed as bootstrap cards and after being added to the cart show the units added with the option to increase or decrease that items quantity. If the quantity returns to zero, the add to cart button is shown and the quantity select is hidden.

Cart – The cart is shown on a separate form and shows each item in the cart, the quantity, and the total price. To the right of each line is a button that will remove that item from the cart. Below all the items is a unit and price total for the cart.  To the left of the total line is a button that will remove all items from the cart. If the cart is empty an empty cart message will be displayed with a button to take you back to the item selection.

Cart Logic – the cart logic and data is managed by a service, I chose this option mainly due to simplicity and speed of development.
