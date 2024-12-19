# React Native FlatList Performance Issue

This repository demonstrates a common performance issue encountered when using `FlatList` in React Native with large datasets.  The problem involves random crashes or freezes, primarily on lower-end devices, due to inefficient rendering within list items. The solution focuses on optimizing rendering and minimizing unnecessary re-renders.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Run the app on a device (emulator or physical).
4. Scroll through the list; you might observe slowdowns or crashes on lower-end devices.

## Solution

The solution involves implementing `React.memo` to prevent unnecessary re-renders of list items and using `useMemo` to optimize calculations for complex data transformations before they are rendered.  This significantly improves performance and stability.