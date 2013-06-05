Hello World
==================

A simple example app for Hello World from the easiest way to localization (l10n).

##Instructions

In order to see this web app working, do the following:

```
$ npm install
$ node app-normal
$ node app-express
$ node app-static
$ node app-render
$ node app-localized
```

Now you can see server-side localization in node.js by going to:

* [http://localhost:3000/](http://localhost:3000/)
* [http://localhost:3001/](http://localhost:3001/)
* [http://localhost:3002/](http://localhost:3002/)
* [http://localhost:3003/](http://localhost:3003/)
* [http://localhost:3004/](http://localhost:3004/)

For the last app (app-localized) when you run it you can try change the URL to see the localization in action by doing

* [http://localhost:3004/th_TH](http://localhost:3004/th_TH)

If you have added more languages to the `locale` folder you can simply change the URL base on the file name *see locale section for more info*

##Locale

At this moment we are using i18n-abide to do the localization (l10n) and this plugin will load the string from directory called
`locale` and in this language bundle we will have to named the language based on the Using Language Identifiers (RFC 3066) standard

For example English  `en_US`  or Thai we will use `th_TH` for that 




###Format of the locale file

Currently the i18n-abide that is modified by :humphd made it works with Property Lists (plist) which is easy to maintain
and it is also supported by Transifex [file formats](http://help.transifex.com/features/formats.html), among them .po, .ini, .xml, etc.


Node.js and Transifex both support .plist files, which are what was created for OS X and iPhone apps.  These are
simple XML files, and for the purposes of localizaiton, contain key/value pairs in a dictionary.  Below is an example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>helloworld</key>
    <string>Hello World</string>
  </dict>
</plist>
```

##Usage for localization
(quoted from :humphd from amore.webmaker.org's repo

Strings in the locale files are used via templates.  The i18n module adds 3 things to the global scope which 
templated JS can use, specifically:

```html
<!DOCTYPE html>
<html lang="{{ lang }}" dir="{{ lang_dir }}">
...
<p id="main">{{ gettext( "helloworld" ) }}</p>
```

Here the `lang` will be the locale's language, for example `en` or `en_US`.  The `lang_dir` variable will be
the direction of the language (`rtl` or `ltr`).  Finally, the `gettext` function allows a string to be retrieved
from the locale using an ID.  The ID used should match one in the `<key>...</key>` portion of the .plist file.