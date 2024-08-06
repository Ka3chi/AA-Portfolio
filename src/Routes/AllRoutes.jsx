import { Route , Routes } from "react-router-dom";
import { Home, Layout} from "../Pages/compiler";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
            {/* <Route path="*" element={< Pagenotfound />} /> */}
        </Routes>
    )
}
export default AllRoutes