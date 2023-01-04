function getUrlParams(): { [key: string]: string } {
    const searchParams = new URLSearchParams(window.location.search);
    const params: { [key: string]: string } = {};
    for (const [key, value] of searchParams) {
        params[key] = value;
    }
    return params;
}

export default getUrlParams;
