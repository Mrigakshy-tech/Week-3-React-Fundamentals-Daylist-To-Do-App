# Daylist — React To-Do Application

## Project overview

Daylist is a responsive to-do application converted from the supplied Week 2 HTML, CSS and JavaScript project into React using Vite. It preserves the original application's features and visual direction while using reusable React components, props, state and Hooks.

## Features

- Add tasks using the Add task button or Enter.
- Reject empty or whitespace-only task input.
- Mark tasks as active or completed.
- Delete individual tasks.
- Filter tasks by All, Active and Completed.
- Clear all completed tasks.
- Automatically persist tasks in browser `localStorage`.
- Restore saved tasks after refreshing or reopening the app.
- Synchronize task updates between tabs using the browser `storage` event.
- Display the current date, task counts, progress and empty state.
- Responsive desktop and mobile layout.
- Accessible labels and live announcements.

## Technologies

- React 18
- JavaScript (ES6+)
- Vite
- HTML5
- CSS3
- Browser `localStorage`

## Requirements

- Node.js 18 or later recommended
- npm
- A modern browser (Chrome, Edge, Firefox or Safari)

## Installation

1. Extract the ZIP file.
2. Open the `Week3_React_Fundamentals_Daylist` folder in Visual Studio Code.
3. Open a terminal in the project root (the directory containing `package.json`).
4. Install dependencies:

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://127.0.0.1:5173/`. Keep the terminal running while using the app.

## Production build

```bash
npm run build
```

The production output is generated in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## React concepts demonstrated

### Components

The interface is split into focused components:

- `Header` — brand and current date.
- `Hero` — introduction section.
- `AddTaskForm` — controlled input and task submission.
- `FilterTabs` — filter selection and completed-task clearing.
- `TaskList` — renders visible tasks or the empty state.
- `TaskItem` — individual task, completion toggle and delete action.

### Props

The parent passes data and callbacks to child components. For example, `TaskList` receives `tasks`, `onToggle` and `onDelete`; `AddTaskForm` receives `onAdd`.

### State

`App.jsx` uses `useState` to manage the task collection and active filter. `AddTaskForm.jsx` uses local state to control the input and its helper message.

### Effects

`useEffect` saves task changes to `localStorage` and registers a `storage` event listener. The listener is cleaned up when the component unmounts.

### Derived data

Task counts and filtered task lists are calculated from the task state. `useMemo` derives the currently visible tasks.

## Project structure

```text
Week3_React_Fundamentals_Daylist/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── AddTaskForm.jsx
│   │   ├── FilterTabs.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── Output/
│   └── Mobile_screenshot.png
│   └── Desktop_screenshot.png
├── index.html
├── package.json
└── README.md
```

## Testing checklist

- [ ] Run `npm install` successfully.
- [ ] Run `npm run dev` and open the displayed local URL.
- [ ] Add a task using the button.
- [ ] Add a task using Enter.
- [ ] Confirm blank input is not added.
- [ ] Mark a task completed and active again.
- [ ] Delete a task.
- [ ] Test All, Active and Completed filters.
- [ ] Clear completed tasks.
- [ ] Refresh the page and verify tasks persist.
- [ ] Open the app in two tabs and verify storage synchronization.
- [ ] Test the responsive layout on a mobile viewport.
- [ ] Run `npm run build` and verify that it completes.

## Output screenshots

After running the application, actual browser screenshots are in the `Output/`:

- `Desktop_screenshot.png`
- `Mobile_screenshot.png`

## Storage note

Tasks are stored in the browser profile on the device where the app is used. Clearing browser site data or using another browser/device does not transfer saved tasks.
