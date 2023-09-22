# Express TypeScript Template

    npm install # This will install all the dependencies, traversing all workspaces

How to execute the _server_ app (dev):

    npm run build -w frontend
    npm run serve -w server

How to execute the _frontend_ app:

    npm run update -w frontend # eventually `npm version patch -w frontend; npm install`
    npm run serve -w frontend
    npm run build -w frontend

How to execute the _server_ app (prod):

    npm run build -w frontend
    npm run build -w server
    npm run start -w server


Note:

    https://github.com/alexeagleson/monorepo-example
    https://stackoverflow.com/questions/55753163/package-json-is-not-under-rootdir/61467483#61467483
    https://stackoverflow.com/questions/57422458/error-ts6059-file-is-not-under-rootdir-rootdir-is-expected-to-contain-al