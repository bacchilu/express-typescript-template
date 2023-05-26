# Express TypeScript Template

    npm install # This will install all the dependencies, traversing all workspaces

Empty Express project in TypeScript

    npm run serve
    npm run build
    npm run start


How to execute the _test-app_ app:

    npm run update -w test-app # eventually `npm version patch -w test-app; npm install`
    npm run serve -w test-app
    npm run build -w test-app

Note:

    https://github.com/alexeagleson/monorepo-example
    https://stackoverflow.com/questions/55753163/package-json-is-not-under-rootdir/61467483#61467483
    https://stackoverflow.com/questions/57422458/error-ts6059-file-is-not-under-rootdir-rootdir-is-expected-to-contain-al