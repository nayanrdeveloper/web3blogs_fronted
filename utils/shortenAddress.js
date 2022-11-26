const shortAddress = (address) => {
    const first = address.slice(0,5);
    const last = address.slice(address.length - 4);

    return `${first}...${last}`
}

export default shortAddress;