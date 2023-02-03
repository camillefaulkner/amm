import { Outlet, Route, Routes } from "react-router-dom"
import { About } from "./About"
import { Contact } from "./Contact"
import { Home } from "./Home"
import { Press } from "./Press"
import { Projects } from "./Projects"

export const View = () => {

    return (<Routes>
		<Route path="/" element={
			<>
                <Home />
				<Outlet />
			</>
		} />
		< Route path="/about" element={<About />} />
		< Route path="/contact" element={< Contact />} />
        < Route path="/press" element={< Press />} />
        < Route path="/projects" element={< Projects />} />
{/* < Route path="/dates/:showDateId" element={< DateDetails />} /> */}
	</Routes >
	)
}