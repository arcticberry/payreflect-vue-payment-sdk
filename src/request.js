
export default (axios) => {
    return {
        getServices(){
            return axios.get("/application/application-service-vendors")
        },
    }
}