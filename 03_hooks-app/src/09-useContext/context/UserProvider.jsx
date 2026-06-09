import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
	// const user = {
	// 	id: 123,
	// 	nombre: "hela",
	// 	correo: "hela@gmail.com",
	// };

	const [user, setUser] = useState();

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
		</>
	);
};
