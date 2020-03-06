# SideStep

## 1. Set up

#### 1.0 Setting up the project

- add(graphql-yoga, nodemon, babel-cli)
- github and .gitignore
- yarn init
- package.json(scripts)
- nodemon.json(ext-js graphql)

#### 1.1 Creating GraphQL Server

- add(dotenv, @babel/node, @babel/core, @babel/preset-env)
- config(.env, .babelrc)
- server.js
  - typeDefs, resolver, dotenv_config, GraphQLServer, port

#### 1.2 Setting Up the Server like the props

- add(morgan, graphql-tools, merge-graphql-schemas)
- morgan(use express middleware)
- set schema.js with types, resolvers(use makeExecutableSchema, filelLoader, mergeResolvers, mergeTypes)
- make api folder with type, resolver

## 2. Setting Up Prisma

#### 2.0 Introduction to Prisma

- Prisma(create service, init, deploy)

#### 2.1 Datamodel with Prisma

- Define types
- gitIgnore(generated, prisma.yml)

#### 2.2 Testing Prisma

- Test CRUD at endpoint

#### 2.3 Intergrating Prisma in our Server

- use prisma script(deploy, generate)
- frontend - GraphQL API Server(prisma) - Database

#### 2.4 Resolvers with Prisma

- add(prisma-client-lib)
- copy types to models.graphql without @
- make some User resolvers
- \$fragment

## 3. GraphQL API

#### 3.0 Planning the API

###### User Stories

- [x] Create account
- [x] Request Secret
- [x] confirm Secret (Login)
- [x] Like / Unlike a photo
- [x] Comment on a photo
- [x] Search by user
- [x] Search by location
- [ ] See user profile
- [ ] Follow / Unfollow user
- [ ] See the full photo
- [ ] Edit my profile
- [ ] Upload a photo
- [ ] Edit the photo(Delete)
- [ ] See the feed

#### 3.1 Create Account Resolver

- Create Account
- Query root type must be provided.

#### 3.2 requestSecret Resolver

- Request Secret
- Make random words (https://www.randomlists.com/)
- generate secret (utils.js)

#### 3.3 sendMail Function with Nodemailer

- add(nodemailer, nodemailer-sendgrid-transport)
- use dotenv with path
- nodemailer(https://nodemailer.com/)
- sendgrid(https://sendgrid.com/)

#### 3.4 Passport JWT part One

- Confirm Secret

#### 3.5 Passport JWT part two

- add(passport, passport-jwt, jsonwebtoken)
- use passport-jwt http://www.passportjs.org/
- create passport.js
- randomKey https://randomkeygen.com/

#### 3.6 Passport JWT part two

- fix dotenv(env.js)
- middleware(passport.authenticate)
- use context for resolvers

#### 3.7 toggleLike Resolver

- toggleLike resolver
- use prisma.\$exist return true or false
- make middlewares.js (isAuthenticated)

#### 3.8 addComment Resolver

- addComment resolver

#### 3.9 searchUser and searchImage resolver

- use Query make searchUser, searchPost
- use contains, starts_with
