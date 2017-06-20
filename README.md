This project integrate create-react-app with electron.It is easier to develope, build and package. This project is already include electron-builder so you can just run a command to pack your app.

# install

```shell

$ yarn

```

# develope

you can change react-server port by modify package.json's port.

```shell
$ yarn start ## pure react

$ yarn electron ## pure electron

## react and electron(auto run electron when react-server is start)
$ yarn electron-react

```

# electron with builded React

```shell
$ yarn electron:pro

```

# build

```shell
$ yarn build
```

# pack

Tips: you can speed up downloading the electron by modify package.json's electronMirror.
eg. `"electronMirror": `https://npm.taobao.org/mirrors/electron/` for chinese user.

Any package problem, pls check this out.[electron-builder's doc](https://github.com/electron-userland/electron-builder).

# multi-platform-build

If you want pack multi-platform app in same platform, check [Multi-Platform-Build](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build)

```shell 
$ yarn pack:all 
$ yarn pack:mac 
$ yarn pack:win 
$ yarn pack:linux 
```

# autoUpdate

[electron-simple-updater](https://github.com/megahertz/electron-simple-updater) and [electron-simple-publisher](https://github.com/megahertz/electron-simple-publisher) is a simple way to make this.You just need to modify `publisher.json` and `updator.url` in package.json.(default way is `github release`. For more configuration, check [Transport](https://github.com/megahertz/electron-simple-publisher#transports))

# TroubleShooting

leave it to issue.