# assignment_digital_kingdom
Build the digital kingdom of your wildest dreams! Populate it with fawning vassals!
Tom McLaughlin + Mark Hahn

Mark & Tom

Your Noble Decree

You must create a web application that allows for the management of a few olde-timey kingdoms. A kingdom needs a king and a queen, of course, and a handful of castles. Each castle shall ensconce a few dignified lieges, each of whom are served by handful of wretched vassals. Here's a quick hierarchy:

          KINGDOM
             |
  +----------+----------+
  |          |          |
 KING      QUEEN     CASTLES
                        |
                        |
                     LIEGES
                        |
                        |
                     VASSALS
Behavior

Consulting this hierarchy, your app should contain the following.

A top-level view of all Kingdoms with their respective names.
This page should list each kingdom's King & Queen's names, as well as the number of castles in each kingdom.
This page should allow for the creation of new Kingdoms.

A view for each Kingdom.
This page should list the names of each castle in the kingdom along with the number of lieges housed within each.
This page should allow for the creation of new castles.

A view for each Castle.
This page should list the name of each liege along with the number of vassals in their service.
This page should allow for the creation of additional lieges.

A view for each Liege... you get my drift.
(Super Optional) Each Vassal gets a page where they dream up imaginary kingdoms in their own disturbed minds. This leads to a recursive Kingdom structure, where the imaginary kingdoms can nest infinitely.
You may have noticed a bit of structural repetition in the above specification. Perhaps you can cleverly DRY up your code.

A Few More Things

Use express.static middleware to serve up static assets, such as stylesheets.
Use the Router middleware to organize your app into neatly contained modules.
Use layouts and partials to DRY up your markup!