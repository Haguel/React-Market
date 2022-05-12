export const catalogueHandler = () => ({
    type: "SET_CATALOGUE",
})

export const setCatalogueActiveType = (id) => ({
    type: "SET_CATALOGUE_ACTIVE_TYPE",
    payload: id
})