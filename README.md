
![Alt text](https://github.com/Sayyed-rehan/Redux-toolkit/blob/main/redux-workflow.png)

▶useSelector is invoked:

  This hook is used to extract a specific slice of state from the Redux store.

  Locate the desired slice by defining a selector function that queries the state within that slice.

  Access the initial or current state of the target slice through this process.

▶useDispatch is invoked:

  This hook is used to dispatch actions to the Redux store.

  Identify the slice's associated actions, reducers, or business logic.

  Dispatch the relevant actions to update the state of the specific slice.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


