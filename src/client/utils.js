export const getQueryParams = () => {
    let params = {};
    const { location } = window;
    if (location.search && location.search.includes('?')) {
        let { search } = location;
        search = search.split('?')[1].split('=');
        params.seed = search[1];
    }
    return params;
};

export default { getQueryParams };
