const Meter = ({ value }) => {
    return (
        <meter value={value} min="0" max="100"></meter>
    );
}

export default Meter;