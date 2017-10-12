# assignment_digital_kingdom
Build the digital kingdom of your wildest dreams! Populate it with fawning vassals!

## Maddie Rajavasireddy  

### Assignment Description:   
A web application that allows for the management of Game of Thrones-like kingdoms. A kingdom has a king and a queen, of course, and a handful of castles. Each castle has a few dignified lieges, each of whom are served by handful of wretched vassals. Here's a quick hierarchy:

KINGDOM(KING,QUEEN,SIGIL)-->CASTLES-->LIEGES-->VASSALS           
                        
#### Behavior   

The app contains the following:

1. A top-level view of all Kingdoms with their respective names.   
This page lists each kingdom's King & Queen's names, their sigil, as well as the number of castles in each kingdom.    
It also allows for the creation of new Kingdoms and removal of one.   
2. A view for each Kingdom:   
This page lists the names of each castle in the kingdom along with the number of lieges housed within each.    
It also allows for the creation of new castles and removal of one.   
3. A view for each Castle:   
This page lists the name and sigil of each liege along with the number of vassals in their service.   
It allows for the creation of additional lieges and removal of one.   
4. A view for each Liege:    
This page lists the name of vassals in their service. It allows for the creation of additional vassals.   

Handlebars used for views    
Express.static middleware to serve up static assets, such as stylesheets.   
Router middleware to organize app into neatly contained modules.   


#### Start app using `npm start`
