Food Delivery App ...>
This is a food delivery app Created with the tech stack Node, Express, MongoDB. I also used JSONWEBTOKEN for Authentication.

USED 3 Different Schemas For the Data Storage in MongoDB.
* userSchema
* OrderSchema
* restaurantSchema


Following are the API End Points Used In the application ==>>

/api/register -> Used to register the user on the application

/api/login -> Used to login into the application if the user is registered

/api/user/:id/reset -> used to reset the password

/api/restaurants -> used to view the list of all restaurants registered

/api/restaurants/:id -> used to view a particular restaurant through id

/api/restaurants/:id/menu -> used to view the menu of any particular restaurant

/api/restaurants/:id/menu/:id -> used to delete any particular dish through item id

/api/orders -> used to view the orders Placed

/api/orders/:id -> used to view any particular order details through its id

/api/orders/:id -> used to update the status of order
