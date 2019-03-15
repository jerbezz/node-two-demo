# Node/NPM/Express

## Node
A runtime environment for javascript built off of the Chrome V8 engine. We will be using Node to create the backend of our site

## NPM
Node Package Manager. Think of it like a GitHub repository filled with packages you can install to help with your development.

Before we are able to install packages from NPM, we need to make sure we have a `package.json` file. We can create a `package.json` file by running `npm init` WITHIN THE FOLDER OF YOUR PROJECT. This iwll walk you through what defaults you want to set for your project. You can optionally run `npm init -y` to take the standard defaults (use this option most of the time). Now that we have a `package.json` file, we can install things.

We have two options for installing things:

**global**
`npm install -g PACKAGE-NAME`

**per project**
`npm install PACKAGE-NAME`

Once you have installed something per project, it will install your specififed package to a `node_module` folder. It will also create a new key value in your `package.json` file called `dependencies` that has the package name and the version installed.

You will want to make sure you then create a `.gitignore` file. A `.gitignore` file tells get to not watch the files you list out inside of it. You will always put your newly created `node_modules` folder inside of `.gitignore`. If you don't want Git to track any other files, add them to the `.gitignore` file.

## Express

Express is a framework built on top of Node that we will use to build our servers.

Look to our `index.js` file for the basic structure of our server.

Our server (index.js) file is broken out into three main parts:
  1. Top of file - requiring packages and files
  2. Middle part of file - end points
  3. Starting your server with `app.listen()`

### Requiring Packages

We require data to use in our server. This is very similar to `import PACKAGE/DEPENDENCY from 'LOCATION'` within your React projects. We use require because we cannot transpile our Express projects.

### End points

End points are basically like directions. When we receive a specific request (get, put, post delete) to a specific ulr (/api/something), we want to run a specific function like finding a user by an ID or name.

```js
app.get('/api/user/:id'. (request, response) => {
  // perfrom logic to find user
  response.status(200).send(user)
})
```
Each end point has access to two parameters,`request` and `response`. They are often shortened to `req` and `res`. The `req` comes from our client or whomever is making the request. We generally use `req.params` or `req.query` but here are other things available

The `res` is what we send back.

#### req.params

Params can be added to any endpoint with this `:paramName`. The colon lets Express know that there is a place holder there that will be filled in on the request. Whatever we call the param is what we can access it by on `req.params.PARAMNAME`. So if we call it `:id`, it will be `req.params.id`

#### req.query

Queries can be added to any end point with this syntax in your search (generally in your URL):

`http://localhost:3333/api/search?brand=nike`

In the above syntax, we would have a key value pair in `req.query` of `{brand: 'nike'}`


