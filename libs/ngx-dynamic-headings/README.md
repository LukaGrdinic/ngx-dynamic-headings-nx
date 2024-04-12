# ngx-dynamic-headings

Dynamic Headings Generation Library

A library to generate heading levels at runtime in an Angular application.

This allows the developers to build components that contain heading elements of undefined level inside of them and then use components in different contexts.
The heading level will be auto-generated based on the previously established page heading structure. 

Helps build accessible Angular web apps. 


## Usage

To use the library in your project, install ngx-dynamic-headings from npm:

```
npm install ngx-dynamic-headings --save
```

Add the package to NgModule imports:

```
import { NgxDynamicHeadingsModule } from 'ngx-dynamic-headings';

@NgModule({
  ...
  imports: [NgxDynamicHeadingsModule,...]
  ...
})
```

Then use the **<h>** component wherever you want dynamic headings to be generated

```
<h1>This is the h1 heading</h1>

<div>
  <h>This will generate an h2 heading at runtime</h>
  <h>This will generate an h2 heading at runtime</h>
  <div>
    <h>This will generate h3 heading at runtime</h>
    <h>This will generate h3 heading at runtime</h>
  </div>
</div>
```