# Ember Dashboard Controls

[![npm version](https://badge.fury.io/js/ember-dashboard-controls.svg)](https://badge.fury.io/js/ember-dashboard-controls)
[![Ember Observer Score](https://emberobserver.com/badges/ember-dashboard-controls.svg)](https://emberobserver.com/addons/ember-dashboard-controls)
[![Build Status](https://travis-ci.org/BellGasp/ember-dashboard-controls.svg?branch=master)](https://travis-ci.org/BellGasp/ember-dashboard-controls)
[![Code Climate](https://codeclimate.com/github/BellGasp/ember-dashboard-controls/badges/gpa.svg)](https://codeclimate.com/github/BellGasp/ember-dashboard-controls)

## Description
This Ember Addon simply wraps some of the new controls available in the [Dashboard Bootstrap Theme](https://themes.getbootstrap.com/products/dashboard) into an easy to use addon.

This addon is still a work in progress.

_N.B._ The theme itself is not included in this addon since it is a premium theme and requires a purchase.

## Installation

Like most ember addons, simply run `ember install ember-dashboard-controls` and you should be all set.

## Docs

### Dashhead

The Dashhead currently exposes the `titles` and `toolbar` components which can be used to create the left and right side of the dashhead component respectively.

#### Titles

The `titles` component exposes the `title` and `subtitle` components which can be used to display the title and subtitle in the Dashhead.

#### Toolbar

The `toolbar` currently only exposes the `divider` component which is used to create vertical dividers inside the toolbar. The toolbar items themselves should use the `dashhead-toolbar-item` class for the time being.

_Here's what a complete dashhead would look like:_

```hbs
{{#db-dashhead as |dashhead|}}
  {{#dh.titles as |titles|}}
    {{#titles.title}}Example Title{{/titles.title}}
    {{#titles.subtitle}}Example Subtitle{{/titles.subtitle}}
  {{/dh.titles}}

  {{#dh.toolbar as |toolbar|}}
    <div class="btn-group dashhead-toolbar-item">
      <button type="button" class="btn btn-outline-primary">1</button>
      <button type="button" class="btn btn-outline-primary">2</button>
    </div>

    {{toolbar.divider}}

    <div class="btn-group dashhead-toolbar-item">
      <button type="button" class="btn btn-outline-primary">3</button>
      <button type="button" class="btn btn-outline-primary">4</button>
    </div>
  {{/dh.toolbar}}
{{/db-dashhead}}
```

### Icon Navigation

The Icon Navigation currently exposes the `brand` and `items` components which can be used to create the brand and navigation items of your icon menu.

#### Brand

The `brand` component can be configured via the `icon` and `destination` properties. As you've probably guessed already the `icon` property lets you define the icon class that will be applied to your brand and the `destination` property will let you dictate the navigation target of the brand element.

#### Items

The `items` component exposes the `item` component which together are combined to create the menu items.

##### Item

The actual navigation item can be configured using the `icon`, `label` and `destination` properties.

_Here's what a complete iconav would look like:_

```hbs
{{#db-iconav as |nav|}}
  {{nav.brand icon="icon icon-home"}}

  {{#nav.items as |items|}}
    {{items.item icon="icon icon-home" label="Home"}}
    {{items.item icon="icon icon-user" label="Profile"}}
    {{items.item icon="icon icon-gauge" label="Dashboard"}}
  {{/nav.items}}
{{/db-iconav}}
```

### List Group

The List Group currently exposes the `header` and `item` components in order to enable the creation of list groups.

```hbs
{{#db-list-group as |lg|}}
  {{lg.header text="Header"}}

  {{! Item inline style }}
  {{lg.item class="item-1" text="text 1" progress=25}}

  {{! Item block style }}
  {{#lg.item class="item-2" progress=33}}
    text 2
  {{/lg.item}}
{{/db-list-group}}
```

## Contributions
Any contribution is more than welcomed. If you plan on introducing a new feature, please open an issue and share your idea prior to implementing it, it could save you precious time!

## Troubleshooting
If something is not working as expected, simply open an issue and we'll discuss how we'll go about fixing it!
