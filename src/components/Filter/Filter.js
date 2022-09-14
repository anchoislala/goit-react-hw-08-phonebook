import PropTypes from 'prop-types';
import { FilterBox } from "./Filter.styled";
import { TextField } from "@mui/material";

const Filter = ({ value, onChange }) => (
    <FilterBox>
        <TextField variant="outlined" label="Find contact by name" type='text' value={value} onChange={onChange} />
    </FilterBox>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;

