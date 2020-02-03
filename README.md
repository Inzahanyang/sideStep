# SideStep

## 1.Set up

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

- Test CRUD in endpoint
