# Shopping Cart Assigment
The target of this project is to develop a simple Shopping Cart with the followin features:

### Features:
1. Browse products in a list. 
2. Add and remove a product to their shopping cart, as long as it is available. 3. Go back to the products list view and keep browsing. 
4. Add another product to their cart. 
5. Go to the checkout and view their cart. 
6. Modify quantity and remove the product on the checkout page. 

The status of the Cart is stored in the localStorage.
All products are stored in a static file in the path `api/_db.json`

## Testing
The project contains unit tests with Jest and Enzime.
The coverage is present in the most critical areas in the project.

## Disclaimer
I used NextJs to take advantage of the SSR to have a good SEO during the web indexation.
The first page of each search is generated with a [Server-Side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering).
The detail page of the products are created with the [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) during the building step.

## Commands

Start the project for development
`yarn dev`

Create the static html files
`yarn build`

Start nextJS server for production (this has to be executed after the `yarn build`)
`yarn start`

Run tests
`yarn test`

Run tests with coverage report
`yarn test --coverage`