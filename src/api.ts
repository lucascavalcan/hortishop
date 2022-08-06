const URL = "https://www.fruityvice.com";

    export const api = {
        getAllFruits: async () => {
            let response = await fetch(`/api/fruit/all`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });
            let json = await response.json();
            return json;
        },
}