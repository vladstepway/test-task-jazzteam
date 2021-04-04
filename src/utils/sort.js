export const sortBy = (data, sortField, order) => {
    return data.sort(byFieldAndOrder(sortField, order));
}

const byFieldAndOrder = (fieldName, order) => {
    return (a, b) => {
        if (order === 'asc') {
            return a[fieldName] > b[fieldName] ? 1 : -1;
        }
        if (order === 'desc') {
            return a[fieldName] > b[fieldName] ? -1 : 1
        }
    };
}
