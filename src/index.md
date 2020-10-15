---
home: true
heroImage: /logo.png
heroText: LunaTechs
tagline: We are a small team of plugin developers that have come together to create plugins and tools for both RPGMakerMV and MZ.

features:
  - title: Open Source
    details: All of our plugins are open-source available on Github.
  - title: Haxe Powered
    details: Powered by a strongly typed language means our plugins have fewer bugs on release.
  - title: MV and MZ
    details: We ensure that all of our plugins work under both RPG Maker MV and MZ.

action:
  - text: View plugins
    link: /plugins/
  - text: Report bug
    link: /report-bug/
---

# Our tools

We develop multiple tools to aid developers making plugins for RPG Maker MV and MZ.

## LunaTea

![LunaTea](/LunaTea.png)

LunaTea is a project developed in the [Haxe programming language](https://haxe.org) that we use
personally for creating many of our cross-platform plugins.

It is the base that we use to create the documentation for
[LunaLite](#lunalite) (Typescript documentation for RPGMakerMV/MZ); it is also what we use to
create [LunaSense](#lunasense) (IntelliSense for RPGMakerMV/MZ)

This allows us to write plugins that target both platforms with a large set of features such as:

- Full access to the Haxe Standard Library
- Easily add your contact information through the attribution text
- Change your build process for each and every plugin you create
- Type inference and code completion while creating your plugins
- Compile-time checks to prevent null errors in your code
- Dead Code Elimination
- Add Prepend JS libraries to your code as part of a plugin
- Create plugins in parts via separate Haxe files
- No longer deal with the monolithic plugin file
- Generate build dates for your plugins
- Enhancements for classes and basic types through static extensions and abstracts
- Bundle Documentation With Code
- File watching; copies files to the game's js directory
- Automatic formatting of the file on save
- Backward compatible with MV through conditional compilation
- and much more!

LunaTea is still in early developement! 

## LunaLite

![LunaLite](/LunaLiteDoc.png)

LunaLite is a set of documentation websites for both RPGMakerMV and MZ.
We created this to give other developers like ourselves a leg up on creating
their own games and understanding how the game engine works with the other libraries.
This is a project we're consistently working on to provide the community with
better tools to get things done.

Visit [LunaLiteMZ](https://lunatechs.dev/LunaLite/index.html) and [LunaLiteMV](https://lunatechs.dev/LunaLite-MV/index.html).

## LunaSense

![LunaSense](/LunaSense.png)

LunaSense takes advantage of the above documentation for both RPGMakerMV and MZ, to create IntelliSense and autocompletion when creating plugins in RPGMakerMV/MZ.

This documentation includes Pixi documentation along with the MV/MZ documentation. We wanted to provide this to the community to make creating plugins a bit easier. For those who write JavaScript, it'll help you write more efficiently. For those who want to use Typescript, this can be a starting point for creating your own RPGMaker plugins using TypeScript.

[Read more](https://forums.rpgmakerweb.com/index.php?threads/lunasense-rpgmakermv-mz-intellisense.126646/)
