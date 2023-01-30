# Exercise App

Getting list of exercise, filter and favorite is available

## Build with
+ Typescript
+ Redux, Redux-toolkit
+ Emotion
+ React-select
+ React-router-dom
+ Axios
+ etc...

## Feature
+ Multi-theme
+ Exercise can be added/removeto favorite list `for this you most visit exercise detail page`
+ Lazy load pages
+ Page Pagination
+ Filter on exercises
+ Change Item per page [on exercise page]
+ set page title [some basic SEO tag] using provider

## Note that
+ Responsive and multi-language not implemented.
+ after set item per page on 50 api may load 10, if so that is a server problem, don't worry :)
+ total exercises hard coded and that may cause page pagination caculate some pages that doesn't exist [be advised this may cause problem when some filter is applied].
+ React error boudary not applied.

## Install Packages
```bash
npm install
``` 
or

```bash
yarn
```
## Run
```bash
npm run start
``` 
or

```bash
yarn start
```

## Build
```bash
npm run build
``` 
or

```bash
yarn build
``` 