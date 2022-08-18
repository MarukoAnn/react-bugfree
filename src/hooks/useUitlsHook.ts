import { useNavigate } from "react-router-dom"
// import {}
const useUtilsHook = () => {
    const navigation = useNavigate();

    return { navigation }
}

export default useUtilsHook