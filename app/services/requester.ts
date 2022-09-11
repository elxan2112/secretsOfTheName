const fetchRequest = async (url: string, method: string, headers?: any, body?: any) => {
    const response = await fetch(url, {
        method,
        headers: {
            ...headers,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body
    })
        .then(response => response.json())
        .catch(err => console.warn(err));
    return response;
};

export const IFetch = {
    fetchRequest
};