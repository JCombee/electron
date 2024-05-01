# Changelog

All notable changes to `nativephp-laravel` will be documented in this file.

## 0.6.1 - 2024-05-01

### What's Changed

- Fix PHP executable loading on Windows

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.6.0...0.6.1

## 0.6.0 - 2024-04-30

### What's Changed

* Uses the latest version of nativephp/php-bin and correctly selects the appropriate binary when building your app 🎉
* Fixes NativePHP/laravel#244 which was a stumbling block for installing on Windows
* Add default Amazon S3 auto-update provider config by @lonnylot in https://github.com/NativePHP/electron/pull/65
* Upgrade Testbench by @crynobone in https://github.com/NativePHP/electron/pull/87
* Bump dependabot/fetch-metadata from 2.0.0 to 2.1.0 by @dependabot in https://github.com/NativePHP/electron/pull/91

### New Contributors

* @crynobone made their first contribution in https://github.com/NativePHP/electron/pull/87

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.5.1...0.6.0

## 0.5.1 - 2024-04-28

### What's Changed

* Updated the electron-builder dependency constraint to the latest
* Added prep code for upcoming new PHP binaries
* Bump dependabot/fetch-metadata from 1.6.0 to 2.0.0 by @dependabot in https://github.com/NativePHP/electron/pull/88
* Bump ramsey/composer-install from 2 to 3 by @dependabot in https://github.com/NativePHP/electron/pull/85
* Fix undefined class Process in ExampleTest.php by @LunashaGit in https://github.com/NativePHP/electron/pull/83
* add space between cross-env and node by @A3Brothers in https://github.com/NativePHP/electron/pull/81
* Add the return types for each methods by @LunashaGit in https://github.com/NativePHP/electron/pull/84
* Bump aglipanci/laravel-pint-action from 2.3.1 to 2.4 by @dependabot in https://github.com/NativePHP/electron/pull/90
* allow crossbuilding + minor DRY cleanup by @Rudeisnice in https://github.com/NativePHP/electron/pull/79

### New Contributors

* @LunashaGit made their first contribution in https://github.com/NativePHP/electron/pull/83
* @Rudeisnice made their first contribution in https://github.com/NativePHP/electron/pull/79

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.5.0...0.5.1

## 0.5.0 - 2024-04-01

### What's Changed

* Laravel 11 support by @meliani in https://github.com/NativePHP/electron/pull/89
* Allow compiling packages in a CI environment by @danjohnson95 in https://github.com/NativePHP/electron/pull/74
* Upload to GitHub Releases by @danjohnson95 in https://github.com/NativePHP/electron/pull/75
* Windows flag for electron builder. by @A3Brothers in https://github.com/NativePHP/electron/pull/77
* Automate platform detection by @kpanuragh in https://github.com/NativePHP/electron/pull/52
* Fix broken links in README by @danjohnson95 in https://github.com/NativePHP/electron/pull/73
* Bump actions/checkout from 3 to 4 by @dependabot in https://github.com/NativePHP/electron/pull/78
* Bump stefanzweifel/git-auto-commit-action from 4 to 5 by @dependabot in https://github.com/NativePHP/electron/pull/80
* Bump aglipanci/laravel-pint-action from 2.3.0 to 2.3.1 by @dependabot in https://github.com/NativePHP/electron/pull/82

### New Contributors

* @danjohnson95 made their first contribution in https://github.com/NativePHP/electron/pull/75
* @A3Brothers made their first contribution in https://github.com/NativePHP/electron/pull/77
* @kpanuragh made their first contribution in https://github.com/NativePHP/electron/pull/52
* @meliani made their first contribution in https://github.com/NativePHP/electron/pull/89

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.4.0...0.5.0

## 0.4.0 - 2023-08-09

### What's Changed

