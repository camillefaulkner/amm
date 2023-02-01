import { Route, Routes } from "react-router-dom"
import { Nav } from "./Nav"
import { View } from "./View"

export const Amm = () => {
    return <Routes>
		<Route path="*" element={
				<>
					<Nav />
					<View />
				</>

		} />
	</Routes>
}