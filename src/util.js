export const mapProps = (props) => Object.keys(props).map(
    (k) => (`${k}="${props[k]}"`)
).join(' ');
