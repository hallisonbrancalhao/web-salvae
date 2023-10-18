import axios from "axios"

export async function getEstabelecimento() {
    const res = await axios.get(process.env.URL_MOCK_RESTAURANTE as string)
    return res.data
};