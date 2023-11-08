This repository contains a minimal reproduction of an issue relating to persistence
of session storage in Chrome during redirect to a third-party application and returning
to the originating application which had written something to session storage immediately
prior to triggering the redirect.

The production is simple:

App 1 runs on http://localhost:4900
App 2 runs on http://localhost:4901

App 1 serves an index.html which contains an inline script which writes to session storage
before redirecting to app 2. App 2 redirects immediately back to app 1 with a querystring
param (redirected=true) which app 1 can detect and app 1 will read the value from session
storage and write it to the screen.

Upon loading app 1 in a new tab, sometimes the value "null" is written to the screen instead
of the value "blerg" which was written to session storage before redirecting.

```
npm install
node server.js &
node redirect-server.js
```

To observe the issue, open Chrome, open a new tab, and paste http://localhost:4900
You should see

"welcome back: blerg"

printed to the screen if things worked.

If things _don't_ work, i.e. the bug is reproduced, you will see

"welcome back: null"

To trigger the issue, you need to open multiple tabs and paste the http://localhost:4900
and press return. Usually I can see it after one or two tabs are open. Sometimes I see
it happen on the very first tab I open.
