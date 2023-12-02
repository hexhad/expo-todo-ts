## Expo Todo APP : TS

## DEMO

[![Demo Video](https://img.youtube.com/vi/hexhad/0.jpg)](https://www.youtube.com/watch?v=APu4rbl4ctk)


### Requirements

- User opens the app and see a list of tasks categorized by status
  - This list can be displayed as a vertical list using accordion UI. If you wish to challengeyourself, you can create a board with drag & drop feature
- The todo list will have three status: to do, in progress and done
- Each task needs to have the following properties:
  - Title*
  - Description
  - Status
- When creating a new task, the apps needs verify for required fields, which are `title` and`status`, `description` will be an optional field
- User should be able to navigate to a screen where they can see the details of a task. It should display all task properties
- When closing and opening the app, the list of tasks should persist inside the app
- Screens required:
  - Home (list)
  - Task details
  - Create task

- Library requirements:
  - React native (typescript preferred)
  - Redux-toolkit
  - React-navigation
- Optional libraries:
  - NativeWind
  - mongodb Realm
  - redux-persist
  - react-native-dnd-board (or any other of your preference)

# Useful stuff

## Issue check

```bash
npx expo-doctor
```

```bash
npx expo start --tunnel --clear
```
