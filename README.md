<p align="center">
  <a href="#">
    <img src="https://github.com/wolfscott/vue-sweet-calendar/blob/master/src/assets/vue-sweet-calendar.png?raw=true" alt="vue-sweet-calendar" />
  </a>
</p>

<h1 align="center" >vue-sweet-calendar</h1>

<p align="center" class="badges" >
  <a href="https://www.npmjs.com/package/vue-sweet-calendar"><img src="https://badge.fury.io/js/vue-sweet-calendar.svg" alt="npm version" /></a>
</p>

A simple and sweet vue.js calendar

## How to install

```
npm install vue-sweet-calendar --save
```

## How to use

Inside your `.vue` files

```vue
<template>
  <div id="your-component">
    <!-- Using Component -->
    <calendar
      :eventCategories="eventCategories"
      :events="events"
      ref="calendar"
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

0.3.2 wjscott   Revision  28-Jun-19

- Added the "click" event to return the selected day
- Added "cursor" prop to allow the cursor to be set for the clickable, non-event, days
- Added the "eventCursor" prop to allow the Events to have a separate cursor.  If you want the same cursor for both event and non-events, set both props to the same cursor.  Of course, you do NOT have to set a cursor if you don't care about changing the UI experience

### License

MIT
