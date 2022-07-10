import CharacterList from "../container/CharacterList"
import CharacterDetail from "../container/CharacterDetail"


const routes = [
    {
        path : "/",
        exact : true,
        children : <CharacterList/>
    },
    {
        path : "/character",
        exact : true,
        children : <CharacterDetail/>
    }
]
export default routes;