
export const getFrom = async (url) => {
    const response = await fetch(url);
    const datos = await response.json()
    console.log(datos)
}
