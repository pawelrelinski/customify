# UI 

User Interface module with components and pipes

## Add the module to application

Import the `@customify/ui` and add to your angular module. 

```javascript
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { UiModule } from '@customify/ui'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Components

- [banner](#banner-component)
- [button](#button-component)
- [loader](#loader-component) 
- [navbar](#navbar-component)
- [page-intro-header](#page-intro-header-component)
- [product](#product-component)
- [table](#table-component)


## Pipes

- [truncate](#truncate-pipe)

## Banner Component

<h3 style="margin-bottom: 0">Input data</h3> <br>

| Attribute | Type |
| --------- | ---- |
| bannerData | IBanner |
```typescript
interface IBanner {
  title: string;
  description: string;
  img?: string;
  backgroundColor?: string;
  height?: number;
  textColor?: string;
}
```

<h3 style="margin-bottom: 0">Usage</h3> <br>
```html
<ui-banner [bannerData]='banner'>
</ui-banner>
```

```typescript
const banner: IBanner = {
  title: 'My first banner',
  description: 'Whats up?',
  height: 300,
  backgroundColor: 'rgb(31,165,33)',
  textColor: 'rgb(255, 255, 255)'
}
```


## Button Component
<h3 style="margin-bottom: 0">Input data</h3> <br>

| Attribute | Type |
| --------- | ---- |
| status | buttonStatus |
| size | buttonSize |
| disabled | boolean |

```typescript
const defaultConfig = {
  size: buttonSize.MEDIUM,
  status: buttonStatus.DEFAULT
}
```

```typescript
enum buttonStatus {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning'
}

enum buttonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  GIANT = 'giant'
}
```
<h3 style="margin-bottom: 0">Usage</h3> <br>

```html
<ui-button>Click me!</ui-button>
```


## Loader Component

<h3 style="margin-bottom: 0">Usage</h3> <br>

```html
<ui-loader *ngIf='isLoading'></ui-loader>
```

## Navbar Component

<h3 style="margin-bottom: 0">Input data</h3> <br>

| Attribute | Type |
| --------- | ---- |
| navElements | Array\<INavElement> |
| title | string |

```typescript
const deafaultTitle: string = 'Customify';
```

```typescript
interface INavElement {
  name: string;
  routerLink: string;
  classes: string;
}
```

<h3 style="margin-bottom: 0">Usage</h3> <br>

[Icons classes is here](https://boxicons.com)

```html
<ui-navbar [navElements]='navElements'>
  <router-outlet></router-outlet>
</ui-navbar>
```

```typescript
public navElements: Array<INavElement> = [];

this.navElements.push(
      { routerLink: '/dashboard', name: 'dashboard', classes: 'bx bxs-dashboard' },
      { routerLink: '/account', name: 'profile', classes: 'bx bx-user' }
    );
```

```html
// index.html
// Add to head
<link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
```

```scss
// styles.scss
$header-height: 3rem;
$nav-width: 68px;

$main-color: #4723D9;
$main-color-light: #AFA5D9;
$white-color: #f7f6fb;
$grey-color: #404040;

$body-font: 'Nunito', sans-serif;
$normal-font-size: 1rem;

/*===== z index =====*/
$z-fixed: 100;

*,::before,::after{
  box-sizing: border-box;
}

body {
  position: relative;
  margin: $header-height 0 0 0;
  padding: 0;
  font-family: $body-font;
  font-size: $normal-font-size;
  transition: .5s;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  font-family: Roboto, "Helvetica Neue", sans-serif;
}
```

## Page Intro Header Component

<h3 style="margin-bottom: 0">Input data</h3> <br>

| Attribute | Type |
| --------- | ---- |
| headerData | IPageIntroHeaderData |

```typescript
interface IPageIntroHeaderData {
  title: string;
  url?: string;
  alt?: string;
}
```

<h3 style="margin-bottom: 0">Usage</h3> <br>

```html
<ui-page-intro-header [headerData]='pageIntroHeaderData'></ui-page-intro-header>
```

## Product Component

<h3 style="margin-bottom: 0">Input data</h3> <br>

| Attribute | Type |
| --------- | ---- |
| product | any |

<h3 style="margin-bottom: 0">Usage</h3> <br>

```html
<ui-product [product]='product'></ui-product>
```

## Table component

<h3 style="margin-bottom: 0">Input data</h3> <br>

| Attribute | Type |
| --------- | ---- |
| tableData | ITable\<T> |

```typescript
interface ITableData<T> {
  columns: Array<string>;
  body: Array<T>
}
```

<h3 style="margin-bottom: 0">Usage</h3> <br>

```html
<ui-table [tableData]='productsTableData'></ui-table>
```

## Truncate pipe

<h3 style="margin-bottom: 0">Usage</h3> <br>

```html
<h1>{{ veryLongWord | truncate }}</h1>
```

## Running storyboook test
Run `npx ng run component:storybook --project=ui`
