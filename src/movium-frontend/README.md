# Movium front-end!

<!-- ABOUT THE PROJECT -->
## About The Project

This project is meant to be a high level introduction to building a front-end application using Remix.

The main focus is on the following:
* Developing a front-end application that provides a graphical user interface for end users to interact with our application.  
* Integrate with an existing Rest service to retrieve and display movie data.
* Securing our front-end application.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

These are the frameworks/libraries we will use to implement this solution.

* [Remix](https://remix.run/)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)

##Remix Resources
* [Youtube channel]( https://www.youtube.com/c/Remix-Run/videos )
* [Remix Documentation]( https://remix.run/docs/en/v1 )

##React Resources
* [React Crash Course]( https://www.youtube.com/watch?v=w7ejDZ8SWv8 )
* [React Docs]( https://reactjs.org/docs/getting-started.html )

##Tailwind CSS Resources
* [Tailwind CSS docs]( https://tailwindcss.com/ )
* [Tailwind CSS screencasts]( https://www.youtube.com/tailwindlabs )

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
