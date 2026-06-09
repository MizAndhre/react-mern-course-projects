import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import "./index.css";

import { MainApp } from "./09-useContext/MainApp.jsx";
import { AboutPage, HomePage, LoginPage } from "./09-useContext/screens";
import { UserProvider } from "./09-useContext/context/UserProvider.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainApp />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "login", element: <LoginPage /> },
			{
				path: "*",
				element: (
					<Navigate
						to='/'
						replace
					/>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserProvider>
			<RouterProvider router={router} />
			{/* <MainApp /> */}
		</UserProvider>
	</React.StrictMode>
);

// * Aplicaciones anteriores
// import { HooksApp } from "./HooksApp.jsx";
// import { CounterApp } from "./01-useState/CounterApp.jsx";
// import { CounterConCustomHooks } from "./01-useState/CounterConCustomHooks.jsx";
// import { SimpleForm } from "./02-useEffect/SimpleForm.jsx";
// import { FormCustomHook } from "./02-useEffect/FormCustomHook.jsx";
// import { MultiplesCustomHooks } from "./03-examples/MultiplesCustomHooks.jsx";
// import { FocusScreen } from "./04-useRef/FocusScreen.jsx";
// import { Layout } from "./05-useLayoutEffect/Layout.jsx";
// import { Memorize } from "./06-memos/Memorize.jsx";
// import { MemoHook } from "./06-memos/MemoHook.jsx";
// import { CallbackHook } from "./06-memos/CallbackHook.jsx";
// import { Padre } from "./07-tarea-memo/Padre.jsx";
// import "./08-useReducer/intro-reducer.js";
// import { TodoApp } from "./08-useReducer/TodoApp.jsx";

// * Aplicaciones anteriores
// {/* <HooksApp /> */}
// 		{/* <CounterApp /> */}
// 		{/* <CounterConCustomHooks /> */}
// 		{/* <SimpleForm /> */}
// 		{/* <FormCustomHook /> */}
// 		{/* <MultiplesCustomHooks /> */}
// 		{/* <FocusScreen /> */}
// 		{/* <Layout /> */}
// 		{/* <Memorize /> */}
// 		{/* <MemoHook /> */}
// 		{/* <CallbackHook /> */}
// 		{/* <Padre /> */}
// 		{/* <TodoApp /> */}
