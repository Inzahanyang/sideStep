# sideStep

## 1.0 Setting up the project

- github and .gitignore
- yarn init
- package.json(scripts)
- nodemon.json(ext-js graphql)
- add(graphql-yoga, nodemon, babel-cli)

## 1.1 Creating GraphQL Server

- config(.env, .babelrc)
- server.js
  - typeDefs, resolver, dotenv_config, GraphQLServer, port
- add(dotenv, @babel/node, @babel/core, @babel/preset-env)

## 1.2 Setting Up the Server like the props

- add(morgan, graphql-tools, merge-graphql-schemas)
- morgan(use express middleware)
- set schema.js with types, resolvers(use makeExecutableSchema, filelLoader, mergeResolvers, mergeTypes)
- make api folder with type, resolver