- Added Laravel Prompts
- Added the option --installer to InstallCommand and DevelopCommand by @SergioGMR in https://github.com/NativePHP/electron/pull/26
- Linux extra condition for electron builder. by @lotharthesavior in https://github.com/NativePHP/electron/pull/57
- fix(linux build commands): add missing 'x64' flag by @pixrr in https://github.com/NativePHP/electron/pull/63

### New Contributors

- @SergioGMR made their first contribution in https://github.com/NativePHP/electron/pull/26
- @lotharthesavior made their first contribution in https://github.com/NativePHP/electron/pull/57
- @pixrr made their first contribution in https://github.com/NativePHP/electron/pull/63

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.3.3...0.4.0

## 0.3.3 - 2023-07-31

### What's Changed

- Fix native:build npm timeout by @drhoussem in https://github.com/NativePHP/electron/pull/54
- Resolve Windows opening config file in default application by @ShaneShipston in https://github.com/NativePHP/electron/pull/60
- Correct NATIVEPHP_PHP_BINARY_PATH by @lonnylot in https://github.com/NativePHP/electron/pull/64
- Fix php path in queue command by @phuclh in https://github.com/NativePHP/electron/pull/58
- Fix queue command environment variables

### New Contributors

- @drhoussem made their first contribution in https://github.com/NativePHP/electron/pull/54
- @ShaneShipston made their first contribution in https://github.com/NativePHP/electron/pull/60
- @lonnylot made their first contribution in https://github.com/NativePHP/electron/pull/64
- @phuclh made their first contribution in https://github.com/NativePHP/electron/pull/58

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.3.2...0.3.3

## 0.3.2 - 2023-07-28

- Bump JS package dependency

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.3.1...0.3.2

## 0.3.1 - 2023-07-27

Fix PHP path resolution

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.3.0...0.3.1

## 0.3.0 - 2023-07-27

### What's Changed

- Added the ability to build Windows and Linux apps 🎉
- Added binary lookup for linux based platform by @kalizi in https://github.com/NativePHP/electron/pull/44

### New Contributors

- @kalizi made their first contribution in https://github.com/NativePHP/electron/pull/44

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.2.0...0.3.0

## 0.2.0 - 2023-07-26

### What's Changed

- Add Windows support by @chrisreedio in https://github.com/NativePHP/electron/pull/33

### New Contributors

- @chrisreedio made their first contribution in https://github.com/NativePHP/electron/pull/33

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.1.2...0.2.0

## 0.1.2 - 2023-07-25

### What's Changed

- Remove yarn dependency when using serve command by @semiherdogan in https://github.com/NativePHP/electron/pull/39
- Add missing php.js file
- Make sure that NPM runs forever when running `artisan:publish`

### New Contributors

- @semiherdogan made their first contribution in https://github.com/NativePHP/electron/pull/39

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.1.1...0.1.2

## 0.1.1 - 2023-07-22

### What's Changed

- fix: README badges by @bensherred in https://github.com/NativePHP/electron/pull/7
- composer package local path remove for production release #14 by @AbmSourav in https://github.com/NativePHP/electron/pull/15
- Package Name Update: Migrating from 'nativephp-electron' to '@nativephp/electron-plugin' by @hogus2037 in https://github.com/NativePHP/electron/pull/16
- Fix install command by @bangbangda in https://github.com/NativePHP/electron/pull/17
- Fix the issue of starting the development server by @mahmoudmohamedramadan in https://github.com/NativePHP/electron/pull/25

### New Contributors

- @bensherred made their first contribution in https://github.com/NativePHP/electron/pull/7
- @AbmSourav made their first contribution in https://github.com/NativePHP/electron/pull/15
- @hogus2037 made their first contribution in https://github.com/NativePHP/electron/pull/16
- @bangbangda made their first contribution in https://github.com/NativePHP/electron/pull/17
- @mahmoudmohamedramadan made their first contribution in https://github.com/NativePHP/electron/pull/25

**Full Changelog**: https://github.com/NativePHP/electron/compare/0.1.0...0.1.1

## 0.1.0 - 2023-07-20

### 🎉 NativePHP is here!
