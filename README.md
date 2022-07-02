# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## USER STORIES

```

"As a **user** I need button/input so I can create place"
"As a **user** I need button/input so I can delete place"

"As a user I need button/input so I can create comment"
"As a user I need button/input so I can edit comment"
"As a user I need button/input so I can delete comment"


```

## COLOR SCHEMES

BASED ON STATE FLAG

## HTTP REQUESTS

**Method** | **Path** | **Purpose**

```
GET           |  /                        |   *Home page*
-------------------------------------------------------------------------------------------------
GET           |  /places                  |   *Places index page*
-------------------------------------------------------------------------------------------------
POST          |  /places                  |   *Create new place*
-------------------------------------------------------------------------------------------------
GET           |  /places/new              |   *Form page for creating a new place*
-------------------------------------------------------------------------------------------------
GET           |  /places/:id              |   *Details about a particular place*
-------------------------------------------------------------------------------------------------
PUT           |  /places/:id              |   *Update a particular place*
-------------------------------------------------------------------------------------------------
GET           |  /places/:id/edit         |   *Form page for editing an existing place*
-------------------------------------------------------------------------------------------------
DELETE        |  /places/:id              |   *Delete a particular place*
-------------------------------------------------------------------------------------------------
POST          |  /places/:id/rant         |   *Create a rant (comment) about a particular place*
-------------------------------------------------------------------------------------------------
DELETE        |  /places/:id/rant/:rantId |   *Delete a rant (comment) about a particular place*
-------------------------------------------------------------------------------------------------
GET           |  *                        |   *404 page (matches any route not defined above)*
-------------------------------------------------------------------------------------------------

```

## DATA STORAGE

CREATE JSON OBJECT OF PLACES AND RELATED INFO

PLACES{
NAME,
STATE,
CUISINE,
IMAGE
}
