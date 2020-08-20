<p align="center">
  <a href="#">
    <img src="https://github.com/wolfscott/vue-sweet-calendar/blob/master/src/assets/vue-sweet-calendar.png?raw=true" alt="vue-sweet-calendar" />
  </a>
</p>

<h1 align="center" >vue-sweet-calendar</h1>

<h2>This control branched From</h2>  <p align="center" class="badges" >
 <a href="https://www.npmjs.com/package/vue-sweet-calendar"><img src="https://badge.fury.io/js/vue-sweet-calendar.svg" alt="npm version" /></a>
</p>


   `NOTE: This version of the control is NOT published to NPM and the version shown above is for the published version which at the time of this writing does not support click events in the events calendar.`

A simple and sweet vue.js calendar with optional click events

## How to install THIS version in your project

NOTE: This is DIRECT FROM THIS REPO, NOT NPM

IF you intend to keep this as part of your production project, I HIGHLY RECOMMEND you fork this repo to ensure this repo is available for your product in the future.  While I do not intend on making breaking changes, this IS a work in progress.

```
npm install github:wolfscott/vue-sweet-calendar
```

## How to install the ORIGINAL package on NPM (NOT this package)

```
npm install vue-sweet-calendar --save
```

## How to use

The click-handler is optional as are the cursor props.  If the cursor props are defined, will change over the days only.

Inside your `.vue` files

```vue
<template>
  <div id="your-component">
    <!-- Using Component -->
    <calendar
      :eventCategories="eventCategories"
      :events="events"
      ref="calendar"
      cursor="pointer"
      eventCursor="crosshair"
      enableControls=false
      @click="gotAClick($event)"
    />
  </div>
</template>
<script>
// Importing Component and style
import { Calendar } from 'vue-sweet-calendar'
import 'vue-sweet-calendar/dist/SweetCalendar.css'

export default {
  name: 'YourComponentName',
  data() {
    return {
      eventCategories: [
        {
          id: 1,
          title: 'Personal',
          textColor: 'white',
          backgroundColor: 'Blue'
        },
        {
          id: 2,
          title: 'Company-wide',
          textColor: 'white',
          backgroundColor: 'red'
        }
      ],
      events: [
        {
          title: 'Event 1',
          start: '2019-04-02',
          end: '2019-04-04',
          repeat: 'monthly',
          categoryId: 1
        },
        {
          title: 'Event 2',
          start: '2019-04-08',
          end: '2019-04-09',
          repeat: 'yearly',
          categoryId: 1
        },
        {
          title: 'Event 3',
          start: '2019-04-10',
          end: '2019-04-11',
          repeat: 'never',
          categoryId: 2
        },
        {
          title: 'Event 4',
          start: '2019-04-23',
          end: '2019-04-23',
          repeat: 'monthly',
          categoryId: 2
        }
      ]
    }
  },
  methods: {
    goToday() {
      this.$refs.calendar.goToday()
    },
    gotAClick(theDate) {
      console.log(theDate.toString())
    }
  },
  components: {
    Calendar // Registering Component
  }
}
</script>
```

## Component props

| prop              | description                                                                       | default                          |
| ----------------- | --------------------------------------------------------------------------------- | -------------------------------- |
| `initialDate`     | First date that is showing on calendar                                            |   `null` (showing current month) |
| `firstDayOfWeek`  | First day of week (1: sunday, 2:monday, 3:tuesday, etc)                           |      `1` (Sunday)                |
| `eventCategories` | An array of objects showing different categories of events (see an example below) |     `[]` (no categories)         |
| `events`          | An array of objects showing list of events                                        |     `[]` (no events)             |
| `offDays`         | An array for determining that which weekdays are off.                             | `[1, 7]` (saturdays and sundays) |
| `cursor`          | The ability to set the cursor for the non-event days.  e.g., cursor='pointer'     |       `` default cursor          |
| `eventCursor`     | The ability to set the cursor for the event days.  e.g., eventCursor='crosshair'  |       `` default cursor          |
| `enableControls`  | true by default but if defined and set to false will disable the < > controls     |                                  |

## Component methods

| prop      | description                     | arguments |
| --------- | ------------------------------- | --------- |
| `goToday` | Going to today! (current month) | -         |

## Component events

| event     | description                     | arguments |
| --------- | ------------------------------- | --------- |
| `click`   | Return the Day (date) clicked   | -         |

## Example for eventCategories

```javascript
[
  {
    id: 1,
    title: 'Personal',
    textColor: 'white',
    backgroundColor: 'Blue'
  },
  {
    id: 2,
    title: 'Company-wide',
    textColor: 'white',
    backgroundColor: 'red'
  }
]
```

## Example for events

```javascript
[
  {
    title: 'Event 1',
    start: '2019-04-02',
    end: '2019-04-04',
    repeat: 'monthly',
    categoryId: 1
  },
  {
    title: 'Event 2',
    start: '2019-04-08',
    end: '2019-04-09',
    repeat: 'yearly',
    categoryId: 1
  },
  {
    title: 'Event 3',
    start: '2019-04-10',
    end: '2019-04-11',
    repeat: 'never',
    categoryId: 2
  },
  {
    title: 'Event 4',
    start: '2019-04-23',
    end: '2019-04-23',
    repeat: 'monthly',
    categoryId: 2
  }
]
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Revision History

0.3.6 wjscott   Revision  20-Aug-20

- Vue throws a warning  "Props with type Object/Array must use a factory function to return the default value." so updated the defaults accordingly (well, I think)

0.3.2 wjscott   Revision  28-Jun-19

- Added the "click" event to return the selected day
- Added "cursor" prop to allow the cursor to be set for the clickable, non-event, days
- Added the "eventCursor" prop to allow the Events to have a separate cursor.  If you want the same cursor for both event and non-events, set both props to the same cursor.  Of course, you do NOT have to set a cursor if you don't care about changing the UI experience

0.3.3 wjscott   Revision  29-Jun-19

- Added a prop "enableControls", defaults to true which makes it backward compatible; setting this value to false disables the user navigation left and right ability.  This is handy when you want to control the navigation manually -or- want a single month selection only

### License

MIT
