sg-schemas
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-schemas
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-schemas
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-schemas.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sg-schemas
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sg-schemas.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sg-schemas/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-schemas
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-schemas.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-schemas.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-schemas
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-schemas.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-schemas
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-schemas.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Scheams for SUGOS

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
$ npm install sg-schemas --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Schemas.md.hbs" Start -->

<a name="section-doc-guides-02-schemas-md"></a>
Schemas
---------

+ [module_spec.json - Spec of SUGOS-Spot Interface](lib/module_spec.json)
+ [perform_config.json - Configuration of SUGOS action performing](lib/perform_config.json)


<!-- Section from "doc/guides/02.Schemas.md.hbs" End -->

<!-- Section from "doc/guides/03.Examples.md.hbs" Start -->

<a name="section-doc-guides-03-examples-md"></a>
Examples
---------

##### Example Module Spec

```json
{
  "name": "example-my-drone-module",
  "version": "1.0.0",
  "desc": "Example of module for SUGO-Actor",
  "methods": {
    "takeOff": {
      "desc": "Take off from the land.",
      "params": [
        {
          "name": "attitude",
          "type": "string",
          "desc": "Attitude to stop"
        }
      ]
    },
    "goHome": {
      "desc": "Go to home position and land on.",
      "params": [],
      "return": {
        "type": "boolean",
        "desc": "Succeed or not"
      }
    }
  }
}
```
##### Example Perform Config

```json
{
  "interface": "bash",
  "method": "spawn",
  "params": [
    "ls",
    [
      "-la"
    ],
    {
      "env": {
        "HOME": "/home/hoge"
      }
    }
  ]
}
```


<!-- Section from "doc/guides/03.Examples.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sg-schemas/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugos][sugos_url]

[sugos_url]: https://github.com/realglobe-Inc/sugos

<!-- Links End -->
