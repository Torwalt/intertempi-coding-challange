# Some thoughts

As this was my first nodejs/electron.js project, I had no idea how to integrate
those technologies with front end web frameworks and data persistence. I tried hard, but I was not successfull.

## Notes on development:

- After scouring some tutorials, I found a template to jumpstart a
  nodejs/electron.js project with react.js.
- React was successfuly integrated, however my experiance with react is low, so
  I invested a lot of time into building the "front-end" views
- I started restructuring my code and decided to include typescript, as I enjoy working with statically typed languages. This was a mistake.
- Integration of typescript and react did not end well as I received crypting
  compiler errors when importing classes from .ts in .jsx
- I decide to go for bcrypt to store passwords locally and cryptographically
  safe in a mongodb. This too was a mistake
- I read to late, that mongodb cannot be packaged together with electron, and
  the end user had to instal it themselves.
- I then tried to use lowdb, but that did not bear fruit, as I already rewrote
  my code in typescript and the typescript support for lowdb is not fleshed out
  yet.

All in all it was an interesting experiance, and I learned a lot.

I will definitively continue working with nodejs and maybe electron, however I really should learn working with promises.
