---
layout: "post"
title: "Setting up a basic development environment with Typescript 2, RxJS 5 and SystemJS"
date: "2017-01-13 17:07"
---

Start this barebones Typescript project creating a new directory on your filesystem. Navigate to the new directory and do ```npm init --force``` and then ```tsc --init``` to initalize both a npm configuration file and a Typescript configuration file.

Once you got these two files, go ahead and install Typescript as a dev dependency issuing `npm install --save-dev typescript`. Use it adding to the package.json a npm script that will compile Typescript source files and watch them for changes.

##### ./package.json
{% highlight json %}
    "npm start": "npm run watch-typescript",
    "watch-typescript": "tsc -w"
{% endhighlight %}

Now, before moving on, make sure you create two new child directories. One will hold your Typescript source files and the other one will hold your compiled JavaScript files. You can name them whatever you want and here I'll name it ```src``` and ```dist``` respectively.

Open your Typescript configuration file and edit it so it looks like the following:

##### ./tsconfig.json
{% highlight json %}
    {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es5",
            "noImplicitAny": false,
            "sourceMap": false,
            "rootDir": "src",
            "outDir": "dist"
        },
        "exclude": [
            "node_modules"
        ]
    }
{% endhighlight %}

You can read more about the Typescript configuration file [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html). Execute the start script and you're all set to write Typescript code.

## Loading the compiled code in the browser

So now you have your Typescript source being compiled and you want to load it in a browser environment. To do that, we'll use [SystemJS](https://github.com/systemjs/systemjs) although there are alternatives. Go ahead and ```npm install --save systemjs``` and also ```npm install --save-dev http-server``` so we can load these assets over HTTP. This is a necessary step when using that module loader. You will also need to add es6-shim as a dependency since we're targeting ES5 with our Typescript compiler configuration. Go ahead and ```npm install --save-dev es6-shim @types/es6-shim```.

So far, so good. Create an index.html file and place it in your project root directory. Edit it to reference the SystemJS library and configure it to load your JS files.

##### ./index.html

{% highlight html %}
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <script src="/node_modules/systemjs/dist/system.js"></script>
        <!-- -->
        <script src="/node_modules/tslib/tslib.js"></script>
        <!-- -->
    </head>
    <body>
        <button id="start">Start</button>
        <script>
            System.config({
                packages: {
                    "dist": {
                        "defaultExtension": "js",
                        "main": "main"
                    }
                },
                map: {
                    "@reactivex/rxjs": "/node_modules/@reactivex/rxjs/dist/global/Rx.js"
                }
            });

            System.import("dist");
        </script>
    </body>
    </html>
{% endhighlight %}

Pay attention to the line surrounded in comments. When I set myself to create this project an issue popped up concerning the usage of SystemJS and RxJS together at their latest versions. So at this moment it seems to be a necessary requirement to reference the [tslib](https://github.com/Microsoft/tslib) library along SystemJS in order to get things working properly. Note that a specific SystemJS version is also important for this solution to work. Make sure you're referencing version 0.19.28 and take a look [here](https://github.com/ReactiveX/rxjs/issues/2177#issuecomment-271924566) for more details about it. Big up for [Minko Gechev](https://twitter.com/mgechev) for helping me figure this out. Go ahead and ```npm install --save tslib```.

Finally create another npm script that will take care of spinning up our development server. The scripts property inside your package.json will then look like this.

##### ./package.json

{% highlight json %}
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run dev",
    "watch-typescript": "tsc -w",
    "serve": "http-server -c-1",
    "dev": "npm run watch-typescript & npm run serve"
  }
{% endhighlight %}

Great! You're all set to start tinkering with Typescript 2 and RxJS 5. Open up ./src/main.ts and add the following lines to it.

##### ./src/main.ts

{% highlight javascript %}
    import { Observable } from "@reactivex/rxjs";

    const startButton = document.querySelector('#start');
    const start$ = Observable.fromEvent(startButton, 'click');
    const interval$ = Observable.interval(1000);
    const startInterval$ = start$.switchMapTo(interval$);

    startInterval$.subscribe((x) => console.log(x));
{% endhighlight %}

Save this file and execute ```npm start``` to start your local server and the Typescript compiler watching for changes. Head to your browser on [http://localhost:8080/](http://localhost:8080/), click the start button and open up the console panel. You should see a new number being logged every second.

That's it. You now have a nice local environment to play with and learn Typescript 2 and RxJS 5. You can also find a complete woking example [here](https://github.com/n370/systemjs-rxjs5-typescript2-boilerplate). Comment bellow and let me know what you think. Have fun!
